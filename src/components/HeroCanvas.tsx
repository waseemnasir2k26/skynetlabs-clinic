"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, MeshDistortMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function DNAHelix() {
  const group = useRef<THREE.Group>(null!);
  const points = useMemo(() => {
    const arr: { pos: [number, number, number]; side: number }[] = [];
    const turns = 4;
    const count = 140;
    for (let i = 0; i < count; i++) {
      const t = (i / count) * turns * Math.PI * 2;
      const y = (i / count) * 6 - 3;
      const r = 1.1;
      arr.push({ pos: [Math.cos(t) * r, y, Math.sin(t) * r], side: 0 });
      arr.push({
        pos: [Math.cos(t + Math.PI) * r, y, Math.sin(t + Math.PI) * r],
        side: 1,
      });
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.22;
    const mouse = state.mouse;
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      mouse.y * 0.35,
      0.05,
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      mouse.x * 0.15,
      0.05,
    );
  });

  return (
    <group ref={group}>
      {points.map((p, i) => (
        <mesh key={i} position={p.pos}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial
            color={p.side === 0 ? "#2DD4BF" : "#FAF7F2"}
            emissive={p.side === 0 ? "#0F766E" : "#0A2540"}
            emissiveIntensity={0.55}
            roughness={0.25}
            metalness={0.35}
          />
        </mesh>
      ))}
      {Array.from({ length: 70 }).map((_, i) => {
        const t = (i / 70) * 4 * Math.PI * 2;
        const y = (i / 70) * 6 - 3;
        const r = 1.1;
        const a: [number, number, number] = [
          Math.cos(t) * r,
          y,
          Math.sin(t) * r,
        ];
        const b: [number, number, number] = [
          Math.cos(t + Math.PI) * r,
          y,
          Math.sin(t + Math.PI) * r,
        ];
        const mid: [number, number, number] = [
          (a[0] + b[0]) / 2,
          (a[1] + b[1]) / 2,
          (a[2] + b[2]) / 2,
        ];
        const dir = new THREE.Vector3(b[0] - a[0], 0, b[2] - a[2]);
        const len = dir.length();
        const angle = Math.atan2(dir.z, dir.x);
        return (
          <mesh
            key={`r-${i}`}
            position={mid}
            rotation={[0, -angle, Math.PI / 2]}
          >
            <cylinderGeometry args={[0.02, 0.02, len, 8]} />
            <meshStandardMaterial
              color="#14B8A6"
              emissive="#0F766E"
              emissiveIntensity={0.3}
              transparent
              opacity={0.65}
            />
          </mesh>
        );
      })}
    </group>
  );
}

function Orb() {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.clock.elapsedTime * 0.08;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.12;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.6}>
      <mesh ref={mesh} position={[3.8, 0.5, -2]} scale={1.2}>
        <icosahedronGeometry args={[0.9, 4]} />
        <MeshDistortMaterial
          color="#0F766E"
          distort={0.35}
          speed={1.4}
          roughness={0.15}
          metalness={0.6}
          emissive="#0A2540"
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
}

function Particles() {
  const ref = useRef<THREE.Points>(null!);
  const geo = useMemo(() => {
    const count = 240;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  return (
    <points ref={ref} geometry={geo}>
      <pointsMaterial
        size={0.035}
        color="#2DD4BF"
        transparent
        opacity={0.55}
        sizeAttenuation
      />
    </points>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.5], fov: 48 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <color attach="background" args={["#0A2540"]} />
      <fog attach="fog" args={["#0A2540", 8, 18]} />
      <ambientLight intensity={0.35} />
      <directionalLight
        position={[5, 6, 5]}
        intensity={1.1}
        color="#2DD4BF"
      />
      <directionalLight
        position={[-5, -4, -3]}
        intensity={0.6}
        color="#E11D48"
      />
      <pointLight position={[0, 0, 4]} intensity={0.6} color="#14B8A6" />
      <Float speed={0.8} rotationIntensity={0.3} floatIntensity={0.4}>
        <DNAHelix />
      </Float>
      <Orb />
      <Particles />
      <Environment preset="city" />
    </Canvas>
  );
}
