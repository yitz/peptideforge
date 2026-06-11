const ITEMS = [
  {
    icon: "calendar_month",
    title: "Regulatory timelines, tracked",
    body: "Key dates, committee meetings, and recategorization milestones — what's happening and when. Starting with the FDA Pharmacy Compounding Advisory Committee review on July 23–24, 2026.",
  },
  {
    icon: "science",
    title: "Research, summarized plainly",
    body: "Plain-English digests of emerging peptide research and what the data and the regulatory process actually show. No spin, no overpromising — just where things stand.",
  },
  {
    icon: "trending_up",
    title: "Industry movement",
    body: "How the 503A and 503B compounding landscape, suppliers, and the broader market are shifting — the signals worth paying attention to as the space matures.",
  },
  {
    icon: "bookmark_added",
    title: "Priority on the waitlist",
    body: "If and when compliant options open following regulatory clarity, subscribers are first to know — ahead of any public launch.",
  },
] as const;

export function ValueProps() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
      <div className="max-w-2xl">
        <span className="font-label text-[11px] font-bold uppercase tracking-[0.3em] text-primary">
          What you get
        </span>
        <h2 className="mt-5 font-headline text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
          A standing briefing on a fast-moving space.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          One email, sent when there&rsquo;s something real to report. Built for
          people who want to understand the peptide story as it actually unfolds —
          not the hype around it.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {ITEMS.map((item) => (
          <div
            key={item.title}
            className="rounded-[2rem] bg-card p-8 premium-shadow transition-transform hover:-translate-y-1"
          >
            <span
              className="material-symbols-outlined text-3xl text-primary"
              aria-hidden="true"
            >
              {item.icon}
            </span>
            <h3 className="mt-5 font-headline text-xl font-bold tracking-tight text-foreground">
              {item.title}
            </h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
