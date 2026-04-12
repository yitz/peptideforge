"use client";

import { useState, useCallback, useEffect } from "react";
import { QuizResults } from "@/components/quiz/quiz-results";
import { track } from "@/lib/analytics";

export type QuizGoal =
  | "recovery"
  | "performance"
  | "longevity"
  | "body-comp"
  | "immune"
  | "sexual-health"
  | "sleep"
  | "cognitive";

export interface QuizAnswers {
  goals: QuizGoal[];
}

interface QuizOption {
  value: QuizGoal;
  label: string;
  description: string;
  icon: string;
}

const GOAL_OPTIONS: QuizOption[] = [
  { value: "recovery", label: "Recovery Support", description: "May support your body\u2019s natural recovery processes after physical activity.", icon: "rebase_edit" },
  { value: "cognitive", label: "Cognitive Support", description: "May support healthy cognitive function, focus, and mental clarity.", icon: "psychology" },
  { value: "body-comp", label: "Body Composition", description: "May support healthy body composition and metabolic wellness goals.", icon: "vital_signs" },
  { value: "longevity", label: "Longevity Focus", description: "May support overall vitality and long-term wellness as part of a healthy lifestyle.", icon: "hourglass_empty" },
  { value: "sleep", label: "Sleep Quality", description: "May support restful sleep and healthy circadian patterns.", icon: "bedtime" },
  { value: "immune", label: "Immune Support", description: "May support healthy immune system function and resilience.", icon: "shield" },
  { value: "performance", label: "Performance", description: "May support physical endurance, strength, and athletic wellness.", icon: "fitness_center" },
  { value: "sexual-health", label: "Sexual Wellness", description: "May support healthy libido, arousal, and sexual vitality.", icon: "favorite" },
];

export function QuizFlow() {
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState<QuizAnswers>({ goals: [] });

  useEffect(() => {
    track.quizStart();
  }, []);

  const toggleGoal = useCallback((goal: QuizGoal) => {
    setAnswers((prev) => {
      const removing = prev.goals.includes(goal);
      const next = removing
        ? prev.goals.filter((g) => g !== goal)
        : prev.goals.length < 3
          ? [...prev.goals, goal]
          : prev.goals;
      if (!removing && next.length > prev.goals.length) {
        track.goalSelect(goal, next.length);
      }
      return { ...prev, goals: next };
    });
  }, []);

  const handleSubmit = useCallback(() => {
    track.quizComplete(answers.goals);
    setSubmitted(true);
  }, [answers.goals]);

  if (submitted) {
    return <QuizResults answers={answers} />;
  }

  return (
    <div className="flex min-h-[70vh] flex-col">
      {/* Intro */}
      <section className="mb-10">
        <div className="mb-4">
          <span className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-primary opacity-80">
            Step 01 / 08
          </span>
        </div>
        <h1 className="mb-4 font-headline text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
          Share Your Wellness Goals.
        </h1>
        <p className="text-[15px] leading-relaxed text-muted-foreground">
          A brief questionnaire about your wellness priorities. This is not a
          medical assessment. A licensed physician through our partner network
          will independently evaluate your needs.
        </p>
      </section>

      {/* Question */}
      <section className="flex-grow space-y-6">
        <div className="mb-2 flex flex-col gap-1.5">
          <h2 className="font-headline text-xl text-foreground">
            What are your primary wellness priorities?
          </h2>
          <p className="text-sm text-muted-foreground">
            Select up to 3 that apply to your lifestyle.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-3.5">
          {GOAL_OPTIONS.map((opt) => {
            const selected = answers.goals.includes(opt.value);
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => toggleGoal(opt.value)}
                className={`group w-full rounded-2xl border p-5 text-left backdrop-blur-sm transition-all duration-300 active:scale-[0.99] ${
                  selected
                    ? "card-active-glow border-primary bg-primary/5"
                    : "border-border/40 bg-card/60 hover:border-primary/30 hover:shadow-md dark:border-border/20 dark:bg-card/40"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-grow pr-4">
                    <div className="mb-2 flex items-center gap-3">
                      <span className="material-symbols-outlined text-xl text-primary/80">
                        {opt.icon}
                      </span>
                      <span className="font-label text-xs font-bold uppercase tracking-wider text-foreground/90">
                        {opt.label}
                      </span>
                    </div>
                    <p className="text-sm leading-snug text-muted-foreground">
                      {opt.description}
                    </p>
                  </div>
                  <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full border border-border transition-colors group-hover:border-primary dark:border-border/50">
                    <div
                      className={`h-2.5 w-2.5 rounded-full bg-primary transition-opacity ${
                        selected ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Trust anchor */}
      <div className="mt-12 rounded-2xl border border-border/30 bg-card/40 p-6 text-center dark:border-border/10 dark:bg-card/20">
        <div className="mb-3 flex justify-center">
          <span className="material-symbols-outlined text-2xl text-primary/60">
            verified_user
          </span>
        </div>
        <p className="mx-auto max-w-xs text-[11px] leading-relaxed text-muted-foreground">
          Your data is encrypted and HIPAA-compliant. This quiz is educational
          only and does not constitute a medical assessment. A licensed physician
          through our partner network will independently evaluate your needs.
        </p>
      </div>

      {/* Disclaimer */}
      <div className="mt-6 text-center">
        <p className="mx-auto max-w-sm font-label text-[9px] uppercase leading-loose tracking-[0.1em] text-muted-foreground/50">
          AetherPeptide connects you with licensed physicians through our partner
          network. All medical decisions, prescriptions, and
          protocols are handled exclusively by licensed providers. Not intended to
          diagnose, treat, cure, or prevent any disease.
        </p>
      </div>

      {/* Submit CTA */}
      <div className="mt-8">
        <button
          type="button"
          onClick={handleSubmit}
          disabled={answers.goals.length === 0}
          className="w-full rounded-xl bg-gradient-to-br from-primary to-primary/80 py-4 font-label text-xs font-bold uppercase tracking-[0.15em] text-primary-foreground shadow-[0_8px_30px_rgb(13,148,136,0.15)] transition-all active:translate-y-0.5 active:shadow-inner disabled:cursor-not-allowed disabled:opacity-40 dark:from-primary dark:to-primary/70"
        >
          Continue
        </button>
        <p className="mt-3 text-center font-label text-[9px] uppercase tracking-[0.1em] text-muted-foreground/40">
          Press to confirm selections and proceed
        </p>
      </div>
    </div>
  );
}
