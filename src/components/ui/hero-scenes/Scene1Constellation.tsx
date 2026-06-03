"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { MouseParallax, useIsMobile } from "./shared";

const NODE_COUNT = 52;
const SCOPE_SCALE = 1.25;
const SPREAD_X = 16 * SCOPE_SCALE;
const SPREAD_Y = 9 * SCOPE_SCALE;
const SPREAD_Z = 7 * SCOPE_SCALE;
const CONNECT_DISTANCE = 3.2 * SCOPE_SCALE;
const LINE_KEEP_RATIO = 0.72;
const MOTION_SCALE = 5 / 6;

function createParticleNetwork(count: number) {
  const points: THREE.Vector3[] = [];

  for (let i = 0; i < count; i++) {
    points.push(
      new THREE.Vector3(
        (Math.random() - 0.5) * SPREAD_X,
        (Math.random() - 0.5) * SPREAD_Y,
        (Math.random() - 0.5) * SPREAD_Z - 1.5,
      ),
    );
  }

  const lines: number[] = [];
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      if (
        points[i].distanceTo(points[j]) < CONNECT_DISTANCE &&
        Math.random() < LINE_KEEP_RATIO
      ) {
        lines.push(...points[i].toArray(), ...points[j].toArray());
      }
    }
  }

  const flatPoints = new Float32Array(points.length * 3);
  points.forEach((point, index) => {
    flatPoints[index * 3] = point.x;
    flatPoints[index * 3 + 1] = point.y;
    flatPoints[index * 3 + 2] = point.z;
  });

  return {
    pointPositions: flatPoints,
    linePositions: new Float32Array(lines),
  };
}

const DESKTOP_PARTICLE_COUNT = Math.floor(NODE_COUNT * 1);
const MOBILE_PARTICLE_COUNT = Math.floor(NODE_COUNT * 0.55);
const DESKTOP_PARTICLE_NETWORK = createParticleNetwork(DESKTOP_PARTICLE_COUNT);
const MOBILE_PARTICLE_NETWORK = createParticleNetwork(MOBILE_PARTICLE_COUNT);

function ConstellationLighting() {
  return (
    <>
      <color attach="background" args={["#020617"]} />
      <ambientLight intensity={0.25} color="#1e3a8a" />
      <pointLight position={[4, 3, 4]} intensity={0.85} color="#38bdf8" />
      <pointLight position={[-3, -2, 2]} intensity={0.35} color="#2563eb" />
    </>
  );
}

function ParticleNetwork({ density = 1 }: { density?: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const elapsed = useRef(0);
  const { pointPositions, linePositions } =
    density >= 1 ? DESKTOP_PARTICLE_NETWORK : MOBILE_PARTICLE_NETWORK;

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    elapsed.current += delta;
    const t = elapsed.current;
    groupRef.current.rotation.y = t * 0.04 * MOTION_SCALE;
    groupRef.current.rotation.x = Math.sin(t * 0.25 * MOTION_SCALE) * 0.06;
  });

  return (
    <group ref={groupRef} position={[0.8, 0, 0]}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[pointPositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#38bdf8"
          size={0.09}
          transparent
          opacity={0.9}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#60a5fa"
          transparent
          opacity={0.28}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}

export default function Scene1Constellation() {
  const isMobile = useIsMobile();

  return (
    <>
      <ConstellationLighting />
      <ParticleNetwork density={isMobile ? 0.55 : 1} />
      <MouseParallax enabled={!isMobile} lookAt={[1, 0, 0]} />
    </>
  );
}
