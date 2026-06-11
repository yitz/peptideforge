const MILESTONES = [
  {
    when: "Right now",
    title: "An unsettled category",
    body: "Research and compounding activity continue across peptides while the regulatory picture takes shape. We summarize what's verifiable and skip the rest.",
    highlight: false,
  },
  {
    when: "July 23–24, 2026",
    title: "FDA Pharmacy Compounding Advisory Committee",
    body: "The committee is set to review nominated substances — including peptides such as BPC-157 and TB-500 — relevant to the compounding lists. This is the date everyone in the space is watching.",
    highlight: true,
  },
  {
    when: "After the meeting",
    title: "Reading the outcome",
    body: "Committee discussion and any recommendations help shape what compliant, compounded options could look like going forward. We'll break down what it actually means — in plain language.",
    highlight: false,
  },
];

export function RegulatoryTimeline() {
  return (
    <section className="bg-secondary/30">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
        <div className="max-w-2xl">
          <span className="font-label text-[11px] font-bold uppercase tracking-[0.3em] text-primary">
            What we&rsquo;re watching
          </span>
          <h2 className="mt-5 font-headline text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
            The timeline that matters.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            A lot hinges on a small number of regulatory moments. Here&rsquo;s the
            one shaping the near-term outlook — and what subscribers will get as it
            plays out.
          </p>
        </div>

        <ol className="mt-14 space-y-5">
          {MILESTONES.map((m) => (
            <li
              key={m.when}
              className={
                m.highlight
                  ? "rounded-[2rem] bg-card p-8 premium-shadow ring-1 ring-primary/15 sm:p-10"
                  : "rounded-[2rem] bg-card/60 p-8 sm:p-10"
              }
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-6">
                <span
                  className={
                    m.highlight
                      ? "font-mono text-sm font-medium tracking-tight text-primary"
                      : "font-mono text-sm tracking-tight text-muted-foreground"
                  }
                >
                  {m.when}
                </span>
                <div className="flex-1">
                  <h3 className="font-headline text-xl font-bold tracking-tight text-foreground">
                    {m.title}
                  </h3>
                  <p className="mt-2.5 leading-relaxed text-muted-foreground">
                    {m.body}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
