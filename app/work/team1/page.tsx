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
  FileText,
  ListOrdered,
  GitBranch,
  Activity,
  FlaskConical,
  ShieldAlert,
  Handshake,
  Users,
  Map,
  Globe,
  UserPlus,
  CalendarClock,
  ClipboardList,
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
    detail: "QR posters, club partnerships, Telegram cross-posts.",
  },
  {
    stage: "Engagement",
    metric: "Workshop attendance",
    detail: "Registered → showed up, hands-on seat.",
  },
  {
    stage: "Conversion",
    metric: "Verified builder",
    detail: "Wallet deployed + contract verified on-chain.",
  },
  {
    stage: "Retention",
    metric: "Active 30 days",
    detail: "Telegram + on-chain activity post-event.",
  },
];

const BRIEF = {
  problem:
    "Avalanche has low top-of-funnel visibility among Thai university students, and prior ecosystem pushes were one-off hackathon spikes with no retained builder pipeline.",
  hypothesis:
    "If we concentrate a fixed budget into a small number of high-RICE-score university clusters with hands-on deploy workshops, we generate more verified builders per THB than a wide, thin spread — because peer density inside a cluster compounds word-of-mouth and lowers the marginal cost of each additional attendee.",
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
    context:
      "200K THB could fund 10 campuses thinly or 5 campuses with a full workshop + hackathon experience.",
    alternatives: [
      "10-university random spread (RICE 1.1)",
      "Single Bangkok mega-event (RICE 4.8)",
      "5-cluster dense selection (RICE 16.2 top cluster)",
    ],
    decision:
      "Selected the 5-cluster dense option — highest RICE score, and matches the hypothesis that density compounds retention.",
    risk:
      "Regional students outside Bangkok/Chiang Mai clusters are underserved in Phase 1. Accepted risk, mitigated by a planned Phase 2 satellite-chapter expansion if Phase 1 hits target.",
  },
  {
    id: "ADR-002",
    title: "Workshop-first, not hackathon-first",
    context:
      "Could have opened with a hackathon (higher initial buzz) or a workshop (lower buzz, higher completion certainty).",
    alternatives: [
      "Hackathon-first to maximize launch attention",
      "Workshop-first to guarantee a shipped wallet per attendee",
    ],
    decision:
      "Workshop-first — every attendee leaves with a verified transaction before the funnel asks for a bigger time commitment.",
    risk:
      "Lower initial social/press attention than a hackathon launch. Accepted — optimizing for verified builders, not impressions.",
  },
];

const INSTRUMENTATION = {
  tracked: [
    "Registration source (QR / social / referral)",
    "Registered → attendance conversion",
    "Wallet deploy completion",
    "Contract verification",
    "Telegram join + 30-day activity",
  ],
  vanity:
    "Total event social impressions / reach — deliberately not weighted. It doesn't correlate with verified-builder conversion, only with awareness spend.",
  primary:
    "Cost per verified builder (not cost per attendee) — the number that actually defends the budget.",
};

const ITERATION_LOG = [
  {
    version: "v1 — Chula (done)",
    change: "Generic messaging: \"Learn blockchain basics.\"",
    result: "58.06% registered → attendance conversion, 50% wallet deploy rate.",
  },
  {
    version: "v2 — KU (planned)",
    change:
      "Hypothesis: outcome-specific messaging (\"Deploy your first contract in 90 minutes\") lifts show-up rate further.",
    result: "Pending — chapter not yet run.",
  },
];

const KILL_CRITERIA = {
  setBefore: "Set before the first chapter (Chula) ran.",
  rules: [
    "Wallet-deploy completion < 30% → pause remaining chapters, re-scope curriculum.",
    "Cost per verified builder > 1,500 THB → pause and renegotiate budget allocation.",
  ],
  outcome:
    "Chula result: 50% deploy completion, ~1,334 THB per verified builder — both inside threshold. Program proceeds as planned to chapter 2.",
};

const STAKEHOLDER_ASK = {
  audience: "Avalanche Foundation regional lead + community sponsor",
  ask: "200,000 THB + curriculum support for a 5-cluster, 8-week university program.",
  framing:
    "Traditional grant-based builder acquisition runs 5,000–10,000 THB per funded builder. This program targets under 1,500 THB per verified builder, plus a community retention loop that a one-off grant doesn't buy.",
};

