import type { Metadata } from "next";
import Image from "next/image";
import { ProjectDetailLayout } from "@/components/work/project-detail-layout";

export const metadata: Metadata = {
  title: "Content & Creative Production",
  description: "Content and creative production work by Sanpaphat Porntongprasert.",
};

export default function ContentCreativePage() {
  return (
    <ProjectDetailLayout
      title={<>Content &amp;<br />Creative<br />Production</>}
      titleClassName="text-[clamp(2rem,3.2vw,3.75rem)]"
      eyebrow="Content & Creative Production"
      overviewTitle="Team1 Hackathon Promotion"
    >
      <figure className="mt-5">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#e9e8e4]">
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
        <h3 className="text-xs font-semibold uppercase tracking-wide text-black/50">Content</h3>
        <p className="mt-2 text-sm leading-relaxed text-black/75">
          I develop content ideas and brief the team to create event posters and promotional materials. For the Team1 hackathon, I created the{" "}
          <a href="https://chula.hackathon.team1.quarkhadron.dev/" target="_blank" rel="noopener noreferrer" className="font-medium text-[#BB0102] underline underline-offset-2">event website</a>, shared{" "}
          <a href="https://x.com/Acrepedia/status/2100866277145473215?s=20" target="_blank" rel="noopener noreferrer" className="font-medium text-[#BB0102] underline underline-offset-2">video content</a>, and supported{" "}
          <a href="https://x.com/Acrepedia/status/2099442038093848933?s=20" target="_blank" rel="noopener noreferrer" className="font-medium text-[#BB0102] underline underline-offset-2">on-ground promotion</a> to drive participation.
        </p>
      </section>

      <section className="mt-6 border-t border-black/15 pt-5">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-black/50">KPIs &amp; Reach</h3>
        <p className="mt-2 text-sm leading-relaxed text-black/75">
          Campaign performance is measured through hackathon website visits, promotional video reach, and event registrations.
        </p>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {["Website visits", "Video reach", "Hackathon registrations"].map((metric) => (
            <div key={metric} className="border-t-2 border-[#BB0102] bg-[#BB0102]/[0.06] p-4">
              <p className="text-sm font-semibold text-[#BB0102]">{metric}</p>
            </div>
          ))}
        </div>
      </section>
    </ProjectDetailLayout>
  );
}
