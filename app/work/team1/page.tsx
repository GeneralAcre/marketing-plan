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
      overviewTitle="University Builder Series"
      overviewTitleClassName="hidden lg:block"
      strategicObjective="Build a university community that moves students from blockchain education into hands-on product building on Avalanche."
      timeline={[]}
      resultsTitle="Campaign Results"
      results={[
        { value: "11", label: "Projects built" },
        { value: "43", label: "Smart contracts deployed" },
        { value: "37", label: "Wallets onboarded" },
        { value: "30", label: "Telegram group joins" },
      ]}
    >
          <div className="-mx-6 -mt-12 w-[calc(100%+3rem)] lg:mx-0 lg:mt-5 lg:w-full">
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
          <h2 className="mt-4 text-xl font-semibold leading-tight text-black sm:text-2xl lg:hidden">
            University Builder Series
          </h2>
          <div className="mt-6 w-full">
            <div className="mt-6 w-full">
              <div className="relative aspect-[1.58] w-full overflow-hidden">
                <Image
                  src="/Campaign/campaign-execute-transparent.png"
                  alt="Campaign execution pipeline: five university campuses feed into workshops, then hackathons, followed by nationwide expansion."
                  fill
                  sizes="(min-width: 1024px) 56vw, 92vw"
                  className="object-contain"
                />
              </div>
            </div>

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
                <div><dt className="text-xs text-black/55">Wallets onboarded</dt><dd className="mt-0.5 text-lg font-semibold text-[#BB0102]">7</dd></div>
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
              <article className="col-span-2 overflow-hidden border-t-2 border-[#BB0102] bg-white">
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                  <figure className="relative aspect-[4/3] min-w-0 overflow-hidden bg-[#e9e8e4] sm:aspect-auto sm:min-h-[320px]">
                    <Image
                      src="/Campaign/Campaign-codebase.jpeg"
                      alt="Team1 Codebase Hackathon: Chula Edition participants building projects"
                      fill
                      sizes="(min-width: 1024px) 28vw, 92vw"
                      className="object-cover"
                    />
                  </figure>
                  <div className="flex flex-col justify-center py-1 pr-4 sm:py-5 sm:pr-5">
                    <h3 className="text-base font-semibold leading-snug text-black sm:text-base">Team1 Codebase Hackathon: Chula Edition</h3>
                    <time dateTime="2026-09-26" className="mt-1 block text-sm text-black/55">26 September 2026</time>
                    <dl className="mt-5 grid grid-cols-2 gap-x-5 gap-y-4">
                      <div><dt className="text-xs text-black/55">Projects built</dt><dd className="mt-0.5 text-lg font-semibold text-[#BB0102]">11</dd></div>
                      <div><dt className="text-xs text-black/55">Contracts deployed</dt><dd className="mt-0.5 text-lg font-semibold text-[#BB0102]">34</dd></div>
                      <div><dt className="text-xs text-black/55">Wallets onboarded</dt><dd className="mt-0.5 text-lg font-semibold text-[#BB0102]">30</dd></div>
                      <div><dt className="text-xs text-black/55">Telegram group joins</dt><dd className="mt-0.5 text-lg font-semibold text-[#BB0102]">30</dd></div>
                    </dl>
                    <a
                      href="https://luma.com/nd66d2eg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex h-fit w-fit rounded-md bg-[#BB0102] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#970102]"
                    >
                      Visit
                    </a>
                  </div>
                </div>
              </article>
              <article className="border-t-2 border-[#BB0102] bg-[#BB0102]/[0.06] p-4">
                <h3 className="text-sm font-semibold leading-snug">Team1 x KU: Introduction to Blockchain</h3>
                <time dateTime="2026-09-27" className="mt-2 block text-xs text-black/55">27 September 2026</time>
                <p className="mt-4 text-[10px] font-semibold uppercase tracking-wide text-[#BB0102]">KPIs</p>
                <ul className="mt-2 space-y-1 text-xs leading-relaxed text-black/70">
                  <li>Wallet sign-ups</li>
                  <li>Telegram group joins</li>
                </ul>
              </article>
            </div>

          </div>
    </ProjectDetailLayout>
  );
}
