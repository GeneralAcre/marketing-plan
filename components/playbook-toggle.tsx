"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const STEPS = [
  {
    label: "01 — Seed",
    body: "Select 1–2 high-density university clusters (RICE-scored, not random spread). Recruit 5–8 student builder-leads per cluster as local distribution nodes.",
  },
  {
    label: "02 — Equip",
    body: "Run hands-on workshops with a live testnet/mainnet deploy checkpoint. Every attendee leaves with a verified wallet and a shipped transaction, not a slide deck.",
  },
  {
    label: "03 — Surface",
    body: "Take the highest-signal builders public: watch parties, hackathons, culture-native activations (gacha, padel, DAOs) that pull mass attention toward the same funnel.",
  },
  {
    label: "04 — Compound",
    body: "Retain via POAP + community handoff (AcreLabs). Feed telemetry (GA4/Excel CAC, Dune wallet activity, QR conversion) back into the next cluster's RICE score.",
  },
];

export default function PlaybookToggle() {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-3xl border border-black/10 bg-black/[0.03]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-3 px-6 py-5 text-left"
      >
        <span className="text-sm font-semibold tracking-tight md:text-base">
          The Repeatable University-to-Public Flywheel Playbook
        </span>
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-black/15 bg-white">
          <Plus
            className={`size-4 transition-transform duration-200 ${open ? "rotate-45" : ""}`}
          />
        </span>
      </button>

      {open && (
        <div className="grid grid-cols-1 gap-3 px-4 pb-4 md:grid-cols-4">
          {STEPS.map((step) => (
            <div key={step.label} className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="text-xs font-bold tracking-widest text-black/40">
                {step.label}
              </div>
              <p className="mt-2 text-xs leading-relaxed text-black/60">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
