import Link from "next/link";
import { ArrowRight, Shield, Brain, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--color-primary)/15,transparent)]" />

      <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="secondary" className="mb-6 gap-1.5 px-3 py-1">
            <Shield className="h-3.5 w-3.5" />
            Physician-Supervised &middot; HIPAA Compliant
          </Badge>

          <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Your Peptide Protocol,{" "}
            <span className="text-primary">Forged by AI</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            The most intelligent peptide therapy platform on Earth.
            AI-driven protocols personalized to your goals, labs, and biology
            &mdash; backed by licensed providers and 503A compounding pharmacies.
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
              icon={<Brain className="h-5 w-5 text-primary" />}
              metric="6 AI Agents"
              label="Personalization engine"
            />
            <MetricCard
              icon={<Shield className="h-5 w-5 text-primary" />}
              metric="100%"
              label="Physician-supervised"
            />
            <MetricCard
              icon={<Activity className="h-5 w-5 text-primary" />}
              metric="503A"
              label="Licensed pharmacies"
            />
          </div>
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
    <div className="flex items-center gap-3 rounded-xl border border-border/50 bg-card/50 px-5 py-4 backdrop-blur-sm">
      {icon}
      <div>
        <p className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold">{metric}</p>
        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}
