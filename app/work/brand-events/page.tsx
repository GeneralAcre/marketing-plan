import type { Metadata } from "next";
import Image from "next/image";
import { ProjectDetailLayout } from "@/components/work/project-detail-layout";

type EventRole = "Event Lead" | "Co-Lead";

const ROLE_DETAILS: Record<EventRole, string> = {
  "Event Lead": "Lead the event from planning through execution, set priorities, and delegate tasks across the team.",
  "Co-Lead": "Partner with the Event Lead and manage key parts of the event to support successful delivery.",
};

export const metadata: Metadata = {
  title: "Brand Events",
  description: "University workshops and community gatherings designed as in-person brand experiences.",
};

const EVENTS: {
  image: string;
  title: string;
  href?: string;
  role?: EventRole;
  date?: string;
  dateTime?: string;
  registrations?: string;
  attendees?: string;
}[] = [
  {
    image: "/brand-event/brand-event-1.jpg",
    title: "Team1 Build & Play",
    role: "Co-Lead",
    href: "https://luma.com/nh5q08ya",
    date: "15 August 2026",
    dateTime: "2026-08-15",
    registrations: "40",
    attendees: "32",
  },
  { image: "/brand-event/brand-event-2.JPG", 
    title: "Team1 World Cup Watch Party Bangkok",
    role: "Event Lead",
    href: "https://luma.com/qft154n1",
    date: "4 July 2026",
    dateTime: "2026-07-04",
    registrations: "33",
    attendees: "27",
  },
  {
    image: "/brand-event/brand-event-3.jpg",
    title: "Padel Rave Bangkok",
    role: "Co-Lead",
    href: "https://luma.com/fvaudkw0?tk=nE50tZ",
    date: "1 August 2026",
    dateTime: "2026-08-01",
    registrations: "206",
    attendees: "185",
  },
  { image: "/brand-event/brand-event-4.JPG", 
    title: "Team1 x Pudgy Padel Night",
    role: "Co-Lead",
    href: "https://luma.com/team1Pudgy",
    date: "24 May 2026",
    dateTime: "2026-05-24",
    registrations: "105",
    attendees: "60",
   },
  {
    image: "/brand-event/brand-event-5.JPG",
    title: "Team1 × TU Blockchain Club: Breaking Into Blockchain & AI",
    role: "Event Lead",
    href: "https://luma.com/team1tubc",
    date: "6 June 2026",
    dateTime: "2026-06-06",
    registrations: "34",
    attendees: "29",
  },
  {
    image: "/brand-event/brand-event-6.jpg",
    title: "Road To Sub0 - Polkadot Builders Party Bangkok",
    role: "Event Lead",
    href: "https://luma.com/xz2wsck4",
    date: "17 October 2025",
    dateTime: "2025-10-17",
    registrations: "50",
    attendees: "48",
  },
  {
    image: "/brand-event/brand-event-7.jpg",
    title: "Road To Sub0 - Polkadot Builders Party Bangkok Student Edition",
    role: "Event Lead",
    href: "https://luma.com/icaj7sys",
    date: "8 October 2025",
    dateTime: "2025-10-08",
    registrations: "30",
    attendees: "22",
  },
];

const RECENT_EVENTS = [...EVENTS].sort((a, b) =>
  (b.dateTime ?? "").localeCompare(a.dateTime ?? ""),
);
const TOTAL_REGISTRATIONS = EVENTS.reduce(
  (total, event) => total + Number(event.registrations ?? 0),
  0,
);
const TOTAL_ATTENDEES = EVENTS.reduce(
  (total, event) => total + Number(event.attendees ?? 0),
  0,
);
const ATTENDANCE_RATE = TOTAL_REGISTRATIONS
  ? Math.round((TOTAL_ATTENDEES / TOTAL_REGISTRATIONS) * 100)
  : 0;

