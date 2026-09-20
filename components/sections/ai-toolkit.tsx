import { Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const AI_SKILLS = [
  "AI Coding for GTM Tooling",
  "LLM-Assisted Campaign Ops",
  "Agentic Workflow Automation",
  "AI-Powered Analytics",
  "Prompt Engineering",
];

export function AiToolkit() {
  return (
    <section id="ai-toolkit" className="w-full scroll-mt-24">
      <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-12 lg:p-16">
        <p className="flex max-w-2xl items-center gap-2 text-2xl font-bold tracking-tight md:text-3xl">
          <Sparkles className="size-6 shrink-0" />I use AI to ship, not
          just to summarize.
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/55">
          The bar for GTM in 2026 isn&apos;t knowing AI tools exist — it&apos;s
          using them to move at builder speed.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {AI_SKILLS.map((skill) => (
            <Badge
              key={skill}
              variant="outline"
              className="h-auto px-3 py-1 text-[11px] font-medium text-black/60"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
