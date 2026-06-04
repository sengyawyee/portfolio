interface SkillChipProps {
  label: string;
  featured?: boolean;
  dark?: boolean;
  /** 12px label — used on project cards */
  small?: boolean;
  /** Slightly larger — used on experience timeline tags */
  medium?: boolean;
}

const sizeClass = (small: boolean, medium: boolean) => {
  if (small) return "px-2.5 py-1 text-xs";
  if (medium) return "px-4 py-2 text-sm font-semibold";
  return "px-3.5 py-1.5 text-sm";
};

export default function SkillChip({
  label,
  featured = false,
  dark = false,
  small = false,
  medium = false,
}: SkillChipProps) {
  if (featured) {
    return (
      <span
        className={`inline-flex items-center rounded-lg bg-accent font-bold text-white ${sizeClass(small, medium)}`}
      >
        {label}
      </span>
    );
  }

  if (dark) {
    return (
      <span
        className={`inline-flex items-center rounded-lg border border-white/10 bg-white/5 font-medium text-muted-dark ${sizeClass(small, medium)}`}
      >
        {label}
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center rounded-lg border border-border bg-background font-medium text-foreground ${sizeClass(small, medium)}`}
    >
      {label}
    </span>
  );
}
