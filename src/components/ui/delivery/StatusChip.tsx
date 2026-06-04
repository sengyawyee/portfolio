type StatusChipProps = {
  label: string;
  tone?: "cyan" | "green" | "blue" | "muted";
};

const toneClass: Record<NonNullable<StatusChipProps["tone"]>, string> = {
  cyan: "border-cyan/20 bg-cyan/[0.06] text-cyan/80",
  green: "border-emerald-400/25 bg-emerald-400/8 text-emerald-500/85",
  blue: "border-accent/20 bg-accent/8 text-accent/90",
  muted: "border-white/10 bg-white/[0.03] text-muted-dark/90",
};

export default function StatusChip({
  label,
  tone = "cyan",
}: StatusChipProps) {
  return (
    <span
      className={`inline-flex shrink-0 rounded border px-2 py-0.5 font-mono text-[10px] font-normal leading-none tracking-normal lg:text-[10px] ${toneClass[tone]}`}
    >
      {label}
    </span>
  );
}
