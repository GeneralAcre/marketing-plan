import type { Metadata } from "next";
import Image from "next/image";
import { ProjectDetailLayout } from "@/components/work/project-detail-layout";

export const metadata: Metadata = {
  title: "Marketing Campaigns",
  description:
    "A university growth and community program built through workshops, chapter launches, and builder education.",
};

export default function Team1CaseStudy() {
  return (
    <ProjectDetailLayout
      title={<>Marketing<br />Campaigns</>}
      titleColorClassName="text-[#BB0102]"
      eyebrow="Campaign Overview"
      overviewTitle="University Builder Series"
      overviewTitleClassName="hidden lg:block"
      strategicObjective="Build a university community that moves students from blockchain education into hands-on product building on Avalanche."
      timeline={[]}
      resultsTitle="Chula Workshop Results"
      results={[
        { value: "31", label: "Registrations" },
        { value: "18", label: "Attendees" },
        { value: "7", label: "Wallets deployed" },
        { value: "9", label: "Contracts deployed" },
      ]}
    >
          <div className="mt-5 w-full">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#e9e8e4]">
              <Image
                src="/Campaign/Campaign-1.jpg"
                alt="University builders gathered for an Avalanche Builder Hub session"
                fill
                priority
                sizes="(min-width: 1024px) 28vw, 86vw"
                className="object-contain"
              />
            </div>
          </div>
          <h2 className="mt-4 text-xl font-semibold leading-tight text-black sm:text-2xl lg:hidden">
            University Builder Series
          </h2>
          <div className="mt-6 w-full">
            <div className="grid gap-x-8 gap-y-6">
              <section className="rounded-sm border border-black/10 border-l-4 border-l-[#BB0102] bg-[#BB0102]/[0.035] p-4 sm:p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-black/55">Rollout</h3>
                  <p className="text-xs text-black/55">5 university campuses</p>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {["Chulalongkorn", "Thammasat", "Kasetsart", "Mahidol", "KMITL"].map((university) => (
                    <li key={university} className="rounded-full border border-black/10 bg-white px-3 py-2 text-sm font-medium text-black/80">
                      {university}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1 border-t border-black/10 pt-4">
                  <span className="text-xs font-semibold uppercase tracking-wide text-[#BB0102]">Next phase</span>
                  <p className="text-sm leading-relaxed text-black/70">Expand to regional campuses nationwide.</p>
                </div>
              </section>
            </div>

            <section className="mt-6 border-t border-black/15 pt-5">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-black/50">Execution Framework</h3>
              <p className="mt-2 text-sm leading-relaxed text-black/75">A two-stage pipeline moves participants from hands-on learning to building and shipping.</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="border-t-2 border-[#BB0102] bg-[#BB0102]/[0.06] p-4">
                  <p className="text-sm font-semibold">01 · Workshops</p>
                  <p className="mt-2 text-sm leading-relaxed text-black/65">Smart contract development, tooling, and Avalanche ecosystem fundamentals.</p>
                </div>
                <div className="border-t-2 border-[#BB0102] bg-[#BB0102]/[0.06] p-4">
                  <p className="text-sm font-semibold">02 · Hackathons</p>
                  <p className="mt-2 text-sm leading-relaxed text-black/65">Focused build sessions designed to turn learning into deployed products.</p>
                </div>
              </div>
            </section>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-5">
              <div className="order-1 min-w-0 sm:col-start-2 sm:row-start-1">
                <h3 className="text-base font-semibold leading-snug text-black sm:text-base">
                  Team1 x Chula: Avalanche Builder Workshop &amp; Networking
                </h3>
                <time dateTime="2026-09-05" className="mt-1 block text-sm text-black/55">
                  5 September 2026
                </time>
              </div>
              <figure className="relative order-2 aspect-[4/3] min-w-0 overflow-hidden bg-[#e9e8e4] sm:col-start-1 sm:row-span-3 sm:row-start-1 sm:aspect-auto sm:min-h-[280px]">
                <div className="absolute inset-0 overflow-hidden bg-[#e9e8e4]">
                <Image
                  src="/Campaign/Campaign-chula-workshop-1.jpg"
                  alt="Students collaborating during the Chula builder workshop"
                  fill
                  sizes="(min-width: 1024px) 28vw, 50vw"
                  className="object-cover"
                />
                </div>
              </figure>
              <dl className="order-3 grid grid-cols-2 gap-x-4 gap-y-3 sm:col-start-2 sm:row-start-2">
                <div><dt className="text-xs text-black/55">Registrations</dt><dd className="mt-0.5 text-lg font-semibold text-[#BB0102]">31</dd></div>
                <div><dt className="text-xs text-black/55">Attendees</dt><dd className="mt-0.5 text-lg font-semibold text-[#BB0102]">18</dd></div>
                <div><dt className="text-xs text-black/55">Wallets deployed</dt><dd className="mt-0.5 text-lg font-semibold text-[#BB0102]">7</dd></div>
                <div><dt className="text-xs text-black/55">Contracts deployed</dt><dd className="mt-0.5 text-lg font-semibold text-[#BB0102]">9</dd></div>
              </dl>
              <a
                href="https://luma.com/u3mxs2uu"
                target="_blank"
                rel="noopener noreferrer"
                className="order-4 inline-flex h-fit w-fit self-start justify-self-start rounded-md bg-[#BB0102] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#970102] sm:col-start-2 sm:row-start-3"
              >
                Visit
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <article className="border-t-2 border-[#BB0102] bg-[#BB0102]/[0.06] p-4">
                <h3 className="text-sm font-semibold leading-snug">Team1 Codebase Hackathon: Chula Edition</h3>
                <time dateTime="2026-09-26" className="mt-2 block text-xs text-black/55">26 September 2026</time>
                <p className="mt-4 text-[10px] font-semibold uppercase tracking-wide text-[#BB0102]">KPIs</p>
                <ul className="mt-2 space-y-1 text-xs leading-relaxed text-black/70">
                  <li>Builders participating</li>
                  <li>Smart contracts deployed</li>
                  <li>Functional MVPs shipped</li>
                </ul>
              </article>
              <article className="border-t-2 border-[#BB0102] bg-[#BB0102]/[0.06] p-4">
                <h3 className="text-sm font-semibold leading-snug">Team1 x KU: Introduction to Blockchain</h3>
                <time dateTime="2026-09-27" className="mt-2 block text-xs text-black/55">27 September 2026</time>
                <p className="mt-4 text-[10px] font-semibold uppercase tracking-wide text-[#BB0102]">KPIs</p>
                <ul className="mt-2 space-y-1 text-xs leading-relaxed text-black/70">
                  <li>Registrations and attendance</li>
                  <li>Wallet sign-ups</li>
                  <li>Community joins</li>
                </ul>
              </article>
            </div>

          </div>
    </ProjectDetailLayout>
  );
}
