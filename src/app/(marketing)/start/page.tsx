import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Stethoscope,
  ClipboardCheck,
  FlaskConical,
  Truck,
  Shield,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Start Your Journey",
  description:
    "Begin your physician-supervised peptide therapy journey. Licensed physicians independently handle all medical evaluation, prescribing, and clinical decisions.",
};

const JOURNEY_STEPS = [
  {
    icon: ClipboardCheck,
    title: "Subscribe to a Plan",
    description:
      "Choose the plan that fits your goals. Your subscription covers provider consultations, prescriptions, and pharmacy fulfillment.",
  },
  {
    icon: Stethoscope,
    title: "Independent Physician Evaluation",
    description:
      "A licensed physician independently reviews your health history, orders labs if needed, and determines whether a peptide protocol is appropriate for you. All clinical decisions are the physician\u2019s alone.",
  },
  {
    icon: FlaskConical,
    title: "503A Pharmacy Compounding",
    description:
      "Once prescribed, your peptides are compounded at a licensed 503A pharmacy — purity-tested, lot-tracked, and prepared under strict FDA guidelines.",
  },
  {
    icon: Truck,
    title: "Delivered to Your Door",
    description:
      "Cold-chain shipping direct to you. Track your order in real-time through your AetherPeptide dashboard.",
  },
] as const;

export default function StartPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge variant="secondary" className="mb-4 gap-1.5">
            <Shield className="h-3.5 w-3.5" />
            Physician-Supervised
          </Badge>
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight sm:text-4xl">
            Your Journey Starts Here
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            AetherPeptide connects you with licensed physicians and 503A
            pharmacies for a premium, fully supervised peptide therapy experience.
          </p>
        </div>

        <Card className="mt-10 border-primary/30 bg-primary/5">
          <CardContent className="flex items-start gap-3 p-5">
            <Stethoscope className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-medium">
                All medical decisions are made by licensed physicians
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                AetherPeptide connects you with licensed physicians through
                our partner network (partner provider TBD).
                Your physician handles intake, health evaluation, prescribing,
                and ongoing protocol management. We never make medical
                recommendations.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 space-y-6">
          {JOURNEY_STEPS.map((step, index) => (
            <div key={step.title} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <step.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-muted-foreground">
                    Step {index + 1}
                  </span>
                  <h3 className="font-[family-name:var(--font-space-grotesk)] font-semibold">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Separator className="my-10" />

        <Card>
          <CardHeader>
            <CardTitle className="text-center font-[family-name:var(--font-space-grotesk)] text-lg">
              What&apos;s Included
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Licensed physician consultation",
                "Protocol determined by your physician",
                "503A compounding pharmacy",
                "Cold-chain shipping",
                "Order tracking dashboard",
                "Subscription management",
                "HIPAA-compliant platform",
                "Ongoing provider support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 shrink-0 text-primary" />
                  {item}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" className="gap-2 text-base" render={<Link href="/pricing" />}>
            Choose Your Plan
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="text-base" render={<Link href="/quiz" />}>
            Take the Quiz First
          </Button>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          All treatments require evaluation and prescription by a licensed
          physician. AetherPeptide does not provide medical advice, diagnose
          conditions, or recommend treatments. These statements have not
          been evaluated by the FDA.
        </p>
      </div>
    </div>
  );
}
