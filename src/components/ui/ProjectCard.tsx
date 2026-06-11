import Image from "next/image";
import ProjectViewLink, {
  type ProjectViewLocation,
} from "@/components/ui/ProjectViewLink";
import SkillChip from "@/components/ui/SkillChip";

type ProjectCardSize = "large" | "default" | "small" | "compact";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  skills: string[];
  status?: string;
  bullets?: string[];
  url?: string;
  image?: string;
  featured?: boolean;
  compact?: boolean;
  size?: ProjectCardSize;
  fillHeight?: boolean;
  analyticsLocation?: ProjectViewLocation;
}

const imageHeights: Record<ProjectCardSize, string> = {
  large: "h-[17.55rem] sm:h-[18.9rem] lg:h-56",
  default: "h-[16.2rem] sm:h-[17.55rem] lg:h-52",
  small: "h-[12.15rem] sm:h-[13.5rem] lg:h-40",
  compact: "h-[13.5rem] lg:h-40",
};

export default function ProjectCard({
  title,
  category,
  description,
  skills,
  status,
  bullets,
  url,
  image,
  featured = false,
  compact = false,
  size,
  fillHeight = false,
  analyticsLocation,
}: ProjectCardProps) {
  const resolvedSize: ProjectCardSize = compact
    ? "compact"
    : size ?? (featured ? "large" : "default");
  const stretch = fillHeight || compact;
  const isSmall = resolvedSize === "small" || resolvedSize === "compact";

  return (
    <article
      className={`card-hover group flex w-full flex-col overflow-hidden rounded-2xl border border-border bg-card ${
        stretch ? "h-full min-h-0" : "h-fit"
      } ${featured ? "ring-1 ring-accent/15 shadow-sm" : ""}`}
    >
      {image ? (
        <div>
          <div
            className={`flex items-center gap-2 border-b border-border bg-background ${
              isSmall ? "px-3 py-2" : "px-4 py-2.5"
            }`}
          >
            <div className="flex gap-1">
              <span className="h-2 w-2 rounded-full bg-red-400/70" />
              <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
              <span className="h-2 w-2 rounded-full bg-green-400/70" />
            </div>
            <span className="truncate font-mono text-[10px] text-muted">
              {title.toLowerCase().replace(/\s+/g, "-")}.com
            </span>
          </div>
          <div
            className={`relative shrink-0 overflow-hidden bg-slate ${imageHeights[resolvedSize]}`}
          >
            <Image
              src={image}
              alt={`${title} website preview`}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              sizes={
                resolvedSize === "large"
                  ? "(max-width: 1024px) 100vw, 50vw"
                  : resolvedSize === "small" || resolvedSize === "compact"
                    ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    : "(max-width: 1024px) 100vw, 50vw"
              }
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/40 to-transparent" />
          </div>
        </div>
      ) : (
        <div
          className={`border-b border-border bg-gradient-to-br from-soft-blue/50 to-background ${
            resolvedSize === "compact" ? "h-24" : "h-32"
          }`}
        />
      )}

      <div
        className={`flex min-h-0 flex-col gap-3 ${
          isSmall ? "p-5" : "p-6 sm:p-7"
        } ${featured && resolvedSize === "large" ? "sm:p-8" : ""} ${
          stretch ? "flex-1" : "shrink-0"
        }`}
      >
        <div className="flex items-start justify-between gap-3">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
            {category}
          </p>
          <div className="flex shrink-0 flex-wrap items-center justify-end gap-2">
            {status ? (
              <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-muted">
                {status}
              </span>
            ) : null}
            {featured ? (
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">
                Featured
              </span>
            ) : null}
          </div>
        </div>

        <div className="space-y-2">
          <h3
            className={`font-bold tracking-tight text-foreground ${
              resolvedSize === "large"
                ? "text-2xl sm:text-3xl"
                : isSmall
                  ? "text-lg sm:text-xl"
                  : "text-xl sm:text-2xl"
            }`}
          >
            {title}
          </h3>

          {url && analyticsLocation ? (
            <ProjectViewLink
              url={url}
              title={title}
              category={category}
              location={analyticsLocation}
            />
          ) : url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-bright-blue"
            >
              {url.replace("https://", "")}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M4.25 5.5a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-1.5 0V7.06l-5.22 5.22a.75.75 0 1 1-1.06-1.06l5.22-5.22H5a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          ) : null}
        </div>

        <p
          className={`shrink-0 leading-relaxed text-muted ${
            resolvedSize === "large"
              ? "text-sm sm:text-base lg:text-lg sm:leading-relaxed"
              : isSmall
                ? "line-clamp-3 text-sm leading-relaxed"
                : "text-sm sm:text-base"
          }`}
        >
          {description}
        </p>

        {bullets && bullets.length > 0 ? (
          <ul className="shrink-0 space-y-2 text-sm leading-relaxed text-muted">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2.5">
                <span
                  className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                  aria-hidden="true"
                />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        ) : null}

        <ul className="flex shrink-0 flex-wrap gap-2 pt-0.5">
          {skills.map((skill) => (
            <li key={skill}>
              <SkillChip label={skill} small />
            </li>
          ))}
        </ul>

        {fillHeight && <div className="min-h-0 flex-1" aria-hidden="true" />}
      </div>
    </article>
  );
}
