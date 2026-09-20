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
import { SectionTag } from "@/components/section-tag";
import { ArrowUpRight } from "lucide-react";

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
          <CardHeader className="grid-cols-1 gap-3 px-6 py-6">
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
        </Card>
      </div>
    </section>
  );
}
