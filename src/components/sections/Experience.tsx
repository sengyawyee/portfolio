import SectionEyebrow from "@/components/ui/SectionEyebrow";
import PanelMeta from "@/components/ui/delivery/PanelMeta";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionShell from "@/components/ui/SectionShell";
import ExperienceItem from "@/components/ui/ExperienceItem";
import { experience, experienceSection } from "@/data/portfolio";

const releaseRefs = [
  "v2018.05 · maxis-ecommerce",
  "v2013.07 · optima-corporate",
  "v2010.10 · fireworks-foundations",
];

export default function Experience() {
  return (
    <SectionShell className="section-surface-tint">
      <ScrollReveal variant="fade-up">
        <div id="experience" className="max-w-3xl lg:max-w-none">
          <SectionEyebrow label="Experience" icon="experience" tone="indigo" />
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            {experienceSection.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base sm:leading-8 lg:text-lg">
            {experienceSection.description}
          </p>
        </div>
      </ScrollReveal>

      <div className="panel-shell-experience mt-12 overflow-hidden rounded-2xl border shadow-[0_12px_40px_rgba(15,23,42,0.05)] lg:mt-14">
        <PanelMeta
          label="Release history"
          detail="changelog · 3 releases"
          theme="experience"
        />

        <div className="border-b border-indigo-100/80 bg-gradient-to-r from-indigo-50/90 via-white to-white px-4 py-3.5 lg:px-8 lg:py-4">
          <p className="font-mono text-[11px] leading-relaxed text-slate-600">
            <span className="text-indigo-600">$</span>{" "}
            <span className="text-slate-700">changelog view</span>
            <span className="text-slate-400"> --profile=</span>
            <span className="text-indigo-600/90">frontend-delivery</span>
          </p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-indigo-500/85">
            career release notes · production frontend
          </p>
        </div>

        <div className="space-y-5 bg-white/80 px-4 py-6 lg:space-y-6 lg:px-8 lg:py-8">
          {experience.map((item, index) => (
            <ScrollReveal
              key={item.company}
              variant="release-notes"
              delay={index * 120}
            >
              <ExperienceItem
                company={item.company}
                role={item.role}
                period={item.period}
                description={item.description}
                highlights={item.highlights}
                releaseRef={releaseRefs[index] ?? "release/frontend"}
                releaseIndex={index + 1}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
