import PanelMeta from "@/components/ui/delivery/PanelMeta";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionShell from "@/components/ui/SectionShell";
import { techStackCards } from "@/data/portfolio";
import type { CSSProperties } from "react";

function StackPills({
  skills,
  featured = [],
  muted = [],
}: {
  skills: string[];
  featured?: string[];
  muted?: string[];
}) {
  return (
    <ul className="flex flex-wrap gap-2 lg:gap-3">
      {skills.map((skill) => {
        const isFeatured = featured.includes(skill);
        const isMuted = muted.includes(skill);
        return (
          <li key={skill}>
            <span
              className={`inline-flex h-8 items-center rounded-md border px-3 text-sm font-medium leading-none lg:h-9 lg:px-3.5 lg:text-sm ${
                isFeatured
                  ? "border-indigo-300/70 bg-indigo-50 font-semibold text-indigo-700"
                  : isMuted
                    ? "border-slate-200 bg-slate-50 text-muted"
                    : "border-slate-200 bg-white text-navy"
              }`}
            >
              {skill}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default function TechStack() {
  return (
    <SectionShell id="tech-stack" className="section-surface-elevated">
      <ScrollReveal variant="fade-up">
        <div className="max-w-3xl lg:max-w-none">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-indigo-700">
            Stack
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Production frontend stack
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg sm:leading-8">
            Tools and workflows I use across public-facing websites, CMS-driven
            platforms, and modern frontend development.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal
        variant="fade-up"
        className="panel-shell-stack mt-12 overflow-hidden rounded-2xl border shadow-[0_12px_40px_rgba(15,23,42,0.05)] lg:mt-14"
      >
        <PanelMeta
          label="package.json · frontend-toolchain"
          detail="dependencies"
          theme="stack"
        />

        <div className="bg-white">
          {techStackCards.map((group, index) => (
            <div
              key={group.title}
              className={`reveal-stack-row grid grid-cols-1 gap-4 px-6 py-5 sm:px-8 sm:py-5 md:grid-cols-[11rem_minmax(0,1fr)] md:items-center md:gap-8 xl:grid-cols-[12.5rem_minmax(0,1fr)] xl:gap-12 xl:px-10 xl:py-5 ${
                index > 0 ? "border-t border-slate-200" : ""
              }`}
              style={
                {
                  "--stack-row-delay": `${index * 90}ms`,
                } as CSSProperties
              }
            >
              <h3 className="text-sm font-extrabold uppercase tracking-[0.14em] text-slate-700 xl:w-[12.5rem] xl:shrink-0">
                {group.title}
              </h3>
              <StackPills
                skills={group.skills}
                featured={group.featured}
                muted={group.muted}
              />
            </div>
          ))}
        </div>
      </ScrollReveal>
    </SectionShell>
  );
}
