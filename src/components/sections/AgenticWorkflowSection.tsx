import SectionEyebrow from "@/components/ui/SectionEyebrow";
import AgenticFoliaCaseStudy from "@/components/sections/AgenticFoliaCaseStudy";
import AgenticPrinciples from "@/components/sections/AgenticPrinciples";
import AgenticWorkflowSteps from "@/components/sections/AgenticWorkflowSteps";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionShell from "@/components/ui/SectionShell";
import {
  agenticPrinciples,
  agenticWorkflowIntro,
  agenticWorkflowSteps,
  agenticWorkflowSupportingLine,
  foliaCaseStudy,
} from "@/data/portfolio";

export default function AgenticWorkflowSection() {
  return (
    <SectionShell id="agentic-workflow" className="section-surface-tint">
      <ScrollReveal variant="fade-up">
        <div className="max-w-3xl lg:max-w-none">
          <SectionEyebrow label={agenticWorkflowIntro.eyebrow} icon="practice" />
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            {agenticWorkflowIntro.heading}
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted sm:text-base sm:leading-8 lg:text-lg">
            {agenticWorkflowIntro.intro}
          </p>
          <p className="mt-4 text-sm font-semibold text-navy sm:text-base">
            {agenticWorkflowSupportingLine}
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal variant="fade-up" delay={80} className="mt-10 space-y-6 lg:mt-12 lg:space-y-8">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-[0_8px_30px_rgba(15,23,42,0.04)] sm:p-8 lg:p-10">
          <AgenticWorkflowSteps steps={agenticWorkflowSteps} />
          <AgenticPrinciples principles={agenticPrinciples} />
        </div>

        <AgenticFoliaCaseStudy caseStudy={foliaCaseStudy} />
      </ScrollReveal>
    </SectionShell>
  );
}
