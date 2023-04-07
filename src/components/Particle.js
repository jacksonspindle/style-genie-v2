import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Particle = () => {
  const meshRef = useRef();

  const position = useMemo(() => {
    return new THREE.Vector3(
      Math.random() * 2 - 1,
      Math.random() * 2 - 1,
      Math.random() * 2 - 1
    )
      .normalize()
      .multiplyScalar(Math.random() * 5);
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.1, 32, 32]} />
      <meshBasicMaterial color={0xffffff} />
    </mesh>
  );
};

const ParticleAnimation = () => {
  const particles = useMemo(() => {
    return new Array(100).fill(null);
  }, []);

  return (
    <Canvas style={{ background: "black" }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {particles.map((_, index) => (
        <Particle key={index} />
      ))}
    </Canvas>
  );
};

export default Particle;
