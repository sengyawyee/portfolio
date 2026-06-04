"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

export type ScrollRevealVariant =
  | "fade-up"
  | "panel-lift"
  | "stagger"
  | "review-check"
  | "manifest-scan"
  | "release-notes"
  | "profile-reveal"
  | "deploy-reveal";

type ScrollRevealProps = {
  children: ReactNode;
  variant?: ScrollRevealVariant;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  id?: string;
};

const variantClass: Record<ScrollRevealVariant, string> = {
  "fade-up": "reveal-fade-up",
  "panel-lift": "reveal-panel-lift",
  stagger: "reveal-stagger",
  "review-check": "reveal-review-check",
  "manifest-scan": "reveal-manifest-scan",
  "release-notes": "reveal-release-notes",
  "profile-reveal": "reveal-profile",
  "deploy-reveal": "reveal-deploy",
};

function scheduleReveal(setVisible: (value: boolean) => void) {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      setVisible(true);
    });
  });
}

export default function ScrollReveal({
  children,
  variant = "fade-up",
  delay,
  className = "",
  style,
  id,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let observer: IntersectionObserver | null = null;
    let rafId = 0;

    const onIntersect: IntersectionObserverCallback = (entries) => {
      const entry = entries[0];
      if (!entry?.isIntersecting) return;

      observer?.disconnect();
      scheduleReveal(setVisible);
    };

    rafId = requestAnimationFrame(() => {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.15,
        rootMargin: "0px 0px -12% 0px",
      });
      observer.observe(node);
    });

    return () => {
      cancelAnimationFrame(rafId);
      observer?.disconnect();
    };
  }, []);

  const classes = [
    "reveal",
    variantClass[variant],
    visible ? "is-visible" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const mergedStyle: CSSProperties = {
    ...style,
    ...(delay !== undefined ? { transitionDelay: `${delay}ms` } : {}),
  };

  return (
    <div
      ref={ref}
      id={id}
      className={classes}
      style={Object.keys(mergedStyle).length > 0 ? mergedStyle : undefined}
    >
      {children}
    </div>
  );
}
