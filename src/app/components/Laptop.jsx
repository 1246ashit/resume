import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

useGLTF.preload("/laptop.glb");
export default function Laptop({onScrollChange }) {
  const group = useRef(null);
  const { nodes, materials, animations, scene } = useGLTF("/laptop.glb");
  const { actions, clips } = useAnimations(animations, scene);
  const scroll = useScroll();

  useEffect(() => {
    actions["Take 001"].play().paused = true;
  }, [actions]);

  useFrame(() => {
    const newTime = (actions["Take 001"].getClip().duration * scroll.offset) / 3;
    actions["Take 001"].time = newTime;

    onScrollChange(scroll.offset);
  });

  return (
    <group ref={group}>
      <primitive object={scene} scale={2} position={[0, -2, 0]} />
    </group>
  );
}
