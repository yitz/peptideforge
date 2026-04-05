"use client";

import Link from "next/link";
import { ArrowRight, FlaskConical, Sparkles, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { QuizAnswers, QuizGoal } from "@/components/quiz/quiz-flow";
import { getPeptidesByGoal, type CompoundablePeptide } from "@/lib/peptides/registry";

function recommendPeptides(answers: QuizAnswers): CompoundablePeptide[] {
  const seen = new Set<string>();
  const results: CompoundablePeptide[] = [];

  const goalMap: Record<string, QuizGoal[]> = {
    recovery: ["recovery"],
    performance: ["performance"],
    longevity: ["longevity", "anti-aging" as QuizGoal],
    "body-comp": ["body-comp"],
    sleep: ["sleep"],
    immune: ["immune"],
    "sexual-health": ["sexual-health"],
    cognitive: ["cognitive"],
  };

  for (const goal of answers.goals) {
    const tags = goalMap[goal] ?? [goal];
    for (const tag of tags) {
      for (const peptide of getPeptidesByGoal(tag)) {
        if (!seen.has(peptide.id)) {
          seen.add(peptide.id);
          results.push(peptide);
        }
      }
    }
  }

  return results.slice(0, 4);
}

export function QuizResults({ answers }: { answers: QuizAnswers }) {
  const recommended = recommendPeptides(answers);

  return (
    <div>
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
          <Sparkles className="h-7 w-7 text-primary" />
        </div>
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold sm:text-3xl">
          Your Personalized Protocol Preview
        </h2>
        <p className="mt-2 text-muted-foreground">
          Based on your goals:{" "}
          {answers.goals.map((g) => g.replace("-", " ")).join(", ")}
        </p>
      </div>

      <Card className="mb-6 border-primary/30">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <Check className="mt-0.5 h-5 w-5 text-primary" />
            <div>
              <p className="text-sm font-medium">
                AI-matched {recommended.length} peptides to your profile
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                This is a preview. Your final protocol will be customized by our
                AI engine and reviewed by a licensed physician based on your
                complete medical history and lab work.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {recommended.map((peptide) => (
          <Card key={peptide.id}>
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
              <div className="mt-2 font-mono text-xs text-muted-foreground">
                Typical: {peptide.defaultDosing.min}–{peptide.defaultDosing.max}{" "}
                {peptide.defaultDosing.unit} &middot;{" "}
                {peptide.defaultDosing.frequency}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-8" />

      <div className="space-y-4 text-center">
        <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold">
          Ready to Start Your Protocol?
        </h3>
        <p className="text-sm text-muted-foreground">
          Complete your intake to get a physician-reviewed, fully personalized
          protocol with AI-powered dosing optimization.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button size="lg" className="gap-2" render={<Link href="/start" />}>
            Start Full Intake
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" render={<Link href="/pricing" />}>
            View Pricing
          </Button>
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-muted-foreground">
        This quiz provides educational information only and does not constitute
        medical advice. All protocols require evaluation and prescription by a
        licensed physician. Individual results may vary.
      </p>
    </div>
  );
}
