import type { Metadata } from "next";
import Image from "next/image";
import { ProjectDetailLayout } from "@/components/work/project-detail-layout";

export const metadata: Metadata = {
  title: "Product Management & Merchandising",
  description: "Product management and merchandising work by Sanpaphat Porntongprasert.",
};

const MERCH_IMAGES = [
  { src: "/merch/Merch-1.jpg", alt: "Team1 branded red jersey" },
  { src: "/merch/Merch-2.jpg", alt: "Team1 and Avalanche event sticker designs" },
  { src: "/merch/Merch-3.jpg", alt: "Team1 red and white shirts" },
  { src: "/merch/Merch-4.jpg", alt: "Team1 branded red jersey detail" },
];

export default function ProductManagementPage() {
  return (
    <ProjectDetailLayout
      title={<>Product<br />Management &amp;<br />Merchandising</>}
      titleClassName="text-[clamp(2rem,3.2vw,3.75rem)]"
      titleColorClassName="text-[#ADD795]"
      eyebrow="Product Management & Merchandising"
      overviewTitle="Team1 Merchandise"
      description="I manage merchandise projects from concept to production. I define event needs, brief designers, manage the budget, and coordinate production timelines. My role is project management and creative direction; the designer creates the graphics."
      targetAudience="Team1 community members, university students, builders, and event attendees across Thailand."
      strategicObjective="Develop useful, event-ready merchandise for the Team1 community while managing project budgets and production timelines."
      timeline={[]}
      results={[{ value: "฿200K", label: "Budget managed" }]}
    >
      <figure className="mt-5">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#ADD795]/20">
          <Image
            src={MERCH_IMAGES[1].src}
            alt={MERCH_IMAGES[1].alt}
            fill
            priority
            sizes="(min-width: 1024px) 55vw, 86vw"
            className="object-cover"
          />
        </div>
      </figure>

      <section className="mt-6 border-t border-[#ADD795]/70 pt-5">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-black/75">
          Merchandise Project Management
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-black/75">
          I take merchandise from an initial idea to event-ready production. I consider the event and its audience, develop merchandise concepts, plan the budget, brief the designer, and coordinate the production timeline. My role is to manage the project and creative direction; I do not create the graphics myself.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <article className="border-t-2 border-[#ADD795] bg-[#ADD795]/10 p-4">
            <h4 className="text-sm font-semibold">01 · Concept &amp; Planning</h4>
            <p className="mt-2 text-sm leading-relaxed text-black/65">
              Come up with merchandise ideas that fit the event, audience, and community, then define what needs to be produced.
            </p>
          </article>
          <article className="border-t-2 border-[#ADD795] bg-[#ADD795]/10 p-4">
            <h4 className="text-sm font-semibold">02 · Budget Management</h4>
            <p className="mt-2 text-sm leading-relaxed text-black/65">
              Plan and track the merchandise budget, balancing event needs with available resources.
            </p>
          </article>
          <article className="border-t-2 border-[#ADD795] bg-[#ADD795]/10 p-4">
            <h4 className="text-sm font-semibold">03 · Design Brief &amp; Production</h4>
            <p className="mt-2 text-sm leading-relaxed text-black/65">
              Brief the designer on creative direction and requirements, then coordinate production so merchandise is ready on schedule.
            </p>
            <a
              href="https://x.com/Memofrogwell"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-between gap-3 border border-[#ADD795] bg-[#ADD795] px-3 py-3 text-sm transition-colors hover:bg-[#ADD795]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22381B]"
            >
              <span>
                <span className="block font-semibold text-[#22381B]">Frogwell</span>
                <span className="mt-0.5 block text-xs text-black/60">View designer profile</span>
              </span>
            </a>
          </article>
        </div>
      </section>

      <section className="mt-6 border-t border-[#ADD795]/70 pt-5">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-black/75">
          Merchandise Gallery
        </h3>
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {MERCH_IMAGES.filter((_, index) => index !== 1).map((image) => (
            <figure key={image.src}>
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 18vw, (min-width: 640px) 26vw, 42vw"
                  className="object-cover"
                />
              </div>
            </figure>
          ))}
        </div>
      </section>
    </ProjectDetailLayout>
  );
}
