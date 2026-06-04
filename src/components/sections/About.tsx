import AboutPortrait from "@/components/ui/AboutPortrait";
import CredentialVerificationPanel from "@/components/ui/CredentialVerificationPanel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionShell from "@/components/ui/SectionShell";
import {
  aboutHighlight,
  aboutParagraphs,
  aboutQuickFacts,
  siteConfig,
} from "@/data/portfolio";

export default function About() {
  return (
    <SectionShell className="section-surface-base about-section-spacing">
      <ScrollReveal variant="fade-up">
        <div id="about" className="max-w-3xl lg:max-w-none">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent">
            About
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            About Stephen
          </h2>
          <p className="mt-4 text-base text-muted sm:text-lg">
            Senior frontend developer based in Malaysia
          </p>
        </div>
      </ScrollReveal>

      <div className="about-main-grid mt-10 grid grid-cols-1 gap-10 sm:mt-12 sm:gap-12 xl:mt-14 xl:grid-cols-[auto_minmax(0,1fr)] xl:items-start xl:gap-14 2xl:gap-16">
        <ScrollReveal
          variant="profile-reveal"
          className="about-profile-col panel-shell-profile mx-auto w-full max-w-[20rem] shrink-0 overflow-hidden rounded-2xl border shadow-[0_28px_64px_rgba(15,23,42,0.1)] xl:mx-0 xl:w-[22.5rem] xl:max-w-none"
        >
          <div className="border-b border-sky-200/60 bg-[#f7f9fc] px-6 py-3.5 lg:px-8 lg:py-4">
            <p className="font-mono text-xs font-semibold tracking-wide text-sky-700">
              Developer profile
            </p>
          </div>

          <div className="px-8 py-10 text-center lg:px-10 lg:py-11">
            <div className="flex flex-col items-center">
              <AboutPortrait />

              <div className="mt-10 w-full lg:mt-11">
                <h3 className="text-[1.75rem] font-bold tracking-tight text-navy lg:text-[1.85rem]">
                  {siteConfig.name}
                </h3>
                <p className="mt-3.5 text-base font-semibold text-accent">
                  {siteConfig.title}
                </p>
                <p className="mt-3 text-sm font-medium text-muted lg:text-base">
                  {siteConfig.location}
                </p>
              </div>

              <div className="mt-8 w-full space-y-4 border-t border-border pt-8 text-left lg:mt-10 lg:space-y-4 lg:pt-9">
                {aboutQuickFacts.map((fact) => (
                  <div key={fact} className="flex w-full items-start gap-3">
                    <span
                      className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    <span className="min-w-0 flex-1 text-sm font-medium leading-relaxed text-foreground/90 lg:text-[0.9375rem]">
                      {fact}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="about-content-col min-w-0">
          <ScrollReveal variant="fade-up">
            <div className="flex flex-col gap-5 text-base leading-relaxed text-muted sm:text-lg sm:leading-8">
              {aboutParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={120}>
            <blockquote className="mt-8 rounded-2xl border border-border border-l-4 border-l-accent bg-card px-6 py-6 shadow-sm sm:px-7 lg:px-8">
              <p className="text-base font-semibold leading-relaxed text-navy sm:text-lg">
                {aboutHighlight}
              </p>
            </blockquote>
          </ScrollReveal>

          <div className="mt-8">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-accent">
              Credential Verification
            </p>
            <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-muted">
              Frontend learning, industry certification, and enterprise
              eCommerce background.
            </p>
            <div className="mt-3.5">
              <CredentialVerificationPanel />
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
