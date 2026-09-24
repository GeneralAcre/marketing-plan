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
      eyebrow="Product Management & Merchandising"
      overviewTitle="Team1 Merchandise"
      description="For each event, I decide what merchandise and materials are needed, then brief the graphic design team on what to create. I manage a ฿200,000 budget and coordinate production to make sure everything is completed on schedule within the execution timeline."
      targetAudience="Team1 community members, university students, builders, and event attendees across Thailand."
      results={[{ value: "฿200K", label: "Budget managed" }]}
    >
      <figure className="mt-5">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#f4f4f4]">
          <Image
            src={MERCH_IMAGES[0].src}
            alt={MERCH_IMAGES[0].alt}
            fill
            priority
            sizes="(min-width: 1024px) 55vw, 86vw"
            className="object-cover"
          />
        </div>
      </figure>

      <section className="mt-6 border-t border-black/15 pt-5">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-black/50">
          Product Management &amp; Merchandising
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-black/75">
          For each event, I decide what merchandise and materials are needed, then brief the graphic design team on what to create. I manage the budget and coordinate production to make sure everything is completed on schedule within the execution timeline.
        </p>
      </section>

      <section className="mt-6 border-t border-black/15 pt-5">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-black/50">
          Merchandise Gallery
        </h3>
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {MERCH_IMAGES.slice(1).map((image) => (
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
