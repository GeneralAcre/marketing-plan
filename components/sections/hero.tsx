import { cn } from "cn";
import { buttonVariants } from "@/components/ui/button";
import { SectionTag } from "@/components/section-tag";
import { StatTile } from "@/components/stat-tile";

const TEAM1_STATS = [
  { value: "8", label: "Events Hosted" },
  { value: "5", label: "University Chapters" },
];

export function Hero() {
  return (
    <section className="w-full">
      <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-12 lg:p-16">
        <h1 className="mt-8 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
          Sanpaphat Porntongprasert
        </h1>

        <p className="mt-3 text-sm font-medium uppercase tracking-wide text-black/45 md:text-base">
          Interlock GTM, Operations &amp; Builder Lead
        </p>

        <p className="mt-6 max-w-2xl text-xl font-bold leading-snug tracking-tight md:text-2xl">
          Turning a Fixed Budget Into a Five-University Builder
          Pipeline.
        </p>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-black/55 md:text-lg">
          200K THB → 5 university chapters, RICE-scored and run like a
          product, not a marketing campaign.
        </p>

        <div className="mt-10 max-w-sm rounded-2xl bg-black/[0.03] p-5 md:p-6">
          <SectionTag label="Avalanche Team1 — Ops Lead" className="mb-4" />
          <div className="grid grid-cols-2 gap-3">
            {TEAM1_STATS.map((stat) => (
              <StatTile key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
