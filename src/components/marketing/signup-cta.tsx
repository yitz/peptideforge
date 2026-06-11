import { EmailSignup } from "@/components/marketing/email-signup";

export function SignupCTA({
  source = "footer-cta",
  eyebrow = "Stay ahead of it",
  heading = "Get the briefing before the next decision lands.",
  subhead = "Join the newsletter and the priority waitlist. Free, occasional, and genuinely useful — unsubscribe whenever you like.",
}: {
  source?: string;
  eyebrow?: string;
  heading?: string;
  subhead?: string;
}) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-card px-8 py-16 premium-shadow sm:px-16 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
        />
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <span className="font-label text-[11px] font-bold uppercase tracking-[0.3em] text-primary">
            {eyebrow}
          </span>
          <h2 className="mt-5 font-headline text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            {subhead}
          </p>
          <div className="mx-auto mt-9 max-w-xl">
            <EmailSignup source={source} variant="hero" ctaLabel="Join the list" />
            <p className="mt-3.5 font-label text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70">
              News &amp; information only · Not medical advice
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
