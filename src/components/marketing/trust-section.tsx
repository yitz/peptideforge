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
      "We connect you with licensed physicians through our provider network (partner provider TBD). All medical decisions and prescriptions are made independently by your doctor.",
  },
  {
    icon: FlaskConical,
    title: "503A Compounding",
    description:
      "All peptides compounded at licensed 503A pharmacies under strict FDA guidelines. Purity-tested, lot-tracked, cold-chain shipped.",
  },
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description:
      "Enterprise-grade security with end-to-end encryption, immutable audit logs, and signed BAAs with every vendor in the chain.",
  },
  {
    icon: Lock,
    title: "Secure Platform",
    description:
      "End-to-end encryption, role-based access control, and MFA enforcement. Your data is protected at every layer.",
  },
  {
    icon: FileCheck,
    title: "FDA-Compliant Content",
    description:
      "All educational content uses structure-function claims only. Zero disease treatment claims. Full regulatory compliance.",
  },
  {
    icon: HeartPulse,
    title: "Track Your Progress",
    description:
      "Log your wellness journey with self-reported metrics. Share your progress with your provider at your next consultation.",
  },
] as const;

export function TrustSection() {
  return (
    <section className="border-t border-border bg-secondary/50 py-20 dark:bg-card/30 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight sm:text-4xl">
            Built on Trust. Backed by Real Physicians.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            AetherPeptide is a branded platform &mdash; not a medical provider.
            We connect you with licensed physicians and 503A pharmacies.
            Every medical decision is made independently by your doctor.
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
