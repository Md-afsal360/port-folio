/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: sanekcloff (https://sketchfab.com/sanekcloff)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/runic-sword-7b3be81471c0423ca3cef84edd1e1c23
Title: Runic Sword
*/
'use client'

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export default function Model(props) {
  const { nodes, materials } = useGLTF('/models/sword-transformed.glb');
  const modelRef = useRef();

  useFrame(()=>{
    modelRef.current.rotation.y += 0.007;
  })

  return (
    <group {...props} dispose={null}
    ref={modelRef}
    scale={[1,1.4,1.2]}
    position={[-1,-2.3,-2]}>
      <mesh
        name="Blade_Low__0"
        castShadow
        receiveShadow
        geometry={nodes.Blade_Low__0.geometry}
        material={materials['Scene_-_Root']}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/models/sword-transformed.glb')

