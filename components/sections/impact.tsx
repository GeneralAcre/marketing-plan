import { Badge } from "@/components/ui/badge";
import { SectionTag } from "@/components/section-tag";
import { StatTile } from "@/components/stat-tile";

const TEAM1_HIGHLIGHTS = [
  { value: "667 THB", label: "Cost / Attendee — Budget Ownership" },
  {
    value: "16.2",
    label: "Top RICE Score — Strategic Prioritization",
    valueClassName: "text-[#FFCE4E]",
  },
  { value: "5", label: "Universities — Cross-Functional Ops" },
];

const CORE_SKILLS = [
  "Growth Strategy",
  "Budget & Ops",
  "Team & Vendor Leadership",
  "Event Production",
  "Community Building",
  "Stakeholder Management",
  "Data Analysis",
  "Web3 / Crypto GTM",
];

export function Impact() {
  return (
    <section id="impact" className="w-full scroll-mt-24">
      <div className="rounded-3xl bg-black p-6 text-white md:p-12 lg:p-16">
        <div className="rounded-2xl bg-white/5 p-5 md:p-6">
          <SectionTag label="Avalanche Team1 — Ops Lead" tone="dark" className="mb-4" />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {TEAM1_HIGHLIGHTS.map((item) => (
              <StatTile
                key={item.label}
                value={item.value}
                label={item.label}
                valueClassName={item.valueClassName}
                tone="dark"
              />
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {CORE_SKILLS.map((skill) => (
            <Badge
              key={skill}
              variant="outline"
              className="h-auto border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/70"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
