import type { Metadata } from "next";
import PlaybookToggle from "./playbook-toggle";

export const metadata: Metadata = {
  title: "Acre — Interlock GTM, Operations & Builder Lead",
  description:
    "Sanpaphat 'Acre' Porntongprasert — bridging subsecond smart contract UX to mass distribution and playbook execution.",
};

const NAV_LINKS = [
  { href: "#impact", label: "Impact" },
  { href: "#architecture", label: "Architecture" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#frameworks", label: "Frameworks" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#playbook", label: "Playbook" },
];

const KPI_STATS = [
  { value: "2nd Runner-Up", label: "Superteam Thailand / World Cup Gacha" },
  { value: "300+ Wallets", label: "Live Field QR Onboarding" },
  { value: "~667 THB", label: "Cost per Attendee (200K Budget)" },
  { value: "5 Chapters", label: "University Series Ops" },
];

const IMPACT_HIGHLIGHTS = [
  { skill: "Budget Ownership", proof: "200K THB → ~667 THB/head, on-target." },
  { skill: "Growth & Distribution", proof: "300+ wallets onboarded live." },
  { skill: "Strategic Prioritization", proof: "RICE-scored, not guesswork." },
  { skill: "Recognition Under Pressure", proof: "2nd Runner-Up, national stage." },
  { skill: "Cross-Functional Ops", proof: "5-university series, end-to-end." },
  { skill: "Data-Driven Reporting", proof: "GA4 · Excel · Dune — tracked." },
];

const CORE_SKILLS = [
  "Growth Strategy",
  "Budget & Ops",
  "Event Production",
  "Community Building",
  "Stakeholder Management",
  "Data Analysis",
  "Web3 / Crypto GTM",
];

const RICE_ROWS = [
  {
    program: "Chula / Thammasat / Kasetsart Cluster",
    reach: 9,
    impact: 8,
    confidence: "90%",
    effort: 4,
    score: "16.2",
    result: "selected",
  },
  {
    program: "Bangkok Tech Belt (KMUTT / KMITL)",
    reach: 8,
    impact: 7,
    confidence: "85%",
    effort: 4,
    score: "11.9",
    result: "selected",
  },
  {
    program: "CMU Northern Hub",
    reach: 6,
    impact: 6,
    confidence: "70%",
    effort: 5,
    score: "5.0",
    result: "selected",
  },
  {
    program: "10-University Random Spread",
    reach: 4,
    impact: 5,
    confidence: "50%",
    effort: 9,
    score: "1.1",
    result: "rejected",
  },
  {
    program: "Single Mega-Event (Bangkok only)",
    reach: 9,
    impact: 4,
    confidence: "40%",
    effort: 3,
    score: "4.8",
    result: "rejected",
  },
];

const TEAM1_EVENTS = [
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
];

const TELEMETRY_STACK = [
  {
    tool: "GA4 / Excel",
    use: "Budget pacing & CAC (~667 THB/head) tracking against 200K THB envelope.",
  },
  {
    tool: "Dune Analytics",
    use: "On-chain verification of wallet activity & testnet/mainnet deploys.",
  },
  {
    tool: "Event QR Telemetry",
    use: "Live field attendance, session-wallet capture & funnel conversion at watch parties.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-full w-full flex-col bg-white font-sans text-black">
      {/* ───────────────────────── NAV ───────────────────────── */}
      <nav className="sticky top-0 z-30 w-full border-b border-black bg-white">
        <div className="mx-auto flex max-w-6xl items-center gap-1 overflow-x-auto whitespace-nowrap px-6 py-3 md:px-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-2 py-1 font-mono text-[11px] uppercase tracking-widest transition-colors hover:bg-black hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {/* ───────────────────────── HERO ───────────────────────── */}
      <section className="w-full scroll-mt-16 border-b border-black">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
          <div className="inline-flex flex-wrap items-center gap-2 border border-black px-3 py-1 font-mono text-[11px] uppercase tracking-widest">
            <span className="h-1.5 w-1.5 bg-black" />
            Open for GTM, Growth &amp; Operations Roles
            <span className="text-zinc-400">|</span>
            Agoda / Binance / Ecosystem
          </div>

          <p className="mt-8 font-mono text-xs uppercase tracking-widest text-zinc-600">
            Sanpaphat &quot;Acre&quot; Porntongprasert — Interlock GTM, Operations &amp; Builder Lead
          </p>

          <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            Bridging Subsecond Smart Contract UX to Mass Distribution
            &amp; Playbook Execution.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-600 md:text-lg">
            Senior Industrial Design &amp; Web3 Builder (Chula). Operations
            Lead for Avalanche Team1. Converting 45s latency into &lt;2s
            gacha and 200K THB into verified builder/wallet pipelines.
          </p>
          <div className="mt-10 grid grid-cols-2 divide-x divide-y divide-black border border-black md:grid-cols-4 md:divide-y-0">
            {KPI_STATS.map((stat) => (
              <div key={stat.label} className="p-5">
                <div className="font-mono text-xl font-bold md:text-2xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-[11px] uppercase leading-snug tracking-wide text-zinc-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#impact"
              className="border border-black bg-black px-6 py-3 font-mono text-xs uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black"
            >
              See the Impact ↓
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black bg-white px-6 py-3 font-mono text-xs uppercase tracking-widest text-black transition-colors hover:bg-black hover:text-white"
            >
              Download Resume ↗
            </a>
          </div>
        </div>
      </section>

      {/* ───────────────────── IMPACT / WHY HIRE ME ───────────────────── */}
      <section id="impact" className="w-full scroll-mt-16 border-b border-black">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
          <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-600">
            01 — Impact
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-12">
            {/* Image placeholder — swap in a real photo later */}
            <div className="flex aspect-[4/5] flex-col items-center justify-center border border-dashed border-black p-6 text-center md:aspect-auto md:col-span-4">
              <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
                [ Photo ]
              </span>
              <span className="mt-1 text-[11px] text-zinc-400">
                Add later
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:col-span-8">
              {IMPACT_HIGHLIGHTS.map((item) => (
                <div key={item.skill} className="border border-black p-5">
                  <div className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
                    {item.skill}
                  </div>
                  <div className="mt-1 text-sm font-bold leading-snug">
                    {item.proof}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {CORE_SKILLS.map((skill) => (
              <span
                key={skill}
                className="border border-black px-2 py-0.5 font-mono text-[11px] uppercase tracking-wide"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── ARCHITECTURE MAP ─────────────────── */}
      <section id="architecture" className="w-full scroll-mt-16 border-b border-black">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
          <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-600">
            02 — The Interlock Engine
          </h2>
          <p className="mt-2 max-w-2xl text-2xl font-bold tracking-tight md:text-3xl">
            One operator, two sides of the same funnel.
          </p>
          <div className="mt-8 border border-black p-6 font-mono text-xs leading-relaxed md:text-sm">
            <div className="font-bold">ACRE: INTERLOCK LEAD</div>
            <div className="mt-2 border-l border-black pl-4">
              <div>├── SUPPLY-SIDE (BUILDERS)</div>
              <div className="pl-6 text-zinc-600">
                University Series (5 Uni) · Hackathons (Medusa / Moment)
              </div>
              <div className="mt-3">└── DEMAND-SIDE (MASS / CULTURE)</div>
              <div className="pl-6 text-zinc-600">
                World Cup Watch Party (300+ Wallets) · Pudgy Padel · IslandDAO
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="border border-black p-6">
              <div className="inline-block border border-black px-2 py-0.5 font-mono text-[11px] uppercase tracking-widest">
                Supply-Side
              </div>
              <h3 className="mt-3 text-lg font-bold">Builder Pipeline</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                5-chapter university series turning students into verified
                testnet/mainnet deployers, plus hackathon activations
                (Medusa, Moment) that convert builders into shipped code.
              </p>
            </div>
            <div className="border border-black p-6">
              <div className="inline-block border border-black px-2 py-0.5 font-mono text-[11px] uppercase tracking-widest">
                Demand-Side
              </div>
              <h3 className="mt-3 text-lg font-bold">Mass &amp; Culture</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                Culture-native distribution — World Cup watch party (300+
                session wallets), Pudgy Padel, IslandDAO — pulling
                mainstream attention into the same on-chain funnel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────── CASE STUDIES ───────────────────── */}
      <section id="case-studies" className="w-full scroll-mt-16 border-b border-black">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
          <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-600">
            03 — Deep-Dive Case Studies
          </h2>
          <p className="mt-2 max-w-2xl text-2xl font-bold tracking-tight md:text-3xl">
            Two projects, two different problems.
          </p>

          {/* Case Study 1 — Moment */}
          <div className="mt-8 border border-black">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black p-6">
              <div>
                <h3 className="text-xl font-bold md:text-2xl">
                  Moment — World Cup Gacha
                </h3>
                <p className="mt-1 text-sm text-zinc-600">
                  Live World Cup Watch Party, Bangkok — w/ Superteam Thailand
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Solana",
                  "MagicBlock Ephemeral Rollups",
                  "TxLINE Oracles",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="border border-black px-2 py-0.5 font-mono text-[11px] uppercase tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="border-b border-black p-6 md:border-b-0 md:border-r">
                <div className="font-mono text-[11px] uppercase tracking-widest text-zinc-600">
                  The Problem
                </div>
                <p className="mt-2 text-sm leading-relaxed">
                  Standard on-chain confirmation latency (~45s) killed the
                  gacha loop — no one waits 45 seconds to see if they won.
                </p>
              </div>
              <div className="border-b border-black p-6 md:border-b-0 md:border-r">
                <div className="font-mono text-[11px] uppercase tracking-widest text-zinc-600">
                  The Fix
                </div>
                <p className="mt-2 text-sm leading-relaxed">
                  Ephemeral rollups + oracle-fed randomness compressed
                  confirmation to <span className="font-mono">&lt;2s</span>,
                  signless — a claim felt instant on a crowded stadium
                  screen.
                </p>
              </div>
              <div className="p-6">
                <div className="font-mono text-[11px] uppercase tracking-widest text-zinc-600">
                  The Result
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="font-mono text-2xl font-bold">300+</span>
                  <span className="text-sm text-zinc-600">
                    unique session wallets
                  </span>
                </div>
                <div className="mt-1 font-mono text-sm font-bold">
                  2nd Runner-Up
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 2 — Avalanche Team1 */}
          <div className="mt-6 border border-black">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black p-6">
              <div>
                <h3 className="text-xl font-bold md:text-2xl">
                  Avalanche Team1 — 5-University Series
                </h3>
                <p className="mt-1 text-sm text-zinc-600">
                  Strategic ADR #001 — density over spread
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["ADR #001", "200K THB Budget", "5 Chapters"].map((tag) => (
                  <span
                    key={tag}
                    className="border border-black px-2 py-0.5 font-mono text-[11px] uppercase tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="border-b border-black p-6 md:border-b-0 md:border-r">
                <div className="font-mono text-[11px] uppercase tracking-widest text-zinc-600">
                  The Decision
                </div>
                <p className="mt-2 text-sm leading-relaxed">
                  ADR #001: run 5 high-density university clusters instead
                  of 10 randomly spread campuses — trading raw reach for
                  deployment density and follow-through.
                </p>
              </div>
              <div className="border-b border-black p-6 md:border-b-0 md:border-r">
                <div className="font-mono text-[11px] uppercase tracking-widest text-zinc-600">
                  The Budget
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="font-mono text-2xl font-bold">
                    200K THB
                  </span>
                </div>
                <p className="mt-1 text-sm text-zinc-600">
                  On-target at ~667 THB per attendee, across 5 chapters.
                </p>
              </div>
              <div className="p-6">
                <div className="font-mono text-[11px] uppercase tracking-widest text-zinc-600">
                  The Output
                </div>
                <p className="mt-2 text-sm leading-relaxed">
                  Verified testnet/mainnet deployers per chapter — not just
                  attendees, but wallets with shipped transactions.
                </p>
              </div>
            </div>

            {/* Process Blueprint */}
            <div className="border-t border-black p-6">
              <div className="font-mono text-[11px] uppercase tracking-widest text-zinc-600">
                Process Blueprint
              </div>
              <div className="mt-4 grid grid-cols-1 items-stretch gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
                <div className="border border-black p-4">
                  <div className="font-mono text-xs font-bold uppercase tracking-widest">
                    Pre-flight
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-600">
                    RICE-score cluster selection, campus MOUs, curriculum
                    prep.
                  </p>
                </div>
                <div className="hidden items-center justify-center font-mono text-lg md:flex">
                  →
                </div>
                <div className="border border-black p-4">
                  <div className="font-mono text-xs font-bold uppercase tracking-widest">
                    Execution
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-600">
                    Workshop delivery, live deploy sessions, QR wallet
                    onboarding.
                  </p>
                </div>
                <div className="hidden items-center justify-center font-mono text-lg md:flex">
                  →
                </div>
                <div className="border border-black p-4">
                  <div className="font-mono text-xs font-bold uppercase tracking-widest">
                    Compounding
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-600">
                    POAP retention loop, AcreLabs handoff, ambassador
                    seeding for the next chapter.
                  </p>
                </div>
              </div>
            </div>

            {/* Event Tracker */}
            <div className="border-t border-black p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="font-mono text-[11px] uppercase tracking-widest text-zinc-600">
                  Event Tracker
                </div>
                <div className="border border-black px-2 py-0.5 font-mono text-[11px] uppercase tracking-wide">
                  1 / {TEAM1_EVENTS.length} Chapters Live
                </div>
              </div>

              {/* Featured result — the one chapter that's happened */}
              {TEAM1_EVENTS.filter((ev) => ev.status === "done").map((ev) => (
                <div key={ev.name} className="mt-4 border border-black">
                  <div className="border-b border-black p-4">
                    <div className="font-bold">{ev.name}</div>
                    <div className="mt-1 text-xs text-zinc-600">
                      {ev.type} · {ev.date}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 divide-x divide-y divide-black sm:grid-cols-6 sm:divide-y-0">
                    {[
                      { label: "Registered", value: ev.registered },
                      { label: "Attendees", value: ev.attendees },
                      { label: "Conversion", value: ev.conversion },
                      { label: "Wallets", value: ev.wallets },
                      { label: "Contracts", value: ev.contracts },
                      { label: "TG Joins", value: `+${ev.telegram}` },
                    ].map((stat) => (
                      <div key={stat.label} className="p-3">
                        <div className="font-mono text-lg font-bold md:text-xl">
                          {stat.value}
                        </div>
                        <div className="mt-0.5 text-[10px] uppercase tracking-wide text-zinc-500">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Pipeline — chapters not run yet */}
              <div className="mt-4 divide-y divide-black border border-black">
                {TEAM1_EVENTS.filter((ev) => ev.status === "scheduled").map(
                  (ev) => (
                    <div
                      key={ev.name}
                      className="flex items-center justify-between gap-3 p-3"
                    >
                      <div>
                        <div className="text-sm font-medium">{ev.name}</div>
                        <div className="text-[11px] text-zinc-500">
                          {ev.type} · {ev.date}
                        </div>
                      </div>
                      <span className="shrink-0 font-mono text-[10px] uppercase tracking-wide text-zinc-400">
                        Scheduled
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────── DIAGNOSTIC & ANALYTICAL LAYER ────────────────── */}
      <section id="frameworks" className="w-full scroll-mt-16 border-b border-black">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
          <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-600">
            04 — Diagnostic &amp; Analytical Layer
          </h2>
          <p className="mt-2 max-w-2xl text-2xl font-bold tracking-tight md:text-3xl">
            The frameworks behind the numbers.
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600">
            These are the tools I use to decide what to do next, and to
            prove afterward whether it worked.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* AARRR */}
            <div className="border border-black p-6">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest">
                AARRR Funnel Mapping
              </h3>
              <div className="mt-4 flex flex-col gap-3">
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-widest">
                    Acquisition
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-600">
                    QR onboarding at watch parties &amp; university
                    roadshows.
                  </p>
                </div>
                <div className="font-mono text-xs text-zinc-400">↓</div>
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-widest">
                    Activation
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-600">
                    &lt;2s signless gacha claim / first testnet deploy.
                  </p>
                </div>
                <div className="font-mono text-xs text-zinc-400">↓</div>
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-widest">
                    Retention
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-600">
                    POAP collection &amp; AcreLabs community loop.
                  </p>
                </div>
              </div>
            </div>

            {/* RICE */}
            <div className="border border-black p-6">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest">
                RICE Prioritization — 5-Uni Selection
              </h3>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full border-collapse text-left font-mono text-[10px]">
                  <thead>
                    <tr>
                      {["Program", "R", "I", "C", "E", "Score"].map((h) => (
                        <th
                          key={h}
                          className="border border-black px-1.5 py-1 uppercase tracking-wide"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {RICE_ROWS.map((row) => (
                      <tr
                        key={row.program}
                        className={
                          row.result === "rejected"
                            ? "text-zinc-400"
                            : undefined
                        }
                      >
                        <td className="border border-black px-1.5 py-1">
                          {row.program}
                        </td>
                        <td className="border border-black px-1.5 py-1">
                          {row.reach}
                        </td>
                        <td className="border border-black px-1.5 py-1">
                          {row.impact}
                        </td>
                        <td className="border border-black px-1.5 py-1">
                          {row.confidence}
                        </td>
                        <td className="border border-black px-1.5 py-1">
                          {row.effort}
                        </td>
                        <td className="border border-black px-1.5 py-1 font-bold">
                          {row.score}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-[11px] text-zinc-600">
                Score = (Reach × Impact × Confidence) / Effort. Top 3
                clusters selected over wider, shallower spreads.
              </p>
            </div>

            {/* Telemetry */}
            <div className="border border-black p-6">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest">
                Unit Econ &amp; Telemetry Stack
              </h3>
              <div className="mt-4 flex flex-col gap-4">
                {TELEMETRY_STACK.map((item) => (
                  <div
                    key={item.tool}
                    className="border-l-2 border-black pl-3"
                  >
                    <div className="font-mono text-xs font-bold">
                      {item.tool}
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-zinc-600">
                      {item.use}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── ROADMAP ───────────────────────── */}
      <section id="roadmap" className="w-full scroll-mt-16 border-b border-black">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
          <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-600">
            05 — Roadmap
          </h2>
          <p className="mt-2 max-w-2xl text-2xl font-bold tracking-tight md:text-3xl">
            What&apos;s next.
          </p>

          <div className="mt-8 border border-dashed border-black p-8">
            <div className="inline-flex items-center gap-2 border border-black px-3 py-1 font-mono text-[11px] uppercase tracking-widest">
              <span className="h-1.5 w-1.5 bg-black" />
              In Progress
            </div>
            <h3 className="mt-4 text-lg font-bold">
              Campaign Calendar &amp; Forward Marketing Plan
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-600">
              A dated calendar of upcoming campaigns and a forward-looking
              marketing plan are being finalized and will be published in
              this section. In the meantime, the case studies above cover
              everything already shipped.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────── HOW I THINK + FOOTER ─────────────────── */}
      <section id="playbook" className="w-full scroll-mt-16 border-b border-black">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
          <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-600">
            06 — How I Think
          </h2>
          <div className="mt-8">
            <PlaybookToggle />
          </div>
        </div>
      </section>

      <footer className="w-full">
        <div className="mx-auto max-w-6xl px-6 py-10 md:px-10">
          <div className="flex flex-wrap items-center gap-1 font-mono text-xs uppercase tracking-widest">
            <a
              href="https://t.me/acre"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 transition-colors hover:bg-black hover:text-white"
            >
              Telegram
            </a>
            <span className="text-zinc-400">/</span>
            <a
              href="https://x.com/acre"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 transition-colors hover:bg-black hover:text-white"
            >
              X / Twitter
            </a>
            <span className="text-zinc-400">/</span>
            <a
              href="https://github.com/acre"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 transition-colors hover:bg-black hover:text-white"
            >
              GitHub
            </a>
            <span className="text-zinc-400">/</span>
            <a
              href="mailto:acreforcoding@gmail.com"
              className="px-2 py-1 transition-colors hover:bg-black hover:text-white"
            >
              Email
            </a>
          </div>
          <p className="mt-6 text-[11px] text-zinc-600">
            © {new Date().getFullYear()} Sanpaphat &quot;Acre&quot;
            Porntongprasert. Built monochrome, on purpose.
          </p>
        </div>
      </footer>
    </div>
  );
}
