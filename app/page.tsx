import type { Metadata } from "next";
import { CaseStudies } from "@/components/sections/case-studies";
import { Contact } from "@/components/sections/contact";
import { ArrowDownToLine } from "lucide-react";

export const metadata: Metadata = {
  title: "Acre — Marketing Portfolio",
  description:
    "Selected marketing, event, merchandising, and creative work by Sanpaphat 'Acre' Porntongprasert.",
};

export default function Home() {
  return (
    <div className="flex min-h-full w-full flex-col">
      <main className="mx-auto flex w-full max-w-[1600px] flex-col gap-16 px-5 py-12 sm:px-8 md:gap-24 md:px-12 md:py-16">
        <section id="focus" className="flex flex-col gap-7 border-b border-black/15 pb-10 md:flex-row md:items-end md:justify-between md:pb-14">
          <h1 className="mt-5 max-w-5xl text-3xl font-medium leading-[0.98] tracking-[-0.06em] sm:text-5xl md:text-7xl">Sanpaphat<br className="hidden sm:block" /> Porntongprasert</h1>
          <a
            href="https://drive.google.com/drive/folders/15jSRsKVAzv75epQmutLIzA_yjgoYTniX?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 border-b border-black pb-1 text-sm font-medium transition-opacity hover:opacity-60"
          >
            Download CV <ArrowDownToLine className="size-4" />
          </a>
        </section>

        <CaseStudies />
        <Contact />
      </main>
    </div>
  );
}
