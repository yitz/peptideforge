import type { Metadata } from "next";
import Link from "next/link";
import { getCompoundablePeptides } from "@/lib/peptides/registry";

export const metadata: Metadata = {
  title: "The Wellness Collection",
  description:
    "Peptide options available through licensed physicians via our partner provider network. All protocols require physician supervision.",
};

const CATALOG_IMAGES = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD240_sMfKXYWguNsVUGgbGs9LC23AUqRSu9E8z9ogObb1PLv1x3V4LNeIpOXIRRBiX6-j7yr7I95Wtq-MLsWgAAYuPWKVGDuURfylJpzarUErmU8yR0smU_-mKkI6c42EDzk9JCfeM2s73dMHFyW2UkjYRYijk42hb5Odeq6-WG3675rmXw7lAA8v8yLqZOz_DlqMhzuT3h_BXzWXm8G8au2hq02DV4QgShvJg0Nz9I86VSxge8u9q2ffGrliDy1wfV6oz-13SB-hD",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCv6_6ulnGR-ETDp4mFeIr1045ypFD6oRxMgOmXBIyAl3HwcwFHtW35tYAAe21Ezjdc4Spb-RkIq6FAl5u1F844LEr5mpXPcbuJTuo9wE27cJkigY3iqT6EmI0UHyRKr9xfwxV7_ldnppdylHYBlK58skALK1BbLNuLoc6zMocQz2eObCYu7K2xuo2vLO20BbDsw9mwMoEecO-anogbtbwTE4cwLdPrzqKEPZZB3aP__LklBzNjMbIAx9BoNjs2oAWyvqUiZlSu-VBU",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBVnSOEvM4fBS5tqClRWZ6u3bBi0_Lae8f1ywbUvFNGWy7fMM2xFVV_d6VPQhpKyY96GmphMbjTTGWoyQAxMdpWYm1yMfwUPmCxXy5r3KRWhm9lZZcTm5G3QeVNLMZvn34REYdujSNOTJZtGSKza7B1fiRvLcfiysCGZd0SkoNt_ibOtjYPetQ2B6VB-IeUHs6NtYY7eB-SWMppUz-AksH0-VjEL73zMwlrVwrBGxsU-T7HI_E96CnZNPNBIlTWOFV7E_md471RiT5j",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCWC7pefL3bI9XYyVf5VkGc9BAxbGRNh8W-BVFFpEK7hFq7pqze1oBn9UTKSaTdZZV48ZHOzjD7Xd3t7IfkgLTjiZmkb6OKWF1XefbA7vx26ZvRI0Gr64nPhslYW5zpiN9GEVBN_rnjbgBgVrLsSV6Sr2TRzYK9T4f5FNwQZPWcr1WpUGVYBQ6EerJEQFiD_yNv_4S5B6q2QkkZwOQJMjdZASanqJVT2-_WXZqhTtJ3jkxK5TQtlu9qCbC1nYILxEkVzCWYgiOm4r8p",
];

const BADGE_LABELS: Record<string, string> = {
  recovery: "Recovery Support",
  performance: "Performance Support",
  longevity: "Vitality Support",
  "body-composition": "Performance Support",
  immune: "Immune Support",
  "sexual-health": "Wellness Support",
};

