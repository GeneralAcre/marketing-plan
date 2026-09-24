import type { ReactNode } from "react";
import Link from "next/link";

type ProjectDetailLayoutProps = {
  title: ReactNode;
  titleClassName?: string;
  eyebrow?: string;
  overviewTitle?: string;
  description?: string;
  targetAudience?: string;
  strategicObjective?: string;
  timeline?: { label: string; year?: string; dateTime?: string }[];
  results?: { value: string; label: string }[];
  children?: ReactNode;
};

export function ProjectDetailLayout({
  title,
  titleClassName,
  eyebrow,
  overviewTitle,
  description = "Team1 is a global network of builders, developers, creatives, and community members growing the Avalanche ecosystem. As Thailand Operations Lead, I organize local university and community programs that bring people together to learn, build, and contribute.",
  targetAudience = "University students (undergraduates and builders) across Thailand.",
  strategicObjective = "Capture first-mover advantage by establishing the premier collegiate Web3 community network before competitors enter the market.",
  timeline = [{ label: "May – Present", year: "2026", dateTime: "2026-05" }],
  results = [
    { value: "18", label: "Attendees" },
    { value: "7", label: "Wallets Signups" },
    { value: "9", label: "Smart contracts deployed" },
    { value: "0", label: "Project Built" },
  ],
  children,
}: ProjectDetailLayoutProps) {
  return (
    <main className="grid flex-1 lg:min-h-screen lg:grid-cols-[minmax(380px,0.9fr)_minmax(0,1.7fr)]">
      <section className="bg-black px-6 py-8 text-white sm:px-10 lg:px-12 lg:py-10">
        <Link
          href="/#work"
          className="mb-10 inline-flex w-fit items-center rounded-full border border-white/35 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-white hover:text-black"
        >
          Back to work
        </Link>
        <h1 className={`font-black uppercase leading-[0.88] tracking-[-0.07em] ${titleClassName ?? "text-[clamp(2.75rem,5vw,5rem)]"}`}>
          {title}
        </h1>
        <section className="mt-10 max-w-xl">
          <h2 className="text-sm font-semibold">Description</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
            {description}
          </p>
        </section>
        <section className="mt-8 max-w-xl border-t border-white/20 pt-6">
          <h2 className="text-sm font-semibold">Target Audience</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
            {targetAudience}
          </p>
        </section>
        <section className="mt-8 max-w-xl border-t border-white/20 pt-6">
          <h2 className="text-sm font-semibold">Strategic Objective</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
            {strategicObjective}
          </p>
        </section>
        <section className="mt-8 max-w-xl border-t border-white/20 pt-6">
          <h2 className="text-sm font-semibold">Timeline</h2>
          <ol className="mt-3 divide-y divide-white/15">
            {timeline.map((item) => (
              <li key={`${item.label}-${item.year ?? ""}`} className="flex items-baseline justify-between gap-4 py-3 first:pt-1 last:pb-1">
                <h3 className="text-sm font-medium">{item.label}</h3>
                {item.year && <time dateTime={item.dateTime} className="text-xs text-white/55">{item.year}</time>}
              </li>
            ))}
          </ol>
        </section>
        <section className="mt-8 max-w-xl border-t border-white/20 pt-6">
          <h2 className="text-sm font-semibold">Result</h2>
          <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-4">
            {results.map((result) => (
              <div key={result.label}>
                <p className="text-2xl font-semibold">{result.value}</p>
                <p className="mt-1 text-[11px] text-white/55">{result.label}</p>
              </div>
            ))}
          </div>
        </section>
      </section>

      <section className="flex min-h-[60vh] flex-col items-center bg-white px-6 py-12 lg:min-h-0 lg:px-10 lg:py-16">
        {(eyebrow || overviewTitle || children) && (
          <div className="w-[86%] max-w-[1100px]">
            {eyebrow && (
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-black/45">
                {eyebrow}
              </p>
            )}
            {overviewTitle && (
              <h2 className="mt-1 text-xl font-semibold leading-tight text-black sm:text-2xl">
                {overviewTitle}
              </h2>
            )}
            {children}
          </div>
        )}
      </section>
    </main>
  );
}
