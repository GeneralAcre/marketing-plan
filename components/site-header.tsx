"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/#impact", label: "Impact" },
  { href: "/#case-studies", label: "Case Studies" },
  { href: "/#ai-toolkit", label: "AI Toolkit" },
  { href: "/#contact", label: "Hire Me" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 w-full bg-background px-4 pt-4 md:px-8 md:pt-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between gap-4 rounded-full border border-black/10 bg-white/90 px-4 py-2.5 shadow-sm backdrop-blur-md md:px-6">
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
          <div className="flex shrink-0 items-center gap-2">
            <Link
              href="/#contact"
              className="flex items-center gap-1.5 rounded-full bg-black px-4 py-1.5 text-[13px] font-medium text-white transition-colors hover:bg-black/80"
            >
              <MessageCircle className="size-3.5" />
              Contact
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex size-8 items-center justify-center rounded-full border border-black/10 text-black/70 transition-colors hover:bg-black/5 hover:text-black md:hidden"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="mt-2 flex flex-col gap-1 rounded-2xl border border-black/10 bg-white/95 p-2 shadow-sm backdrop-blur-md md:hidden">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-2.5 text-sm font-medium text-black/70 transition-colors hover:bg-black/5 hover:text-black"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
