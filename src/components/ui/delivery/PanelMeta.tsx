export type PanelTheme =
  | "delivery"
  | "craft"
  | "stack"
  | "experience"
  | "profile"
  | "deploy";

type PanelMetaProps = {
  label: string;
  detail?: string;
  theme?: PanelTheme;
};

const themeBar: Record<PanelTheme, string> = {
  delivery: "border-white/10 bg-[#0f172a]",
  craft: "border-emerald-200/70 bg-[#f4faf7]",
  stack: "border-slate-200 bg-slate-100/90",
  experience: "border-indigo-200/70 bg-indigo-50/90",
  profile: "border-sky-200/60 bg-[#f7f9fc]",
  deploy: "border-violet-400/20 bg-[#111827]",
};

const themeLabel: Record<PanelTheme, string> = {
  delivery: "text-cyan",
  craft: "text-emerald-700",
  stack: "text-indigo-700",
  experience: "text-indigo-600",
  profile: "text-sky-700",
  deploy: "text-violet-300",
};

const themeDetail: Record<PanelTheme, string> = {
  delivery: "text-muted-dark",
  craft: "text-emerald-600/80",
  stack: "text-slate-500",
  experience: "text-indigo-500/90",
  profile: "text-muted",
  deploy: "text-slate-400",
};

export default function PanelMeta({
  label,
  detail,
  theme = "craft",
}: PanelMetaProps) {
  return (
    <div
      className={`flex flex-wrap items-center justify-between gap-3 border-b px-6 py-3.5 lg:px-10 lg:py-4 ${themeBar[theme]}`}
    >
      <span
        className={`font-mono text-xs font-semibold tracking-wide ${themeLabel[theme]}`}
      >
        {label}
      </span>
      {detail ? (
        <span
          className={`font-mono text-xs uppercase tracking-wide ${themeDetail[theme]}`}
        >
          {detail}
        </span>
      ) : null}
    </div>
  );
}
