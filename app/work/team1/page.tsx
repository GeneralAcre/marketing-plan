import type { Metadata } from "next";
import Image from "next/image";
import { ProjectDetailLayout } from "@/components/work/project-detail-layout";

export const metadata: Metadata = {
  title: "Marketing Campaigns",
  description:
    "A university growth and community program built through workshops, chapter launches, and builder education.",
};

type Campaign = {
  title: string;
  level: "Beginner" | "Intermediate";
  dateTime: string;
  date: string;
  image: string;
  alt: string;
  href?: string;
  stats: [label: string, value: number][];
};

const campaigns: Campaign[] = [
  {
    title: "Team1 x Chula: Avalanche Builder Workshop & Networking",
    level: "Beginner",
    dateTime: "2026-09-05",
    date: "5 September 2026",
    image: "/Campaign/Campaign-chula-workshop-1.jpg",
    alt: "Students collaborating during the Chula builder workshop",
    href: "https://luma.com/u3mxs2uu",
    stats: [
      ["Projects built", 0],
      ["Contracts deployed", 9],
      ["Wallets onboarded", 7],
      ["Telegram group joins", 10],
    ],
  },
  {
    title: "Team1 Codebase Hackathon: Chula Edition",
    level: "Intermediate",
    dateTime: "2026-09-26",
    date: "26 September 2026",
    image: "/Campaign/Campaign-codebase.jpeg",
    alt: "Team1 Codebase Hackathon: Chula Edition participants building projects",
    href: "https://luma.com/nd66d2eg",
    stats: [
      ["Projects built", 11],
      ["Contracts deployed", 34],
      ["Wallets onboarded", 30],
      ["Telegram group joins", 30],
    ],
  },
  {
    title: "Team1 x KU: Introduction to Blockchain",
    level: "Beginner",
    dateTime: "2026-10-11",
    date: "11 October 2026",
    image: "/Campaign/Campaign-kaset.jpg",
    alt: "Students attending Team1 x KU's Introduction to Blockchain campaign",
    href: "https://x.com/Acrepedia/status/2109252406076899578?s=20",
    stats: [
      ["Projects built", 0],
      ["Contracts deployed", 1],
      ["Wallets onboarded", 13],
      ["Telegram group joins", 20],
    ],
  },
];

const campaignResults = [
  ["Projects built", "Projects built"],
  ["Smart contracts deployed", "Contracts deployed"],
  ["Wallets onboarded", "Wallets onboarded"],
  ["Telegram group joins", "Telegram group joins"],
].map(([label, statLabel]) => ({
  label,
  value: String(
    campaigns.reduce(
      (total, campaign) =>
        total + (campaign.stats.find(([name]) => name === statLabel)?.[1] ?? 0),
      0,
    ),
  ),
}));

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
      results={campaignResults}
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

            <div className="mt-6 grid gap-3">
              {campaigns.map((campaign, index) => (
                <article
                  key={campaign.title}
                  className={`overflow-hidden bg-white ${index > 0 ? "border-t-2 border-[#BB0102]" : ""}`}
                >
                  <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <figure className="relative aspect-[4/3] min-w-0 overflow-hidden bg-[#e9e8e4] sm:aspect-auto sm:min-h-[320px]">
                      <Image
                        src={campaign.image}
                        alt={campaign.alt}
                        fill
                        sizes="(min-width: 1024px) 28vw, 92vw"
                        className="object-cover"
                      />
                    </figure>
                    <div className="flex flex-col justify-center py-1 pr-4 sm:py-5 sm:pr-5">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
                        <h3 className="min-w-0 text-base font-semibold leading-snug text-black sm:flex-1 sm:text-base">{campaign.title}</h3>
                        <span className="inline-flex shrink-0 self-end rounded-md bg-black px-3 py-1.5 text-xs font-semibold text-white sm:self-start">
                          {campaign.level}
                        </span>
                      </div>
                      <time dateTime={campaign.dateTime} className="mt-1 block text-sm text-black/55">{campaign.date}</time>
                      <dl className="mt-5 grid grid-cols-2 gap-x-5 gap-y-4">
                        {campaign.stats.map(([label, value]) => (
                          <div key={label}><dt className="text-xs text-black/55">{label}</dt><dd className="mt-0.5 text-lg font-semibold text-[#BB0102]">{value}</dd></div>
                        ))}
                      </dl>
                      {campaign.href ? (
                        <a
                          href={campaign.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-6 inline-flex h-fit w-full max-w-[240px] self-center justify-center rounded-md bg-[#BB0102] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#970102] sm:w-fit sm:max-w-none sm:self-end"
                        >
                          Visit
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>

          </div>
    </ProjectDetailLayout>
  );
}
