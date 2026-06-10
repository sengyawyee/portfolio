import SectionEyebrow from "@/components/ui/SectionEyebrow";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionShell from "@/components/ui/SectionShell";
import StackSkillRow from "@/components/ui/StackSkillRow";
import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  return (
    <SectionShell id="skills" className="section-surface-elevated">
      <ScrollReveal variant="fade-up">
        <div className="max-w-3xl lg:max-w-none">
          <SectionEyebrow label="Skills" icon="skills" />
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Frontend technologies
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base sm:leading-8 lg:text-lg">
            Core tools and workflows used across corporate websites, CMS platforms,
            and modern frontend development.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal variant="fade-up" delay={80} className="mt-10 lg:mt-12">
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
          <dl>
            {skillGroups.map((group, index) => {
              const isOddRow = index % 2 === 0;

              return (
              <div
                key={group.title}
                className={`grid grid-cols-1 gap-4 px-6 py-5 sm:grid-cols-[11.5rem_minmax(0,1fr)] sm:items-center sm:gap-8 sm:px-8 sm:py-5 xl:grid-cols-[13rem_minmax(0,1fr)] xl:gap-12 xl:px-10 ${
                  index > 0 ? "border-t border-border" : ""
                } ${isOddRow ? "bg-[#faf8f5]" : "bg-card"}`}
              >
                <dt className="text-sm font-extrabold uppercase tracking-[0.14em] text-slate-700">
                  {group.title}
                </dt>
                <dd className="min-w-0">
                  <StackSkillRow
                    skills={group.skills}
                    featured={group.featured}
                    muted={group.muted}
                  />
                </dd>
              </div>
              );
            })}
          </dl>
        </div>
      </ScrollReveal>
    </SectionShell>
  );
}
