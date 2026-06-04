"use client";

import "@/lib/patchThreeClock";
import { Canvas } from "@react-three/fiber";
import Scene1Constellation from "@/components/ui/hero-scenes/Scene1Constellation";
import { useIsMobile } from "@/components/ui/hero-scenes/shared";

const HERO_CAMERA = {
  position: [0, 0, 7] as [number, number, number],
  fov: 65,
  fovMobile: 52,
};

export default function HeroSceneCanvas() {
  const isMobile = useIsMobile();
  const fov = isMobile ? HERO_CAMERA.fovMobile : HERO_CAMERA.fov;

  return (
    <Canvas
      key={isMobile ? "mobile" : "desktop"}
      className="!absolute inset-0 h-full w-full"
      style={{ width: "100%", height: "100%" }}
      camera={{ position: HERO_CAMERA.position, fov }}
      dpr={[1, 1.5]}
      gl={{
        alpha: false,
        antialias: true,
        powerPreference: "high-performance",
      }}
    >
      <Scene1Constellation />
    </Canvas>
  );
}
