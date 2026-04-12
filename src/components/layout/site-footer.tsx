import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-border/40 bg-card py-20 px-8 dark:border-border/20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-2xl">spa</span>
            <span className="font-headline text-xl font-bold tracking-tight">
              AetherPeptide
            </span>
          </div>
          <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
            A premium telehealth platform connecting you with licensed physicians
            for physician-supervised peptide therapy.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col gap-5">
            <span className="font-label text-[10px] font-bold uppercase tracking-widest text-primary">
              Explore
            </span>
            <nav className="flex flex-col gap-3">
              <Link className="text-xs text-muted-foreground transition-colors hover:text-primary" href="/peptides">Peptides</Link>
              <Link className="text-xs text-muted-foreground transition-colors hover:text-primary" href="/#how-it-works">How It Works</Link>
              <Link className="text-xs text-muted-foreground transition-colors hover:text-primary" href="/quiz">Take the Quiz</Link>
              <Link className="text-xs text-muted-foreground transition-colors hover:text-primary" href="/pricing">Pricing</Link>
            </nav>
          </div>
          <div className="flex flex-col gap-5">
            <span className="font-label text-[10px] font-bold uppercase tracking-widest text-primary">
              Legal
            </span>
            <nav className="flex flex-col gap-3">
              <Link className="text-xs text-muted-foreground transition-colors hover:text-primary" href="/privacy">Privacy Policy</Link>
              <Link className="text-xs text-muted-foreground transition-colors hover:text-primary" href="/terms">Terms of Service</Link>
              <Link className="text-xs text-muted-foreground transition-colors hover:text-primary" href="/contact">Contact Support</Link>
            </nav>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-border/40 pt-12 dark:border-border/20">
          <p className="text-[9px] font-body uppercase leading-loose tracking-[0.1em] text-muted-foreground/60">
            &copy; {new Date().getFullYear()} AetherPeptide. All rights reserved.
            AetherPeptide connects you with licensed physicians through our partner
            network (Ola Digital Health). All medical decisions, prescriptions, and
            protocols are handled exclusively by licensed providers. Compounded
            peptides available only under valid prescription via 503A pharmacies.
            These statements have not been evaluated by the Food and Drug
            Administration. Not intended to diagnose, treat, cure, or prevent any
            disease.
          </p>
        </div>
      </div>
    </footer>
  );
}
