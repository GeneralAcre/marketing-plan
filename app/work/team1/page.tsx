import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { cn } from "cn";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import SiteHeader from "@/components/site-header";
import { SectionTag } from "@/components/section-tag";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import {
  Target,
  ClipboardList,
  ListOrdered,
  Map,
  ArrowRight,
  ArrowLeft,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Avalanche Team1 — Full Case Study",
  description:
    "PRD-style breakdown of the Avalanche Team1 university GTM program: North Star, prioritization, decision log, instrumentation, and roadmap.",
};

const FUNNEL = [
  {
    stage: "Awareness",
    metric: "Campus reach & RSVPs",
    detail: "QR posters, club partnerships.",
  },
  {
    stage: "Engagement",
    metric: "Workshop attendance",
    detail: "Registered → showed up.",
  },
  {
    stage: "Conversion",
    metric: "Verified builder",
    detail: "Wallet + contract, on-chain.",
  },
  {
    stage: "Retention",
    metric: "Active 30 days",
    detail: "Telegram + on-chain activity.",
  },
];

const IMPACT_SNAPSHOT = [
  {
    value: "58.06%",
    label: "Registration → Attendance",
    detail: "31 registered, 18 showed up.",
  },
  {
    value: "7",
    label: "Verified Wallets Deployed",
    detail: "Live deploys, not sign-ups.",
  },
  {
    value: "9",
    label: "Smart Contracts Shipped",
    detail: "On-chain and verified.",
  },
  {
    value: "7",
    label: "Telegram Joins",
    detail: "AcreLabs retention seed.",
  },
  {
    value: "~1,334 THB",
    label: "Cost / Verified Builder",
    detail: "vs. 5,000–10,000 THB industry benchmark.",
  },
  {
    value: "16.2",
    label: "Top RICE Score",
    detail: "Data-picked, not gut feel.",
  },
  {
    value: "5",
    label: "University Chapters Owned",
    detail: "Curriculum, vendors, merch.",
  },
  {
    value: "200K THB",
    label: "Total Budget Owned",
    detail: "Sole ops lead, no hire.",
  },
];

type Team1Event = {
  name: string;
  type: string;
  date: string;
  status: "done" | "scheduled";
  registered?: number;
  attendees?: number;
  conversion?: string;
  wallets?: number;
  contracts?: number;
  telegram?: number;
};

const TEAM1_EVENTS: Team1Event[] = [
  {
    name: "Chula — Avalanche Builder Workshop & Networking",
    type: "Workshop",
    date: "Sep 5, 2026",
    status: "done" as const,
    registered: 31,
    attendees: 18,
    conversion: "58.06%",
    wallets: 7,
    contracts: 9,
    telegram: 7,
  },
  {
    name: "Thailand Chapter Launch",
    type: "Community",
    date: "Sep 24, 2026",
    status: "scheduled" as const,
  },
  {
    name: "Codebase Hackathon — Chula Edition",
    type: "Hackathon",
    date: "Sep 26, 2026",
    status: "scheduled" as const,
  },
  {
    name: "KU — Introduction to Blockchain",
    type: "Workshop",
    date: "Sep 27, 2026",
    status: "scheduled" as const,
  },
  {
    name: "First Community Call",
    type: "Online",
    date: "Oct 3, 2026",
    status: "scheduled" as const,
  },
  {
    name: "KMITL — Introduction to Blockchain",
    type: "Workshop",
    date: "Oct 6, 2026",
    status: "scheduled" as const,
  },
  {
    name: "TUBC — Vibe Code Your First Avalanche dApp",
    type: "Workshop",
    date: "Oct 7, 2026",
    status: "scheduled" as const,
  },
  {
    name: "TBD",
    type: "TBD",
    date: "TBD",
    status: "scheduled" as const,
  },
];

const OVERVIEW_STATS = [
  {
    label: "The Decision",
    value: "5 / 10",
    detail: "Clusters, not campuses.",
  },
  {
    label: "The Budget",
    value: "667 THB",
    detail: "Per attendee.",
    highlight: true,
  },
  {
    label: "The Output",
    value: "100%",
    detail: "Ship a verified wallet.",
  },
];

const EXECUTION_PHASES = [
  {
    label: "Pre-flight",
    detail: "RICE-score selection, MOUs, curriculum.",
  },
  {
    label: "Execution",
    detail: "Live deploy sessions, QR wallet onboarding.",
  },
  {
    label: "Compounding",
    detail: "POAP retention, AcreLabs handoff, next chapter.",
  },
];

