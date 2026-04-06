import type { Metadata } from "next";
import Link from "next/link";
import { FlaskConical, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getCompoundablePeptides, type PeptideCategory } from "@/lib/peptides/registry";

export const metadata: Metadata = {
  title: "Peptide Catalog",
  description:
    "Explore our full catalog of currently compoundable peptides available through licensed 503A pharmacies. All protocols require physician supervision.",
};

const CATEGORY_INFO: Record<PeptideCategory, { label: string; color: string }> = {
  recovery: { label: "Recovery", color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" },
  performance: { label: "Performance", color: "bg-blue-500/10 text-blue-600 dark:text-blue-400" },
  longevity: { label: "Longevity", color: "bg-violet-500/10 text-violet-600 dark:text-violet-400" },
  "body-composition": { label: "Body Composition", color: "bg-amber-500/10 text-amber-600 dark:text-amber-400" },
  immune: { label: "Immune", color: "bg-rose-500/10 text-rose-600 dark:text-rose-400" },
  "sexual-health": { label: "Sexual Health", color: "bg-pink-500/10 text-pink-600 dark:text-pink-400" },
};

export default function PeptideCatalogPage() {
  const peptides = getCompoundablePeptides();

  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight sm:text-4xl">
            Peptide Catalog
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Educational information about peptides available through our licensed
            503A pharmacy network. Availability depends on current FDA guidelines
            and licensed provider confirmation.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {peptides.map((peptide) => (
            <Link
              key={peptide.id}
              href={`/peptides/${peptide.slug}`}
              className="group"
            >
              <Card className="h-full transition-colors hover:border-primary/50">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <FlaskConical className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="font-[family-name:var(--font-space-grotesk)] text-lg">
                        {peptide.name}
                      </CardTitle>
                      <p className="text-xs text-muted-foreground">
                        {peptide.genericName}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {peptide.shortDescription}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {peptide.categories.map((cat) => {
                      const info = CATEGORY_INFO[cat];
                      return (
                        <Badge key={cat} variant="secondary" className={`text-xs ${info.color}`}>
                          {info.label}
                        </Badge>
                      );
                    })}
                  </div>

                  <div className="mt-3 font-mono text-xs text-muted-foreground">
                    {peptide.defaultDosing.min}–{peptide.defaultDosing.max}{" "}
                    {peptide.defaultDosing.unit} &middot;{" "}
                    {peptide.defaultDosing.frequency}
                  </div>

                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    View details <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-16 rounded-xl border border-border bg-muted/50 p-6 text-center">
          <p className="text-sm text-muted-foreground">
            <strong>Important:</strong> Peptide availability depends on current FDA
            compounding regulations and licensed provider confirmation. PeptideForge
            provides a branded experience connecting you with licensed physicians
            through our partner network. All medical decisions, prescriptions, and
            protocols are handled exclusively by licensed providers. Compounded
            peptides are available only under valid prescription via 503A pharmacies.
            These statements have not been evaluated by the FDA. Not intended to
            diagnose, treat, cure, or prevent any disease. Structure-function claims only.
          </p>
        </div>
      </div>
    </div>
  );
}
