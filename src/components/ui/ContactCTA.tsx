import { siteConfig } from "@/data/portfolio";

interface ContactCTAProps {
  variant?: "primary" | "secondary" | "inverse";
  href?: string;
  download?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function ContactCTA({
  variant = "primary",
  href = `mailto:${siteConfig.email}`,
  download = false,
  className = "",
  children,
}: ContactCTAProps) {
  const baseStyles =
    "inline-flex min-h-11 items-center justify-center px-7 py-3.5 text-base font-semibold transition-all duration-300";

  const variants = {
    primary:
      "rounded-xl bg-accent text-white shadow-md shadow-accent/20 hover:bg-accent-hover",
    secondary:
      "rounded-xl border border-border bg-background text-navy hover:border-accent/40 hover:bg-soft-blue/50",
    inverse:
      "rounded-xl border border-white/20 bg-white/10 text-white hover:border-cyan/40 hover:bg-white/15",
  };

  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`.trim()}
      {...(download && { download: true })}
      {...(isExternal && {
        target: "_blank",
        rel: "noopener noreferrer",
      })}
    >
      {children}
    </a>
  );
}
