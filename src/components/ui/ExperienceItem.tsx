import SkillChip from "@/components/ui/SkillChip";

interface ExperienceItemProps {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  releaseRef: string;
  releaseIndex: number;
}

export default function ExperienceItem({
  company,
  role,
  period,
  description,
  highlights,
  releaseRef,
  releaseIndex,
}: ExperienceItemProps) {
  const releaseId = String(releaseIndex).padStart(2, "0");

  return (
    <article className="overflow-hidden rounded-xl border border-indigo-200/55 bg-white shadow-[0_1px_2px_rgba(79,70,229,0.06)]">
      <header className="flex flex-col gap-2 border-b border-indigo-100/90 bg-indigo-50/70 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 lg:px-5 lg:py-3.5">
        <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1">
          <span className="inline-flex shrink-0 items-center rounded border border-indigo-200/80 bg-white px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wide text-indigo-600">
            release/{releaseId}
          </span>
          <time
            dateTime={period}
            className="whitespace-nowrap text-sm font-semibold tabular-nums leading-none text-slate-700"
          >
            {period}
          </time>
        </div>
        <p className="min-w-0 font-mono text-[11px] font-medium tracking-wide break-words text-indigo-600/95 sm:shrink-0 sm:text-right">
          {releaseRef}
        </p>
      </header>

      <div className="border-l-[3px] border-l-indigo-400/80 px-4 py-5 sm:px-5 lg:px-6 lg:py-6">
        <p className="text-base font-bold text-accent lg:text-[1.0625rem]">
          {role}
        </p>
        <h3 className="mt-2 text-[1.75rem] font-extrabold leading-tight tracking-tight text-navy sm:text-[2rem] lg:text-[2.25rem]">
          {company}
        </h3>
        <p className="mt-3.5 max-w-3xl text-base leading-relaxed text-muted sm:leading-8">
          {description}
        </p>
        <div className="mt-4 border-t border-indigo-50 pt-4 lg:mt-5 lg:pt-5">
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-indigo-500/80">
            Included in release
          </p>
          <ul className="mt-3 flex flex-wrap gap-2 lg:gap-2.5">
            {highlights.map((item) => (
              <li key={item}>
                <SkillChip label={item} medium />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