export default function PeptideCatalogPage() {
  const peptides = getCompoundablePeptides();

  return (
    <div className="pb-32 pt-24">
      <div className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <header className="mb-12">
          <p className="mb-3 font-label text-[10px] uppercase tracking-[0.3em] text-primary/60">
            Physician-Supervised Wellness
          </p>
          <h1 className="mb-4 font-headline text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            The Wellness Collection.
          </h1>
          <p className="max-w-md text-lg font-light italic leading-relaxed text-muted-foreground">
            Peptide options available through licensed physicians via our partner
            provider network.
          </p>
        </header>

        {/* Filter chips */}
        <div className="no-scrollbar -mx-6 flex gap-3 overflow-x-auto px-6 pb-8">
          <span className="flex-shrink-0 rounded-full bg-foreground px-6 py-1.5 font-label text-[10px] uppercase tracking-widest text-background">
            All
          </span>
          {["Recovery", "Performance", "Longevity"].map((label) => (
            <span
              key={label}
              className="flex-shrink-0 rounded-full border border-border/50 px-6 py-1.5 font-label text-[10px] uppercase tracking-widest text-muted-foreground transition-all hover:border-primary hover:text-primary dark:border-border/30"
            >
              {label}
            </span>
          ))}
        </div>

        {/* Quiz banner */}
        <div className="relative mb-16 overflow-hidden rounded-[2rem] bg-[#003833] p-10 shadow-2xl shadow-primary/20 dark:bg-[#001a17]">
          <div className="relative z-10">
            <h2 className="mb-3 font-headline text-3xl font-medium italic text-white">
              Not sure where to start?
            </h2>
            <p className="mb-8 max-w-[240px] text-sm leading-relaxed text-primary-foreground/70">
              Share your wellness goals and a licensed physician will guide your
              journey.
            </p>
            <Link
              href="/quiz"
              className="inline-block rounded-full bg-white px-8 py-3.5 font-label text-[10px] font-bold uppercase tracking-[0.2em] text-[#003833] transition-all hover:scale-105 hover:bg-primary-foreground/90"
            >
              Take the Wellness Quiz
            </Link>
          </div>
          <div className="absolute -bottom-8 -right-8 h-64 w-64 opacity-40 mix-blend-screen">
            <img
              className="h-full w-full object-contain brightness-125 grayscale filter"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI_pze7FM6gCzGcX56eFDLz29sUD1aI_w2Y_-LKyJHLFTM0Pwm-AvQUXFXxreMmjYh19XMBDPcJdSEG1ugErCsP8KVdkvcBRY9xm-8_zTjT9NkxB5jDKA3BZ9enic2yKmNl6F1EzsOBE6H5AeSpwIYbSURDIhBI-I2Gta3-3UCxHCaIOPNJWaMcJCBh1lnyTq0G6x09vXttJ3Uu9rQ4TZ7KKg6RVo58U-pJc4HSqHhw9lwh3_FYLpfNeU8sRS7aG306knJfhLREBw0"
              alt="Crystalline peptide structures"
            />
          </div>
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-primary/10 blur-[80px]" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {peptides.map((peptide, i) => {
            const badge = BADGE_LABELS[peptide.categories[0]] ?? "Wellness";
            const offset = i % 2 !== 0;
            return (
              <div
                key={peptide.id}
                className={`group relative flex flex-col ${offset ? "md:mt-12" : ""}`}
              >
                <div className="premium-shadow relative mb-6 aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-secondary">
                  <img
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={CATALOG_IMAGES[i % CATALOG_IMAGES.length]}
                    alt={`${peptide.name} — premium peptide`}
                  />
                  <div className="absolute right-6 top-6">
                    <span className="glass-badge rounded-full px-4 py-1.5 font-label text-[9px] font-bold uppercase tracking-widest text-foreground shadow-sm">
                      {badge}
                    </span>
                  </div>
                </div>
                <div className="px-2">
                  <div className="mb-2 flex items-baseline justify-between">
                    <h3 className="font-headline text-2xl font-bold text-foreground">
                      {peptide.name}
                    </h3>
                    <span className="font-label text-sm font-semibold text-primary/80">
                      Rx Required
                    </span>
                  </div>
                  <p className="mb-6 text-sm font-light leading-relaxed text-muted-foreground">
                    {peptide.shortDescription} Available only under physician
                    prescription.
                  </p>
                  <Link
                    href={`/peptides/${peptide.slug}`}
                    className="group/btn flex w-fit items-center gap-2 border-b border-transparent font-label text-[10px] font-bold uppercase tracking-[0.2em] text-foreground transition-all hover:border-foreground"
                  >
                    Learn More
                    <span className="material-symbols-outlined text-sm transition-transform group-hover/btn:translate-x-1">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mandatory disclaimer */}
        <div className="mt-16 text-center">
          <p className="mx-auto max-w-lg font-label text-[9px] uppercase leading-loose tracking-[0.1em] text-muted-foreground/50">
            AetherPeptide connects you with licensed physicians through our
            partner network (Ola Digital Health). All medical decisions,
            prescriptions, and protocols are handled exclusively by licensed
            providers. Compounded peptides available only under valid prescription
            via 503A pharmacies. These statements have not been evaluated by the
            Food and Drug Administration. Not intended to diagnose, treat, cure,
            or prevent any disease.
          </p>
        </div>
      </div>
    </div>
  );
}
