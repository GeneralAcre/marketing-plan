import type { LucideIcon } from "lucide-react";
import { ArrowDownRight } from "lucide-react";
import { cn } from "cn";

export function SectionTag({
  label,
  icon: Icon = ArrowDownRight,
  tone = "light",
  className,
}: {
  label: string;
  icon?: LucideIcon;
  tone?: "light" | "dark";
  className?: string;
}) {
  const soft = tone === "dark";
  return (
    <div className={cn("inline-flex items-center gap-2", className)}>
      <span
        className={cn(
          "flex size-7 shrink-0 items-center justify-center rounded-full border",
          soft ? "border-white/20 text-white" : "border-black/15 text-black"
        )}
      >
        <Icon className="size-3.5" />
      </span>
      <span
        className={cn(
          "rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wide",
          soft ? "border-white/15 text-white/70" : "border-black/10 text-black/60"
        )}
      >
        {label}
      </span>
    </div>
  );
}
