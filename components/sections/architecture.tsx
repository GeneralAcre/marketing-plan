import { SectionTag } from "@/components/section-tag";

const UNIVERSITY_CONTROL = [
  {
    order: "01",
    title: "Cluster Selection",
    shortTitle: "Cluster",
    stat: "5",
    statLabel: "Universities Chosen (RICE)",
    detail: "Chula · Thammasat · Kasetsart · KMUTT/KMITL · CMU",
  },
  {
    order: "02",
    title: "Budget & Delivery",
    shortTitle: "Budget",
    stat: "667 THB",
    statLabel: "Cost / Attendee",
    detail: "200K THB envelope · workshop curriculum · live deploys",
  },
  {
    order: "03",
    title: "Community Retention",
    shortTitle: "Retention",
    stat: "AcreLabs",
    statLabel: "Handoff Loop",
    detail: "POAP retention · Telegram · ambassador seeding",
  },
];

export function Architecture() {
  return (
    <section id="architecture" className="w-full scroll-mt-24">
      <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-12 lg:p-16">
        <SectionTag label="03 — University & Community Ops" />
        <p className="mt-4 max-w-2xl text-2xl font-bold tracking-tight md:text-3xl">
          What I control, in priority order.
        </p>

        {/* Org-chart / control map — whole thing fits one screen on mobile */}
        <div className="mt-8 md:mt-10">
          {/* Root node */}
          <div className="flex justify-center">
            <div className="rounded-full bg-black px-4 py-2 text-center text-[10px] font-bold uppercase tracking-widest text-white md:px-6 md:py-3 md:text-xs">
              Acre — Team1 Ops Lead
            </div>
          </div>

          {/* trunk + horizontal split */}
          <div className="mx-auto h-4 w-px bg-black/15 md:h-8" />
          <div className="mx-auto h-px w-3/4 bg-black/15 sm:w-2/3" />

          <div className="grid grid-cols-3 gap-2 md:gap-10">
            {UNIVERSITY_CONTROL.map((item) => (
              <div key={item.order} className="flex flex-col items-center">
                <div className="h-4 w-px bg-black/15 md:h-8" />
                <div className="flex flex-col items-center gap-0.5 rounded-full bg-black/[0.04] px-2 py-1 text-center text-[8px] font-bold uppercase leading-tight tracking-widest sm:text-[9px] md:flex-row md:gap-2 md:px-4 md:py-2 md:text-[11px]">
                  <span className="text-black/35">{item.order}</span>
                  <span className="md:hidden">{item.shortTitle}</span>
                  <span className="hidden md:inline">{item.title}</span>
                </div>
                <div className="h-3 w-px bg-black/15 md:h-6" />
                <div className="w-full rounded-2xl bg-black/[0.03] md:max-w-xs">
                  <div className="p-2 text-center md:p-4">
                    <div className="text-sm font-bold leading-tight sm:text-base md:text-2xl">
                      {item.stat}
                    </div>
                    <div className="mt-1 text-[7px] uppercase leading-tight tracking-wide text-black/45 sm:text-[8px] md:text-[11px]">
                      {item.statLabel}
                    </div>
                  </div>
                  <div className="hidden px-4 pb-4 text-center text-xs uppercase tracking-wide text-black/50 md:block">
                    {item.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Full detail — collapses under the compact diagram on mobile */}
          <div className="mt-6 flex flex-col gap-2 md:hidden">
            {UNIVERSITY_CONTROL.map((item) => (
              <div key={item.order} className="rounded-2xl bg-black/[0.03] p-4">
                <div className="text-[10px] font-bold uppercase tracking-widest">
                  {item.order} — {item.title}
                </div>
                <div className="mt-1 text-xs text-black/55">
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