const ROLE_SCOPE = {
  reportsTo: "Thailand Country Lead — not the country lead, owns execution",
  lanes: [
    {
      label: "People & Vendors",
      detail:
        "Directs a small on-ground crew and vendors per event — day-to-day call, not org-chart authority.",
    },
    {
      label: "Event Merch",
      detail: "Owns sourcing, budget, and delivery of merch for every chapter.",
    },
    {
      label: "University Partnerships",
      detail:
        "Primary point of contact for each campus's club and department relationship.",
    },
    {
      label: "Meetups & Content",
      detail: "Runs select community meetups and owns the program's online content.",
    },
  ],
};

const PERSONA = {
  name: "\"Convertible Builder\"",
  traits: [
    "2nd–4th year CS / Engineering student",
    "Prior exposure to at least one hackathon or coding club",
    "Comfortable with English-language technical docs",
    "Already active on Telegram or Discord",
  ],
  use: "Drove both university selection (target campuses with active dev clubs) and messaging (outcome-oriented, not beginner-hand-holding).",
};

const ROADMAP = [
  {
    period: "Q3 2026",
    label: "Phase 1 — Prove the model",
    detail: "Chula (done) + KU + KMITL live. Target: 50+ verified builders.",
  },
  {
    period: "Q4 2026",
    label: "Phase 2 — Compound the community",
    detail:
      "KMUTT/KMITL cluster + CMU complete. Cross-chapter Telegram merge. Target: 150+ cumulative verified builders, first ambassador cohort selected.",
    dependency: "Depends on Phase 1 producing ≥10 high-signal builders willing to mentor.",
  },
  {
    period: "Q1 2027",
    label: "Phase 3 — Self-sustaining chapters",
    detail:
      "Ambassador-led chapters running without ops-lead delivery. Target: 300+ cumulative builders retained at day 30.",
    dependency: "Depends on Phase 2 ambassador cohort being live and trained.",
  },
];

const REGIONAL_WAVES = [
  {
    wave: "Wave 1",
    period: "Month 1–3 — already running",
    where: "Bangkok universities",
    why: "Prove the funnel works before scaling it.",
    owner: "Direct — no delegation yet",
  },
  {
    wave: "Wave 2",
    period: "Month 4–6",
    where:
      "Chiang Mai + Khon Kaen (or 1–2 secondary Thai cities with active dev/CS programs)",
    why: "Same country, same language, same partners (Bitkub, Avalanche) — the lowest-cost way to prove the playbook travels.",
    owner:
      "Recruit a local \"chapter lead\" per city — the first time managing people, not just tasks.",
  },
  {
    wave: "Wave 3",
    period: "Month 7–9",
    where:
      "1 SEA market — Vietnam or the Philippines, the usual Web3-hungry entry points",
    why: "Tests whether the model works outside Thailand's specific ecosystem: different exchanges, different regulatory tone.",
    owner: "Local partner org, not a hire — partnership model, not headcount.",
  },
];

const AUDIENCE_SEGMENTS = [
  {
    label: "Working Developers / Career Switchers",
    detail:
      "Already employed, want Web3 skills on the side. Higher retention, higher chance of shipping something real — the segment that produces \"3 teams that raised pre-seed\" case studies for later.",
  },
  {
    label: "Local Web3 Startups / Founders as Anchor Partners",
    detail:
      "Not for funding — for credibility loans. One respected local founder saying \"Team1 helped us find our first dev\" is worth more to a foundation than 500 Telegram members.",
  },
  {
    label: "Corporate / Institutional Bridge",
    detail:
      "Banks and SMEs exploring blockchain payments. Shows ecosystem-to-real-economy bridging, not just hackathon culture — even one panel or workshop per quarter with a corporate angle changes how foundations categorize the program.",
  },
];

const MONTHLY_CADENCE = [
  {
    week: "Week 1",
    type: "Community Call — all regions, one call",
    purpose:
      "Cross-market visibility, keeps people from going dormant between hackathons.",
    owner: "Direct — the regional-lead visibility moment",
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
    purpose: "Mid-funnel, shows momentum, content for socials.",
    owner: "Chapter Lead",
  },
  {
    week: "Week 4",
    type:
      "Partner Spotlight — rotates: foundation AMA, startup panel, exchange co-branded session",
    purpose: "Diversifies audience beyond students, generates partner goodwill.",
    owner: "Negotiated centrally",
  },
];

