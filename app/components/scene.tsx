"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";

function MeshComponent() {
  const fileUrl = "/low_poly_tree_scene_free/scene.gltf";
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);

  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

export function Shiba() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Canvas>
        <OrbitControls />
        <directionalLight position={[1, 1, 1]} intensity={2.5} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={10} />
        <MeshComponent />
      </Canvas>
    </div>
  );
}
