import type { Metadata } from "next";
import Link from "next/link";
import { TrackedPlanCTA } from "@/components/marketing/tracked-plan-cta";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for physician-supervised peptide therapy. Monthly subscriptions include provider consultations, 503A pharmacy fulfillment, and order tracking.",
};

const PLANS = [
  {
    name: "Starter",
    price: 199,
    description: "Single peptide protocol with physician oversight",
    badge: null,
    accent: false,
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
    accent: true,
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
    accent: false,
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

const ALL_PLANS_INCLUDE = [
  { icon: "encrypted", label: "HIPAA-compliant platform" },
  { icon: "medical_services", label: "Licensed physician oversight" },
  { icon: "biotech", label: "503A compounding pharmacy" },
  { icon: "local_shipping", label: "Cold-chain shipping" },
  { icon: "dashboard", label: "Order tracking dashboard" },
  { icon: "pause_circle", label: "Cancel or pause anytime" },
];

export default function PricingPage() {
  return (
    <div className="px-6 pb-32 pt-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 block font-label text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
            Transparent Pricing
          </span>
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Physician-Supervised <br />Peptide Therapy
          </h1>
          <p className="mt-6 text-lg font-light leading-relaxed text-muted-foreground">
            Every plan includes physician supervision, 503A pharmacy fulfillment,
            and a premium branded experience. No hidden fees.
          </p>
        </div>

        {/* Pricing cards — all equal height, all light surface */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-[2rem] bg-white p-8 dark:bg-card/60 ${
                plan.accent
                  ? "shadow-xl shadow-primary/10 ring-2 ring-primary/20 dark:ring-primary/30"
                  : "shadow-sm shadow-black/[0.03] dark:shadow-none"
              }`}
            >
              {/* Accent top bar for badged plans */}
              {plan.accent && (
                <div className="absolute left-8 right-8 top-0 h-[3px] rounded-full bg-primary" />
              )}

              {/* Badge */}
              {plan.badge && (
                <div className="mb-2 mt-1">
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 font-label text-[9px] font-bold uppercase tracking-[0.15em] text-primary dark:bg-primary/15">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div className={`mb-8 ${!plan.badge ? "mt-3" : ""}`}>
                <h2 className="font-headline text-xl font-bold text-foreground">
                  {plan.name}
                </h2>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-headline text-5xl font-bold tracking-tight text-foreground">
                    ${plan.price}
                  </span>
                  <span className="font-label text-sm text-muted-foreground">
                    /mo
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              {/* Features — flex-1 ensures equal card height */}
              <ul className="flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <span className="material-symbols-outlined mt-0.5 text-sm text-primary">
                      check_circle
                    </span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA — mt-auto pins to bottom, identical for all plans */}
              <div className="mt-8">
                <TrackedPlanCTA planName={plan.name} price={plan.price}>
                  <Link
                    href="/start"
                    className="glass-primary block w-full rounded-full py-4 text-center font-label text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-xl shadow-primary/10 transition-all hover:shadow-primary/20 active:scale-[0.98]"
                  >
                    Get Started
                  </Link>
                </TrackedPlanCTA>
              </div>
            </div>
          ))}
        </div>

        {/* All Plans Include — full-width premium banner */}
        <div className="mt-16 overflow-hidden rounded-[2rem] bg-[var(--ds-surface-low)] dark:bg-card/40">
          {/* Teal accent line at top */}
          <div className="h-[3px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          <div className="p-10 md:p-12">
            <div className="mb-8 text-center">
              <span className="font-label text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                Included With Every Plan
              </span>
              <h3 className="mt-2 font-headline text-2xl font-bold text-foreground">
                All Plans Include
              </h3>
            </div>

            <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-3">
              {ALL_PLANS_INCLUDE.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/5">
                    <span className="material-symbols-outlined text-lg text-primary">
                      {item.icon}
                    </span>
                  </div>
                  <span className="text-sm text-foreground">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Disclaimer */}
            <div className="mt-10 text-center">
              <p className="mx-auto max-w-xl font-label text-[9px] uppercase leading-loose tracking-[0.1em] text-muted-foreground/50">
                Peptide costs are included in your subscription. Lab work may be
                additional. All medical decisions, prescriptions, and protocols are
                determined exclusively by your licensed physician. AetherPeptide
                connects you with licensed physicians through our partner network.
                These statements have not been evaluated by the FDA. Not intended
                to diagnose, treat, cure, or prevent any disease.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
