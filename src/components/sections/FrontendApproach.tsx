import PanelMeta from "@/components/ui/delivery/PanelMeta";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionShell from "@/components/ui/SectionShell";
import { frontendApproachItems } from "@/data/portfolio";

function ReviewCheckIcon() {
  return (
    <span
      className="reveal-check-icon mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-400/35 bg-emerald-50 text-emerald-600"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 12 12"
        className="h-2.5 w-2.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M2 6.5 4.5 9 10 3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function FrontendApproach() {
  return (
    <SectionShell id="approach" className="section-surface-base">
      <ScrollReveal variant="fade-up">
        <div className="max-w-3xl lg:max-w-none">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
            Craft
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Frontend craft standards
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg sm:leading-8">
            The details I check before a frontend build feels ready.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal
        variant="fade-up"
        className="panel-shell-craft mt-12 overflow-hidden rounded-2xl border shadow-[0_12px_40px_rgba(15,23,42,0.05)] lg:mt-14"
      >
        <PanelMeta
          label="Code review checklist"
          detail="6 / 6 passed"
          theme="craft"
        />

        <ol className="divide-y divide-emerald-100/80 bg-white xl:grid xl:grid-cols-2 xl:gap-x-16 xl:gap-y-11 xl:divide-y-0 xl:px-10 xl:py-10">
          {frontendApproachItems.map((item, index) => (
            <li key={item.title}>
              <ScrollReveal
                variant="review-check"
                delay={index * 80}
                className="flex gap-4 px-6 py-8 transition-colors hover:bg-emerald-50/40 sm:px-7 xl:gap-5 xl:px-0 xl:py-0"
              >
                <div className="flex shrink-0 flex-row items-start gap-3 xl:flex-col xl:gap-2">
                  <ReviewCheckIcon />
                  <span className="font-mono text-xs font-bold tabular-nums text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="min-w-0 flex-1 border-l-2 border-emerald-100 pl-5 pt-0.5 xl:pl-6">
                  <h3 className="text-xl font-extrabold leading-snug text-navy xl:text-[1.3rem]">
                    {item.title}
                  </h3>
                  <p className="mt-3.5 text-base leading-relaxed text-muted xl:mt-4 xl:text-[1.0625rem] xl:leading-[1.75]">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            </li>
          ))}
        </ol>
      </ScrollReveal>
    </SectionShell>
  );
}
