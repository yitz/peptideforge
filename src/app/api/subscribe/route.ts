/**
 * Newsletter + Waitlist signup endpoint.
 *
 * PHASE NOTE (audience-building): This is intentionally a STUB. It validates the
 * email and returns { ok: true } so the UI works end-to-end, but it does NOT yet
 * persist anywhere.
 *
 * TODO before running paid acquisition: wire to an email service provider
 * (Beehiiv, ConvertKit, Resend Audiences, etc.). Add the provider API key as an
 * env var and POST the email + source to their list/audience endpoint here.
 *
 * Stores ZERO PHI. We only ever collect an email address and a non-clinical
 * "source" label (which page/section the signup came from).
 */

import { NextResponse } from "next/server";

// Pragmatic, permissive email check — final validation happens at the ESP.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
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
  const signupSource = typeof source === "string" ? source : "unknown";

  // TODO: forward { normalizedEmail, signupSource } to the ESP audience here.
  // Example shape once configured:
  //   await fetch(`${ESP_BASE}/subscribers`, {
  //     method: "POST",
  //     headers: { Authorization: `Bearer ${process.env.ESP_API_KEY}` },
  //     body: JSON.stringify({ email: normalizedEmail, fields: { source: signupSource } }),
  //   });
  void normalizedEmail;
  void signupSource;

  return NextResponse.json({ ok: true });
}
