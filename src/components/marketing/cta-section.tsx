import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-secondary shadow-sm dark:bg-card dark:shadow-none">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_120%,var(--color-primary)/8,transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_120%,var(--color-primary)/10,transparent)]" />
          <div className="px-6 py-16 text-center sm:px-12 sm:py-20">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Start Your Peptide Journey?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Take our 30-second quiz to explore which peptides match your
              wellness goals. Then connect with a licensed provider.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="gap-2 text-base" render={<Link href="/quiz" />}>
                Take the Quiz
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="text-base" render={<Link href="/start" />}>
                Talk to a Provider
              </Button>
            </div>
            <p className="mx-auto mt-6 max-w-lg text-xs text-muted-foreground">
              AetherPeptide connects you with licensed physicians through our
              partner network (partner provider TBD). All medical decisions and
              prescriptions are made exclusively by licensed providers. Compounded
              peptides available only under valid prescription. These statements
              have not been evaluated by the FDA. Not intended to diagnose, treat,
              cure, or prevent any disease.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
