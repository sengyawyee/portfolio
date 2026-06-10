import HeroButton from "@/components/ui/HeroButton";
import FrontendCraftPanel from "@/components/ui/FrontendCraftPanel";
import HeroScene3D from "@/components/ui/HeroScene3D";
import { siteConfig } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-section hero-grid relative overflow-hidden bg-deep-navy"
    >
      <HeroScene3D />
      <div className="hero-glow pointer-events-none absolute -right-32 top-0 z-[1] h-[500px] w-[500px] rounded-full bg-accent/15 blur-[120px]" />
      <div className="hero-glow pointer-events-none absolute -left-32 bottom-0 z-[1] h-[400px] w-[400px] rounded-full bg-cyan/8 blur-[100px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-12">
        <div className="grid w-full items-center gap-10 md:gap-12 xl:grid-cols-2 xl:gap-20">
          <div>
            <p className="text-sm font-semibold tracking-wide text-cyan sm:text-base">
              {siteConfig.eyebrow}
            </p>

            <h1 className="hero-headline mt-6 font-bold text-white">
              {siteConfig.headline}
            </h1>

            <p className="mt-7 text-sm leading-relaxed text-muted-dark sm:text-xl sm:leading-8">
              {siteConfig.subheadline}
            </p>

            <div className="hero-cta-row mt-10 flex flex-row flex-wrap items-center gap-3 sm:gap-4 xl:flex-nowrap">
              <HeroButton href="#work" variant="primary">
                View Work
              </HeroButton>
              <HeroButton href="#experience" variant="secondary">
                View Experience
              </HeroButton>
              <HeroButton href={siteConfig.cvUrl} variant="secondary" download>
                Download CV
              </HeroButton>
            </div>

            <p className="mt-8 text-sm font-medium text-muted-dark sm:text-base">
              {siteConfig.trustLine}
            </p>
          </div>

          <div className="flex w-full justify-center xl:justify-end">
            <FrontendCraftPanel />
          </div>
        </div>
      </div>
    </section>
  );
}
