import { Fragment } from "react";
import { SectionTag } from "@/components/section-tag";
import { ArrowRight } from "lucide-react";

const GROWTH_LOOP = [
  {
    order: "01",
    title: "University",
    detail: "Go on campus, teach Avalanche & Web3 fundamentals.",
  },
  {
    order: "02",
    title: "Hackathon",
    detail: "Host a hackathon — students build a real project.",
  },
  {
    order: "03",
    title: "Funding",
    detail: "Best projects get funded by Avalanche to keep building.",
  },
  {
    order: "04",
    title: "Community",
    detail: "Builders stay in the loop as the next chapter's mentors.",
  },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="w-full scroll-mt-24">
      <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-12 lg:p-16">
        <SectionTag label="06 — Roadmap" />
        <p className="mt-4 max-w-2xl text-2xl font-bold tracking-tight md:text-3xl">
          The builder-to-funding loop.
        </p>

        <div className="mt-8 grid grid-cols-1 items-stretch gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
          {GROWTH_LOOP.map((step, i) => (
            <Fragment key={step.order}>
              <div className="rounded-2xl bg-black/[0.03] p-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide">
                  <span className="text-black/35">{step.order}</span>
                  {step.title}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-black/60">
                  {step.detail}
                </p>
              </div>
              {i < GROWTH_LOOP.length - 1 && (
                <div className="hidden items-center justify-center text-black/30 md:flex">
                  <ArrowRight className="size-4" />
                </div>
              )}
            </Fragment>
          ))}
        </div>

        <div className="mt-4 rounded-3xl bg-black p-6 text-white md:p-8">
          <div className="text-[11px] font-semibold uppercase tracking-wide text-white/50">
            The Point
          </div>
          <p className="mt-2 max-w-2xl text-lg font-bold leading-snug md:text-xl">
            Build a community that backs Avalanche on both sides —
            builders shipping code, and culture keeping people around.
          </p>
        </div>
      </div>
    </section>
  );
}
