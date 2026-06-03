"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, useSyncExternalStore } from "react";

const HeroSceneCanvas = dynamic(
  () => import("@/components/ui/HeroSceneCanvas"),
  { ssr: false },
);

function subscribeNoop() {
  return () => {};
}

function useIsClient() {
  return useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false,
  );
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return reduced;
}

export default function HeroScene3D() {
  const reducedMotion = usePrefersReducedMotion();
  const mounted = useIsClient();

  if (reducedMotion || !mounted) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 min-h-full"
      aria-hidden="true"
    >
      <HeroSceneCanvas />
      <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/92 via-deep-navy/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/25 via-transparent to-deep-navy/35" />
    </div>
  );
}
