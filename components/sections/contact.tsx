import { SectionTag } from "@/components/section-tag";
import { GithubMark, XMark } from "@/components/brand-icons";
import { Mail, Send } from "lucide-react";

const CONTACT_LINKS = [
  {
    label: "Email",
    value: "acreforcoding@gmail.com",
    href: "mailto:acreforcoding@gmail.com",
    icon: Mail,
  },
  {
    label: "Telegram",
    value: "@acre",
    href: "https://t.me/acre",
    icon: Send,
  },
  {
    label: "X / Twitter",
    value: "@acre",
    href: "https://x.com/acre",
    icon: XMark,
  },
  {
    label: "GitHub",
    value: "@acre",
    href: "https://github.com/acre",
    icon: GithubMark,
  },
];

export function Contact() {
  return (
    <section id="contact" className="w-full scroll-mt-24">
      <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-12 lg:p-16">
        <SectionTag label="09 — Contact" />
        <p className="mt-4 max-w-2xl text-2xl font-bold tracking-tight md:text-3xl">
          Let&apos;s talk.
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/55">
          Open for GTM, Growth &amp; Operations roles — Agoda / Binance /
          Ecosystem teams welcome.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group flex flex-col gap-3 rounded-2xl bg-black/[0.03] p-5 transition-colors hover:bg-black hover:text-white"
            >
              <link.icon className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-semibold uppercase tracking-wide opacity-55">
                  {link.label}
                </span>
                <span className="text-sm font-medium">{link.value}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
