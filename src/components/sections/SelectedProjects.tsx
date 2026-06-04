import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionShell from "@/components/ui/SectionShell";
import ProjectCard from "@/components/ui/ProjectCard";
import { earlierProjects, recentProjects } from "@/data/portfolio";

function SubsectionTitle({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div>
      <h3 className="text-xl font-bold text-navy sm:text-2xl">{title}</h3>
      {description ? (
        <p className="mt-2 max-w-2xl text-base text-muted">{description}</p>
      ) : null}
    </div>
  );
}

export default function SelectedProjects() {
  const featured = recentProjects.find((p) => p.featured)!;
  const emgs = recentProjects.find((p) =>
    p.title.includes("Education Malaysia"),
  )!;
  const moreRecent = recentProjects.filter(
    (p) => p !== featured && p !== emgs,
  );

  return (
    <SectionShell className="section-surface-elevated">
      <ScrollReveal variant="fade-up">
        <SectionHeading
          anchorId="work"
          eyebrow="Portfolio"
          title="Selected frontend projects"
          description="Recent work across Vue / Nuxt, corporate websites, education platforms, and public-facing experiences."
        />
      </ScrollReveal>

      <div className="mt-12 lg:mt-14">
        <SubsectionTitle
          title="Featured projects"
          description="Primary case studies — Vue / Nuxt and large public-facing education delivery."
        />

        <ScrollReveal
          variant="stagger"
          className="mt-8 grid grid-cols-1 gap-5 sm:items-stretch xl:grid-cols-2 xl:gap-6"
        >
          {[featured, emgs].map((project) => (
            <div key={project.title} className="reveal-stagger-item flex h-full min-h-0">
              <ProjectCard
                title={project.title}
                category={project.category}
                description={project.description}
                skills={project.skills}
                url={"url" in project ? project.url : undefined}
                image={project.image}
                featured={Boolean(project.featured)}
                size="large"
                fillHeight
              />
            </div>
          ))}
        </ScrollReveal>
      </div>

      <div className="mt-14 lg:mt-16">
        <SubsectionTitle
          title="More selected work"
          description="Additional corporate and public-facing frontend delivery."
        />

        <ScrollReveal
          variant="stagger"
          className="reveal-stagger--compact mt-8 grid grid-cols-1 gap-5 xl:grid-cols-2 xl:gap-6"
        >
          {moreRecent.map((project) => (
            <div key={project.title} className="reveal-stagger-item">
              <ProjectCard
                title={project.title}
                category={project.category}
                description={project.description}
                skills={project.skills}
                url={"url" in project ? project.url : undefined}
                image={project.image}
                size="small"
              />
            </div>
          ))}
        </ScrollReveal>
      </div>

      <div className="mt-16 border-t border-border pt-12 lg:mt-20 lg:pt-14">
        <SubsectionTitle
          title="Earlier frontend experience"
          description="Enterprise, corporate, retail, and product UI from earlier in my career."
        />

        <ScrollReveal
          variant="stagger"
          className="reveal-stagger--compact mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3"
        >
          {earlierProjects.map((project) => (
            <div key={project.title} className="reveal-stagger-item">
              <ProjectCard
                title={project.title}
                category={project.category}
                description={project.description}
                skills={project.skills}
                image={"image" in project ? project.image : undefined}
                compact
              />
            </div>
          ))}
        </ScrollReveal>
      </div>
    </SectionShell>
  );
}
