import Image from "next/image";

const EVENT_PHOTOS = [
  {
    src: "/event-picture/Workshop-1.jpg",
    alt: "Hands-on builder workshop — attendees deploying wallets and contracts",
    caption: "Builder Workshop",
  },
  {
    src: "/event-picture/University-1.JPG",
    alt: "University chapter kickoff on campus",
    caption: "University Meetup",
  },
  {
    src: "/event-picture/University-2.jpg",
    alt: "University chapter session on campus",
    caption: "University Workshop",
  },
  {
    src: "/event-picture/Meetup-1.JPG",
    alt: "Community meetup and networking session",
    caption: "Community Meetup",
  },
  {
    src: "/event-picture/Meetup-2.jpeg",
    alt: "Community meetup — demo night",
    caption: "Community Meetup",
  },
  {
    src: "/event-picture/Meetup-4.jpg",
    alt: "Community meetup session",
    caption: "Community Meetup",
  },
  {
    src: "/event-picture/Meetup-5.jpg",
    alt: "Community meetup session",
    caption: "Community Meetup",
  },
  {
    src: "/event-picture/Padel-1.JPG",
    alt: "Team offsite — padel session",
    caption: "Community Meetup",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="w-full scroll-mt-24">
      <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-12 lg:p-16">
        <p className="max-w-2xl text-xl font-bold leading-snug tracking-tight md:text-2xl">
          8 events run, not just planned.
        </p>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-black/55">
          Workshops, chapter launches, and community meetups across 5
          university clusters.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
          {EVENT_PHOTOS.map((photo) => (
            <div
              key={photo.src}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-black/[0.03] sm:rounded-2xl"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 flex h-[30%] items-center justify-center bg-black/70 px-3 text-center text-[11px] font-semibold uppercase tracking-wide text-white">
                {photo.caption}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
