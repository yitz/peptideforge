import { EmailSignup } from "@/components/marketing/email-signup";

export function HeroSection() {
  return (
    <section className="mesh-gradient relative overflow-hidden">
      {/* Soft tonal glow — depth via color, not borders (DESIGN.md no-line rule) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-start px-6 pt-40 pb-28 sm:pt-48 sm:pb-32">
        <span className="font-label text-[11px] font-bold uppercase tracking-[0.3em] text-primary">
          The Peptide Briefing · Regulatory Intelligence
        </span>

        <h1 className="mt-7 max-w-3xl font-headline text-5xl font-extrabold leading-[1.06] tracking-tight text-foreground sm:text-6xl">
          The rules around peptides are{" "}
          <span className="font-normal italic text-primary">being rewritten.</span>{" "}
          We track every move.
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          A clear, no-hype briefing on peptide research, recategorization
          timelines, and the regulatory decisions shaping what comes next —
          including the FDA Pharmacy Compounding Advisory Committee review on
          July&nbsp;23–24,&nbsp;2026.
        </p>

        <div className="mt-10 w-full max-w-xl">
          <EmailSignup source="hero" variant="hero" ctaLabel="Get the briefing" />
          <p className="mt-3.5 pl-1 font-label text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70">
            Free briefing + priority waitlist · No hype, no spam · Unsubscribe anytime
          </p>
        </div>
      </div>
    </section>
  );
}
