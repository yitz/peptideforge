import { HeroSection } from "@/components/marketing/hero-section";
import { ValueProps } from "@/components/marketing/value-props";
import { RegulatoryTimeline } from "@/components/marketing/regulatory-timeline";
import { SignupCTA } from "@/components/marketing/signup-cta";
import { Disclaimer } from "@/components/marketing/disclaimer";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValueProps />
      <RegulatoryTimeline />
      <SignupCTA />
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <Disclaimer />
      </section>
    </>
  );
}
