'use client'

import React, { useRef, Suspense } from 'react'
import { useLoader, useThree } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Sky } from '@react-three/drei'
import Water from './Water'
import * as THREE from 'three'

export function ModelWorld(props) {
  const gltf = useLoader(GLTFLoader, '/models/world/world.glb')
  const { scene } = gltf
  const { gl } = useThree()

  // Configurar sRGBEncoding
  gl.outputEncoding = THREE.sRGBEncoding

  return (
    <>
      <Sky sunPosition={[7, 60, 1]} rayleigh={0.4} />
      <Suspense fallback={null}>
        <primitive object={scene} {...props} />
      </Suspense>
      <Water />
    </>
  )
}

// 'use client'

// import React, { useRef, Suspense } from 'react'
// import { useGLTF, Sky } from '@react-three/drei'
// // import {Perf} from 'r3f-perf';

// import Water from './Water'
// // import { GLTFLoader } from "three-stdlib";

// export function ModelWorld(props) {
//   const { scene } = useGLTF('/models/world/world.glb')
//   // const { nodes, materials } = useGLTF("/models/world/world.glb");
//   return (
//     <>
//       {/* <Perf position="top-left" /> */}
//       <Sky sunPosition={[7, 60, 1]} rayleigh={0.4} />
//       <Suspense fallback={null}>
//         <primitive object={scene} {...props} />
//       </Suspense>
//       <Water />
//     </>
//   )
// }

// useGLTF.preload('/models/world/world.glb')