const RICE_ROWS = [
  {
    program: "Chula — Avalanche Builder Workshop & Networking",
    reach: 7,
    impact: 8,
    confidence: "95%",
    effort: 5,
    score: "10.6",
    status: "done" as const,
  },
  {
    program: "Thailand Chapter Launch",
    reach: 8,
    impact: 6,
    confidence: "70%",
    effort: 3,
    score: "11.2",
    status: "scheduled" as const,
  },
  {
    program: "Codebase Hackathon — Chula Edition",
    reach: 6,
    impact: 9,
    confidence: "60%",
    effort: 7,
    score: "4.6",
    status: "scheduled" as const,
  },
  {
    program: "KU — Introduction to Blockchain",
    reach: 7,
    impact: 7,
    confidence: "80%",
    effort: 5,
    score: "7.8",
    status: "scheduled" as const,
  },
  {
    program: "First Community Call",
    reach: 9,
    impact: 4,
    confidence: "75%",
    effort: 2,
    score: "13.5",
    status: "scheduled" as const,
  },
  {
    program: "KMITL — Introduction to Blockchain",
    reach: 7,
    impact: 7,
    confidence: "80%",
    effort: 5,
    score: "7.8",
    status: "scheduled" as const,
  },
  {
    program: "TUBC — Vibe Code Your First Avalanche dApp",
    reach: 6,
    impact: 8,
    confidence: "65%",
    effort: 6,
    score: "5.2",
    status: "scheduled" as const,
  },
];

const TELEMETRY_STACK = [
  {
    tool: "GA4 / Excel",
    use: "Budget pacing & CAC (~667 THB/head).",
  },
  {
    tool: "Dune Analytics",
    use: "On-chain wallet verification.",
  },
  {
    tool: "Event QR Telemetry",
    use: "Live attendance & funnel conversion.",
  },
];

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

// RICE table heat-map bands — tuned to this dataset's actual spread, not a generic 0–100 scale.
function reachTone(n: number) {
  if (n >= 8) return "bg-[#F84E00] text-white";
  if (n >= 6) return "bg-[#FFCE4E] text-black";
  return "bg-[#FFCE4E]/15 text-black/70";
}
function impactTone(n: number) {
  if (n >= 7) return "bg-[#F84E00] text-white";
  if (n >= 5) return "bg-[#FFCE4E] text-black";
  return "bg-[#FFCE4E]/15 text-black/70";
}
function confidenceTone(pct: string) {
  const n = Number.parseInt(pct, 10);
  if (n >= 80) return "bg-[#F84E00] text-white";
  if (n >= 60) return "bg-[#FFCE4E] text-black";
  return "bg-[#FFCE4E]/15 text-black/70";
}
function effortTone(n: number) {
  if (n >= 7) return "bg-neutral-400 text-white";
  if (n >= 5) return "bg-neutral-200 text-black";
  return "bg-neutral-100 text-black/70";
}
function scoreTone(score: string) {
  const n = Number.parseFloat(score);
  if (n >= 10) return "bg-[#F84E00] text-white";
  if (n >= 5) return "bg-[#FFCE4E] text-black";
  return "bg-[#FFCE4E]/15 text-black/70";
}

const BRIEF = {
  problem:
    "Past pushes were one-off hackathons — no retained pipeline, weak visibility among Thai students.",
  hypothesis:
    "Density beats spread: fewer, high-RICE clusters compound word-of-mouth and lower cost per attendee.",
  metrics: [
    { type: "Leading", value: "Wallet deploy rate ≥ 50% per workshop" },
    {
      type: "Lagging",
      value: "≥ 25% of verified builders still active (Telegram/on-chain) at day 30",
    },
  ],
  scope: [
    "5 university clusters",
    "Workshop → hackathon → funded-builder format",
    "Telegram community handoff (AcreLabs)",
  ],
  outOfScope: [
    "Paid influencer campaigns",
    "General consumer marketing (non-student)",
    "Token / cash incentive programs",
  ],
  constraints: [
    "200,000 THB total budget",
    "Single ops lead, no dedicated marketing hire",
    "8-week execution window before semester break",
  ],
};

const DECISION_LOG = [
  {
    id: "ADR-001",
    title: "Density over spread — 5 clusters, not 10 campuses",
    context: "200K THB spreads thin over 10 campuses, or funds 5 fully.",
    alternatives: [
      "10-university spread (RICE 1.1)",
      "Bangkok mega-event (RICE 4.8)",
      "5-cluster dense (RICE 16.2)",
    ],
    decision: "5-cluster dense — highest RICE score.",
    risk:
      "Regional students outside clusters underserved — accepted, Phase 2 satellite expansion planned.",
  },
  {
    id: "ADR-002",
    title: "Workshop-first, not hackathon-first",
    context: "Hackathon buzz vs. workshop completion certainty.",
    alternatives: [
      "Hackathon-first for attention",
      "Workshop-first for a shipped wallet",
    ],
    decision: "Workshop-first — every attendee ships before a bigger ask.",
    risk: "Less launch press — accepted; optimizing for builders, not impressions.",
  },
];

