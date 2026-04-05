import type { Metadata } from "next";
import { QuizFlow } from "@/components/quiz/quiz-flow";

export const metadata: Metadata = {
  title: "Find Your Protocol — Personalization Quiz",
  description:
    "Answer 5 quick questions about your goals, health, and lifestyle. Our AI recommends a personalized peptide protocol in under 2 minutes.",
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
