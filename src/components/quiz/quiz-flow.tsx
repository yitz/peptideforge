"use client";

import { useState, useCallback } from "react";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
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

export type QuizAge = "18-29" | "30-39" | "40-49" | "50-59" | "60+";
export type QuizSex = "male" | "female" | "other";
export type QuizExperience = "none" | "some" | "experienced";
export type QuizLabs = "yes-recent" | "yes-older" | "no";

export interface QuizAnswers {
  goals: QuizGoal[];
  age: QuizAge | null;
  sex: QuizSex | null;
  experience: QuizExperience | null;
  labs: QuizLabs | null;
}

interface QuizOption<T extends string> {
  value: T;
  label: string;
  description?: string;
}

const GOAL_OPTIONS: QuizOption<QuizGoal>[] = [
  { value: "recovery", label: "Recovery", description: "Injury healing, joint/tendon support" },
  { value: "performance", label: "Performance", description: "Athletic output, strength, endurance" },
  { value: "longevity", label: "Longevity", description: "Anti-aging, healthspan optimization" },
  { value: "body-comp", label: "Body Composition", description: "Lean mass, fat loss, metabolism" },
  { value: "sleep", label: "Sleep", description: "Deep sleep, recovery, circadian rhythm" },
  { value: "immune", label: "Immune Support", description: "Immune modulation, resilience" },
  { value: "sexual-health", label: "Sexual Health", description: "Libido, arousal, vitality" },
  { value: "cognitive", label: "Cognitive", description: "Focus, mental clarity, neuroprotection" },
];

const AGE_OPTIONS: QuizOption<QuizAge>[] = [
  { value: "18-29", label: "18–29" },
  { value: "30-39", label: "30–39" },
  { value: "40-49", label: "40–49" },
  { value: "50-59", label: "50–59" },
  { value: "60+", label: "60+" },
];

const SEX_OPTIONS: QuizOption<QuizSex>[] = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Prefer not to say" },
];

const EXPERIENCE_OPTIONS: QuizOption<QuizExperience>[] = [
  { value: "none", label: "Brand new", description: "Never used peptides" },
  { value: "some", label: "Some experience", description: "Tried 1-2 peptides before" },
  { value: "experienced", label: "Experienced", description: "Used multiple protocols" },
];

const LAB_OPTIONS: QuizOption<QuizLabs>[] = [
  { value: "yes-recent", label: "Yes, within 3 months" },
  { value: "yes-older", label: "Yes, but older than 3 months" },
  { value: "no", label: "No recent labs" },
];

const TOTAL_STEPS = 5;

export function QuizFlow() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({
    goals: [],
    age: null,
    sex: null,
    experience: null,
    labs: null,
  });

  const progress = Math.round(((step + 1) / (TOTAL_STEPS + 1)) * 100);

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

  const canProceed = (): boolean => {
    switch (step) {
      case 0: return answers.goals.length > 0;
      case 1: return answers.age !== null;
      case 2: return answers.sex !== null;
      case 3: return answers.experience !== null;
      case 4: return answers.labs !== null;
      default: return false;
    }
  };

  if (step >= TOTAL_STEPS) {
    return <QuizResults answers={answers} />;
  }

  return (
    <div>
      <div className="mb-8 text-center">
        <Badge variant="secondary" className="mb-4 gap-1.5">
          <Sparkles className="h-3.5 w-3.5" />
          AI Protocol Finder
        </Badge>
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold sm:text-3xl">
          Find Your Peptide Protocol
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Question {step + 1} of {TOTAL_STEPS} &middot; Takes under 2 minutes
        </p>
      </div>

      <Progress value={progress} className="mb-8 h-1.5" />

      {step === 0 && (
        <StepCard
          title="What are your primary goals?"
          subtitle="Select up to 3 goals"
        >
          <div className="grid gap-3 sm:grid-cols-2">
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
                {opt.description && (
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {opt.description}
                  </p>
                )}
              </button>
            ))}
          </div>
        </StepCard>
      )}

      {step === 1 && (
        <StepCard title="What is your age range?">
          <SingleSelect
            options={AGE_OPTIONS}
            value={answers.age}
            onChange={(v) => setAnswers((prev) => ({ ...prev, age: v }))}
          />
        </StepCard>
      )}

      {step === 2 && (
        <StepCard title="What is your biological sex?" subtitle="This affects peptide dosing and selection">
          <SingleSelect
            options={SEX_OPTIONS}
            value={answers.sex}
            onChange={(v) => setAnswers((prev) => ({ ...prev, sex: v }))}
          />
        </StepCard>
      )}

      {step === 3 && (
        <StepCard title="What is your experience with peptides?">
          <SingleSelect
            options={EXPERIENCE_OPTIONS}
            value={answers.experience}
            onChange={(v) => setAnswers((prev) => ({ ...prev, experience: v }))}
          />
        </StepCard>
      )}

      {step === 4 && (
        <StepCard title="Do you have recent lab work?" subtitle="Labs help our AI personalize your protocol">
          <SingleSelect
            options={LAB_OPTIONS}
            value={answers.labs}
            onChange={(v) => setAnswers((prev) => ({ ...prev, labs: v }))}
          />
        </StepCard>
      )}

      <div className="mt-8 flex items-center justify-between">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setStep((s) => s - 1)}
          disabled={step === 0}
          className="gap-1"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
        <Button
          size="sm"
          onClick={() => setStep((s) => s + 1)}
          disabled={!canProceed()}
          className="gap-1"
        >
          {step === TOTAL_STEPS - 1 ? "See Results" : "Next"}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

function StepCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
        )}
        <div className="mt-6">{children}</div>
      </CardContent>
    </Card>
  );
}

function SingleSelect<T extends string>({
  options,
  value,
  onChange,
}: {
  options: QuizOption<T>[];
  value: T | null;
  onChange: (value: T) => void;
}) {
  return (
    <div className="grid gap-3">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          className={`rounded-xl border p-4 text-left transition-all ${
            value === opt.value
              ? "border-primary bg-primary/5 ring-1 ring-primary"
              : "border-border hover:border-primary/50"
          }`}
        >
          <p className="text-sm font-medium">{opt.label}</p>
          {opt.description && (
            <p className="mt-0.5 text-xs text-muted-foreground">
              {opt.description}
            </p>
          )}
        </button>
      ))}
    </div>
  );
}
