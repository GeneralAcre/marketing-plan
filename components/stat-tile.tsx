import type { LucideIcon } from "lucide-react";
import { cn } from "cn";

export function StatTile({
  value,
  label,
  detail,
  icon: Icon,
  tone = "light",
  className,
  valueClassName,
}: {
  value: string;
  label: string;
  detail?: string;
  icon?: LucideIcon;
  tone?: "light" | "dark";
  className?: string;
  valueClassName?: string;
}) {
  const soft = tone === "dark";
  return (
    <div
      className={cn(
        "min-w-0 rounded-2xl p-2 md:p-5",
        soft ? "bg-white/10" : "bg-black/[0.03]",
        className
      )}
    >
      {Icon && (
        <Icon
          className={cn(
            "mb-1.5 size-3.5 md:mb-2 md:size-4",
            soft ? "text-white/45" : "text-black/35"
          )}
        />
      )}
      <div className={cn("text-base font-bold tracking-tight sm:text-lg md:text-3xl", valueClassName)}>
        {value}
      </div>
      <div
        className={cn(
          "mt-1 break-words text-[9px] font-medium uppercase leading-tight tracking-normal md:mt-1.5 md:text-[11px] md:leading-snug md:tracking-wide",
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
