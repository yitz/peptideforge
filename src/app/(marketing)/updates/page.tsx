import type { Metadata } from "next";
import { SignupCTA } from "@/components/marketing/signup-cta";
import { Disclaimer } from "@/components/marketing/disclaimer";

export const metadata: Metadata = {
  title: "Updates",
  description:
    "A running log of peptide regulatory developments, research summaries, and industry movement — news and information, not medical advice.",
  alternates: { canonical: "/updates" },
};

/**
 * Update entries. News/explainer framing only — no benefit claims, no protocols,
 * no dosing (see AGENTS.md → Current Phase). Newest first.
 *
 * Future: move to MDX or a CMS and give each entry its own route. For now these
 * are summary cards; the full briefings go out by email.
 */
const UPDATES = [
  {
    date: "June 2026",
    tag: "Regulatory",
    title: "Counting down to the July compounding committee meeting",
    summary:
      "The FDA Pharmacy Compounding Advisory Committee is scheduled to meet July 23–24, 2026 to review nominated substances relevant to the compounding lists — peptides among them. What the meeting is, why it matters, and exactly what we'll be watching for.",
  },
  {
    date: "June 2026",
    tag: "Explainer",
    title: "503A vs. 503B: why the distinction keeps coming up",
    summary:
      "Two sections of federal law govern pharmacy compounding, and the difference between them shapes what can be made and how. A plain-language primer on the landscape — no recommendations, just how the pieces fit together.",
  },
  {
    date: "May 2026",
    tag: "Research",
    title: "How to read a peptide study without getting spun",
    summary:
      "Emerging research gets summarized in a lot of misleading ways. A short, practical guide to separating what a study actually shows from what tends to get claimed about it online.",
  },
];

export default function UpdatesPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 pt-40 pb-12 sm:pt-48">
        <span className="font-label text-[11px] font-bold uppercase tracking-[0.3em] text-primary">
          Updates
        </span>
        <h1 className="mt-6 font-headline text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
          What we&rsquo;re tracking.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          A running log of regulatory developments, research summaries, and
          industry movement across the peptide space. The full briefings go out by
          email — subscribe to get them as they land.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-12">
        <ol className="space-y-6">
          {UPDATES.map((u) => (
            <li key={u.title} className="rounded-[2rem] bg-card p-8 premium-shadow sm:p-10">
              <div className="flex items-center gap-4">
                <span className="rounded-full bg-primary/10 px-3 py-1 font-label text-[10px] font-bold uppercase tracking-[0.15em] text-primary">
                  {u.tag}
                </span>
                <span className="font-mono text-xs tracking-tight text-muted-foreground">
                  {u.date}
                </span>
              </div>
              <h2 className="mt-5 font-headline text-2xl font-bold tracking-tight text-foreground">
                {u.title}
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{u.summary}</p>
            </li>
          ))}
        </ol>
      </section>

      <SignupCTA
        source="updates"
        eyebrow="Don't miss the next one"
        heading="Get new entries in your inbox."
        subhead="Subscribe to the briefing and join the priority waitlist."
      />

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <Disclaimer />
      </section>
    </>
  );
}
