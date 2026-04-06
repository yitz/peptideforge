import Link from "next/link";
import { ArrowRight, Shield, Stethoscope, FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--color-primary)/10,transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--color-primary)/15,transparent)]" />

      <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="secondary" className="mb-6 gap-1.5 px-3 py-1">
            <Shield className="h-3.5 w-3.5" />
            Physician-Supervised &middot; 503A Pharmacy
          </Badge>

          <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Where Science Meets{" "}
            <span className="text-primary">Precision</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            AetherPeptide is the premium branded experience for
            physician-supervised peptide therapy. Licensed providers
            make every medical decision. 503A pharmacies compound every
            prescription. We make the experience seamless.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="gap-2 text-base" render={<Link href="/quiz" />}>
              Find Your Protocol
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="text-base" render={<Link href="/peptides" />}>
              Explore Peptides
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <MetricCard
              icon={<Stethoscope className="h-5 w-5 text-primary" />}
              metric="100%"
              label="Physician-supervised"
            />
            <MetricCard
              icon={<FlaskConical className="h-5 w-5 text-primary" />}
              metric="503A"
              label="Licensed pharmacies"
            />
            <MetricCard
              icon={<Shield className="h-5 w-5 text-primary" />}
              metric="HIPAA"
              label="Compliant platform"
            />
          </div>

          <p className="mt-8 text-xs text-muted-foreground">
            AetherPeptide connects you with licensed physicians through our
            partner network (Ola Digital Health). All medical decisions and
            prescriptions are made exclusively by your doctor. Not intended to
            diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </div>
    </section>
  );
}

function MetricCard({
  icon,
  metric,
  label,
}: {
  icon: React.ReactNode;
  metric: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-card px-5 py-4 shadow-sm dark:border-border/50 dark:bg-card/50 dark:shadow-none dark:backdrop-blur-sm">
      {icon}
      <div>
        <p className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold">{metric}</p>
        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}
