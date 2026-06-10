import SectionEyebrow, { type SectionEyebrowIcon } from "@/components/ui/SectionEyebrow";

interface SectionHeadingProps {
  eyebrow?: string;
  eyebrowIcon?: SectionEyebrowIcon;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  size?: "section" | "display";
  anchorId?: string;
}

export default function SectionHeading({
  eyebrow,
  eyebrowIcon,
  title,
  description,
  align = "left",
  dark = false,
  size = "section",
  anchorId,
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";
  const titleSize =
    size === "display"
      ? "text-3xl sm:text-4xl lg:text-5xl lg:leading-tight"
      : "text-3xl sm:text-4xl lg:leading-tight";

  return (
    <div
      id={anchorId}
      className={`flex max-w-3xl flex-col gap-3 sm:gap-4 ${alignment}`}
    >
      {eyebrow && eyebrowIcon ? (
        <SectionEyebrow label={eyebrow} icon={eyebrowIcon} />
      ) : eyebrow ? (
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-bold tracking-tight ${titleSize} ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-2xl text-sm leading-relaxed sm:text-base sm:leading-8 lg:text-lg ${
            dark ? "text-muted-dark" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
