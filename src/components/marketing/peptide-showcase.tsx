import Link from "next/link";
import { ArrowRight, FlaskConical } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getCompoundablePeptides, type CompoundablePeptide } from "@/lib/peptides/registry";

const GOAL_COLORS: Record<string, string> = {
  recovery: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  performance: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  longevity: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  "anti-aging": "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  sleep: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
  "body-comp": "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  immune: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
  "sexual-health": "bg-pink-500/10 text-pink-600 dark:text-pink-400",
  cognitive: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
};

function PeptideCard({ peptide }: { peptide: CompoundablePeptide }) {
  return (
    <Link href={`/peptides/${peptide.slug}`} className="group">
      <Card className="h-full transition-colors hover:border-primary/50">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <FlaskConical className="h-5 w-5 text-primary" />
            </div>
            <CardTitle className="font-[family-name:var(--font-space-grotesk)] text-lg">
              {peptide.name}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {peptide.shortDescription}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {peptide.goalTags.slice(0, 3).map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className={`text-xs ${GOAL_COLORS[tag] ?? ""}`}
              >
                {tag.replace("-", " ")}
              </Badge>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
            Learn more <ArrowRight className="h-3.5 w-3.5" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export function PeptideShowcase() {
  const peptides = getCompoundablePeptides();

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight sm:text-4xl">
            Peptide Catalog
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Currently compoundable peptides available through our licensed
            503A pharmacy network. All protocols require physician supervision.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {peptides.map((peptide) => (
            <PeptideCard key={peptide.id} peptide={peptide} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="gap-2" render={<Link href="/peptides" />}>
            View Full Catalog
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
