"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Icosahedron, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function Knot() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock, pointer }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.x = t * 0.08 + pointer.y * 0.25;
    ref.current.rotation.y = t * 0.12 + pointer.x * 0.25;
  });
  return (
    <Icosahedron ref={ref} args={[2.4, 1]} position={[2.2, 0.3, 0]}>
      <meshStandardMaterial
        color="#5b9dff"
        emissive="#1a3a7a"
        emissiveIntensity={0.5}
        roughness={0.35}
        metalness={0.9}
        wireframe
        transparent
        opacity={0.35}
      />
    </Icosahedron>
  );
}

function Cloud() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const n = 1400;
    const arr = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const r = 6 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.getElapsedTime() * 0.03;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#8fc0ff"
        size={0.035}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

export default function ThreeBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 55 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#8fc0ff" />
        <pointLight position={[-5, -3, 2]} intensity={2} color="#2d6fe0" />
        <Knot />
        <Cloud />
      </Canvas>
    </div>
  );
}
