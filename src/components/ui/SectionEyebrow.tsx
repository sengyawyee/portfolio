type SectionEyebrowIcon = "skills" | "portfolio" | "practice" | "about" | "experience";

type SectionEyebrowProps = {
  label: string;
  icon: SectionEyebrowIcon;
  tone?: "accent" | "indigo";
};

const toneClass = {
  accent: "text-accent",
  indigo: "text-indigo-600",
} as const;

function EyebrowIcon({
  icon,
  className,
}: {
  icon: SectionEyebrowIcon;
  className?: string;
}) {
  const shared = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    className,
    "aria-hidden": true as const,
  };

  switch (icon) {
    case "skills":
      return (
        <svg {...shared}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.5 5.5 8 2.5l5.5 3v5L8 14.5l-5.5-3v-5Z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 8v6.5M2.5 5.5 8 8l5.5-2.5" />
        </svg>
      );
    case "portfolio":
      return (
        <svg {...shared}>
          <rect x="2.5" y="3.5" width="11" height="9" rx="1.25" />
          <path strokeLinecap="round" d="M2.5 6.5h11" />
          <path strokeLinecap="round" d="M5.5 9h2M5.5 11h4" />
        </svg>
      );
    case "practice":
      return (
        <svg {...shared}>
          <path strokeLinecap="round" d="M3 4.5h10" />
          <path strokeLinecap="round" d="M3 8h6.5" />
          <path strokeLinecap="round" d="M3 11.5h4" />
          <circle cx="12.5" cy="11.5" r="1.75" />
          <path strokeLinecap="round" d="M12.5 9.75V8" />
        </svg>
      );
    case "about":
      return (
        <svg {...shared}>
          <circle cx="8" cy="5.25" r="2.25" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 13.25c.65-2.35 2.35-3.5 4.25-3.5s3.6 1.15 4.25 3.5"
          />
        </svg>
      );
    case "experience":
      return (
        <svg {...shared}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 6.5V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1.5"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.5 6.5h11v6a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-6Z"
          />
          <path strokeLinecap="round" d="M6.5 9.5h3" />
        </svg>
      );
  }
}

export default function SectionEyebrow({
  label,
  icon,
  tone = "accent",
}: SectionEyebrowProps) {
  return (
    <p
      className={`inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] ${toneClass[tone]}`}
    >
      <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-current/15 bg-current/5">
        <EyebrowIcon icon={icon} className="h-3.5 w-3.5" />
      </span>
      {label}
    </p>
  );
}

export type { SectionEyebrowIcon };
