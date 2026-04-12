import { HeroSection } from "@/components/marketing/hero-section";
import { TrustSection } from "@/components/marketing/trust-section";
import { GoalsSection } from "@/components/marketing/goals-section";
import { CTASection } from "@/components/marketing/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <GoalsSection />
      <CTASection />
    </>
  );
}