const OVERVIEW_STATS = [
  {
    label: "The Decision",
    value: "5 / 10",
    detail: "Clusters chosen over campuses — density over spread.",
  },
  {
    label: "The Budget",
    value: "667 THB",
    detail: "Per attendee, on-target across 5 chapters.",
  },
  {
    label: "The Output",
    value: "100%",
    detail: "Attendees leave with shipped, verified wallets.",
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

type Team1Event = {
  name: string;
  type: string;
  date: string;
  status: "done" | "scheduled";
  registered?: number;
  attendees?: number;
  conversion?: string;
  wallets?: number;
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
];

function CaseSection({
  index,
  title,
  icon,
  children,
}: {
  index: string;
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
}) {
  return (
    <section className="w-full">
      <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-12 lg:p-16">
        <SectionTag label={`${index} — ${title}`} icon={icon} />
        <div className="mt-8">{children}</div>
      </div>
    </section>
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
            <p className="mt-6 max-w-2xl text-xl font-bold leading-snug tracking-tight md:text-2xl">
              How a 5-university builder pipeline was scoped, prioritized,
              instrumented, and defended like a product — not a marketing
              campaign.
            </p>

            <p className="mt-4 max-w-2xl text-xs uppercase tracking-wide text-black/40">
              Reports to {ROLE_SCOPE.reportsTo}
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 rounded-2xl bg-black/[0.03] p-3 sm:grid-cols-2 md:grid-cols-4">
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

        {/* ───────────────── 01 — NORTH STAR + FUNNEL ───────────────── */}
        <CaseSection index="01" title="North Star Metric & Funnel Map" icon={Target}>
          <div className="rounded-3xl bg-black p-6 text-white md:p-8">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-white/50">
              North Star
            </div>
            <p className="mt-2 max-w-2xl text-lg font-bold leading-snug md:text-xl">
              Verified builders who stay active in the Avalanche ecosystem
              30+ days after their event.
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

          <div className="mt-4 rounded-2xl border border-black/10 p-5">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-black/45">
              Chosen Bottleneck
            </div>
            <p className="mt-2 text-sm leading-relaxed text-black/70">
              Awareness → Engagement drop-off. At Chula, 31 registered but
              only 18 attended (58.06%) — the ~42% no-show rate is the
              highest-leverage point in the funnel to fix before scaling
              spend on awareness.
            </p>
          </div>
        </CaseSection>

        {/* ───────────────── 02 — CAMPAIGN BRIEF (PRD) ───────────────── */}
        <CaseSection index="02" title="Campaign Brief — PRD Format" icon={FileText}>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
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
              <ul className="mt-2 flex flex-col gap-1">
                {BRIEF.constraints.map((c) => (
                  <li key={c} className="text-sm text-black/70">
                    · {c}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-black/[0.03] p-6">
              <div className="text-[11px] font-semibold uppercase tracking-wide text-black/45">
                In Scope
              </div>
              <ul className="mt-2 flex flex-col gap-1">
                {BRIEF.scope.map((s) => (
                  <li key={s} className="text-sm text-black/70">
                    · {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-black/[0.03] p-6">
              <div className="text-[11px] font-semibold uppercase tracking-wide text-black/45">
                Out of Scope
              </div>
              <ul className="mt-2 flex flex-col gap-1">
                {BRIEF.outOfScope.map((s) => (
                  <li key={s} className="text-sm text-black/35">
                    · {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CaseSection>

        {/* ───────────────── 03 — PRIORITIZATION ───────────────── */}
        <CaseSection index="03" title="Prioritization Framework" icon={ListOrdered}>
          <p className="max-w-2xl text-2xl font-bold tracking-tight md:text-3xl">
            RICE scoring, not gut feel.
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/55">
            The full RICE table — 5 candidate programs scored on Reach,
            Impact, Confidence and Effort — lives on the{" "}
            <Link href="/#frameworks" className="underline hover:no-underline">
              main portfolio page
            </Link>
            . The 5-cluster selection below is the direct output of that
            table, not a description after the fact.
          </p>

          <div className="mt-6 rounded-2xl bg-black/[0.03] p-6">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-black/45">
              Top Cluster
            </div>
            <div className="mt-2 text-3xl font-bold">16.2</div>
            <p className="mt-1 text-sm text-black/55">
              Chula / Thammasat / Kasetsart cluster — highest RICE score,
              first chapter to run.
            </p>
          </div>
        </CaseSection>

        {/* ───────────────── 04 — DECISION LOG ───────────────── */}
        <CaseSection index="04" title="Decision Log (ADR-style)" icon={GitBranch}>
          <div className="flex flex-col gap-4">
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
                    <ul className="mt-2 flex flex-col gap-1">
                      {d.alternatives.map((a) => (
                        <li key={a} className="text-sm text-black/70">
                          · {a}
                        </li>
                      ))}
                    </ul>
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

        {/* ───────────────── 05 — INSTRUMENTATION PLAN ───────────────── */}
        <CaseSection index="05" title="Instrumentation Plan" icon={Activity}>
          <p className="max-w-2xl text-sm leading-relaxed text-black/55">
            Defined before the first event ran, not reconstructed from
            whatever numbers happened to be available afterward.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3">
            <div className="rounded-2xl bg-black/[0.03] p-6 md:col-span-2">
              <div className="text-[11px] font-semibold uppercase tracking-wide text-black/45">
                Tracked From Day 1
              </div>
              <ul className="mt-2 flex flex-col gap-1">
                {INSTRUMENTATION.tracked.map((t) => (
                  <li key={t} className="text-sm text-black/70">
                    · {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-black/[0.03] p-6">
              <div className="text-[11px] font-semibold uppercase tracking-wide text-black/45">
                Primary Metric
              </div>
              <p className="mt-2 text-sm leading-relaxed text-black/70">
                {INSTRUMENTATION.primary}
              </p>
            </div>
            <div className="rounded-2xl bg-black/[0.03] p-6 md:col-span-3">
              <div className="text-[11px] font-semibold uppercase tracking-wide text-black/45">
                Vanity Metric — Deliberately Deprioritized
              </div>
              <p className="mt-2 text-sm leading-relaxed text-black/55">
                {INSTRUMENTATION.vanity}
              </p>
            </div>
          </div>
        </CaseSection>

        {/* ───────────────── 06 — EXPERIMENT / ITERATION LOG ───────────────── */}
        <CaseSection index="06" title="Experiment / Iteration Log" icon={FlaskConical}>
          <p className="max-w-2xl text-sm leading-relaxed text-black/55">
            Build → measure → learn, chapter by chapter. Only 1 of 7 events
            has run so far — this log grows as chapters complete.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            {ITERATION_LOG.map((it) => (
              <div key={it.version} className="rounded-2xl bg-black/[0.03] p-5">
                <div className="text-xs font-bold uppercase tracking-wide">
                  {it.version}
                </div>
                <p className="mt-2 text-sm text-black/70">
                  <span className="text-black/45">Change: </span>
                  {it.change}
                </p>
                <p className="mt-1 text-sm text-black/70">
                  <span className="text-black/45">Result: </span>
                  {it.result}
                </p>
              </div>
            ))}
          </div>
        </CaseSection>

        {/* ───────────────── 07 — RETRO / KILL CRITERIA ───────────────── */}
        <CaseSection index="07" title="Retro / Postmortem — Kill Criteria" icon={ShieldAlert}>
          <p className="max-w-2xl text-sm leading-relaxed text-black/55">
            {KILL_CRITERIA.setBefore}
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
            <div className="rounded-2xl bg-black/[0.03] p-6">
              <div className="text-[11px] font-semibold uppercase tracking-wide text-black/45">
                Kill Thresholds
              </div>
              <ul className="mt-2 flex flex-col gap-2">
                {KILL_CRITERIA.rules.map((r) => (
                  <li key={r} className="text-sm text-black/70">
                    · {r}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-black p-6 text-white">
              <div className="text-[11px] font-semibold uppercase tracking-wide text-white/50">
                Outcome After Chapter 1
              </div>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                {KILL_CRITERIA.outcome}
              </p>
            </div>
          </div>
        </CaseSection>

        {/* ───────────────── 08 — STAKEHOLDER ALIGNMENT ───────────────── */}
        <CaseSection index="08" title="Stakeholder Alignment Artifact" icon={Handshake}>
          <div className="rounded-2xl bg-black/[0.03] p-6">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-black/45">
              Audience
            </div>
            <p className="mt-2 text-sm text-black/70">
              {STAKEHOLDER_ASK.audience}
            </p>
            <div className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-black/45">
              The Ask
            </div>
            <p className="mt-2 text-sm text-black/70">{STAKEHOLDER_ASK.ask}</p>
            <div className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-black/45">
              Framing
            </div>
            <p className="mt-2 text-sm leading-relaxed text-black/70">
              {STAKEHOLDER_ASK.framing}
            </p>
          </div>
        </CaseSection>

        {/* ───────────────── 09 — PERSONA / SEGMENTATION ───────────────── */}
        <CaseSection index="09" title="Segmentation / Persona" icon={Users}>
          <div className="rounded-2xl bg-black/[0.03] p-6">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-black/45">
              Persona
            </div>
            <div className="mt-2 text-lg font-bold">{PERSONA.name}</div>
            <ul className="mt-3 flex flex-col gap-1">
              {PERSONA.traits.map((t) => (
                <li key={t} className="text-sm text-black/70">
                  · {t}
                </li>
              ))}
            </ul>
            <div className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-black/45">
              How It Was Used
            </div>
            <p className="mt-2 text-sm leading-relaxed text-black/70">
              {PERSONA.use}
            </p>
          </div>
        </CaseSection>

        {/* ───────────────── 10 — ROADMAP ───────────────── */}
        <CaseSection index="10" title="Quarter-by-Quarter Roadmap" icon={Map}>
          <p className="max-w-2xl text-sm leading-relaxed text-black/55">
            Tied back to the North Star — each phase&apos;s target is a
            checkpoint on the same 30-day-retained-builder metric.
          </p>

          <div className="mt-6 flex flex-col gap-3">
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
        </CaseSection>

        {/* ───────────────── 11 — REGIONAL EXPANSION MAP ───────────────── */}
        <CaseSection index="11" title="Regional Expansion Map" icon={Globe}>
          <p className="max-w-2xl text-2xl font-bold tracking-tight md:text-3xl">
            Beyond Bangkok, beyond students.
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/55">
            Not a jump straight to &quot;SEA-wide&quot; — that&apos;s the classic
            overreach that gets a plan rejected as unrealistic. Sequenced
            in three waves instead.
          </p>

          <div className="mt-6 flex flex-col gap-3">
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

          <div className="mt-4 rounded-2xl bg-black p-6 text-white">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-white/50">
              Why This Matters
            </div>
            <p className="mt-2 text-sm leading-relaxed text-white/80">
              &quot;Scaled a community from 1 city to 3 and recruited/managed
              2 local chapter leads&quot; is a mid-level marketing bullet.
              &quot;Ran hackathons in Bangkok&quot; is not — the delta is people
              management and multi-market execution.
            </p>
          </div>
        </CaseSection>

        {/* ───────────────── 12 — AUDIENCE DIVERSIFICATION ───────────────── */}
        <CaseSection index="12" title="Beyond Students — Audience Diversification" icon={UserPlus}>
          <p className="max-w-2xl text-sm leading-relaxed text-black/55">
            Students bring volume and energy but weak retention and zero
            revenue-adjacent credibility — they graduate, get busy, and
            chase whatever hackathon has the best prize pool that month.
            A regional plan needs three more audiences.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3">
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

          <div className="mt-4 rounded-2xl bg-black p-6 text-white">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-white/50">
              Red-Flag Check
            </div>
            <p className="mt-2 text-sm leading-relaxed text-white/80">
              Say &quot;students&quot; only, and every partner conversation files
              the program under the &quot;youth outreach&quot; budget line — small,
              and first to get cut. Diversifying audience is a budget-tier
              upgrade.
            </p>
          </div>
        </CaseSection>

        {/* ───────────────── 13 — MONTHLY EVENT CADENCE ───────────────── */}
        <CaseSection index="13" title="Monthly Event Cadence" icon={CalendarClock}>
          <p className="max-w-2xl text-2xl font-bold tracking-tight md:text-3xl">
            The repeatable engine.
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/55">
            What makes this regional instead of a string of one-off
            events. Every market, every month, runs the same four-slot
            template — delegable to chapter leads instead of requiring
            me everywhere at once.
          </p>

          <div className="mt-6 flex flex-col gap-3">
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

          <p className="mt-3 max-w-2xl text-xs text-black/45">
            Quarterly, one of these months escalates into the flagship
            hackathon (the November Binance Blockchain Week play) — the
            big beat. Everything else is the rhythm section.
          </p>

          <div className="mt-4 rounded-2xl bg-black p-6 text-white">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-white/50">
              Why This Cadence
            </div>
            <p className="mt-2 text-sm leading-relaxed text-white/80">
              Designing a monthly operating cadence that ran across 3
              cities without personally executing every event is the
              line that separates &quot;ran events&quot; from running a regional
              program.
            </p>
          </div>
        </CaseSection>

        {/* ───────────────── 14 — CHAPTER TRACKER & EXECUTION DETAIL ───────────────── */}
        <CaseSection index="14" title="Chapter Tracker & Execution Detail" icon={ClipboardList}>
          <p className="max-w-2xl text-sm leading-relaxed text-black/55">
            The overview stats, run-of-show, and per-chapter numbers behind
            the summary card on the main portfolio page.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3">
            {OVERVIEW_STATS.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-black/[0.03] p-6">
                <div className="text-[11px] font-semibold uppercase tracking-wide text-black/45">
                  {stat.label}
                </div>
                <div className="mt-2 text-2xl font-bold">{stat.value}</div>
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

            <div className="mt-4 overflow-hidden rounded-2xl ring-1 ring-black/8">
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
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
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
