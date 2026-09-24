import type { Metadata } from "next";
import Image from "next/image";
import { ProjectDetailLayout } from "@/components/work/project-detail-layout";

export const metadata: Metadata = {
  title: "Avalanche Team1 — Case Study",
  description:
    "A university growth and community program built through workshops, chapter launches, and builder education.",
};

export default function Team1CaseStudy() {
  return (
    <ProjectDetailLayout
      title={<>Avalanche<br />Team1</>}
      description="Team1 is a global network of builders, developers, creatives, and community members growing the Avalanche ecosystem. As Thailand Operations Lead, I organize local university and community programs that bring people together to learn, build, and contribute."
      eyebrow="Campaign Overview"
      overviewTitle="University Builder Series"
      details={[
        {
          title: "Target Audience",
          content: "University students (undergraduates and builders) across Thailand.",
        },
        {
          title: "Strategic Objective",
          content: "Capture first-mover advantage by establishing the premier collegiate Web3 community network before competitors enter the market.",
        },
        {
          title: "Timeline",
          content: (
            <ol className="divide-y divide-white/15">
              {["September", "October", "November"].map((month) => (
                <li key={month} className="flex items-baseline justify-between gap-4 py-3 first:pt-1 last:pb-1">
                  <h3 className="text-sm font-medium">{month}</h3>
                  <time dateTime={`2026-${month === "September" ? "09" : month === "October" ? "10" : "11"}`} className="text-xs text-white/55">2026</time>
                </li>
              ))}
            </ol>
          ),
        },
        {
          title: "Result",
          content: (
            <div className="grid grid-cols-2 gap-x-5 gap-y-4">
              <div><p className="text-2xl font-semibold">18</p><p className="mt-1 text-[11px] text-white/55">Attendees</p></div>
              <div><p className="text-2xl font-semibold">7</p><p className="mt-1 text-[11px] text-white/55">Wallets Signups</p></div>
              <div><p className="text-2xl font-semibold">9</p><p className="mt-1 text-[11px] text-white/55">Smart contracts deployed</p></div>
              <div><p className="text-2xl font-semibold">0</p><p className="mt-1 text-[11px] text-white/55">Project Built</p></div>
            </div>
          ),
        },
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
                className="object-cover"
              />
            </div>
          </div>
          <div className="mt-6 w-full">
            <div className="grid gap-x-8 gap-y-6">
              <section className="rounded-sm bg-black p-4 text-white sm:p-5">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-white/55">Rollout</h3>
                <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
                  {["Chulalongkorn", "Thammasat", "Kasetsart", "Mahidol", "KMITL"].map((university) => (
                    <div key={university} className="flex min-h-14 items-center bg-white/10 px-3 py-2 text-sm font-medium">
                      {university}
                    </div>
                  ))}
                </div>
                <p className="mt-4 border-t border-white/20 pt-3 text-sm leading-relaxed text-white/75">
                  Next: expand to regional campuses nationwide.
                </p>
              </section>
            </div>

            <section className="mt-6 border-t border-black/15 pt-5">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-black/50">Execution Framework</h3>
              <p className="mt-2 text-sm leading-relaxed text-black/75">A two-stage pipeline moves participants from hands-on learning to building and shipping.</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="bg-black/[0.035] p-4">
                  <p className="text-sm font-semibold">01 · Workshops</p>
                  <p className="mt-2 text-sm leading-relaxed text-black/65">Smart contract development, tooling, and Avalanche ecosystem fundamentals.</p>
                </div>
                <div className="bg-black/[0.035] p-4">
                  <p className="text-sm font-semibold">02 · Hackathons</p>
                  <p className="mt-2 text-sm leading-relaxed text-black/65">Focused build sessions designed to turn learning into deployed products.</p>
                </div>
              </div>
            </section>

            <div className="mt-6 grid gap-5 sm:grid-cols-2 sm:items-stretch">
              <figure className="relative min-h-[280px]">
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
              <div>
                <h3 className="text-sm font-semibold leading-snug text-black sm:text-base">
                  Team1 x Chula: Avalanche Builder Workshop &amp; Networking
                </h3>
                <time dateTime="2026-09-05" className="mt-1 block text-xs text-black/55">
                  5 September 2026
                </time>
                <a
                  href="https://luma.com/u3mxs2uu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex rounded-full bg-black px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-black/75"
                >
                  Visit
                </a>
                <div className="mt-5">
                  <dl className="mt-2 grid grid-cols-2 gap-x-4 gap-y-3">
                    <div><dt className="text-xs text-black/55">Registrations</dt><dd className="mt-0.5 text-lg font-semibold">31</dd></div>
                    <div><dt className="text-xs text-black/55">Attendees</dt><dd className="mt-0.5 text-lg font-semibold">18</dd></div>
                    <div><dt className="text-xs text-black/55">Wallets deployed</dt><dd className="mt-0.5 text-lg font-semibold">7</dd></div>
                    <div><dt className="text-xs text-black/55">Contracts deployed</dt><dd className="mt-0.5 text-lg font-semibold">9</dd></div>
                  </dl>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <article className="bg-black/[0.035] p-4">
                <h3 className="text-sm font-semibold leading-snug">Team1 Codebase Hackathon: Chula Edition</h3>
                <time dateTime="2026-09-26" className="mt-2 block text-xs text-black/55">26 September 2026</time>
                <p className="mt-4 text-[10px] font-semibold uppercase tracking-wide text-black/50">KPIs</p>
                <ul className="mt-2 space-y-1 text-xs leading-relaxed text-black/70">
                  <li>Builders participating</li>
                  <li>Smart contracts deployed</li>
                  <li>Functional MVPs shipped</li>
                </ul>
              </article>
              <article className="bg-black/[0.035] p-4">
                <h3 className="text-sm font-semibold leading-snug">Team1 x KU: Introduction to Blockchain</h3>
                <time dateTime="2026-09-27" className="mt-2 block text-xs text-black/55">27 September 2026</time>
                <p className="mt-4 text-[10px] font-semibold uppercase tracking-wide text-black/50">KPIs</p>
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
