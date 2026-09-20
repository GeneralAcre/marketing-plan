import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import { Hero } from "@/components/sections/hero";
import { Impact } from "@/components/sections/impact";
import { Gallery } from "@/components/sections/gallery";
import { Architecture } from "@/components/sections/architecture";
import { CaseStudies } from "@/components/sections/case-studies";
import { AiToolkit } from "@/components/sections/ai-toolkit";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Acre — Marketing Portfolio | Interlock GTM, Operations & Builder Lead",
  description:
    "Sanpaphat 'Acre' Porntongprasert — turning a fixed budget into a five-university builder pipeline, scored and run like a product.",
};

export default function Home() {
  return (
    <div className="flex min-h-full w-full flex-col">
      <SiteHeader />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 md:gap-6 md:px-8 md:py-6">
        <Hero />
        <Impact />
        <Gallery />
        <Architecture />
        <CaseStudies />
        <AiToolkit />
        <Contact />
      </main>
    </div>
  );
}
