import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    number: "01",
    focus: "Marketing Campaigns",
    href: "/work/team1",
    image: "/Campaign/Campaign-1.jpg",
    alt: "University community gathering for the Avalanche Team1 program",
    imageClass: "object-cover",
  },
  {
    number: "02",
    focus: "Brand Events",
    href: "/work/brand-events",
    image: "/brand-event/brand-event-1.jpg",
    alt: "Attendees taking part in a hands-on builder workshop",
    imageClass: "object-cover",
  },
  {
    number: "03",
    focus: "Product Management & Merchandising",
    href: "/work/product-management",
    image: "/event-picture/Meetup-2.jpeg",
    alt: "Community meetup organized by the Team1 program",
    imageClass: "object-cover",
  },
  {
    number: "04",
    focus: "Content & Creative Production",
    href: "/work/content-creative",
    image: "/event-picture/University-2.jpg",
    alt: "University workshop as part of the Team1 builder education program",
    imageClass: "object-cover",
  },
];

function ProjectCard({ project }: { project: (typeof PROJECTS)[number] }) {
  const content = (
    <>
      <div className="relative aspect-[4/4.4] overflow-hidden bg-[#e9e8e4]">
        <Image
          src={project.image}
          alt={project.alt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className={`${project.imageClass} transition-transform duration-500 group-hover:scale-[1.025]`}
        />
        <span className="absolute left-3 top-3 bg-white px-2 py-1 text-[11px] tabular-nums">[{project.number}]</span>
        {project.href && (
          <span className="absolute bottom-3 right-3 grid size-9 place-items-center rounded-full bg-white opacity-0 transition-opacity group-hover:opacity-100">
            <ArrowUpRight className="size-4" />
          </span>
        )}
      </div>
      <p className="mt-4 text-base font-medium leading-snug tracking-tight text-black sm:text-lg lg:text-xl">{project.focus}</p>
    </>
  );

  return project.href ? (
    <Link href={project.href} className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">
      {content}
    </Link>
  ) : (
    <div className="group block">{content}</div>
  );
}

export function CaseStudies() {
  return (
    <section id="work" className="w-full scroll-mt-24">
      <div className="flex items-end justify-between gap-4 border-b border-black/15 pb-5">
        <h2 className="text-2xl font-medium tracking-tight md:text-3xl">Work [2025–2026]</h2>
      </div>

      <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-4">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.number} project={project} />
        ))}
      </div>
    </section>
  );
}
