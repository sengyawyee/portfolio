import PanelMeta from "@/components/ui/delivery/PanelMeta";
import StatusChip from "@/components/ui/delivery/StatusChip";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionShell from "@/components/ui/SectionShell";
import { capabilities, deliveryStatement } from "@/data/portfolio";

export default function Capabilities() {
  return (
    <SectionShell className="section-surface-tint">
      <ScrollReveal
        id="capabilities"
        variant="panel-lift"
        className="panel-shell-delivery scroll-mt-10 overflow-hidden rounded-2xl border shadow-[0_24px_64px_rgba(2,6,23,0.28)] lg:rounded-3xl"
      >
        <PanelMeta
          label="Pull request · frontend-delivery"
          detail="build passing"
          theme="delivery"
        />

        <div className="xl:grid xl:grid-cols-[minmax(0,24rem)_1fr] 2xl:grid-cols-[minmax(0,28rem)_1fr]">
          <div className="px-6 py-8 text-white sm:px-8 xl:border-r xl:border-white/10 xl:px-10 xl:py-11 2xl:px-12 2xl:py-12">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
              Delivery
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:leading-tight">
              Frontend delivery system
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-dark sm:text-lg sm:leading-8 lg:mt-6">
              How I turn design, content, and requirements into responsive,
              maintainable production frontend.
            </p>
            <p className="mt-6 text-base leading-relaxed text-white/92 lg:mt-8 lg:text-[1.0625rem] lg:leading-8">
              {deliveryStatement}
            </p>
          </div>

          <div className="px-6 py-8 xl:px-10 xl:py-10 2xl:px-11">
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2 xl:gap-x-8 xl:gap-y-7">
              {capabilities.map((item, index) => (
                <ScrollReveal
                  key={item.title}
                  variant="fade-up"
                  delay={index * 100}
                >
                  <article className="flex gap-4 rounded-lg border border-white/[0.06] bg-white/[0.02] py-4 pl-4 pr-3 transition-colors hover:border-cyan/30 hover:bg-white/[0.04] lg:pl-5 lg:pr-4">
                    <span className="mt-0.5 font-mono text-sm font-bold tabular-nums text-cyan">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                        <h3 className="text-[15px] font-extrabold leading-snug tracking-tight text-white lg:text-base">
                          {item.title}
                        </h3>
                        <StatusChip label={item.status} tone="cyan" />
                      </div>
                      <p className="mt-2.5 text-[12.5px] leading-5 text-slate-300/80 lg:mt-3 lg:text-[13px]">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </SectionShell>
  );
}
