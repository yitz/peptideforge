"use client";

import Link from "next/link";
import { ArrowRight, FlaskConical, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { QuizAnswers, QuizGoal } from "@/components/quiz/quiz-flow";
import { getPeptidesByGoal, type CompoundablePeptide } from "@/lib/peptides/registry";

function matchPeptides(answers: QuizAnswers): CompoundablePeptide[] {
  const seen = new Set<string>();
  const results: CompoundablePeptide[] = [];

  for (const goal of answers.goals) {
    for (const peptide of getPeptidesByGoal(goal as QuizGoal)) {
      if (!seen.has(peptide.id)) {
        seen.add(peptide.id);
        results.push(peptide);
      }
    }
  }

  return results.slice(0, 4);
}

export function QuizResults({ answers }: { answers: QuizAnswers }) {
  const matched = matchPeptides(answers);

  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold sm:text-3xl">
          Peptides That Match Your Goals
        </h2>
        <p className="mt-2 text-muted-foreground">
          Based on: {answers.goals.map((g) => g.replace("-", " ")).join(", ")}
        </p>
      </div>

      <Card className="mb-6 border-primary/30 bg-primary/5">
        <CardContent className="flex items-start gap-3 p-5">
          <Stethoscope className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <div>
            <p className="text-sm font-medium">
              This is an educational match — not a medical recommendation
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              A licensed physician will evaluate your health history, order any
              necessary labs, and determine the right protocol for you. All
              prescribing decisions are made by your provider.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {matched.map((peptide) => (
          <Link key={peptide.id} href={`/peptides/${peptide.slug}`} className="block">
            <Card className="transition-colors hover:border-primary/50">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                    <FlaskConical className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="font-[family-name:var(--font-space-grotesk)] text-base">
                      {peptide.name}
                    </CardTitle>
                    <p className="text-xs text-muted-foreground">
                      {peptide.genericName}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {peptide.shortDescription}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {peptide.structureFunctionClaims.slice(0, 2).map((claim) => (
                    <Badge key={claim} variant="secondary" className="text-xs">
                      {claim}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <Separator className="my-8" />

      <div className="space-y-4 text-center">
        <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold">
          Your Next Step: Connect With a Physician
        </h3>
        <p className="text-sm text-muted-foreground">
          Subscribe to begin your journey. A licensed physician from our provider
          network (Ola Digital Health) will evaluate your health history, design
          your personalized protocol, and prescribe via a licensed 503A pharmacy.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button size="lg" className="gap-2" render={<Link href="/start" />}>
            Start Your Journey
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" render={<Link href="/pricing" />}>
            View Pricing
          </Button>
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-muted-foreground">
        This quiz provides educational information only and does not constitute
        medical advice. AetherPeptide connects you with licensed physicians through
        our partner network (Ola Digital Health). All medical decisions, prescriptions,
        and protocols are handled exclusively by licensed providers. Compounded
        peptides available only under valid prescription. Not intended to diagnose,
        treat, cure, or prevent any disease.
      </p>
    </div>
  );
}
