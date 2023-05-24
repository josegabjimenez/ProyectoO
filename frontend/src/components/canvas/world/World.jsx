'use client'

import React, { useRef, Suspense } from 'react'
import { useGLTF, Sky } from '@react-three/drei'
// import {Perf} from 'r3f-perf';

import Water from './Water'
// import { GLTFLoader } from "three-stdlib";

export function ModelWorld(props) {
  const { scene } = useGLTF('/models/world/world.glb')
  // const { nodes, materials } = useGLTF("/models/world/world.glb");
  return (
    <>
      {/* <Perf position="top-left" /> */}
      <Sky sunPosition={[7, 60, 1]} rayleigh={0.4} />
      <Suspense fallback={null}>
        <primitive object={scene} {...props} />
      </Suspense>
      <Water />
    </>
  )
}

useGLTF.preload('/models/world/world.glb')

export function Dog(props) {
  const { scene } = useGLTF('/dog.glb')

  return <primitive object={scene} {...props} />
}
