import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, DepthOfField } from "@react-three/postprocessing";
import * as THREE from "three";

const Particle = React.memo(() => {
  const meshRef = useRef();
  const direction = useRef(
    new THREE.Vector3(
      (Math.random() - 0.5) * 0.005,
      (Math.random() - 0.5) * 0.005,
      (Math.random() - 0.5) * 0.005
    )
  );

  const position = useMemo(() => {
    return new THREE.Vector3(
      Math.random() * 2 - 1,
      Math.random() * 2 - 1,
      Math.random() * 2 - 1
    )
      .normalize()
      .multiplyScalar(Math.random() * 600);
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.add(direction.current);
      if (meshRef.current.position.length() > 5) {
        const normal = meshRef.current.position.clone().normalize();
        const reflected = direction.current.clone().reflect(normal);
        direction.current.copy(reflected);
        meshRef.current.position.add(direction.current);
      }
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.05, 16, 16]} />
      <meshBasicMaterial color={0x000000} />
    </mesh>
  );
});

const ParticleAnimation = () => {
  const particles = useMemo(() => {
    return new Array(4000).fill(null);
  }, []);

  return (
    <Canvas
      style={{ background: "white" }}
      camera={{ position: [0, 0, 10], near: 0.1, far: 20 }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {particles.map((_, index) => (
        <Particle key={index} />
      ))}
      <EffectComposer>
        <DepthOfField
          focusDistance={2}
          focalLength={0.02}
          bokehScale={2}
          height={480}
        />
      </EffectComposer>
    </Canvas>
  );
};

export default ParticleAnimation;
