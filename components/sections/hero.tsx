import { cn } from "cn";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { SectionTag } from "@/components/section-tag";
import { StatTile } from "@/components/stat-tile";
import { ArrowUpRight, Wallet, GraduationCap, CalendarCheck } from "lucide-react";

const TEAM1_STATS = [
  { value: "200K", label: "THB Budget", icon: Wallet, valueClassName: "text-[#FFCE4E]" },
  { value: "5", label: "Universities", icon: GraduationCap },
  { value: "8", label: "Events Hosted", icon: CalendarCheck },
];

export function Hero() {
  return (
    <section className="w-full">
      <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-12 lg:p-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-black/60 md:text-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-black" />
          Interlock GTM, Operations &amp; Builder Lead
        </div>

        <h1 className="mt-6 max-w-4xl break-words text-[1.75rem] font-bold leading-[1.1] tracking-tight min-[376px]:text-[2rem] sm:text-4xl sm:leading-[1.05] md:text-6xl">
          Sanpaphat Porntongprasert
        </h1>

        <p className="mt-6 max-w-2xl text-2xl font-bold leading-snug tracking-tight md:text-3xl">
          200K THB, Zero Marketing Hires — a 5-University Builder
          Pipeline Run Like a Product.
        </p>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-black/55 md:text-lg">
          RICE-scored prioritization, 8 events shipped solo, and builder
          acquisition at ~1,334 THB — 4–7x cheaper than industry grants.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/work/team1"
            className={cn(
              buttonVariants({ variant: "default" }),
              "h-auto rounded-full px-6 py-3 text-sm font-semibold"
            )}
          >
            See the Case Study
            <ArrowUpRight />
          </Link>
          <Link
            href="/#contact"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-auto rounded-full px-6 py-3 text-sm font-semibold"
            )}
          >
            Hire Me
          </Link>
        </div>

        <div className="mt-10 max-w-lg rounded-3xl bg-black p-4 text-white md:p-6">
          <SectionTag label="Avalanche Team1 — Ops Lead" tone="dark" className="mb-4" />
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {TEAM1_STATS.map((stat) => (
              <StatTile
                key={stat.label}
                value={stat.value}
                label={stat.label}
                icon={stat.icon}
                valueClassName={stat.valueClassName}
                tone="dark"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
