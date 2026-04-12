export function TrustSection() {
  return (
    <section id="how-it-works" className="bg-[var(--ds-surface-low)] px-8 py-32 dark:bg-card/50">
      <div className="mx-auto max-w-7xl space-y-20">
        <div className="max-w-xl space-y-4">
          <h2 className="font-headline text-4xl font-bold leading-tight text-foreground">
            Physician-Supervised Care. <br />Premium Experience.
          </h2>
          <div className="h-[2px] w-16 bg-primary/40" />
        </div>

        <div className="grid gap-12">
          <TrustCard
            icon="medical_services"
            title="Licensed Physicians"
            description="All medical decisions are made exclusively by licensed physicians through our independent partner provider network."
          />
          <TrustCard
            icon="biotech"
            title="Quality-Focused Compounding"
            description="Compounded peptides available only under valid prescription via licensed 503A pharmacies, with certificate of analysis for every batch."
          />
          <TrustCard
            icon="encrypted"
            title="Secure Platform"
            description="HIPAA-compliant platform ensuring end-to-end privacy and secure data management throughout your experience."
          />
        </div>
      </div>
    </section>
  );
}

function TrustCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group flex items-start gap-8">
      <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border border-border/40 bg-card shadow-sm transition-colors group-hover:border-primary/20 dark:border-border/20 dark:bg-card/80">
        <span className="material-symbols-outlined text-2xl text-primary">
          {icon}
        </span>
      </div>
      <div className="space-y-2">
        <h3 className="font-label text-xs font-bold uppercase tracking-[0.15em] text-foreground">
          {title}
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}
