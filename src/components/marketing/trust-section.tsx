import {
  Shield,
  Lock,
  Stethoscope,
  FlaskConical,
  FileCheck,
  HeartPulse,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TRUST_SIGNALS = [
  {
    icon: Stethoscope,
    title: "Physician-Supervised",
    description:
      "Every protocol is reviewed and approved by a licensed physician. No auto-prescribing. No shortcuts.",
  },
  {
    icon: FlaskConical,
    title: "503A Compounding",
    description:
      "All peptides compounded at licensed 503A pharmacies under strict FDA guidelines. Purity-tested, lot-tracked.",
  },
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description:
      "Enterprise-grade security with field-level encryption, immutable audit logs, and signed BAAs with every vendor.",
  },
  {
    icon: Lock,
    title: "Zero-Trust Architecture",
    description:
      "End-to-end encryption, role-based access control, and MFA enforcement for all provider and admin accounts.",
  },
  {
    icon: FileCheck,
    title: "FDA-Compliant Claims",
    description:
      "All content passes through our AI compliance filter. Structure-function claims only. Zero disease treatment claims.",
  },
  {
    icon: HeartPulse,
    title: "Lab-Verified Outcomes",
    description:
      "Track your progress with lab markers and self-reported metrics. AI interprets trends and adjusts your protocol.",
  },
] as const;

export function TrustSection() {
  return (
    <section className="border-t border-border bg-card/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight sm:text-4xl">
            Built for Trust. Engineered for Compliance.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            PeptideForge isn&apos;t a peptide vendor. It&apos;s a physician-supervised,
            AI-enhanced telehealth platform built on enterprise-grade infrastructure.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TRUST_SIGNALS.map((signal) => (
            <Card key={signal.title}>
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <signal.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-base font-semibold">
                  {signal.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {signal.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
