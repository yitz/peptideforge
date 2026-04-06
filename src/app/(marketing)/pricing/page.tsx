import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for physician-supervised peptide therapy. Monthly subscriptions include provider consultations, 503A pharmacy fulfillment, and order tracking.",
};

const PLANS = [
  {
    name: "Starter",
    price: 199,
    description: "Single peptide protocol with physician oversight",
    badge: null,
    features: [
      "1 peptide protocol",
      "Licensed physician consultation",
      "Provider-designed protocol",
      "503A pharmacy fulfillment",
      "Monthly provider check-in",
      "Email support",
    ],
  },
  {
    name: "Performance",
    price: 349,
    description: "Multi-peptide stacking with provider guidance",
    badge: "Most Popular",
    features: [
      "Up to 3 peptide stack",
      "Licensed physician consultation",
      "Provider-optimized protocol",
      "503A pharmacy fulfillment",
      "Bi-weekly provider check-ins",
      "Lab ordering support",
      "Order tracking dashboard",
      "Priority support",
    ],
  },
  {
    name: "Longevity Elite",
    price: 599,
    description: "Comprehensive protocol with ongoing provider care",
    badge: "Maximum Results",
    features: [
      "Unlimited peptide protocols",
      "Dedicated physician oversight",
      "Comprehensive lab interpretation by provider",
      "Weekly provider check-ins",
      "Progress tracking dashboard",
      "Before/after wellness logging",
      "Direct provider messaging",
      "Quarterly protocol reviews by physician",
      "Concierge support",
    ],
  },
] as const;

export default function PricingPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight sm:text-4xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Every plan includes physician supervision, 503A pharmacy fulfillment,
            and a premium branded experience. No hidden fees.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <Card
              key={plan.name}
              className={
                plan.badge === "Most Popular"
                  ? "relative border-primary shadow-lg"
                  : "relative"
              }
            >
              {plan.badge && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  {plan.badge}
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="font-[family-name:var(--font-space-grotesk)] text-xl">
                  {plan.name}
                </CardTitle>
                <div className="mt-4">
                  <span className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold">
                    ${plan.price}
                  </span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className="mt-8 w-full gap-2"
                  variant={plan.badge === "Most Popular" ? "default" : "outline"}
                  render={<Link href="/start" />}
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-2xl">
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="font-[family-name:var(--font-space-grotesk)] font-semibold">
                All Plans Include
              </h3>
              <div className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                <p>HIPAA-compliant platform</p>
                <p>Licensed physician oversight</p>
                <p>503A compounding pharmacy</p>
                <p>Cold-chain shipping</p>
                <p>Order tracking dashboard</p>
                <p>Cancel or pause anytime</p>
              </div>
              <p className="mt-6 text-xs text-muted-foreground">
                Peptide costs are included in your subscription. Lab work may
                be additional. All medical decisions, prescriptions, and
                protocols are determined exclusively by your licensed physician.
                AetherPeptide does not provide medical advice. These statements
                have not been evaluated by the FDA.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
