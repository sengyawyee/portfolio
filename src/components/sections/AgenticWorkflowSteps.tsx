import type { AgenticWorkflowStep } from "@/data/portfolio";

type AgenticWorkflowStepsProps = {
  steps: readonly AgenticWorkflowStep[];
};

export default function AgenticWorkflowSteps({ steps }: AgenticWorkflowStepsProps) {
  return (
    <ol className="relative">
      <div
        className="pointer-events-none absolute left-[0.3125rem] top-[0.3125rem] bottom-4 w-px bg-border lg:left-[10%] lg:right-[10%] lg:top-[0.3125rem] lg:bottom-auto lg:h-px lg:w-auto"
        aria-hidden="true"
      />

      <div className="flex flex-col gap-8 lg:grid lg:grid-cols-5 lg:gap-5 xl:gap-6">
        {steps.map((step, index) => (
          <li key={step.title} className="relative min-w-0">
            <div className="flex gap-4 lg:flex-col lg:gap-3">
              <span
                className="relative z-[1] mt-0.5 h-3 w-3 shrink-0 rounded-full border-2 border-accent bg-card lg:mt-0"
                aria-hidden="true"
              />
              <div className="min-w-0 flex-1 lg:flex-1">
                <h3 className="font-mono text-[11px] font-bold uppercase leading-snug tracking-[0.12em] text-accent sm:text-xs">
                  {String(index + 1).padStart(2, "0")} {step.title.toUpperCase()}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-[0.9375rem] sm:leading-7">
                  {step.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </div>
    </ol>
  );
}
