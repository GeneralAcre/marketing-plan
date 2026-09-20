import { cn } from "cn";
import { buttonVariants } from "@/components/ui/button";
import { SectionTag } from "@/components/section-tag";

const HIRE_ME_STEPS = [
  {
    order: "01",
    title: "Diagnose",
    detail:
      "Map the North Star metric and full funnel in week one — find the highest-leverage bottleneck before touching a campaign.",
  },
  {
    order: "02",
    title: "Prioritize",
    detail:
      "Score every option on RICE, not opinion. Kill low-score initiatives before they eat budget.",
  },
  {
    order: "03",
    title: "Ship",
    detail:
      "Run the first campaign or event cycle with instrumentation built in from day one, not bolted on after.",
  },
  {
    order: "04",
    title: "Prove",
    detail:
      "Report in cost-per-outcome terms leadership can defend at the next budget review, not vanity reach.",
  },
  {
    order: "05",
    title: "Compound",
    detail:
      "Hand off a repeatable playbook and community loop the team can run without me in the room.",
  },
];

export function HireMe() {
  return (
    <section id="hire-me" className="w-full scroll-mt-24">
      <div className="rounded-3xl bg-black p-6 text-white md:p-12 lg:p-16">
        <SectionTag label="08 — Hire Me" tone="dark" />
        <p className="mt-4 max-w-2xl text-2xl font-bold tracking-tight md:text-3xl">
          Not a deck. A 90-day plan.
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/55">
          What I&apos;ll actually do in the role, in order.
        </p>

        <div className="mt-8 flex flex-col divide-y divide-white/10 rounded-3xl bg-white/5">
          {HIRE_ME_STEPS.map((step) => (
            <div
              key={step.order}
              className="flex flex-col gap-3 p-5 md:flex-row md:items-center md:gap-6 md:p-6"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-bold">
                {step.order}
              </span>
              <div>
                <div className="text-xs font-bold uppercase tracking-wide text-white/70">
                  {step.title}
                </div>
                <p className="mt-1 text-sm leading-relaxed text-white/70">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#contact"
            className={cn(
              buttonVariants({ variant: "default" }),
              "h-auto rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/85"
            )}
          >
            Let&apos;s Talk →
          </a>
        </div>
      </div>
    </section>
  );
}
