import { ContactCTA } from "@/components/ui/ContactCTA";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionShell from "@/components/ui/SectionShell";
import { contactInterests, siteConfig } from "@/data/portfolio";

export default function Contact() {
  return (
    <SectionShell className="section-surface-elevated">
      <ScrollReveal
        variant="deploy-reveal"
        className="panel-shell-deploy overflow-hidden rounded-3xl border bg-card shadow-[0_24px_70px_rgba(15,23,42,0.09)]"
      >
        <div
          id="contact"
          className="hero-grid border-b border-violet-400/15 bg-[#111827] px-6 py-10 sm:px-12 sm:py-14 lg:px-14 lg:py-16"
        >
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-violet-300">
            Deploy · open to opportunities
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
            Open to Senior Frontend Developer opportunities
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-dark sm:text-lg sm:leading-8">
            I&apos;m interested in frontend roles where I can contribute to
            responsive UI development, Vue / Nuxt projects, React / Next.js
            interfaces, corporate websites, CMS-driven platforms, and production
            frontend delivery.
          </p>
        </div>

        <div className="grid gap-10 p-6 sm:gap-12 sm:p-10 xl:grid-cols-[1fr_1.05fr] xl:items-start xl:gap-16 xl:p-12 xl:pt-12">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-navy">Get in touch</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ScrollReveal variant="fade-up" delay={0} className="w-full sm:w-auto">
                <ContactCTA variant="primary" className="w-full sm:w-auto">
                  Email Me
                </ContactCTA>
              </ScrollReveal>
              <ScrollReveal variant="fade-up" delay={90} className="w-full sm:w-auto">
                <ContactCTA
                  variant="secondary"
                  href={siteConfig.linkedin}
                  className="w-full sm:w-auto"
                >
                  LinkedIn
                </ContactCTA>
              </ScrollReveal>
              <ScrollReveal variant="fade-up" delay={180} className="w-full sm:w-auto">
                <ContactCTA
                  href={siteConfig.cvUrl}
                  variant="secondary"
                  download
                  className="w-full sm:w-auto"
                >
                  Download CV
                </ContactCTA>
              </ScrollReveal>
            </div>

            <dl className="mt-11 flex flex-col gap-7 border-t border-border pt-9 lg:mt-12 lg:pt-10">
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.16em] text-muted">
                  Email
                </dt>
                <dd className="mt-2">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-base font-semibold text-navy transition-colors hover:text-accent sm:text-lg"
                  >
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.16em] text-muted">
                  LinkedIn
                </dt>
                <dd className="mt-2">
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-semibold text-navy transition-colors hover:text-accent sm:text-lg"
                  >
                    linkedin.com/in/stephen-seng
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="min-w-0 xl:border-l xl:border-border xl:pl-14 xl:pt-0.5">
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-navy">
              Interested in roles involving
            </h3>
            <ul className="reveal-stagger--compact mt-6 divide-y divide-border rounded-xl border border-border bg-background lg:mt-7">
              {contactInterests.map((item, index) => (
                <li key={item}>
                  <ScrollReveal
                    variant="fade-up"
                    delay={index * 80}
                    className="flex items-center gap-3 px-5 py-4 text-sm font-medium text-muted transition-colors hover:bg-soft-blue/40 sm:text-[0.9375rem]"
                  >
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    {item}
                  </ScrollReveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ScrollReveal>
    </SectionShell>
  );
}
