import { HeroSection } from "@/components/marketing/hero-section";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { PeptideShowcase } from "@/components/marketing/peptide-showcase";
import { TrustSection } from "@/components/marketing/trust-section";
import { CTASection } from "@/components/marketing/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <PeptideShowcase />
      <TrustSection />
      <CTASection />
    </>
  );
}