const ROLE_SCOPE = {
  lanes: [
    {
      label: "People & Vendors",
      detail: "Crew + vendors, every event.",
    },
    {
      label: "Event Merch",
      detail: "Sourcing, budget, delivery.",
    },
    {
      label: "University Partnerships",
      detail: "Primary contact, all 5 campuses.",
    },
    {
      label: "Meetups & Content",
      detail: "Owns community + online content.",
    },
  ],
};

const ROADMAP = [
  {
    period: "Q3 2026",
    label: "Phase 1 — Prove the model",
    detail: "Chula + KU + KMITL live. Target: 50+ verified builders.",
  },
  {
    period: "Q4 2026",
    label: "Phase 2 — Compound the community",
    detail: "KMUTT + CMU complete. Target: 150+ cumulative builders.",
    dependency: "Needs ≥10 mentors from Phase 1.",
  },
  {
    period: "Q1 2027",
    label: "Phase 3 — Self-sustaining chapters",
    detail: "Ambassador-led. Target: 300+ builders retained at day 30.",
    dependency: "Needs a live, trained Phase 2 ambassador cohort.",
  },
];

const REGIONAL_WAVES = [
  {
    wave: "Wave 1",
    period: "Month 1–3 — already running",
    where: "Bangkok universities",
    why: "Prove the funnel first.",
    owner: "Direct — no delegation yet.",
  },
  {
    wave: "Wave 2",
    period: "Month 4–6",
    where: "Chiang Mai + Khon Kaen",
    why: "Same partners, lowest-cost way to prove the playbook travels.",
    owner: "1 local chapter lead per city.",
  },
  {
    wave: "Wave 3",
    period: "Month 7–9",
    where: "1 SEA market — Vietnam or the Philippines",
    why: "Tests the model outside Thailand's ecosystem.",
    owner: "Local partner org, not a hire.",
  },
];

const AUDIENCE_SEGMENTS = [
  {
    label: "Working Developers / Career Switchers",
    detail: "Higher retention, higher chance of shipping something real.",
  },
  {
    label: "Local Web3 Startups / Founders as Anchor Partners",
    detail: "Credibility loans — worth more than 500 Telegram members.",
  },
  {
    label: "Corporate / Institutional Bridge",
    detail: "1 panel/quarter shows real-economy bridging, not just hackathons.",
  },
];

const MONTHLY_CADENCE = [
  {
    week: "Week 1",
    type: "Community Call — all regions, one call",
    purpose: "Cross-market visibility.",
    owner: "Direct",
  },
  {
    week: "Week 2",
    type: "Local Workshop — per city",
    purpose: "Skill-building, top-of-funnel.",
    owner: "Chapter Lead",
  },
  {
    week: "Week 3",
    type: "Local Meetup / Demo Night",
    purpose: "Mid-funnel momentum.",
    owner: "Chapter Lead",
  },
  {
    week: "Week 4",
    type: "Partner Spotlight — AMA, panel, co-branded session",
    purpose: "Diversifies audience, partner goodwill.",
    owner: "Negotiated centrally",
  },
];

function CaseSection({
  id,
  title,
  icon,
  children,
}: {
  id: string;
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="w-full scroll-mt-36">
      <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-12 lg:p-16">
        <SectionTag label={title} icon={icon} />
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-10 text-xs font-bold uppercase tracking-wide text-black/70 first:mt-0">
      {children}
    </div>
  );
}

