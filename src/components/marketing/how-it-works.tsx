import { ClipboardCheck, Brain, Stethoscope, Package, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const STEPS = [
  {
    icon: ClipboardCheck,
    title: "Smart Intake",
    description:
      "Complete a 5-minute AI-guided health assessment. Our screening agent analyzes your goals, medical history, and contraindications in real-time.",
  },
  {
    icon: Brain,
    title: "AI Protocol Design",
    description:
      "Our protocol engine uses RAG over clinical literature to recommend the optimal peptide stack, dosing, and cycling — personalized to your biology.",
  },
  {
    icon: Stethoscope,
    title: "Provider Review",
    description:
      "A licensed physician reviews your protocol, labs, and history. Every prescription requires human medical oversight — no exceptions.",
  },
  {
    icon: Package,
    title: "503A Pharmacy Fulfillment",
    description:
      "Your prescription is compounded at a licensed 503A pharmacy and shipped directly to your door with cold-chain handling.",
  },
  {
    icon: TrendingUp,
    title: "AI-Coached Optimization",
    description:
      "Track outcomes, log adherence, and receive AI-powered coaching that adapts your protocol based on your response and lab trends.",
  },
] as const;

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-border bg-card/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight sm:text-4xl">
            How PeptideForge Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From intake to optimization — every step is AI-enhanced
            and physician-supervised.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="relative">
            <div className="absolute left-8 top-0 hidden h-full w-px bg-border md:block" />
            <div className="space-y-8">
              {STEPS.map((step, index) => (
                <div key={step.title} className="relative flex gap-6">
                  <div className="relative z-10 hidden md:block">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border bg-background shadow-sm">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <Card className="flex-1">
                    <CardContent className="flex gap-4 p-6">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 md:hidden">
                        <step.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs text-muted-foreground">
                            0{index + 1}
                          </span>
                          <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold">
                            {step.title}
                          </h3>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
