import type { Metadata } from "next";
import { EmailSignup } from "@/components/marketing/email-signup";
import { SignupCTA } from "@/components/marketing/signup-cta";
import { Disclaimer } from "@/components/marketing/disclaimer";

export const metadata: Metadata = {
  title: "The Newsletter + Waitlist",
  description:
    "What you get when you subscribe to AetherPeptide: a no-hype briefing on peptide research and regulatory developments, plus priority on the waitlist for compliant options after regulatory clarity.",
  alternates: { canonical: "/newsletter" },
};

const INBOX = [
  {
    icon: "calendar_month",
    title: "Timeline updates",
    body: "Committee meetings, comment periods, and recategorization milestones — what's coming and what just happened.",
  },
  {
    icon: "science",
    title: "Research digests",
    body: "Plain-English summaries of emerging peptide research and what the data and regulatory process show — without the overpromising.",
  },
  {
    icon: "trending_up",
    title: "Industry signals",
    body: "Movement across the 503A/503B compounding landscape, suppliers, and the broader market.",
  },
  {
    icon: "bookmark_added",
    title: "Waitlist priority",
    body: "First notice if and when compliant options open following regulatory clarity.",
  },
];

const AUDIENCE = [
  "Curious readers tracking where peptides are headed",
  "Clinicians and researchers who want the regulatory signal, not the noise",
  "People who'd consider compliant options later and want to be first to know",
];

export default function NewsletterPage() {
  return (
    <>
      {/* Header */}
      <section className="mesh-gradient relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-28 -right-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
        />
        <div className="relative z-10 mx-auto max-w-3xl px-6 pt-40 pb-20 sm:pt-48">
          <span className="font-label text-[11px] font-bold uppercase tracking-[0.3em] text-primary">
            Newsletter + Waitlist
          </span>
          <h1 className="mt-6 font-headline text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
            What you&rsquo;re signing up for.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            A straightforward briefing on the peptide space — the research, the
            regulatory process, and the industry movement around it. No hype, no
            bro-science, no sales pitch. Just a clear read on where things are
            going, sent only when there&rsquo;s something real to say.
          </p>
          <div className="mt-9 max-w-xl">
            <EmailSignup source="newsletter-top" variant="hero" ctaLabel="Subscribe" />
            <p className="mt-3.5 pl-1 font-label text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70">
              Free · Occasional · Unsubscribe anytime
            </p>
          </div>
        </div>
      </section>

      {/* What lands in your inbox */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground">
          What lands in your inbox
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {INBOX.map((item) => (
            <div key={item.title} className="rounded-[2rem] bg-card p-8 premium-shadow">
              <span
                className="material-symbols-outlined text-3xl text-primary"
                aria-hidden="true"
              >
                {item.icon}
              </span>
              <h3 className="mt-5 font-headline text-xl font-bold tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cadence + audience + waitlist + about */}
      <section className="bg-secondary/30">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-14 px-6 py-24 md:grid-cols-2">
          <div>
            <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground">
              How often you&rsquo;ll hear from us
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Only when it&rsquo;s worth your time — usually a couple of times a
              month, with more activity around key moments like the July&nbsp;2026
              advisory committee meeting. We&rsquo;d rather send less and be read
              than fill your inbox.
            </p>
          </div>

          <div>
            <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground">
              Who it&rsquo;s for
            </h2>
            <ul className="mt-4 space-y-3">
              {AUDIENCE.map((line) => (
                <li key={line} className="flex gap-3 leading-relaxed text-muted-foreground">
                  <span
                    className="material-symbols-outlined mt-0.5 shrink-0 text-xl text-primary"
                    aria-hidden="true"
                  >
                    check_circle
                  </span>
                  {line}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground">
              About the waitlist
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Joining puts you in line for priority access <em>if and when</em>{" "}
              compliant options open following regulatory clarity. It&rsquo;s not a
              purchase, it&rsquo;s not a commitment, and it doesn&rsquo;t create any
              kind of provider relationship — it simply means you hear first.
            </p>
          </div>

          <div>
            <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground">
              About AetherPeptide
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Right now we&rsquo;re an independent source of news and information on
              the peptide space. We&rsquo;re building toward a clean, compliant
              future — and until the regulatory picture is clear, our job is simply
              to help you understand it. Nothing here is medical advice.
            </p>
          </div>
        </div>
      </section>

      <SignupCTA
        source="newsletter-bottom"
        eyebrow="Ready when you are"
        heading="One clear briefing. No noise."
        subhead="Subscribe to the newsletter and join the priority waitlist."
      />

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <Disclaimer />
      </section>
    </>
  );
}
