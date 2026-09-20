import { Badge } from "@/components/ui/badge";
import { SectionTag } from "@/components/section-tag";

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

// RICE table heat-map bands — tuned to this dataset's actual spread, not a generic 0–100 scale.
function reachTone(n: number) {
  if (n >= 8) return "bg-blue-600 text-white";
  if (n >= 6) return "bg-blue-200 text-black";
  return "bg-blue-50 text-black/70";
}
function impactTone(n: number) {
  if (n >= 7) return "bg-blue-600 text-white";
  if (n >= 5) return "bg-blue-200 text-black";
  return "bg-blue-50 text-black/70";
}
function confidenceTone(pct: string) {
  const n = Number.parseInt(pct, 10);
  if (n >= 80) return "bg-blue-600 text-white";
  if (n >= 60) return "bg-blue-200 text-black";
  return "bg-blue-50 text-black/70";
}
function effortTone(n: number) {
  if (n >= 7) return "bg-neutral-400 text-white";
  if (n >= 5) return "bg-neutral-200 text-black";
  return "bg-neutral-100 text-black/70";
}
function scoreTone(score: string) {
  const n = Number.parseFloat(score);
  if (n >= 10) return "bg-orange-500 text-white";
  if (n >= 5) return "bg-orange-200 text-black";
  return "bg-orange-50 text-black/70";
}

export function Frameworks() {
  return (
    <section id="frameworks" className="w-full scroll-mt-24">
      <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-12 lg:p-16">
        <SectionTag label="05 — Diagnostic & Analytical Layer" />
        <p className="mt-4 max-w-2xl text-2xl font-bold tracking-tight md:text-3xl">
          The frameworks behind the numbers.
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/55">
          Decide → execute → prove.
        </p>

        {/* RICE — heat-mapped like an index table: color signals magnitude, not just decoration */}
        <div className="mt-8 rounded-2xl bg-black/[0.03] p-6">
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
                  <span className="size-2.5 rounded-sm bg-blue-50" />
                  Low
                </span>
                <span className="flex items-center gap-1">
                  <span className="size-2.5 rounded-sm bg-blue-200" />
                  Mid
                </span>
                <span className="flex items-center gap-1">
                  <span className="size-2.5 rounded-sm bg-blue-600" />
                  High
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold uppercase tracking-wide text-black/40">
                  Score
                </span>
                <span className="flex items-center gap-1">
                  <span className="size-2.5 rounded-sm bg-orange-50" />
                  &lt;5
                </span>
                <span className="flex items-center gap-1">
                  <span className="size-2.5 rounded-sm bg-orange-200" />
                  5–9.9
                </span>
                <span className="flex items-center gap-1">
                  <span className="size-2.5 rounded-sm bg-orange-500" />
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
                <div className="mt-3 grid grid-cols-5 gap-1.5">
                  {[
                    { label: "R", value: row.reach, tone: reachTone(row.reach) },
                    { label: "I", value: row.impact, tone: impactTone(row.impact) },
                    { label: "C", value: row.confidence, tone: confidenceTone(row.confidence) },
                    { label: "E", value: row.effort, tone: effortTone(row.effort) },
                    { label: "Score", value: row.score, tone: scoreTone(row.score) },
                  ].map((cell) => (
                    <div
                      key={cell.label}
                      className={`rounded-lg py-1.5 text-center ${cell.tone}`}
                    >
                      <div className="text-[8px] font-semibold uppercase tracking-wide opacity-70">
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
            Score = (Reach × Impact × Confidence) / Effort — the same
            RICE model used to pick the 5-university clusters, applied
            here to sequence and resource each real chapter event.
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
                  QR onboarding at watch parties &amp; university
                  roadshows.
                </p>
              </div>
              <div className="text-xs text-black/25">↓</div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wide">
                  Activation
                </div>
                <p className="mt-1 text-xs leading-relaxed text-black/60">
                  &lt;2s signless gacha claim / first testnet deploy.
                </p>
              </div>
              <div className="text-xs text-black/25">↓</div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wide">
                  Retention
                </div>
                <p className="mt-1 text-xs leading-relaxed text-black/60">
                  POAP collection &amp; AcreLabs community loop.
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
      </div>
    </section>
  );
}
