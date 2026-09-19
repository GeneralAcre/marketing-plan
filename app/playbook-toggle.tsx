"use client";

import { useState } from "react";

const STEPS = [
  {
    label: "01 — SEED",
    body: "Select 1–2 high-density university clusters (RICE-scored, not random spread). Recruit 5–8 student builder-leads per cluster as local distribution nodes.",
  },
  {
    label: "02 — EQUIP",
    body: "Run hands-on workshops with a live testnet/mainnet deploy checkpoint. Every attendee leaves with a verified wallet and a shipped transaction, not a slide deck.",
  },
  {
    label: "03 — SURFACE",
    body: "Take the highest-signal builders public: watch parties, hackathons, culture-native activations (gacha, padel, DAOs) that pull mass attention toward the same funnel.",
  },
  {
    label: "04 — COMPOUND",
    body: "Retain via POAP + community handoff (AcreLabs). Feed telemetry (GA4/Excel CAC, Dune wallet activity, QR conversion) back into the next cluster's RICE score.",
  },
];

export default function PlaybookToggle() {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-black">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left transition-colors hover:bg-black hover:text-white"
      >
        <span className="font-mono text-xs uppercase tracking-widest">
          The Repeatable University-to-Public Flywheel Playbook
        </span>
        <span className="shrink-0 whitespace-nowrap font-mono text-sm">
          {open ? "[ − ]" : "[ + ]"}
        </span>
      </button>

      {open && (
        <div className="grid grid-cols-1 gap-px border-t border-black bg-black md:grid-cols-4">
          {STEPS.map((step) => (
            <div key={step.label} className="bg-white p-5">
              <div className="font-mono text-xs font-bold tracking-widest">
                {step.label}
              </div>
              <p className="mt-2 text-xs leading-relaxed text-zinc-600">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
