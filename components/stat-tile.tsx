import { cn } from "cn";

export function StatTile({
  value,
  label,
  detail,
  tone = "light",
  className,
}: {
  value: string;
  label: string;
  detail?: string;
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
