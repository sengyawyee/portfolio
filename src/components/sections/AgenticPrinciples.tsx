import type { AgenticPrinciple } from "@/data/portfolio";

type AgenticPrinciplesProps = {
  principles: readonly AgenticPrinciple[];
};

function PrincipleIcon({ variant }: { variant: number }) {
  return (
    <span
      className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border bg-soft-blue/40 text-accent"
      aria-hidden="true"
    >
      <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.25">
        <rect x="4" y="4" width="8" height="8" rx="1" />
        {variant === 0 ? (
          <rect x="6.5" y="6.5" width="3" height="3" rx="0.5" />
        ) : null}
        {variant === 1 ? (
          <path d="M6 8l1.5 1.5L10 7" strokeLinecap="round" strokeLinejoin="round" />
        ) : null}
        {variant === 2 ? (
          <>
            <path d="M6 10h4" strokeLinecap="round" />
            <path d="M8 6v4" strokeLinecap="round" />
          </>
        ) : null}
      </svg>
    </span>
  );
}

export default function AgenticPrinciples({ principles }: AgenticPrinciplesProps) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-8 border-t border-border pt-8 sm:gap-10 lg:grid-cols-3 lg:gap-6 lg:pt-10">
      {principles.map((principle, index) => (
        <div key={principle.title} className="flex min-w-0 gap-3.5">
          <PrincipleIcon variant={index} />
          <div className="min-w-0">
            <h3 className="text-sm font-bold tracking-tight text-navy sm:text-[0.9375rem]">
              {principle.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted sm:text-[0.9375rem] sm:leading-7">
              {principle.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
