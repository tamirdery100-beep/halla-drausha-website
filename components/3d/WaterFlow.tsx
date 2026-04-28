"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Float, Environment, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

/**
 * Liquid sphere — center stage. Distorted, slowly rotating, refracts
 * the cyan/deep gradient. Acts as the "drop of water" centerpiece.
 */
function LiquidSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.18;
    meshRef.current.rotation.x = Math.sin(t * 0.25) * 0.12;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.9}>
      <mesh ref={meshRef} castShadow receiveShadow scale={1.6}>
        <icosahedronGeometry args={[1, 8]} />
        <MeshDistortMaterial
          color="#00A3E0"
          roughness={0.05}
          metalness={0.2}
          distort={0.42}
          speed={1.6}
          envMapIntensity={1.4}
        />
      </mesh>
    </Float>
  );
}

/**
 * Orbiting "water particles" — small ico spheres drifting around the core.
 */
function Particles({ count = 40 }: { count?: number }) {
  const positions = useMemo(() => {
    const arr: { p: THREE.Vector3; r: number; speed: number; phase: number }[] = [];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 2.6 + Math.random() * 1.6;
      arr.push({
        p: new THREE.Vector3(
          Math.cos(angle) * radius,
          (Math.random() - 0.5) * 2.4,
          Math.sin(angle) * radius
        ),
        r: 0.03 + Math.random() * 0.06,
        speed: 0.15 + Math.random() * 0.35,
        phase: Math.random() * Math.PI * 2,
      });
    }
    return arr;
  }, [count]);

  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.children.forEach((child, i) => {
      const data = positions[i];
      const angle = t * data.speed + data.phase;
      const radius = data.p.length();
      child.position.x = Math.cos(angle) * radius;
      child.position.z = Math.sin(angle) * radius;
      child.position.y = data.p.y + Math.sin(t * 0.6 + data.phase) * 0.4;
    });
  });

  return (
    <group ref={ref}>
      {positions.map((d, i) => (
        <mesh key={i} position={d.p}>
          <sphereGeometry args={[d.r, 16, 16]} />
          <meshStandardMaterial
            color="#7DD3FC"
            emissive="#00A3E0"
            emissiveIntensity={0.7}
            roughness={0.2}
            metalness={0.6}
          />
        </mesh>
      ))}
    </group>
  );
}

/**
 * Subtle ground reflection plane (deep blue gradient feel).
 */
function GroundGlow() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.4, 0]}>
      <circleGeometry args={[6, 64]} />
      <meshBasicMaterial color="#001b2e" transparent opacity={0.55} />
    </mesh>
  );
}

function CameraResponder() {
  const { camera } = useThree();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    camera.position.x = Math.sin(t * 0.15) * 0.3;
    camera.position.y = 0.4 + Math.cos(t * 0.18) * 0.15;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function WaterFlow() {
  return (
    <Canvas
      shadows
      dpr={[1, 1.8]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      camera={{ position: [0, 0.4, 5.4], fov: 38 }}
      className="!absolute inset-0"
    >
      <color attach="background" args={["#001b2e"]} />
      <fog attach="fog" args={["#001b2e", 6, 14]} />

      <ambientLight intensity={0.4} />
      <directionalLight
        position={[3, 4, 5]}
        intensity={1.2}
        color="#7DD3FC"
        castShadow
      />
      <pointLight position={[-3, -2, -2]} color="#00A3E0" intensity={1.5} />
      <pointLight position={[2, 3, -2]} color="#ffffff" intensity={0.6} />

      <Suspense fallback={null}>
        <Environment preset="night" />
        <LiquidSphere />
        <Particles />
        <GroundGlow />
      </Suspense>

      <CameraResponder />

      {/* OrbitControls disabled by default — keeps composition stable */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </Canvas>
  );
}
