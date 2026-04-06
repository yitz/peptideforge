import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, FlaskConical, AlertTriangle, BookOpen, Clock, Syringe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getPeptideBySlug, getCompoundablePeptides } from "@/lib/peptides/registry";

export async function generateStaticParams() {
  return getCompoundablePeptides().map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const peptide = getPeptideBySlug(slug);
  if (!peptide) return { title: "Peptide Not Found" };

  return {
    title: `${peptide.name} — ${peptide.genericName}`,
    description: peptide.shortDescription,
  };
}

export default async function PeptideDetailPage({ params }: Props) {
  const { slug } = await params;
  const peptide = getPeptideBySlug(slug);
  if (!peptide) notFound();

  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/peptides"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Catalog
        </Link>

        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10">
            <FlaskConical className="h-7 w-7 text-primary" />
          </div>
          <div>
            <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight sm:text-4xl">
              {peptide.name}
            </h1>
            <p className="mt-1 text-lg text-muted-foreground">
              {peptide.genericName}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {peptide.goalTags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag.replace("-", " ")}
                </Badge>
              ))}
              {peptide.compoundable && (
                <Badge className="bg-emerald-500/10 text-xs text-emerald-600 dark:text-emerald-400">
                  Currently Compoundable
                </Badge>
              )}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <BookOpen className="h-4 w-4 text-primary" />
                Mechanism of Action
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {peptide.mechanismOfAction}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Syringe className="h-4 w-4 text-primary" />
                Typical Dosing Range
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Dose</p>
                  <p className="font-mono text-lg font-semibold">
                    {peptide.defaultDosing.min}–{peptide.defaultDosing.max}{" "}
                    {peptide.defaultDosing.unit}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Frequency</p>
                  <p className="font-medium">{peptide.defaultDosing.frequency}</p>
                </div>
                {peptide.defaultDosing.cycleWeeks > 0 && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    Typical cycle: {peptide.defaultDosing.cycleWeeks} weeks
                  </div>
                )}
                <p className="text-xs text-muted-foreground">
                  Dosing is personalized by your provider based on labs, weight,
                  and goals. These ranges are for reference only.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-base">
              What This Peptide Supports
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-2 sm:grid-cols-2">
              {peptide.structureFunctionClaims.map((claim) => (
                <li
                  key={claim}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {claim}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="mt-6 border-destructive/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base text-destructive">
              <AlertTriangle className="h-4 w-4" />
              Contraindications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {peptide.contraindications.map((ci) => (
                <li key={ci} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                  {ci}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {peptide.clinicalReferences.length > 0 && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-base">Clinical References</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1">
                {peptide.clinicalReferences.map((ref) => (
                  <li key={ref} className="font-mono text-sm text-muted-foreground">
                    {ref}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" className="gap-2" render={<Link href="/quiz" />}>
            Find Your Protocol
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" render={<Link href="/peptides" />}>
            View All Peptides
          </Button>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          AetherPeptide connects you with licensed physicians through our partner
          network (Ola Digital Health). All medical decisions, prescriptions, and
          protocols are handled exclusively by licensed providers. Compounded
          peptides available only under valid prescription via 503A pharmacies.
          These statements have not been evaluated by the FDA. Not intended to
          diagnose, treat, cure, or prevent any disease.
        </p>
      </div>
    </div>
  );
}