export default function Team1CaseStudy() {
  return (
    <div className="flex min-h-full w-full flex-col">
      <SiteHeader />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 md:gap-6 md:px-8 md:py-6">
        {/* ───────────────────────── HEADER ───────────────────────── */}
        <section className="w-full">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-12 lg:p-16">
            <div className="text-xs font-medium text-black/45">
              <Link href="/" className="hover:text-black">
                Portfolio
              </Link>
              <span className="mx-2 text-black/25">/</span>
              <span className="text-black/70">Avalanche Team1</span>
            </div>

            <div className="mt-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-black/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-black/55">
              <span className="h-1.5 w-1.5 rounded-full bg-black" />
              Draft — Placeholder Data, Pending Verification
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Avalanche Team1
            </h1>
            <p className="mt-3 text-sm font-medium uppercase tracking-wide text-black/45 md:text-base">
              Full Case Study — GTM &amp; Operations Lead
            </p>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-black/70 md:text-lg">
              Team1 is Avalanche&apos;s global builder community — 600+
              members across 60+ countries and 130+ universities, running
              workshops, hackathons, and grants to grow the ecosystem. This
              case study covers the Thailand chapter: a 5-university
              builder pipeline scoped and run solo.
            </p>

            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 md:max-w-xl">
              <div>
                <div className="text-3xl font-bold text-[#F84E00] md:text-4xl">200K</div>
                <div className="mt-0.5 text-[11px] uppercase tracking-wide text-black/45">
                  THB Budget
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold md:text-4xl">5</div>
                <div className="mt-0.5 text-[11px] uppercase tracking-wide text-black/45">
                  Universities
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold md:text-4xl">1</div>
                <div className="mt-0.5 text-[11px] uppercase tracking-wide text-black/45">
                  Ops Lead
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-3 rounded-2xl bg-black/[0.03] p-3 sm:grid-cols-2 md:grid-cols-4">
              {ROLE_SCOPE.lanes.map((lane) => (
                <div key={lane.label} className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-black/5">
                  <div className="text-xs font-bold uppercase tracking-wide">
                    {lane.label}
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-black/60">
                    {lane.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────────── 01 — NORTH STAR, FUNNEL & IMPACT ───────────────── */}
        <CaseSection id="impact" title="North Star, Funnel & Impact" icon={Target}>
          <div className="rounded-3xl bg-black p-6 text-white md:p-8">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-white/50">
              North Star
            </div>
            <p className="mt-2 max-w-2xl text-lg font-bold leading-snug md:text-xl">
              Verified builders, active 30+ days after their event.
            </p>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-4">
            {FUNNEL.map((step, i) => (
              <div key={step.stage} className="rounded-2xl bg-black/[0.03] p-5">
                <div className="text-[10px] text-black/35">
                  0{i + 1}
                </div>
                <div className="mt-1 text-xs font-bold uppercase tracking-wide">
                  {step.stage}
                </div>
                <div className="mt-2 text-sm font-medium">{step.metric}</div>
                <p className="mt-1 text-xs leading-relaxed text-black/60">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-4 rounded-2xl border border-black/10 p-5">
            <div className="text-3xl font-bold text-[#F84E00] shrink-0">42%</div>
            <p className="text-sm leading-relaxed text-black/70">
              no-show rate (31 registered, 18 attended) — the bottleneck to
              fix before scaling awareness spend.
            </p>
          </div>

          <p className="mt-10 max-w-2xl text-2xl font-bold tracking-tight md:text-3xl">
            One chapter live. Eight numbers that prove it.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
            {IMPACT_SNAPSHOT.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-black/[0.03] p-5">
                <div className="text-xl font-bold md:text-2xl">{stat.value}</div>
                <div className="mt-1 text-[11px] font-semibold uppercase leading-snug tracking-wide text-black/45">
                  {stat.label}
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-black/60">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-6 rounded-2xl bg-black p-6 text-white">
            <div>
              <div className="text-3xl font-bold text-[#FFCE4E]">~1,334 THB</div>
              <div className="mt-1 text-[11px] uppercase tracking-wide text-white/50">
                Cost / Verified Builder
              </div>
            </div>
            <div className="text-white/40">vs.</div>
            <div>
              <div className="text-3xl font-bold">5–10K THB</div>
              <div className="mt-1 text-[11px] uppercase tracking-wide text-white/50">
                Industry Grant Benchmark
              </div>
            </div>
          </div>
        </CaseSection>

        {/* ───────────────── 02 — CHAPTER TRACKER & EXECUTION DETAIL ───────────────── */}
        <CaseSection id="chapter-tracker" title="Chapter Tracker & Execution Detail" icon={ClipboardList}>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {OVERVIEW_STATS.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-black/[0.03] p-6">
                <div className="text-[11px] font-semibold uppercase tracking-wide text-black/45">
                  {stat.label}
                </div>
                <div
                  className={`mt-2 text-2xl font-bold ${stat.highlight ? "text-[#F84E00]" : ""}`}
                >
                  {stat.value}
                </div>
                <p className="mt-1 text-sm leading-relaxed text-black/70">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-2xl bg-black/[0.03] p-6">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-black/45">
              Pre-flight → Execution → Compounding
            </div>
            <div className="mt-4 grid grid-cols-1 items-stretch gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
              {EXECUTION_PHASES.map((phase, i) => (
                <Fragment key={phase.label}>
                  <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5">
                    <div className="text-xs font-bold uppercase tracking-wide">
                      {phase.label}
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-black/60">
                      {phase.detail}
                    </p>
                  </div>
                  {i < EXECUTION_PHASES.length - 1 && (
                    <div className="hidden items-center justify-center text-black/30 md:flex">
                      <ArrowRight className="size-4" />
                    </div>
                  )}
                </Fragment>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="text-[11px] font-semibold uppercase tracking-wide text-black/45">
                Chapter Tracker
              </div>
              <Badge
                variant="outline"
                className="h-auto px-2.5 py-1 text-[11px] font-medium text-black/60"
              >
                1 / {TEAM1_EVENTS.length} Chapters Live
              </Badge>
            </div>

            <div className="mt-4 overflow-x-auto rounded-2xl ring-1 ring-black/8">
              <Table>
                <TableHeader>
                  <TableRow className="border-black/8 hover:bg-transparent">
                    <TableHead className="text-[10px] uppercase tracking-wide text-black/45">
                      Event
                    </TableHead>
                    <TableHead className="text-[10px] uppercase tracking-wide text-black/45">
                      Date
                    </TableHead>
                    <TableHead className="text-[10px] uppercase tracking-wide text-black/45">
                      Status
                    </TableHead>
                    <TableHead className="text-right text-[10px] uppercase tracking-wide text-black/45">
                      Reg.
                    </TableHead>
                    <TableHead className="text-right text-[10px] uppercase tracking-wide text-black/45">
                      Att.
                    </TableHead>
                    <TableHead className="text-right text-[10px] uppercase tracking-wide text-black/45">
                      Conv.
                    </TableHead>
                    <TableHead className="text-right text-[10px] uppercase tracking-wide text-black/45">
                      Wallets
                    </TableHead>
                    <TableHead className="text-right text-[10px] uppercase tracking-wide text-black/45">
                      Contracts
                    </TableHead>
                    <TableHead className="text-right text-[10px] uppercase tracking-wide text-black/45">
                      Telegram
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {TEAM1_EVENTS.map((ev) => (
                    <TableRow key={ev.name} className="border-black/8">
                      <TableCell className="max-w-56 truncate font-medium">
                        {ev.name}
                        <div className="text-[11px] font-normal text-black/45">
                          {ev.type}
                        </div>
                      </TableCell>
                      <TableCell className="text-black/55">
                        {ev.date}
                      </TableCell>
                      <TableCell>
                        {ev.status === "done" ? (
                          <Badge className="h-auto px-2.5 py-0.5 text-[10px] font-semibold">
                            Live
                          </Badge>
                        ) : (
                          <Badge
                            variant="outline"
                            className="h-auto px-2.5 py-0.5 text-[10px] font-medium text-black/45"
                          >
                            Scheduled
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-right tabular-nums">
                        {ev.registered ?? "—"}
                      </TableCell>
                      <TableCell className="text-right tabular-nums">
                        {ev.attendees ?? "—"}
                      </TableCell>
                      <TableCell className="text-right tabular-nums">
                        {ev.conversion ?? "—"}
                      </TableCell>
                      <TableCell className="text-right tabular-nums">
                        {ev.wallets ?? "—"}
                      </TableCell>
                      <TableCell className="text-right tabular-nums">
                        {ev.contracts ?? "—"}
                      </TableCell>
                      <TableCell className="text-right tabular-nums">
                        {ev.telegram ?? "—"}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </CaseSection>

        {/* ───────────────── 03 — STRATEGY, PRIORITIZATION & DECISIONS ───────────────── */}
        <CaseSection id="strategy" title="Strategy, Prioritization & Decisions" icon={ListOrdered}>
          <p className="max-w-2xl text-2xl font-bold tracking-tight md:text-3xl">
            RICE scoring, not gut feel.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
            <div className="rounded-2xl bg-black/[0.03] p-6 md:col-span-2">
              <div className="text-[11px] font-semibold uppercase tracking-wide text-black/45">
                Problem Statement
              </div>
              <p className="mt-2 text-sm leading-relaxed text-black/70">
                {BRIEF.problem}
              </p>
            </div>

            <div className="rounded-2xl bg-black/[0.03] p-6 md:col-span-2">
              <div className="text-[11px] font-semibold uppercase tracking-wide text-black/45">
                Hypothesis
              </div>
              <p className="mt-2 text-sm leading-relaxed text-black/70">
                {BRIEF.hypothesis}
              </p>
            </div>

            <div className="rounded-2xl bg-black/[0.03] p-6">
              <div className="text-[11px] font-semibold uppercase tracking-wide text-black/45">
                Success Metrics
              </div>
              <div className="mt-2 flex flex-col gap-2">
                {BRIEF.metrics.map((m) => (
                  <div key={m.type} className="text-sm">
                    <span className="text-xs font-bold uppercase tracking-wide">
                      {m.type}:
                    </span>{" "}
                    <span className="text-black/70">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-black/[0.03] p-6">
              <div className="text-[11px] font-semibold uppercase tracking-wide text-black/45">
                Constraints
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {BRIEF.constraints.map((c) => (
                  <Badge
                    key={c}
                    variant="outline"
                    className="h-auto px-2.5 py-1 text-[11px] font-medium text-black/60"
                  >
                    {c}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-black/[0.03] p-6">
              <div className="text-[11px] font-semibold uppercase tracking-wide text-black/45">
                In Scope
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {BRIEF.scope.map((s) => (
                  <Badge
                    key={s}
                    variant="outline"
                    className="h-auto px-2.5 py-1 text-[11px] font-medium text-black/60"
                  >
                    {s}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-black/[0.03] p-6">
              <div className="text-[11px] font-semibold uppercase tracking-wide text-black/45">
                Out of Scope
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {BRIEF.outOfScope.map((s) => (
                  <Badge
                    key={s}
                    variant="outline"
                    className="h-auto px-2.5 py-1 text-[11px] font-medium text-black/35"
                  >
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-black/[0.03] p-6">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-black/45">
              Top Cluster
            </div>
            <div className="mt-2 text-3xl font-bold text-[#F84E00]">16.2</div>
            <p className="mt-1 text-sm text-black/55">
              Chula / Thammasat / Kasetsart — first chapter to run.
            </p>
          </div>

          <div className="mt-4 rounded-2xl bg-black/[0.03] p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="text-xs font-bold uppercase tracking-wide">
                RICE Prioritization — Team1 Event Line-Up
              </h3>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[10px] text-black/50">
                <div className="flex items-center gap-2">
                  <span className="font-semibold uppercase tracking-wide text-black/40">
                    R · I · C
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="size-2.5 rounded-sm bg-[#FFCE4E]/15" />
                    Low
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="size-2.5 rounded-sm bg-[#FFCE4E]" />
                    Mid
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="size-2.5 rounded-sm bg-[#F84E00]" />
                    High
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold uppercase tracking-wide text-black/40">
                    Score
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="size-2.5 rounded-sm bg-[#FFCE4E]/15" />
                    &lt;5
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="size-2.5 rounded-sm bg-[#FFCE4E]" />
                    5–9.9
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="size-2.5 rounded-sm bg-[#F84E00]" />
                    10+
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile: stacked cards — every value visible at once, no horizontal scroll */}
            <div className="mt-4 flex flex-col gap-3 md:hidden">
              {RICE_ROWS.map((row) => (
                <div
                  key={row.program}
                  className="rounded-xl bg-white p-4 ring-1 ring-black/8"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="text-xs font-medium">{row.program}</div>
                    {row.status === "done" ? (
                      <Badge className="h-auto shrink-0 px-2 py-0.5 text-[10px] font-semibold">
                        Live
                      </Badge>
                    ) : (
                      <Badge
                        variant="outline"
                        className="h-auto shrink-0 px-2 py-0.5 text-[10px] font-medium text-black/45"
                      >
                        Scheduled
                      </Badge>
                    )}
                  </div>
                  <div className="mt-3 grid grid-cols-[1fr_1fr_1fr_1fr_1.3fr] gap-1.5">
                    {[
                      { label: "R", value: row.reach, tone: reachTone(row.reach) },
                      { label: "I", value: row.impact, tone: impactTone(row.impact) },
                      { label: "C", value: row.confidence, tone: confidenceTone(row.confidence) },
                      { label: "E", value: row.effort, tone: effortTone(row.effort) },
                      { label: "Score", value: row.score, tone: scoreTone(row.score) },
                    ].map((cell) => (
                      <div
                        key={cell.label}
                        className={`min-w-0 rounded-lg px-0.5 py-1.5 text-center ${cell.tone}`}
                      >
                        <div className="truncate text-[7px] font-semibold uppercase tracking-normal opacity-70">
                          {cell.label}
                        </div>
                        <div className="text-xs font-bold tabular-nums">
                          {cell.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop / tablet: full table */}
            <div className="mt-4 hidden overflow-x-auto rounded-xl ring-1 ring-black/8 md:block">
              <table className="w-full min-w-[560px] border-collapse text-left text-xs">
                <thead>
                  <tr className="bg-white">
                    {["Event", "R", "I", "C", "E", "Score", "Status"].map((h) => (
                      <th
                        key={h}
                        className="px-3 py-2 text-[10px] font-semibold uppercase tracking-wide text-black/45"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {RICE_ROWS.map((row) => (
                    <tr key={row.program} className="border-t border-black/8 bg-white">
                      <td className="px-3 py-2 font-medium">
                        {row.program}
                      </td>
                      <td className={`px-3 py-2 text-center tabular-nums ${reachTone(row.reach)}`}>
                        {row.reach}
                      </td>
                      <td className={`px-3 py-2 text-center tabular-nums ${impactTone(row.impact)}`}>
                        {row.impact}
                      </td>
                      <td className={`px-3 py-2 text-center tabular-nums ${confidenceTone(row.confidence)}`}>
                        {row.confidence}
                      </td>
                      <td className={`px-3 py-2 text-center tabular-nums ${effortTone(row.effort)}`}>
                        {row.effort}
                      </td>
                      <td className={`px-3 py-2 text-center font-bold tabular-nums ${scoreTone(row.score)}`}>
                        {row.score}
                      </td>
                      <td className="px-3 py-2">
                        {row.status === "done" ? (
                          <Badge className="h-auto px-2 py-0.5 text-[10px] font-semibold">
                            Live
                          </Badge>
                        ) : (
                          <Badge
                            variant="outline"
                            className="h-auto px-2 py-0.5 text-[10px] font-medium text-black/45"
                          >
                            Scheduled
                          </Badge>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-[11px] text-black/55">
              Score = (Reach × Impact × Confidence) / Effort.
            </p>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* AARRR */}
            <div className="rounded-2xl bg-black/[0.03] p-6">
              <h3 className="text-xs font-bold uppercase tracking-wide">
                AARRR Funnel Mapping
              </h3>
              <div className="mt-4 flex flex-col gap-3">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wide">
                    Acquisition
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-black/60">
                    QR at watch parties &amp; roadshows.
                  </p>
                </div>
                <div className="text-xs text-black/25">↓</div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wide">
                    Activation
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-black/60">
                    &lt;2s signless claim, first deploy.
                  </p>
                </div>
                <div className="text-xs text-black/25">↓</div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wide">
                    Retention
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-black/60">
                    POAP + AcreLabs community loop.
                  </p>
                </div>
              </div>
            </div>

            {/* Telemetry */}
            <div className="rounded-2xl bg-black/[0.03] p-6">
              <h3 className="text-xs font-bold uppercase tracking-wide">
                Unit Econ &amp; Telemetry Stack
              </h3>
              <div className="mt-4 flex flex-col gap-4">
                {TELEMETRY_STACK.map((item) => (
                  <div
                    key={item.tool}
                    className="rounded-xl border-l-2 border-black/20 bg-white p-3"
                  >
                    <div className="text-xs font-bold">
                      {item.tool}
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-black/60">
                      {item.use}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <SubHeading>Decision Log (ADR-style)</SubHeading>
          <div className="mt-3 flex flex-col gap-4">
            {DECISION_LOG.map((d) => (
              <div key={d.id} className="overflow-hidden rounded-2xl bg-black/[0.03]">
                <div className="flex flex-wrap items-center gap-3 p-5">
                  <Badge className="h-auto px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide">
                    {d.id}
                  </Badge>
                  <h3 className="text-base font-bold md:text-lg">
                    {d.title}
                  </h3>
                </div>
                <div className="grid grid-cols-1 gap-3 p-3 pt-0 md:grid-cols-2">
                  <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-black/5">
                    <div className="text-[11px] font-semibold uppercase tracking-wide text-black/45">
                      Context
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-black/70">
                      {d.context}
                    </p>
                    <div className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-black/45">
                      Alternatives Considered
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {d.alternatives.map((a) => (
                        <Badge
                          key={a}
                          variant="outline"
                          className="h-auto px-2.5 py-1 text-[11px] font-medium text-black/60"
                        >
                          {a}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-black/5">
                    <div className="text-[11px] font-semibold uppercase tracking-wide text-black/45">
                      Decision
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-black/70">
                      {d.decision}
                    </p>
                    <div className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-black/45">
                      Risk Accepted
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-black/70">
                      {d.risk}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CaseSection>

        {/* ───────────────── 04 — WHAT'S NEXT: ROADMAP & EXPANSION ───────────────── */}
        <CaseSection id="roadmap" title="What's Next — Roadmap & Expansion" icon={Map}>
          <p className="max-w-2xl text-2xl font-bold tracking-tight md:text-3xl">
            The builder-to-funding loop.
          </p>

          <div className="mt-6 grid grid-cols-1 items-stretch gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
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

          <div className="mt-4 flex flex-col gap-3">
            {ROADMAP.map((r) => (
              <div key={r.period} className="rounded-2xl bg-black/[0.03] p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="text-xs font-bold uppercase tracking-wide">
                    {r.period} — {r.label}
                  </div>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-black/70">
                  {r.detail}
                </p>
                {r.dependency && (
                  <p className="mt-2 text-xs text-black/45">
                    Dependency: {r.dependency}
                  </p>
                )}
              </div>
            ))}
          </div>

          <SubHeading>Regional Expansion Map</SubHeading>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/55">
            Sequenced in three waves, not a jump to &quot;SEA-wide.&quot;
          </p>
          <div className="mt-3 flex flex-col gap-3">
            {REGIONAL_WAVES.map((w) => (
              <div key={w.wave} className="rounded-2xl bg-black/[0.03] p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="text-sm font-bold uppercase tracking-wide">
                    {w.wave}
                  </div>
                  <div className="text-[11px] uppercase tracking-wide text-black/40">
                    {w.period}
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wide text-black/45">
                      Where
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-black/70">
                      {w.where}
                    </p>
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wide text-black/45">
                      Why This Order
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-black/70">
                      {w.why}
                    </p>
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wide text-black/45">
                      Owner Model
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-black/70">
                      {w.owner}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <SubHeading>Beyond Students — Audience Diversification</SubHeading>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/55">
            Students bring volume, weak retention. A regional plan needs
            three more audiences.
          </p>
          <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-3">
            {AUDIENCE_SEGMENTS.map((a) => (
              <div key={a.label} className="rounded-2xl bg-black/[0.03] p-6">
                <div className="text-xs font-bold uppercase tracking-wide">
                  {a.label}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-black/70">
                  {a.detail}
                </p>
              </div>
            ))}
          </div>

          <SubHeading>Monthly Event Cadence</SubHeading>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/55">
            Same 4-slot template, every market, every month — delegable to
            chapter leads.
          </p>
          <div className="mt-3 flex flex-col gap-3">
            {MONTHLY_CADENCE.map((c) => (
              <div
                key={c.week}
                className="rounded-2xl bg-black/[0.03] p-5 md:flex md:items-start md:gap-6 md:p-6"
              >
                <div className="text-xs font-bold uppercase tracking-wide text-black/40 md:w-20 md:shrink-0">
                  {c.week}
                </div>
                <div className="mt-2 md:mt-0 md:flex-1">
                  <div className="text-sm font-bold">{c.type}</div>
                  <p className="mt-1 text-sm leading-relaxed text-black/70">
                    {c.purpose}
                  </p>
                </div>
                <div className="mt-2 text-[11px] uppercase tracking-wide text-black/45 md:mt-0 md:w-48 md:shrink-0 md:text-right">
                  {c.owner}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <div className="flex flex-1 items-center gap-4 rounded-2xl bg-black p-6 text-white">
              <div className="text-3xl font-bold text-[#FFCE4E] shrink-0">1 → 3</div>
              <p className="text-sm leading-relaxed text-white/80">
                cities, 2 chapter leads recruited &amp; managed.
              </p>
            </div>
            <div className="flex flex-1 items-center gap-4 rounded-2xl bg-black p-6 text-white">
              <div className="text-3xl font-bold text-[#FFCE4E] shrink-0">3</div>
              <p className="text-sm leading-relaxed text-white/80">
                cities run without me executing every event —
                &quot;ran events&quot; vs. running a program.
              </p>
            </div>
          </div>
        </CaseSection>

        {/* ───────────────────────── CTA ───────────────────────── */}
        <section className="w-full">
          <div className="flex flex-wrap items-center justify-between gap-6 rounded-3xl bg-black p-8 text-white md:p-12">
            <p className="max-w-md text-lg font-bold leading-snug md:text-xl">
              Like how this was scoped and run? That&apos;s the default, not the
              exception.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "h-auto rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/85"
                )}
              >
                <MessageCircle />
                Let&apos;s Talk
              </Link>
              <Link
                href="/"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-auto rounded-full border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-black"
                )}
              >
                <ArrowLeft />
                Back to Portfolio
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-8">
          <p className="text-[11px] text-black/40">
            © {new Date().getFullYear()} Sanpaphat &quot;Acre&quot;
            Porntongprasert.
          </p>
        </div>
      </footer>
    </div>
  );
}
