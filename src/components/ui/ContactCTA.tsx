import type { MouseEventHandler, ReactNode } from "react";
import { siteConfig } from "@/data/portfolio";

type ContactCTAVariant = "primary" | "outlined" | "ghost";

interface ContactCTAProps {
  variant?: ContactCTAVariant;
  href?: string;
  download?: boolean;
  className?: string;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.5 6.5 10 11l7.5-4.5M3.5 15.5h13a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-13a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"
      />
    </svg>
  );
}

function LinkIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.5 11.5 12 8m-1.5 3.5 2 2a2.5 2.5 0 0 0 0-3.5l-1-1a2.5 2.5 0 0 0-3.5 0m-2 2-2 2a2.5 2.5 0 0 0 0 3.5l1 1a2.5 2.5 0 0 0 3.5 0"
      />
    </svg>
  );
}

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden="true"
    >
      <path strokeLinecap="round" d="M10 3.5v9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.5 9 10 12.5 13.5 9" />
      <path strokeLinecap="round" d="M4 16.5h12" />
    </svg>
  );
}

const variantStyles: Record<ContactCTAVariant, string> = {
  primary:
    "bg-deep-navy text-white shadow-[0_8px_24px_rgba(15,23,42,0.16)] hover:bg-navy",
  outlined:
    "border border-border bg-white text-navy hover:border-slate-300 hover:bg-slate-50/80",
  ghost: "bg-slate-100 text-navy hover:bg-slate-200/80",
};

const variantIcons: Record<ContactCTAVariant, typeof EmailIcon> = {
  primary: EmailIcon,
  outlined: LinkIcon,
  ghost: DownloadIcon,
};

export function ContactCTA({
  variant = "primary",
  href = `mailto:${siteConfig.email}`,
  download = false,
  className = "",
  children,
  onClick,
}: ContactCTAProps) {
  const Icon = variantIcons[variant];
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl px-6 py-3 text-sm font-bold transition-colors duration-200 sm:min-h-[3.25rem] sm:px-7 sm:text-base ${variantStyles[variant]} ${className}`.trim()}
      onClick={onClick}
      {...(download && { download: true })}
      {...(isExternal && {
        target: "_blank",
        rel: "noopener noreferrer",
      })}
    >
      <Icon className="h-[1.125rem] w-[1.125rem] shrink-0 sm:h-5 sm:w-5" />
      {children}
    </a>
  );
}
