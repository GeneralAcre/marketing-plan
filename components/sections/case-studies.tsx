import { cn } from "cn";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { SectionTag } from "@/components/section-tag";
import { StatTile } from "@/components/stat-tile";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const SCOPE_OF_OWNERSHIP = [
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
    detail: "Primary point of contact for each campus's club and department relationship.",
  },
  {
    label: "Meetups & Content",
    detail: "Runs select community meetups and owns the program's online content.",
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
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="w-full scroll-mt-24">
      <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-12 lg:p-16">
        <SectionTag label="03 — Deep-Dive Case Studies" />
        <p className="mt-4 max-w-2xl text-2xl font-bold tracking-tight md:text-3xl">
          How the Avalanche Team1 program was built.
        </p>

        {/* Case Study — Avalanche Team1 */}
        <Card className="mt-8 gap-0 bg-black/[0.02] py-0 shadow-none ring-1 ring-black/5">
          <CardHeader className="grid-cols-1 gap-3 border-b border-black/8 px-6 py-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <Badge
                  variant="outline"
                  className="h-auto px-2.5 py-1 text-[11px] font-semibold text-black/60"
                >
                  Team Role — Ops Lead
                </Badge>
                <CardTitle className="mt-3 font-sans text-xl font-bold md:text-2xl">
                  Avalanche Team1 — 5-University Series
                </CardTitle>
                <CardDescription className="mt-1 text-sm text-black/55">
                  Strategic ADR #001 — density over spread
                </CardDescription>
                <p className="mt-1 text-[11px] uppercase tracking-wide text-black/35">
                  Reports to Thailand Country Lead — owns execution across
                  people/vendors, merch, university relations, meetups &amp;
                  content
                </p>
                <Link
                  href="/work/team1"
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "mt-4 h-auto rounded-full px-6 py-3 text-sm font-semibold"
                  )}
                >
                  Full Case Study
                  <ArrowUpRight />
                </Link>
              </div>
              <div className="flex flex-wrap gap-2">
                {["ADR #001", "200K THB Budget", "5 Chapters"].map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="h-auto px-2.5 py-1 text-[11px] font-medium text-black/60"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </CardHeader>

          <Tabs defaultValue="overview" className="gap-0">
            <div className="px-6 pt-5">
              <TabsList className="h-auto w-fit flex-wrap bg-black/5 p-1">
                <TabsTrigger
                  value="overview"
                  className="rounded-full px-4 py-1.5 text-[12px] font-semibold"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="process"
                  className="rounded-full px-4 py-1.5 text-[12px] font-semibold"
                >
                  Process
                </TabsTrigger>
                <TabsTrigger
                  value="scope"
                  className="rounded-full px-4 py-1.5 text-[12px] font-semibold"
                >
                  Scope
                </TabsTrigger>
                <TabsTrigger
                  value="events"
                  className="rounded-full px-4 py-1.5 text-[12px] font-semibold"
                >
                  Events
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent
              value="overview"
              className="m-0 grid grid-cols-1 gap-3 p-6 md:grid-cols-3"
            >
              {[
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
              ].map((stat) => (
                <StatTile
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  detail={stat.detail}
                  className="bg-white shadow-sm ring-1 ring-black/5"
                />
              ))}
            </TabsContent>

            <TabsContent value="process" className="m-0 p-6">
              <div className="text-[11px] font-semibold uppercase tracking-wide text-black/45">
                Pre-flight → Execution → Compounding
              </div>
              <div className="mt-4 grid grid-cols-1 items-stretch gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
                <div className="rounded-2xl bg-black/[0.03] p-4">
                  <div className="text-xs font-bold uppercase tracking-wide">
                    Pre-flight
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-black/60">
                    RICE-score selection, MOUs, curriculum.
                  </p>
                </div>
                <div className="hidden items-center justify-center text-black/30 md:flex">
                  <ArrowRight className="size-4" />
                </div>
                <div className="rounded-2xl bg-black/[0.03] p-4">
                  <div className="text-xs font-bold uppercase tracking-wide">
                    Execution
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-black/60">
                    Live deploy sessions, QR wallet onboarding.
                  </p>
                </div>
                <div className="hidden items-center justify-center text-black/30 md:flex">
                  <ArrowRight className="size-4" />
                </div>
                <div className="rounded-2xl bg-black/[0.03] p-4">
                  <div className="text-xs font-bold uppercase tracking-wide">
                    Compounding
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-black/60">
                    POAP retention, AcreLabs handoff, next chapter.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent
              value="scope"
              className="m-0 grid grid-cols-1 gap-3 p-6 sm:grid-cols-2"
            >
              {SCOPE_OF_OWNERSHIP.map((item) => (
                <div key={item.label} className="rounded-2xl bg-black/[0.03] p-5">
                  <div className="text-xs font-bold uppercase tracking-wide">
                    {item.label}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-black/60">
                    {item.detail}
                  </p>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="events" className="m-0 p-6">
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
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </section>
  );
}
