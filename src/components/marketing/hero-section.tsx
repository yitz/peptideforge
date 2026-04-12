import Link from "next/link";
import { TrackedCTA } from "@/components/ui/tracked-cta";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[85vh] flex-col justify-center overflow-hidden px-8">
      {/* Background image + gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          className="h-full w-full scale-110 object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBg5LI1aP_4E8rHvWl9ZJT_k6o86nt0hex29q3v2X0w3FFlD4jMUd_gqPhuCUfViYwbkr-ylgcw0-8f0IR3Wd0kzQ75cx8sZyktC-wAY3a20KbkziYJ8zmhTCQLhpUZOfxgkjvz5yDjw97RlL7JTHiHW_qcAKkruscHMT0Fu6KJqt7YbS60cKUISOoHQB1jCR_TdbYAbKJ1HxpI8pHOufjs9CH9bNrrE1mMRrdKtOgpljgiLYG34Z97capOzWuVVAdWu1j-nahwZSSr"
          alt="Abstract crystalline structures in deep teal"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
      </div>

      <div className="relative z-10 mt-12 max-w-lg space-y-8">
        <span className="font-label text-xs font-bold uppercase tracking-[0.3em] text-primary">
          Premium Physician-Supervised Wellness
        </span>

        <h1 className="font-headline text-6xl font-extrabold leading-[1.05] tracking-tight text-foreground">
          Peptide Therapy.{" "}
          <span className="font-normal italic text-primary">Refined.</span>
        </h1>

        <p className="text-xl font-light leading-relaxed text-muted-foreground">
          AetherPeptide connects you with licensed physicians who may design
          personalized wellness protocols through our partner provider network.
        </p>

        <div className="pt-6">
          <TrackedCTA section="hero" label="Start My Wellness Quiz" destination="/quiz">
            <Link
              href="/quiz"
              className="glass-primary group flex w-full items-center justify-center gap-4 rounded-full py-6 font-label text-xs font-bold uppercase tracking-[0.25em] text-white shadow-2xl shadow-primary/30 transition-all active:scale-95"
            >
              Start My Wellness Quiz
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>
          </TrackedCTA>
        </div>

        <p className="mt-16 max-w-[80%] font-label text-[9px] uppercase leading-loose tracking-widest text-muted-foreground/50">
          AetherPeptide connects you with licensed physicians through our partner
          network. All medical decisions, prescriptions, and
          protocols are handled exclusively by licensed providers. Compounded
          peptides available only under valid prescription via 503A pharmacies.
          Not intended to diagnose, treat, cure, or prevent any disease.
        </p>
      </div>
    </section>
  );
}
