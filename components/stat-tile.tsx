import type { LucideIcon } from "lucide-react";
import { cn } from "cn";

export function StatTile({
  value,
  label,
  detail,
  icon: Icon,
  tone = "light",
  className,
}: {
  value: string;
  label: string;
  detail?: string;
  icon?: LucideIcon;
  tone?: "light" | "dark";
  className?: string;
}) {
  const soft = tone === "dark";
  return (
    <div
      className={cn(
        "rounded-2xl p-5",
        soft ? "bg-white/10" : "bg-black/[0.03]",
        className
      )}
    >
      {Icon && (
        <Icon
          className={cn(
            "mb-2 size-4",
            soft ? "text-white/45" : "text-black/35"
          )}
        />
      )}
      <div className="text-2xl font-bold tracking-tight md:text-3xl">
        {value}
      </div>
      <div
        className={cn(
          "mt-1.5 text-[11px] font-medium uppercase leading-snug tracking-wide",
          soft ? "text-white/55" : "text-black/50"
        )}
      >
        {label}
      </div>
      {detail && (
        <p
          className={cn(
            "mt-2 text-sm leading-relaxed",
            soft ? "text-white/70" : "text-black/60"
          )}
        >
          {detail}
        </p>
      )}
    </div>
  );
}
