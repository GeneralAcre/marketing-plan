import { SectionTag } from "@/components/section-tag";
import { Sparkles } from "lucide-react";

const AI_SKILLS = [
  {
    label: "AI Coding for GTM Tooling",
    detail:
      "Ship internal dashboards, registration forms, and landing pages myself with AI coding agents (Claude Code) — no dev-team bottleneck between an idea and a live tool.",
  },
  {
    label: "LLM-Assisted Campaign Ops",
    detail:
      "Draft, localize (EN/TH), and A/B-test campaign copy, invite sequences, and event scripts in minutes instead of days.",
  },
  {
    label: "Agentic Workflow Automation",
    detail:
      "Automate repetitive ops — RSVP follow-ups, Telegram community replies, event-day checklists — with AI agents instead of manual busywork.",
  },
  {
    label: "AI-Powered Analytics",
    detail:
      "Turn raw GA4 / Dune data into funnel insights and stakeholder-ready reports with AI-assisted analysis, not manual pivot tables.",
  },
  {
    label: "Prompt Engineering for Growth Experiments",
    detail:
      "Design and test AI-generated messaging variants for real experiments (e.g. workshop invite copy) instead of guessing at one version.",
  },
];

export function AiToolkit() {
  return (
    <section id="ai-toolkit" className="w-full scroll-mt-24">
      <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-12 lg:p-16">
        <SectionTag label="08 — AI-Augmented GTM" />
        <p className="mt-4 flex max-w-2xl items-center gap-2 text-2xl font-bold tracking-tight md:text-3xl">
          <Sparkles className="size-6 shrink-0" />I use AI to ship, not
          just to summarize.
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/55">
          The bar for GTM in 2026 isn&apos;t knowing AI tools exist — it&apos;s
          using them to move at builder speed.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2">
          {AI_SKILLS.map((skill) => (
            <div
              key={skill.label}
              className="rounded-2xl bg-black/[0.03] p-6"
            >
              <div className="text-xs font-bold uppercase tracking-wide">
                {skill.label}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-black/60">
                {skill.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
