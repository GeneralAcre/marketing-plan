"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/#work", label: "Work" },
  { href: "/#focus", label: "Focus" },
  { href: "/work/team1", label: "Case Study" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 w-full border-b border-black/10 bg-background/95 px-5 py-4 backdrop-blur-md sm:px-8 md:px-12">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="shrink-0 text-sm font-semibold tracking-tight"
          >
            Acre
          </Link>
          <nav className="hidden items-center gap-8 text-[13px] font-medium text-black/55 md:flex">
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
          <nav className="absolute inset-x-0 top-full flex flex-col gap-1 border-b border-black/10 bg-background p-4 md:hidden">
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
