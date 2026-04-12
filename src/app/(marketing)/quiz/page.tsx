import type { Metadata } from "next";
import { QuizFlow } from "@/components/quiz/quiz-flow";

export const metadata: Metadata = {
  title: "Wellness Quiz — Share Your Goals",
  description:
    "A brief questionnaire about your wellness priorities. This is not a medical assessment. A licensed physician through our partner network will independently evaluate your needs.",
};

export default function QuizPage() {
  return (
    <div className="mesh-gradient relative min-h-screen">
      {/* Progress bar */}
      <div className="fixed left-0 top-[73px] z-40 w-full">
        <div className="h-0.5 w-full bg-border/30">
          <div className="metallic-shimmer h-full w-[15%] transition-all duration-700 ease-out" />
        </div>
      </div>

      {/* Background glow decorations */}
      <div
        className="fixed right-[-10%] top-20 -z-10 h-[40%] w-[60%] animate-pulse rounded-full bg-primary/5 blur-[100px]"
        style={{ animationDuration: "8s" }}
      />
      <div className="fixed bottom-0 left-[-20%] -z-10 h-[30%] w-[80%] rounded-full bg-accent/5 blur-[120px]" />

      <div className="mx-auto max-w-lg px-6 pb-32 pt-28">
        <QuizFlow />
      </div>
    </div>
  );
}
