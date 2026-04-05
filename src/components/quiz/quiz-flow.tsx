"use client";

import { useState, useCallback } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { QuizResults } from "@/components/quiz/quiz-results";

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
}

const GOAL_OPTIONS: QuizOption[] = [
  { value: "recovery", label: "Recovery Support", description: "Joint, tendon, and tissue wellness" },
  { value: "performance", label: "Performance", description: "Athletic output, strength, endurance" },
  { value: "longevity", label: "Longevity", description: "Healthy aging, vitality, healthspan" },
  { value: "body-comp", label: "Body Composition", description: "Lean mass support, metabolism" },
  { value: "sleep", label: "Sleep Quality", description: "Restful sleep, recovery, circadian support" },
  { value: "immune", label: "Immune Support", description: "Immune system wellness, resilience" },
  { value: "sexual-health", label: "Sexual Wellness", description: "Libido, arousal, vitality" },
  { value: "cognitive", label: "Cognitive Support", description: "Focus, clarity, mental performance" },
];

export function QuizFlow() {
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState<QuizAnswers>({ goals: [] });

  const toggleGoal = useCallback((goal: QuizGoal) => {
    setAnswers((prev) => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter((g) => g !== goal)
        : prev.goals.length < 3
          ? [...prev.goals, goal]
          : prev.goals,
    }));
  }, []);

  if (submitted) {
    return <QuizResults answers={answers} />;
  }

  return (
    <div>
      <div className="mb-8 text-center">
        <Badge variant="secondary" className="mb-4 gap-1.5">
          <Sparkles className="h-3.5 w-3.5" />
          Goal Matcher
        </Badge>
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold sm:text-3xl">
          What Are Your Wellness Goals?
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Select up to 3 goals &middot; We&apos;ll show you which peptides may be
          a fit &middot; Takes 30 seconds
        </p>
      </div>

      <Card>
        <CardContent className="p-6">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold">
            Choose your primary goals
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            This is for educational matching only — not a medical assessment.
            Your licensed provider will determine the right protocol for you.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {GOAL_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => toggleGoal(opt.value)}
                className={`rounded-xl border p-4 text-left transition-all ${
                  answers.goals.includes(opt.value)
                    ? "border-primary bg-primary/5 ring-1 ring-primary"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <p className="text-sm font-medium">{opt.label}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {opt.description}
                </p>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 flex justify-center">
        <Button
          size="lg"
          onClick={() => setSubmitted(true)}
          disabled={answers.goals.length === 0}
          className="gap-2"
        >
          See Matched Peptides
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
