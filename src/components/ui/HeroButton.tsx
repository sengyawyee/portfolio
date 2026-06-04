interface HeroButtonProps {
  href: string;
  variant?: "primary" | "secondary";
  download?: boolean;
  children: React.ReactNode;
}

export default function HeroButton({
  href,
  variant = "secondary",
  download = false,
  children,
}: HeroButtonProps) {
  const isExternal = href.startsWith("http");
  const className =
    variant === "primary"
      ? "hero-glow-btn hero-glow-btn--primary"
      : "hero-glow-btn hero-glow-btn--secondary";

  return (
    <a
      href={href}
      className={className}
      {...(download && { download: true })}
      {...(isExternal && {
        target: "_blank",
        rel: "noopener noreferrer",
      })}
    >
      <span className="hero-glow-btn__glow" aria-hidden="true" />
      <span className="hero-glow-btn__glow-hover" aria-hidden="true" />
      <span className="hero-glow-btn__stroke" aria-hidden="true" />
      <span className="hero-glow-btn__stroke-hover" aria-hidden="true" />
      <span className="hero-glow-btn__fill" aria-hidden="true" />
      <span className="hero-glow-btn__content">
        <span className="hero-glow-btn__label">{children}</span>
      </span>
    </a>
  );
}
