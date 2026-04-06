import type { Metadata } from "next";
import { QuizFlow } from "@/components/quiz/quiz-flow";

export const metadata: Metadata = {
  title: "Find Your Protocol — Personalization Quiz",
  description:
    "Select your wellness goals and explore which peptides may be a fit. Educational matching only — your licensed provider determines your protocol.",
};

export default function QuizPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <QuizFlow />
      </div>
    </div>
  );
}
