import type { Metadata } from "next";
import Image from "next/image";
import { ProjectDetailLayout } from "@/components/work/project-detail-layout";

export const metadata: Metadata = {
  title: "Brand Events",
  description: "University workshops and community gatherings designed as in-person brand experiences.",
};

const EVENTS = [
  { image: "/brand-event/brand-event-1.jpg", title: "Brand Event 01" },
  { image: "/brand-event/brand-event-2.JPG", title: "Brand Event 02" },
  { image: "/brand-event/brand-event-3.jpg", title: "Brand Event 03" },
  { image: "/brand-event/brand-event-4.JPG", title: "Brand Event 04" },
];

export default function BrandEventsPage() {
  return (
    <ProjectDetailLayout
      title={<>Brand<br />Events</>}
      description="In-person experiences bring university and builder communities together through workshops, meetups, and shared activities."
      eyebrow="Brand Events"
      overviewTitle="University & Community Activations"
      details={[
        {
          title: "Audience",
          content: "University students, builders, and local community members.",
        },
        {
          title: "Experience Goal",
          content: "Create welcoming spaces for people to meet, learn, and take part in the community.",
        },
        {
          title: "Event Formats",
          content: "Workshops, networking sessions, and community gatherings.",
        },
      ]}
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
              <p className="mt-1 text-xs text-black/55">Community event</p>
              <button
                type="button"
                className="mt-4 inline-flex rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white"
              >
                Visit
              </button>
              <dl className="mt-6 w-full max-w-[220px]">
                <div>
                  <dt className="text-xs text-black/55">Attendees</dt>
                  <dd className="mt-0.5 text-2xl font-semibold">—</dd>
                </div>
              </dl>
            </div>
          </article>
        ))}
      </div>
    </ProjectDetailLayout>
  );
}
