"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { QuizAnswers, QuizGoal } from "@/components/quiz/quiz-flow";
import { getPeptidesByGoal, type CompoundablePeptide } from "@/lib/peptides/registry";
import { track } from "@/lib/analytics";

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
        <span className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-primary opacity-80">
          Your Results
        </span>
        <h2 className="mt-3 font-headline text-2xl font-bold text-foreground sm:text-3xl">
          Peptides That Match Your Goals
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Based on: {answers.goals.map((g) => g.replace("-", " ")).join(", ")}
        </p>
      </div>

      {/* Educational disclaimer card */}
      <div className="mb-6 rounded-2xl border border-primary/20 bg-primary/5 p-5 dark:border-primary/10 dark:bg-primary/5">
        <div className="flex items-start gap-3">
          <span className="material-symbols-outlined mt-0.5 shrink-0 text-xl text-primary">
            stethoscope
          </span>
          <div>
            <p className="text-sm font-medium text-foreground">
              This is an educational match — not a medical recommendation
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              A licensed physician will evaluate your health history, order any
              necessary labs, and determine the right protocol for you. All
              prescribing decisions are made by your provider.
            </p>
          </div>
        </div>
      </div>

      {/* Matched peptides */}
      <div className="space-y-4">
        {matched.map((peptide, idx) => (
          <Link
            key={peptide.id}
            href={`/peptides/${peptide.slug}`}
            className="group block"
            onClick={() => track.quizResultClick(peptide.name, idx + 1)}
          >
            <div className="rounded-2xl border border-border/40 bg-card/60 p-5 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-md dark:border-border/20 dark:bg-card/40">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10">
                  <span className="material-symbols-outlined text-lg text-primary">
                    science
                  </span>
                </div>
                <div>
                  <p className="font-headline text-base font-bold text-foreground">
                    {peptide.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {peptide.genericName}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                {peptide.shortDescription}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {peptide.structureFunctionClaims.slice(0, 2).map((claim) => (
                  <span
                    key={claim}
                    className="rounded-full bg-primary/5 px-3 py-1 font-label text-[10px] text-primary dark:bg-primary/10"
                  >
                    {claim}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Next steps */}
      <div className="mt-10 space-y-4 text-center">
        <h3 className="font-headline text-lg font-semibold text-foreground">
          Your Next Step
        </h3>
        <p className="text-sm text-muted-foreground">
          When you subscribe, you&apos;ll be connected with a licensed physician
          through our partner provider network. Your doctor will
          independently evaluate your health history and determine whether a
          peptide protocol is appropriate for you.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            className="gap-2"
            render={<Link href="/start" />}
            onClick={() => {
              track.startJourney("quiz_results");
              track.ctaClick("quiz_results", "Start Your Journey", "/start");
            }}
          >
            Start Your Journey
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Button>
          <Button
            variant="outline"
            size="lg"
            render={<Link href="/pricing" />}
            onClick={() => track.ctaClick("quiz_results", "View Pricing", "/pricing")}
          >
            View Pricing
          </Button>
        </div>
      </div>

      <p className="mt-8 text-center font-label text-[9px] uppercase leading-loose tracking-[0.1em] text-muted-foreground/50">
        This quiz provides educational information only and does not constitute
        medical advice. AetherPeptide connects you with licensed physicians through
        our partner network. All medical decisions, prescriptions,
        and protocols are handled exclusively by licensed providers. Compounded
        peptides available only under valid prescription. Not intended to diagnose,
        treat, cure, or prevent any disease.
      </p>
    </div>
  );
}
