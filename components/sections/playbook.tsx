import { SectionTag } from "@/components/section-tag";
import PlaybookToggle from "@/components/playbook-toggle";

export function Playbook() {
  return (
    <section id="playbook" className="w-full scroll-mt-24">
      <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-12 lg:p-16">
        <SectionTag label="07 — How I Think" />
        <div className="mt-8">
          <PlaybookToggle />
        </div>
      </div>
    </section>
  );
}
