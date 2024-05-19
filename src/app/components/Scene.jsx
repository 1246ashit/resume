"use client";
import { Canvas, useThree } from "@react-three/fiber";
import { useState, useEffect } from "react";
import Laptop from "./Laptop";
import { Suspense } from "react";
import {
  Environment,
  useProgress,
  Html,
  ScrollControls,
  Scroll,
} from "@react-three/drei";

function Loader() {
  const { progress, active } = useProgress();
  return <Html center>{progress.toFixed(1)}%loaded</Html>;
}

export default function Scene({ onScrollChange }) {
  return (
      <Canvas
        gl={{ antialias: true }}
        dpr={[1, 1.5]}
        className="w-full h-screen bg-transparent"
      >
        <Environment preset="city" />
        <Suspense fallback={<Loader />}>
          <ScrollControls damping={0.2} pages={2}>
            <Laptop onScrollChange={onScrollChange} />
          </ScrollControls>
        </Suspense>
      </Canvas>
  );
}
