import type { Metadata } from "next";
import Image from "next/image";
import { ProjectDetailLayout } from "@/components/work/project-detail-layout";
import acreLabsImage from "../../../public/content/content-2.png";

export const metadata: Metadata = {
  title: "Content & Creative Production",
  description: "Content and creative production work by Sanpaphat Porntongprasert.",
};

export default function ContentCreativePage() {
  return (
    <ProjectDetailLayout
      title={<>Content &amp;<br />Creative<br />Production</>}
      titleClassName="text-[clamp(2rem,3.2vw,3.75rem)]"
      titleColorClassName="text-[#A5A3FF]"
      eyebrow="Content & Creative Production"
      overviewTitle="Selected Content Projects"
      description="I proactively develop content ideas and recommendations for Team1 Thailand. I shape creative direction for event graphics and promotion, then brief creative collaborators to bring those ideas to life."
      targetAudience="Thai university students, builders, and Web3 community members interested in Team1 events."
      strategicObjective="Increase awareness and participation in Team1 events through clear, engaging creative concepts and coordinated promotion."
      timeline={[]}
      results={[]}
    >
      <h3 className="mt-5 text-lg font-semibold text-black">Team1 Hackathon Promotion</h3>
      <figure className="mt-5">
        <div className="relative aspect-[1892/860] w-full overflow-hidden bg-[#e9e8e4]">
          <Image
            src="/content/Content-1.png"
            alt="Team1 hackathon content campaign visual"
            fill
            priority
            sizes="(min-width: 1024px) 55vw, 86vw"
            className="object-cover"
          />
        </div>
      </figure>
      <section className="mt-6 border-t border-black/15 pt-5">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-black/50">Execution</h3>
        <p className="mt-2 text-sm leading-relaxed text-black/75">
          I developed the campaign concept and creative direction, then briefed <a href="https://x.com/Quark_Hadron" target="_blank" rel="noopener noreferrer" className="rounded bg-[#040011]/10 px-1 font-semibold text-[#040011] underline underline-offset-2 hover:bg-[#040011]/20">Quark</a> to create the campaign graphics and build the{" "}
          <a href="https://chula.hackathon.team1.quarkhadron.dev/" target="_blank" rel="noopener noreferrer" className="rounded bg-[#040011]/10 px-1 font-semibold text-[#040011] underline underline-offset-2 hover:bg-[#040011]/20">event website</a>. I shared{" "}
          <a href="https://x.com/Acrepedia/status/2100866277145473215?s=20" target="_blank" rel="noopener noreferrer" className="rounded bg-[#040011]/10 px-1 font-semibold text-[#040011] underline underline-offset-2 hover:bg-[#040011]/20">video content</a>, and supported{" "}
          <a href="https://x.com/Acrepedia/status/2099442038093848933?s=20" target="_blank" rel="noopener noreferrer" className="rounded bg-[#040011]/10 px-1 font-semibold text-[#040011] underline underline-offset-2 hover:bg-[#040011]/20">on-ground promotion</a> as part of the campaign rollout.
        </p>
      </section>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <figure>
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#e9e8e4]">
            <Image
              src="/content/Content-3.jpg"
              alt="Team1 hackathon promotional creative"
              fill
              sizes="(min-width: 1024px) 28vw, 86vw"
              className="object-contain"
            />
          </div>
        </figure>
        <figure>
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#e9e8e4]">
            <Image
              src="/content/Content-4.jpg"
              alt="Additional Team1 hackathon campaign creative"
              fill
              sizes="(min-width: 1024px) 28vw, 86vw"
              className="object-contain"
            />
          </div>
        </figure>
      </div>

      <section className="mt-6 border-t border-black/15 pt-5">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-black/50">Hackathon Result</h3>
        <div className="mt-3 border-t-2 border-[#040011] bg-[#040011]/[0.06] p-4">
          <p className="text-3xl font-semibold text-[#040011]">10,000</p>
          <p className="mt-1 text-sm text-black/70">Hackathon website page views</p>
        </div>
      </section>

      <section className="mt-6 border-t border-black/15 pt-5">
        <h3 className="text-lg font-semibold text-black">AcreLabs: Avalanche Moment</h3>
        <figure className="mt-4">
          <div className="relative aspect-[2692/1904] w-full overflow-hidden bg-[#e9e8e4]">
            <Image
              src={acreLabsImage}
              alt="AcreLabs Avalanche moment visual"
              fill
              sizes="(min-width: 1024px) 55vw, 86vw"
              className="object-cover"
            />
          </div>
        </figure>
        <p className="mt-2 text-sm leading-relaxed text-black/75">
          I built <a href="https://www.acrelabs.fun/" target="_blank" rel="noopener noreferrer" className="rounded bg-[#040011]/10 px-1 font-semibold text-[#040011] underline underline-offset-2 hover:bg-[#040011]/20">AcreLabs</a> as my personal project to publish content about Avalanche and encourage people to join our events. To reward attendees, we give away NFTs at events. <a href="https://x.com/Memofrogwell" target="_blank" rel="noopener noreferrer" className="rounded bg-[#040011]/10 px-1 font-semibold text-[#040011] underline underline-offset-2 hover:bg-[#040011]/20">Frogwell</a> creates all of the NFT artwork.
        </p>
      </section>

      <section className="mt-6 border-t border-black/15 pt-5">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-black/50">AcreLabs NFT Claims</h3>
        <p className="mt-2 text-sm leading-relaxed text-black/75">
          Two additional event NFTs are not deployed yet.
        </p>
        <div className="mt-4 border-t-2 border-[#040011] bg-[#040011]/[0.06] p-4">
          <p className="text-3xl font-semibold text-[#040011]">29</p>
          <p className="mt-1 text-sm font-medium text-black">NFT claims across three deployed event NFTs</p>
        </div>
      </section>

    </ProjectDetailLayout>
  );
}
