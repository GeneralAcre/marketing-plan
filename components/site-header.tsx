import Link from "next/link";
import { MessageCircle } from "lucide-react";

const NAV_LINKS = [
  { href: "/#impact", label: "Impact" },
  { href: "/#case-studies", label: "Case Studies" },
  { href: "/#frameworks", label: "Frameworks" },
  { href: "/#ai-toolkit", label: "AI Toolkit" },
  { href: "/#roadmap", label: "Roadmap" },
  { href: "/#contact", label: "Hire Me" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 w-full px-4 pt-4 md:px-8 md:pt-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border border-black/10 bg-white/90 px-4 py-2.5 shadow-sm backdrop-blur-md md:px-6">
        <Link
          href="/"
          className="shrink-0 text-sm font-bold tracking-tight"
        >
          Acre
        </Link>
        <nav className="hidden items-center gap-6 text-[13px] font-medium text-black/55 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-black"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <Link
          href="/#contact"
          className="flex shrink-0 items-center gap-1.5 rounded-full bg-black px-4 py-1.5 text-[13px] font-medium text-white transition-colors hover:bg-black/80"
        >
          <MessageCircle className="size-3.5" />
          Contact
        </Link>
      </div>
    </header>
  );
}
