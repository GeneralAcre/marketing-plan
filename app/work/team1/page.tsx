import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Avalanche Team1 — Case Study",
  description:
    "A university growth and community program built through workshops, chapter launches, and builder education.",
};

export default function Team1CaseStudy() {
  return (
    <div className="flex min-h-full flex-col">
      <main className="grid flex-1 lg:min-h-screen lg:grid-cols-[minmax(380px,0.9fr)_minmax(0,1.7fr)]">
        <div className="flex flex-col">
          <section className="bg-black px-6 py-8 text-white sm:px-10 lg:px-12 lg:py-10">
            <Link href="/#work" className="mb-10 inline-flex w-fit items-center gap-2 text-xs text-white/60 transition-colors hover:text-white">
              <ArrowLeft className="size-3.5" /> Back to work
            </Link>
            <h1 className="text-[clamp(2.75rem,5vw,5rem)] font-black uppercase leading-[0.88] tracking-[-0.07em]">
              Avalanche<br />Team1
            </h1>
            <div className="mt-10 max-w-xl">
              <h2 className="text-sm font-semibold">Description</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
                A university growth program that turns blockchain curiosity into hands-on building. I led the operations behind workshops, campus chapters, and community events, connecting students with a clear path from first session to active builder.
              </p>
            </div>

            <div className="mt-8 max-w-xl border-t border-white/20 pt-6">
              <h2 className="text-sm font-semibold">Approach</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
                Focused on five university communities, a practical workshop format, and a repeatable event pipeline. Owned the 200K THB program budget and coordinated curriculum, vendors, merch, and chapter handoffs.
              </p>
            </div>

            <div className="mt-8 max-w-xl border-t border-white/20 pt-6">
              <h2 className="text-sm font-semibold">Early results · Chula workshop</h2>
              <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-4">
                <div><p className="text-2xl font-semibold">31 → 18</p><p className="mt-1 text-[11px] text-white/55">Registrations to attendees</p></div>
                <div><p className="text-2xl font-semibold">7</p><p className="mt-1 text-[11px] text-white/55">Wallets deployed</p></div>
                <div><p className="text-2xl font-semibold">9</p><p className="mt-1 text-[11px] text-white/55">Smart contracts shipped</p></div>
                <div><p className="text-2xl font-semibold">5</p><p className="mt-1 text-[11px] text-white/55">University chapters</p></div>
              </div>
            </div>
          </section>
        </div>

        <div className="relative min-h-[60vh] bg-[#e9e8e4] lg:min-h-0">
          <Image
            src="/event-picture/Workshop-1.jpg"
            alt="Students taking part in an Avalanche Team1 builder workshop"
            fill
            priority
            sizes="(min-width: 1024px) 65vw, 100vw"
            className="object-cover"
          />
        </div>
      </main>
    </div>
  );
}
