import Link from "next/link";
import { TrackedCTA } from "@/components/ui/tracked-cta";

export function CTASection() {
  return (
    <section className="bg-[var(--ds-surface-container)] px-8 py-32 dark:bg-card/30">
      <div className="glass-card space-y-8 rounded-[3.5rem] border border-white/40 bg-card/60 p-12 text-center shadow-2xl shadow-primary/5 dark:border-border/20 dark:bg-card/40">
        <h2 className="font-headline text-4xl font-bold leading-tight tracking-tight text-foreground">
          Ready to explore <br />physician-supervised peptide therapy?
        </h2>
        <p className="mx-auto max-w-sm text-sm leading-relaxed text-muted-foreground">
          Take our wellness quiz to share your goals. A licensed physician
          through our partner network will review your profile and guide your
          next steps.
        </p>
        <TrackedCTA section="cta_banner" label="Start My Wellness Quiz" destination="/quiz">
          <Link
            href="/quiz"
            className="inline-block w-full rounded-full bg-primary py-6 font-label text-[10px] font-bold uppercase tracking-[0.3em] text-primary-foreground shadow-2xl shadow-primary/20 transition-all hover:bg-primary/90"
          >
            Start My Wellness Quiz
          </Link>
        </TrackedCTA>
        <p className="mx-auto max-w-md font-label text-[9px] uppercase leading-loose tracking-widest text-muted-foreground/50">
          AetherPeptide connects you with licensed physicians through our partner
          network (Ola Digital Health). All medical decisions, prescriptions, and
          protocols are handled exclusively by licensed providers.
        </p>
      </div>
    </section>
  );
}
