/**
 * Newsletter + Waitlist signup endpoint → Beehiiv.
 *
 * Creates a subscription in the configured Beehiiv publication. Requires two
 * env vars (set in Vercel + .env.local):
 *   BEEHIIV_API_KEY         — Beehiiv API key (Settings → Integrations → API)
 *   BEEHIIV_PUBLICATION_ID  — publication id, looks like "pub_xxxxxxxx-...."
 *
 * Stores only the email + a non-clinical "source" label (passed as utm_campaign).
 * Zero PHI.
 */

import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SITE = "aetherpeptide.com";

export async function POST(request: Request) {
  const apiKey = process.env.BEEHIIV_API_KEY;
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID;

  let email: unknown;
  let source: unknown;
  try {
    const body = await request.json();
    email = body?.email;
    source = body?.source;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 422 }
    );
  }

  const normalizedEmail = email.trim().toLowerCase();
  const signupSource = typeof source === "string" && source ? source : "website";

  // Fail loudly (not silently) if the integration isn't configured — otherwise
  // we'd tell the user "you're on the list" while dropping their email.
  if (!apiKey || !publicationId) {
    console.error(
      "[subscribe] BEEHIIV_API_KEY / BEEHIIV_PUBLICATION_ID not set — signup not stored:",
      normalizedEmail
    );
    return NextResponse.json(
      { ok: false, error: "Signups are temporarily unavailable. Please try again soon." },
      { status: 503 }
    );
  }

  try {
    const res = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: normalizedEmail,
          reactivate_existing: true,
          send_welcome_email: true,
          utm_source: SITE,
          utm_medium: "website",
          utm_campaign: signupSource,
          referring_site: SITE,
        }),
      }
    );

    if (!res.ok) {
      // Log the email as a failsafe so a lead isn't lost to a transient error.
      const detail = await res.text().catch(() => "");
      console.error(
        `[subscribe] Beehiiv responded ${res.status} for ${normalizedEmail}: ${detail}`
      );
      return NextResponse.json(
        { ok: false, error: "Something went wrong. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(`[subscribe] Beehiiv request failed for ${normalizedEmail}:`, err);
    return NextResponse.json(
      { ok: false, error: "Network error. Please try again." },
      { status: 502 }
    );
  }
}
