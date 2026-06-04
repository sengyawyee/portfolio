interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  size?: "section" | "display";
  anchorId?: string;
}

export default function SectionHeading({
  eyebrow,
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
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-bold tracking-tight ${titleSize} ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-2xl text-base leading-relaxed sm:text-lg sm:leading-8 ${
            dark ? "text-muted-dark" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