export default function BrandEventsPage() {
  return (
    <ProjectDetailLayout
      title={<>Brand<br />Events</>}
      eyebrow="Brand Events"
      overviewTitle="Community Activations"
      description="As an Event Manager and Operations Lead, I drive community growth and ecosystem expansion across Thailand’s Web3 landscape. My work bridges developer education and community culture spanning university workshops, hackathons, networking mixers, and large-scale sports and watch parties. By designing engaging in-person experiences, I bring together builders, students, and enthusiasts to collaborate, learn, and ship real projects."
      targetAudience="Web3 community members across Thailand, including builders, students, and enthusiasts."
      strategicObjective="Grow Thailand’s Web3 community through in-person events that connect builders, students, and enthusiasts with each other and with ecosystem partners."
      timeline={[
        { label: "August 2025 – Present", year: "Ongoing", dateTime: "2025-08" },
      ]}
      results={[
        { value: TOTAL_REGISTRATIONS.toLocaleString(), label: "Registered" },
        { value: TOTAL_ATTENDEES.toLocaleString(), label: "Attendees" },
        { value: `${ATTENDANCE_RATE}%`, label: "Attendance rate" },
      ]}
      resultsTitle="Event Impact"
    >
      <figure className="mt-5">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#e9e8e4]">
          <Image
            src={RECENT_EVENTS[0].image}
            alt="Community members gathered at a Team1 brand event"
            fill
            priority
            sizes="(min-width: 1024px) 55vw, 86vw"
            className="object-cover"
          />
        </div>
      </figure>

      <section className="mt-5 border-t border-black/15 pt-5">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-black/50">
          Event Strategy &amp; Delivery
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-black/75">
          I turn marketing and community goals into events that attract the right people, create a strong on-site experience, and build lasting engagement.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="bg-black/[0.035] p-4">
            <p className="text-sm font-semibold">01 · Event Strategy</p>
            <p className="mt-2 text-sm leading-relaxed text-black/65">
              Define the audience, format, partners, promotion plan, and success measures for each event.
            </p>
          </div>
          <div className="bg-black/[0.035] p-4">
            <p className="text-sm font-semibold">02 · Operations &amp; Experience</p>
            <p className="mt-2 text-sm leading-relaxed text-black/65">
              Coordinate registration, run-of-show, and on-site details to deliver a smooth, welcoming experience—and follow up to keep attendees engaged.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-6 border-t border-black/15 pt-5">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-black/50">Event Roles</h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {(Object.entries(ROLE_DETAILS) as [EventRole, string][]).map(([role, detail]) => (
            <div key={role} className="bg-black/[0.035] p-4">
              <h4 className="text-sm font-semibold text-black">{role}</h4>
              <p className="mt-2 text-sm leading-relaxed text-black/65">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-6 space-y-8">
        {RECENT_EVENTS.map((event, index) => (
          <article key={event.image} className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            <div className="order-1 min-w-0 sm:col-start-2 sm:row-start-1">
              <h3 className="text-base font-semibold leading-snug text-black">
                {event.title}
              </h3>
              {event.date && event.dateTime && (
                <time dateTime={event.dateTime} className="mt-1 block text-sm text-black/55">
                  {event.date}
                </time>
              )}
              {event.role && (
                <p className="mt-2 text-sm text-black/65">
                  <span className="font-medium text-black/80">Role:</span> {event.role}
                </p>
              )}
            </div>
            <figure className="relative order-2 aspect-[4/3] min-w-0 overflow-hidden bg-[#e9e8e4] sm:col-start-1 sm:row-span-3 sm:row-start-1 sm:aspect-auto sm:min-h-[280px]">
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
            {(event.registrations || event.attendees) && <dl className="order-3 grid grid-cols-2 gap-x-6 gap-y-4 sm:col-start-2 sm:row-start-2">
              <div>
                <dt className="text-xs text-black/55">Registration cap</dt>
                <dd className="mt-0.5 text-xl font-semibold text-[#EB9B28]">{event.registrations ?? "—"}</dd>
              </div>
              <div>
                <dt className="text-xs text-black/55">Attendees</dt>
                <dd className="mt-0.5 text-xl font-semibold text-[#EB9B28]">{event.attendees ?? "—"}</dd>
              </div>
            </dl>}
            {event.href && <a
              href={event.href}
              target={event.href ? "_blank" : undefined}
              rel={event.href ? "noopener noreferrer" : undefined}
              className="order-4 inline-flex h-fit w-fit self-start justify-self-start rounded-md bg-[#EB9B28] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#C57A12] sm:col-start-2 sm:row-start-3"
            >
              Visit
            </a>}
          </article>
        ))}
      </div>
    </ProjectDetailLayout>
  );
}
