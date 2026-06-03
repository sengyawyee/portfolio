"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export function useIsMobile() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return mobile;
}

export function useSoftCircleTexture() {
  return useMemo(() => {
    const size = 64;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");

    if (ctx) {
      const gradient = ctx.createRadialGradient(
        size / 2,
        size / 2,
        0,
        size / 2,
        size / 2,
        size / 2,
      );
      gradient.addColorStop(0, "rgba(255,255,255,1)");
      gradient.addColorStop(0.35, "rgba(255,255,255,0.85)");
      gradient.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, size, size);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);
}

export function MouseParallax({
  enabled,
  lookAt = [1, 0, 0] as [number, number, number],
  intensity = 0.9,
}: {
  enabled: boolean;
  lookAt?: [number, number, number];
  intensity?: number;
}) {
  const { camera } = useThree();
  const cameraRef = useRef<THREE.Camera | null>(null);
  const target = useRef({ x: 0, y: 0 });
  const base = useRef<{ x: number; y: number; z: number } | null>(null);

  useEffect(() => {
    cameraRef.current = camera;
    if (!base.current) {
      base.current = {
        x: camera.position.x,
        y: camera.position.y,
        z: camera.position.z,
      };
    }
  }, [camera]);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (event: MouseEvent) => {
      target.current.x = (event.clientX / window.innerWidth - 0.5) * intensity;
      target.current.y = (event.clientY / window.innerHeight - 0.5) * intensity * 0.5;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled, intensity]);

  useFrame(() => {
    const cam = cameraRef.current;
    if (!enabled || !base.current || !cam) return;
    cam.position.x +=
      (base.current.x + target.current.x - cam.position.x) * 0.04;
    cam.position.y +=
      (base.current.y - target.current.y - cam.position.y) * 0.04;
    cam.lookAt(...lookAt);
  });

  return null;
}
