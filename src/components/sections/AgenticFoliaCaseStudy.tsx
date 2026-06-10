import Image from "next/image";
import type { AgenticCaseStudy } from "@/data/portfolio";

type AgenticFoliaCaseStudyProps = {
  caseStudy: AgenticCaseStudy;
};

function CheckBulletIcon() {
  return (
    <span
      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-soft-blue text-accent"
      aria-hidden="true"
    >
      <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2 6.5 4.5 9 10 3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function AgenticFoliaCaseStudy({
  caseStudy,
}: AgenticFoliaCaseStudyProps) {
  return (
    <article className="rounded-2xl border border-border bg-card shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
      <div className="isolate overflow-hidden rounded-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-[46fr_54fr] lg:items-stretch">
          <div className="relative aspect-[4/3] w-full min-h-[12rem] overflow-hidden bg-deep-navy lg:aspect-auto lg:h-full lg:min-h-[18rem]">
            <Image
              src={caseStudy.image}
              alt={`${caseStudy.title} preview`}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 46vw"
            />
          </div>

          <div className="min-w-0 bg-gradient-to-tr from-[#fafbfc] via-white to-soft-blue/80 p-6 sm:p-7 lg:h-full lg:p-8">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
              {caseStudy.eyebrow}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
              <h3 className="text-xl font-bold tracking-tight text-navy sm:text-2xl">
                {caseStudy.title}
              </h3>
              <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted">
                {caseStudy.status}
              </span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-[0.9375rem] sm:leading-7">
              {caseStudy.description}
            </p>

            <ul className="mt-5 space-y-3">
              {caseStudy.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <CheckBulletIcon />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <ul className="mt-6 flex flex-wrap gap-2">
              {caseStudy.tags.map((tag) => (
                <li key={tag}>
                  <span className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted">
                    {tag}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
