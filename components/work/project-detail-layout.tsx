import type { ReactNode } from "react";
import Link from "next/link";

type ProjectDetail = {
  title: string;
  content: ReactNode;
};

type ProjectDetailLayoutProps = {
  title: ReactNode;
  description: ReactNode;
  details: ProjectDetail[];
  eyebrow: string;
  overviewTitle: string;
  children: ReactNode;
};

export function ProjectDetailLayout({
  title,
  description,
  details,
  eyebrow,
  overviewTitle,
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
        <h1 className="text-[clamp(2.75rem,5vw,5rem)] font-black uppercase leading-[0.88] tracking-[-0.07em]">
          {title}
        </h1>
        <section className="mt-10 max-w-xl">
          <h2 className="text-sm font-semibold">Description</h2>
          <div className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
            {description}
          </div>
        </section>
        {details.map((detail) => (
          <section
            key={detail.title}
            className="mt-8 max-w-xl border-t border-white/20 pt-6"
          >
            <h2 className="text-sm font-semibold">{detail.title}</h2>
            <div className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
              {detail.content}
            </div>
          </section>
        ))}
      </section>

      <section className="flex min-h-[60vh] flex-col items-center bg-white px-6 py-12 lg:min-h-0 lg:px-10 lg:py-16">
        <div className="w-[86%] max-w-[1100px]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-black/45">
            {eyebrow}
          </p>
          <h2 className="mt-1 text-xl font-semibold leading-tight text-black sm:text-2xl">
            {overviewTitle}
          </h2>
          {children}
        </div>
      </section>
    </main>
  );
}
