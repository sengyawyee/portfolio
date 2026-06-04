type DevPanelChromeProps = {
  title: string;
  variant?: "light" | "dark";
  status?: string;
};

export default function DevPanelChrome({
  title,
  variant = "dark",
  status,
}: DevPanelChromeProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={`flex items-center gap-3 border-b px-4 py-2.5 sm:px-5 lg:px-6 lg:py-3 ${
        isDark
          ? "border-white/10 bg-slate/80"
          : "border-border bg-background"
      }`}
    >
      <div className="flex shrink-0 gap-1.5" aria-hidden="true">
        <span
          className={`h-2.5 w-2.5 rounded-full ${
            isDark ? "bg-red-400/80" : "bg-red-400/70"
          }`}
        />
        <span
          className={`h-2.5 w-2.5 rounded-full ${
            isDark ? "bg-yellow-400/80" : "bg-yellow-400/70"
          }`}
        />
        <span
          className={`h-2.5 w-2.5 rounded-full ${
            isDark ? "bg-green-400/80" : "bg-green-400/70"
          }`}
        />
      </div>
      <span
        className={`min-w-0 flex-1 truncate font-mono text-[11px] sm:text-xs ${
          isDark ? "text-muted-dark" : "text-muted"
        }`}
      >
        {title}
      </span>
      {status ? (
        <span
          className={`shrink-0 rounded-md border px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wide ${
            isDark
              ? "border-cyan/30 bg-cyan/10 text-cyan"
              : "border-accent/25 bg-accent/10 text-accent"
          }`}
        >
          {status}
        </span>
      ) : null}
    </div>
  );
}
