/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Pieter Ferreira (https://sketchfab.com/Badboy17Aiden)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/golden-crown-5689a9525a2c425d93f7d483b93d8cfa
Title: Golden crown
*/

"use client"

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export default function Crown(props) {
  const { nodes, materials } = useGLTF('/models/crown-transformed.glb');

  const modelRef = useRef();
  useFrame(()=>{
      modelRef.current.rotation.y += 0.007;

      
      
    //   modelRef.current.position.y = 0+ Math.cos(modelRef.current.rotation.y)*0.20;
    })
  return (
    <group {...props} dispose={null}
    ref={modelRef}
    scale={[0.6/1,0.5/1,0.5]}
    position={[0,0,0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.None}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/models/crown-transformed.glb')
