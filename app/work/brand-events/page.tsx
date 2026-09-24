import type { Metadata } from "next";
import Image from "next/image";
import { ProjectDetailLayout } from "@/components/work/project-detail-layout";

export const metadata: Metadata = {
  title: "Brand Events",
  description: "University workshops and community gatherings designed as in-person brand experiences.",
};

const EVENTS: {
  image: string;
  title: string;
  href: string;
  date?: string;
  dateTime?: string;
  registrations?: string;
  attendees?: string;
}[] = [
  {
    image: "/brand-event/brand-event-1.jpg",
    title: "Team1 Build & Play",
    href: "https://luma.com/nh5q08ya",
    date: "15 August 2026",
    dateTime: "2026-08-15",
    registrations: "40",
    attendees: "32",
  },
  { image: "/brand-event/brand-event-2.JPG", 
    title: "Team1 World Cup Watch Party — Bangkok",
    href: "https://luma.com/qft154n1",
    date: "4 July 2026",
    dateTime: "2026-07-04",
    registrations: "33",
    attendees: "27",
  },
  {
    image: "/brand-event/brand-event-3.jpg",
    title: "Padel Rave Bangkok",
    href: "https://luma.com/fvaudkw0?tk=nE50tZ",
    date: "1 August 2026",
    dateTime: "2026-08-01",
    registrations: "206",
    attendees: "185",
  },
  { image: "/brand-event/brand-event-4.JPG", 
    title: "Team1 x Pudgy Padel Night",
    href: "https://luma.com/team1Pudgy",
    date: "24 May 2026",
    dateTime: "2026-05-24",
    registrations: "105",
    attendees: "60",
   },
];

export default function BrandEventsPage() {
  return (
    <ProjectDetailLayout
      title={<>Brand<br />Events</>}
      eyebrow="Brand Events"
      overviewTitle="Community Activations"
    >
      <section className="mt-5 border-t border-black/15 pt-5">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-black/50">
          Execution Framework
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-black/75">
          Plan the event experience around the audience, activity, and community goals.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="bg-black/[0.035] p-4">
            <p className="text-sm font-semibold">01 · Event Concept</p>
            <p className="mt-2 text-sm leading-relaxed text-black/65">
              Set the theme and format for each gathering.
            </p>
          </div>
          <div className="bg-black/[0.035] p-4">
            <p className="text-sm font-semibold">02 · Attendee Experience</p>
            <p className="mt-2 text-sm leading-relaxed text-black/65">
              Shape a welcoming experience from arrival through participation.
            </p>
          </div>
        </div>
      </section>

      <div className="mt-6 space-y-8">
        {EVENTS.map((event, index) => (
          <article key={event.image} className="grid gap-5 sm:grid-cols-2 sm:items-stretch">
            <figure className="relative min-h-[240px] sm:min-h-[280px]">
              <div className="absolute inset-0 overflow-hidden bg-[#e9e8e4]">
                <Image
                  src={event.image}
                  alt={`${event.title} community gathering`}
                  fill
                  priority={index === 0}
                  sizes="(min-width: 1024px) 28vw, 50vw"
                  className="object-cover"
                />
              </div>
            </figure>
            <div className="flex flex-col items-start">
              <h3 className="text-sm font-semibold leading-snug text-black sm:text-base">
                {event.title}
              </h3>
              {event.date && event.dateTime && (
                <time dateTime={event.dateTime} className="mt-1 block text-xs text-black/55">
                  {event.date}
                </time>
              )}
              <a
                href={event.href}
                target={event.href ? "_blank" : undefined}
                rel={event.href ? "noopener noreferrer" : undefined}
                aria-disabled={!event.href}
                className="mt-4 inline-flex rounded-md bg-black px-5 py-2.5 text-sm font-semibold text-white"
              >
                Visit
              </a>
              <dl className="mt-6 grid w-full max-w-[420px] grid-cols-2 gap-x-6 gap-y-4">
                <div>
                  <dt className="text-xs text-black/55">Registration cap</dt>
                  <dd className="mt-0.5 text-xl font-semibold">{event.registrations ?? "—"}</dd>
                </div>
                <div>
                  <dt className="text-xs text-black/55">Attendees</dt>
                  <dd className="mt-0.5 text-xl font-semibold">{event.attendees ?? "—"}</dd>
                </div>
              </dl>
            </div>
          </article>
        ))}
      </div>
    </ProjectDetailLayout>
  );
}
