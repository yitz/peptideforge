import Link from "next/link";
import { TrackedCTA } from "@/components/ui/tracked-cta";

const GOALS = [
  {
    title: "Cognitive Support",
    tags: "Focus \u2022 Clarity \u2022 Mental Wellness",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBt6W1CszxY8b73xWIfBn-pfcmDgqJ0XHy9QtV52oSNwGCCyJEPdltB8pJcDmvOF-TbCVIisbjWO25h3ycRxx-gr2A0TWf75t5uyhEVHlD60H5HIoOlA4NsbB0GD90bzx0JyUG1nHBJzunooliKP5klc_tf6jSCha-8Ib5hbWzkU_0FTr5qgLdyV3QgqwYnTk4qqy3f0kRR7laGE9t1tCpH-DIxbWdlxvkhCNkJQaCtbg_oRP2G9lElmO61hEgTrATyrYJ0TnNCqzzS",
    alt: "Close-up of human eye reflecting digital patterns",
  },
  {
    title: "Performance & Recovery",
    tags: "Strength \u2022 Endurance \u2022 Recovery Support",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB-497p9jJiADtDBhjA-u-uaYJHUS6QfUdmfqGjWFxde0Ub7BK2zYwU6g8xehV3SevgDOokyJITFwrWlEf86Zdjje_OB2Yx_-yUxWr2Ur6fCjA42yxCNriT6J42gISzuo6odfF8GBkKgT6gIxbBTL4iLamiNRzH3VaiYkVry1bE21KK1VsPgGa6OiqTe1etUDRA7MkrS6AJwgGKcxL3BB887CLFB5m_7l6zj9f2eSmmyG8I2i2silLj2bGKfSINE1j1DJSnUJEHbceT",
    alt: "Athletic silhouette in motion under cinematic lighting",
  },
  {
    title: "Rest & Vitality",
    tags: "Sleep Quality \u2022 Vitality \u2022 Wellness",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDoODTSKUnr4no-bUkj2FVT9a2D689QmMrqSded0h6asGOIRbLsJvjIf_6bbp_sMAL6i2vBTOdSXn5Yj7FhHZUS7n7f-IHWfE1hcYijTpoW0wF6ecN6FynfQ8uTTGHGZHIcSueKbzmZohK5eXoqTr3k8VRltFBB0dX7pnCokMAsuVsB6w6fMra5WtWa0NItQmJyMh8ZdBpRJ71dL-tI4XQ7Fhz-Zt8Bq3kfiuu_qAteqKmaIVeRrm3PdarzQ4QatlotIVwAFl2Wf_yY",
    alt: "Calm macro image of water ripples",
  },
] as const;

export function GoalsSection() {
  return (
    <section className="bg-background px-8 py-32">
      <div className="mx-auto max-w-7xl space-y-16">
        <div className="space-y-4 text-center">
          <span className="font-label text-xs font-bold uppercase tracking-[0.4em] text-primary">
            Wellness Pathways
          </span>
          <h2 className="font-headline text-4xl font-extrabold tracking-tight text-foreground">
            Explore by Your Goals
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {GOALS.map((goal) => (
            <div
              key={goal.title}
              className="group relative h-[360px] overflow-hidden rounded-[2rem] shadow-2xl shadow-black/5 dark:shadow-black/20"
            >
              <img
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                src={goal.image}
                alt={goal.alt}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="glass-card absolute bottom-6 left-6 right-6 space-y-3 rounded-2xl p-8">
                <h3 className="font-headline text-2xl font-bold text-foreground">
                  {goal.title}
                </h3>
                <p className="font-label text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {goal.tags}
                </p>
                <div className="pt-2">
                  <TrackedCTA
                    section="goals"
                    label={`Explore ${goal.title}`}
                    destination="/peptides"
                  >
                    <Link
                      href="/peptides"
                      className="inline-flex border-b border-primary/30 pb-1 font-label text-[10px] font-bold uppercase tracking-[0.2em] text-primary"
                    >
                      Explore Options
                    </Link>
                  </TrackedCTA>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
