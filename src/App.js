// https://www.youtube.com/watch?v=2jwqotdQmdQ

import * as THREE from "three"
import './index.css';
import { Suspense, useRef, useState } from 'react';
//display the 3d models
import {Canvas} from '@react-three/fiber';
// rotate things
import {OrbitControls, useGLTF} from '@react-three/drei'; 

function Model(props) {
const { nodes, materials } = useGLTF("/Bosch_Facility.gltf");
return (
<group {...props} dispose={null}>
<group
  position={[10.82, 0.57, 10.1]}
  rotation={[-Math.PI / 2, 0, 0.02]}
  scale={0.02}
>
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.CA_401.geometry}
    material={materials["Retro Vibe 26"]}
    position={[-3.47, -2.82, -22.71]}
    rotation={[0, 0, -3.11]}
    scale={[1, 1.33, 0.47]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.CA_402.geometry}
    material={materials["Retro Vibe 35"]}
    position={[3.46, 1.88, 16.16]}
    rotation={[0, 0, -3.11]}
    scale={[0.57, 0.77, 0.27]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.CA_404.geometry}
    material={materials["Retro Vibe 37"]}
    position={[3.71, -5.62, 5.53]}
    rotation={[0, 0, -3.11]}
    scale={[0.35, 0.52, 0.13]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes["chapeuzinho-1"].geometry}
    material={materials["Retro Vibe 36"]}
    position={[3.46, 1.88, 0.79]}
    rotation={[0, 0, -3.11]}
    scale={[0.47, 0.62, 0.22]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cube.geometry}
    material={materials["Material.001"]}
    position={[10.89, 1.79, 18.31]}
    rotation={[-Math.PI / 2, -0.06, -Math.PI / 2]}
    scale={[1000, 2790.53, 1340.86]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cube001.geometry}
    material={materials["Material.001"]}
    position={[2.81, 6.18, 18.31]}
    rotation={[Math.PI / 2, -1.52, Math.PI / 2]}
    scale={[1000, 2790.53, 1340.86]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cube003.geometry}
    material={materials["Material.001"]}
    position={[-4.04, 1.32, 18.31]}
    rotation={[Math.PI / 2, 0.07, Math.PI / 2]}
    scale={[1000, 2790.53, 1340.86]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cube004.geometry}
    material={materials["Material.001"]}
    position={[4.21, -4.3, 18.31]}
    rotation={[-Math.PI / 2, 1.53, -1.57]}
    scale={[1000, 2790.53, 1340.86]}
  />
</group>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.Academia.geometry}
  material={materials["Retro Vibe 29"]}
  position={[6.14, 0.04, 10.14]}
  rotation={[-1.57, 0.01, 1.79]}
  scale={[0.02, 0.02, 0.01]}
/>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.CA_106.geometry}
  material={materials["Retro Vibe 25"]}
  position={[15.54, 0.04, 9.68]}
  rotation={[-1.56, -0.05, 0.02]}
  scale={[0.02, 0.02, 0.05]}
/>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.CA_126.geometry}
  material={materials["Retro Vibe 32"]}
  position={[13.97, 0.06, 2.29]}
  rotation={[-Math.PI / 2, 0, 0.02]}
  scale={0.02}
/>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.CA_140.geometry}
  material={materials["Retro Vibe 8"]}
  position={[15.95, 0.07, 2.96]}
  rotation={[-Math.PI / 2, 0, 0.25]}
  scale={[0.02, 0.02, 0.05]}
/>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.CA_147.geometry}
  material={materials["Retro Vibe 11"]}
  position={[14.85, 0.07, 1.66]}
  rotation={[-Math.PI / 2, 0, 0.25]}
  scale={[0.02, 0.02, 0.05]}
/>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.CA_148.geometry}
  material={materials["Retro Vibe 10"]}
  position={[15.77, 0.07, 1.42]}
  rotation={[-Math.PI / 2, 0, 0.25]}
  scale={[0.02, 0.02, 0.05]}
/>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.CA_149.geometry}
  material={materials["Retro Vibe 9"]}
  position={[15.75, 0.07, 2.15]}
  rotation={[-Math.PI / 2, 0, 0.25]}
  scale={[0.02, 0.02, 0.05]}
/>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.CA_150.geometry}
  material={materials["Retro Vibe 14"]}
  position={[16.66, 0.07, 7.81]}
  rotation={[-Math.PI / 2, 0, 0.25]}
  scale={[0.02, 0.02, 0.06]}
/>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.CA_151.geometry}
  material={materials["Retro Vibe 16"]}
  position={[17.72, 0.08, 7.54]}
  rotation={[-Math.PI / 2, 0, 0.25]}
  scale={[0.02, 0.02, 0.07]}
/>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.CA_160.geometry}
  material={materials["Retro Vibe 6"]}
  position={[16.12, 0.08, 5.78]}
  rotation={[-Math.PI / 2, 0, 0.25]}
  scale={[0.02, 0.02, 0.07]}
/>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.CA_165.geometry}
  material={materials["Retro Vibe 17"]}
  position={[14.12, 0.06, 2.71]}
  rotation={[-Math.PI / 2, 0, 0.02]}
  scale={0.02}
/>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.CA_170.geometry}
  material={materials["Retro Vibe 7"]}
  position={[17.59, 0.08, 7.07]}
  rotation={[-Math.PI / 2, 0, 0.25]}
  scale={[0.02, 0.02, 0.07]}
/>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.CA_180.geometry}
  material={materials["Retro Vibe 15"]}
  position={[17.86, 0.06, 8.42]}
  rotation={[-1.56, -0.02, 0.02]}
  scale={[0.02, 0.02, 0.03]}
/>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.CA_183.geometry}
  material={materials["Retro Vibe 19"]}
  position={[17.49, 0.08, 9.13]}
  rotation={[-1.58, 0.02, -2.87]}
  scale={[0.02, 0.02, 0.03]}
/>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.CA_204.geometry}
  material={materials["Retro Vibe 23"]}
  position={[12.94, 0.06, 10.64]}
  rotation={[-Math.PI / 2, 0, -2.89]}
  scale={[0.02, 0.02, 0.05]}
/>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.CA_205.geometry}
  material={materials["Retro Vibe 22"]}
  position={[14.72, 0.07, 10.06]}
  rotation={[-Math.PI / 2, 0, -2.89]}
  scale={[0.02, 0.02, 0.04]}
/>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.CA_220.geometry}
  material={materials["Retro Vibe 21"]}
  position={[14.99, 0.07, 10.35]}
  rotation={[-Math.PI / 2, 0, -2.89]}
  scale={[0.02, 0.02, 0.03]}
/>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.CA_300.geometry}
  material={materials["Calm Balm"]}
  position={[14.5, 0.06, 5.21]}
  rotation={[-Math.PI / 2, 0, 0.02]}
  scale={0.02}
/>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.CA_320.geometry}
  material={materials["Future Vision"]}
  position={[14.91, 0.06, 6.79]}
  rotation={[-Math.PI / 2, 0, 0.02]}
  scale={0.02}
/>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.CA_325.geometry}
  material={materials["Retro Vibe 4"]}
  position={[14.31, 0.06, 4.37]}
  rotation={[-Math.PI / 2, 0, 0.02]}
  scale={0.02}
/>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.CA_340.geometry}
  material={materials["Retro Vibe 33"]}
  position={[12.01, -0.04, 3.5]}
  rotation={[-1.63, 0.02, 0.02]}
  scale={[0.02, 0.02, 0.04]}
/>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.CA_350.geometry}
  material={materials["Retro Vibe 12"]}
  position={[10.81, 0.04, 4.08]}
  rotation={[-Math.PI / 2, 0, -1.33]}
  scale={[0.02, 0.02, 0.05]}
/>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.CA_360.geometry}
  material={materials["Calm Balm"]}
  position={[13.05, 0.05, 6.58]}
  rotation={[-Math.PI / 2, 0, 0.02]}
  scale={0.02}
/>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.CA_370.geometry}
  material={materials["Beyond the Pines 1"]}
  position={[11.29, 0.04, 7.08]}
  rotation={[-Math.PI / 2, 0, 0.02]}
  scale={0.02}
/>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.CA_560.geometry}
  material={materials["Retro Vibe 30"]}
  position={[4.22, 0.03, 9.77]}
  rotation={[-Math.PI / 2, 0, 0.22]}
  scale={0.02}
/>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.CA_600.geometry}
  material={materials["Retro Vibe 27"]}
  position={[6.44, 0.04, 8.85]}
  rotation={[-Math.PI / 2, 0, 1.8]}
  scale={[0.02, 0.03, 0.01]}
/>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.DigiHub.geometry}
  material={materials["Retro Vibe 31"]}
  position={[4.36, 0.03, 9.14]}
  rotation={[-Math.PI / 2, 0, 0.2]}
  scale={[0.02, 0.02, 0.01]}
/>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.KINDERHAUS.geometry}
  material={materials["Retro Vibe 28"]}
  position={[5.83, 0.04, 10.24]}
  rotation={[-Math.PI / 2, 0, 1.8]}
  scale={[0.02, 0.02, 0.01]}
/>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.Portaria_3.geometry}
  material={materials["Retro Vibe 34"]}
  position={[9.64, 0.03, 11.36]}
  rotation={[-Math.PI / 2, 0, -2.97]}
  scale={0.02}
/>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.Portaria_4.geometry}
  material={materials["Retro Vibe 18"]}
  position={[16.45, 0.05, 8.71]}
  rotation={[-Math.PI / 2, 0, -2.84]}
  scale={0.02}
/>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.Portaria_5.geometry}
  material={materials["Retro Vibe 20"]}
  position={[15.89, 0.05, 9.03]}
  rotation={[-Math.PI / 2, 0, -2.84]}
  scale={[0.02, 0.02, 0.05]}
/>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.Portaria_8.geometry}
  material={materials["Retro Vibe 13"]}
  position={[13.07, 0.06, 2.06]}
  rotation={[-Math.PI / 2, 0, 0.31]}
  scale={[0.02, 0.02, 0.05]}
/>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.Refeitorio.geometry}
  material={materials["Retro Vibe 24"]}
  position={[13.6, 0.07, 9.86]}
  rotation={[-Math.PI / 2, 0, -2.89]}
  scale={0.02}
/>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.Cube002.geometry}
  material={nodes.Cube002.material}
  position={[10.31, 0.35, 10.33]}
  rotation={[0, -0.7, 0]}
  scale={[18.45, 25.44, 18.45]}
/>
<group
  position={[1.68, 0.04, 7.19]}
  rotation={[Math.PI, -0.36, Math.PI]}
  scale={[0.28, 0.09, 0.15]}
>
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Plane002.geometry}
    material={materials.White}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Plane002_1.geometry}
    material={materials.Green}
  />
</group>
<group
  position={[2.73, 0.04, 6.63]}
  rotation={[-Math.PI, 1.23, -Math.PI]}
  scale={[0.13, 0.09, 0.07]}
>
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Plane001.geometry}
    material={materials.White}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Plane001_1.geometry}
    material={materials.Green}
  />
</group>
<group
  position={[2.54, 0.04, 6.11]}
  rotation={[-Math.PI, 1.23, -Math.PI]}
  scale={[0.13, 0.09, 0.07]}
>
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Plane003.geometry}
    material={materials.White}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Plane003_1.geometry}
    material={materials.Green}
  />
</group>
<group
  position={[2.21, 0.05, 8.34]}
  rotation={[-Math.PI, 1.22, -Math.PI]}
  scale={[0.12, 0.09, 0.07]}
>
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Plane004.geometry}
    material={materials.White}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Plane004_1.geometry}
    material={materials.Green}
  />
</group>
<group
  position={[5.35, 0.04, 7.84]}
  rotation={[0, 0.24, 0]}
  scale={[0.16, 0.09, 0.09]}
>
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Plane005.geometry}
    material={materials.White}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Plane005_1.geometry}
    material={materials.Green}
  />
</group>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.teren.geometry}
  material={materials["Material.002"]}
  position={[2.85, 0.04, 8.75]}
  rotation={[0, -0.91, 0]}
  scale={[0.11, 0.01, 0.15]}
/>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.teren001.geometry}
  material={materials["Material.002"]}
  position={[2.98, 0.04, 8.93]}
  rotation={[0, -0.91, 0]}
  scale={[0.11, 0.01, 0.15]}
/>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.teren002.geometry}
  material={materials["Material.002"]}
  position={[2.81, 0.03, 7.66]}
  rotation={[0, 0.32, 0]}
  scale={[0.11, 0.01, 0.15]}
/>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.teren003.geometry}
  material={materials["Material.002"]}
  position={[3.02, 0.03, 7.59]}
  rotation={[0, 0.32, 0]}
  scale={[0.11, 0.01, 0.15]}
/>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.fileu.geometry}
  material={materials["Material.029"]}
  position={[2.82, 0.07, 8.72]}
  rotation={[Math.PI / 2, 0, 0.91]}
  scale={[0.02, 0.01, 0.01]}
>
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cube005_1.geometry}
    material={materials["Material.032"]}
    position={[2, 0, -0.95]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={[3.01, 0.08, 0.02]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cube006.geometry}
    material={nodes.Cube006.material}
    position={[2, 0, 0.94]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={[3.01, 0.08, 0.02]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cube007.geometry}
    material={materials["Material.034"]}
    position={[-0.79, 0, 0]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={[0.02, 0.89, 0.02]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cube008.geometry}
    material={materials["Material.035"]}
    position={[4.68, 0, 0]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={[0.03, 0.89, 0.01]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cube011.geometry}
    material={materials["Material.040"]}
    position={[5.52, 0, -1.27]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={[0.01, 0.02, 0.01]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cube013.geometry}
    material={materials["Material.040"]}
    position={[5.46, 0, 1.5]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={[0.01, 0.02, 0.01]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cube014.geometry}
    material={materials["Material.040"]}
    position={[-1.57, 0, 1.33]}
    rotation={[Math.PI / 2, 0, Math.PI]}
    scale={[0.01, 0.02, 0.01]}
  >
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Torus002.geometry}
      material={materials["Material.041"]}
      position={[-1.46, 0.09, 0]}
      rotation={[-1.55, 0, 0]}
      scale={[0.67, 1.33, 0.67]}
    />
  </mesh>
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cylinder013.geometry}
    material={nodes.Cylinder013.material}
    position={[-0.79, 0, -2.75]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={[0.01, 0.17, 0.02]}
  >
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder007.geometry}
      material={materials["Material.036"]}
      position={[0, -9.99, 0]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder009.geometry}
      material={nodes.Cylinder009.material}
      position={[0, -7.99, 0]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder010.geometry}
      material={materials["Material.037"]}
      position={[0, -5.99, 0]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder011.geometry}
      material={nodes.Cylinder011.material}
      position={[0, -4, 0]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder012.geometry}
      material={materials["Material.038"]}
      position={[0, -2, 0]}
    />
  </mesh>
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cylinder019.geometry}
    material={nodes.Cylinder019.material}
    position={[4.68, 0, -2.81]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={[0.01, 0.17, 0.02]}
  >
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder014.geometry}
      material={materials["Material.036"]}
      position={[0, -9.99, 0]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder015.geometry}
      material={nodes.Cylinder015.material}
      position={[0, -7.99, 0]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder016.geometry}
      material={materials["Material.037"]}
      position={[0, -5.99, 0]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder017.geometry}
      material={nodes.Cylinder017.material}
      position={[0, -4, 0]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder018.geometry}
      material={materials["Material.038"]}
      position={[0, -2, 0]}
    />
  </mesh>
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Plane001_2.geometry}
    material={materials["Material.027"]}
    position={[4, 0, 0]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Plane002_2.geometry}
    material={materials["Material.028"]}
    position={[2, 0, 0]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Plane003_2.geometry}
    material={materials["Material.042"]}
    position={[4.86, -0.02, -0.93]}
    rotation={[1.56, 1.52, -1.54]}
    scale={[0.05, 1, 0.02]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Plane004_2.geometry}
    material={materials["Material.042"]}
    position={[-0.97, 0.02, -0.93]}
    rotation={[Math.PI, -Math.PI / 2, 0]}
    scale={[0.05, 1, 0.02]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Torus001.geometry}
    material={materials["Material.041"]}
    position={[5.44, 0, 1.5]}
    rotation={[-3.12, 0, 0]}
    scale={[0.01, 0.02, 0.01]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Torus003.geometry}
    material={materials["Material.041"]}
    position={[5.5, 0, -1.27]}
    rotation={[-3.12, 0, 0]}
    scale={[0.01, 0.02, 0.01]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Torus004.geometry}
    material={materials["Material.041"]}
    position={[5.45, 0, -0.04]}
    rotation={[-3.12, 0, 0]}
    scale={[0.01, 0.02, 0.01]}
  >
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cube012.geometry}
      material={materials["Material.040"]}
      position={[2.19, 0, 0.26]}
      rotation={[1.55, 0, 0]}
      scale={[1.5, 1.5, 0.75]}
    />
  </mesh>
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Torus005.geometry}
    material={materials["Material.041"]}
    position={[-1.56, 0, 0.17]}
    rotation={[3.12, 0, Math.PI]}
    scale={[0.01, 0.02, 0.01]}
  >
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cube015.geometry}
      material={materials["Material.040"]}
      position={[2.18, 0, 0.26]}
      rotation={[1.55, 0, 0]}
      scale={[1.5, 1.5, 0.75]}
    />
  </mesh>
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Torus006.geometry}
    material={materials["Material.041"]}
    position={[-1.62, 0, -1.27]}
    rotation={[3.12, 0, Math.PI]}
    scale={[0.01, 0.02, 0.01]}
  >
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cube016.geometry}
      material={materials["Material.040"]}
      position={[2.19, 0.01, 0.66]}
      rotation={[1.55, 0, 0]}
      scale={[1.5, 1.5, 0.75]}
    />
  </mesh>
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cube009.geometry}
    material={materials["Material.039"]}
    position={[5.59, 0, 1.27]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={[0.12, 1.81, 0.2]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cube010.geometry}
    material={materials["Material.039"]}
    position={[-1.7, 0.01, 1.27]}
    rotation={[Math.PI / 2, 0, Math.PI]}
    scale={[0.12, 1.81, 0.2]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cylinder.geometry}
    material={materials["Material.022"]}
    position={[5.59, 0, 0.88]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={[0.07, 2.23, 0.11]}
  >
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder002.geometry}
      material={materials["Material.030"]}
      position={[-4.69, 0.91, 0]}
      rotation={[0, 0, 2.34]}
      scale={[-0.01, -4.42, -0.02]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder003.geometry}
      material={materials["Material.031"]}
      position={[-4.46, 0.41, 0]}
      rotation={[0, 0, 1.89]}
      scale={[0, -4.54, -0.02]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder004.geometry}
      material={materials["Material.031"]}
      position={[-4.81, -0.19, 0]}
      rotation={[0, 0, 0.71]}
      scale={[-0.01, -4.05, -0.02]}
    />
  </mesh>
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cylinder001.geometry}
    material={materials["Material.026"]}
    position={[-1.7, 0, 0.84]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={[0.07, 2.23, 0.11]}
  >
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder005.geometry}
      material={materials["Material.030"]}
      position={[5.6, 0.89, 0]}
      rotation={[0, 0, 0.83]}
      scale={[0, -4.9, -0.02]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder006.geometry}
      material={materials["Material.030"]}
      position={[5.57, -0.16, 0]}
      rotation={[0, 0, 2.36]}
      scale={[-0.01, -4.92, -0.02]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder008.geometry}
      material={materials["Material.030"]}
      position={[5.51, 0.31, 0]}
      rotation={[0, 0, 1.72]}
      scale={[0, -5, -0.02]}
    />
  </mesh>
</mesh>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.fileu001.geometry}
  material={materials["Material.029"]}
  position={[2.96, 0.06, 8.89]}
  rotation={[Math.PI / 2, 0, 0.91]}
  scale={[0.02, 0.01, 0.01]}
>
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cube017.geometry}
    material={materials["Material.032"]}
    position={[2, 0, -0.95]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={[3.01, 0.08, 0.02]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cube018.geometry}
    material={nodes.Cube018.material}
    position={[2, 0, 0.94]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={[3.01, 0.08, 0.02]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cube019.geometry}
    material={materials["Material.034"]}
    position={[-0.79, 0, 0]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={[0.02, 0.89, 0.02]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cube020.geometry}
    material={materials["Material.035"]}
    position={[4.68, 0, 0]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={[0.03, 0.89, 0.01]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cube023.geometry}
    material={materials["Material.040"]}
    position={[5.52, 0, -1.27]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={[0.01, 0.02, 0.01]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cube025.geometry}
    material={materials["Material.040"]}
    position={[5.46, 0, 1.5]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={[0.01, 0.02, 0.01]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cube026.geometry}
    material={materials["Material.040"]}
    position={[-1.57, 0, 1.33]}
    rotation={[Math.PI / 2, 0, Math.PI]}
    scale={[0.01, 0.02, 0.01]}
  >
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Torus010.geometry}
      material={materials["Material.041"]}
      position={[-1.46, 0.09, 0]}
      rotation={[-1.55, 0, 0]}
      scale={[0.67, 1.33, 0.67]}
    />
  </mesh>
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cylinder033.geometry}
    material={nodes.Cylinder033.material}
    position={[-0.79, 0, -2.75]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={[0.01, 0.17, 0.02]}
  >
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder028.geometry}
      material={materials["Material.036"]}
      position={[0, -9.99, 0]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder029.geometry}
      material={nodes.Cylinder029.material}
      position={[0, -7.99, 0]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder030.geometry}
      material={materials["Material.037"]}
      position={[0, -5.99, 0]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder031.geometry}
      material={nodes.Cylinder031.material}
      position={[0, -4, 0]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder032.geometry}
      material={materials["Material.038"]}
      position={[0, -2, 0]}
    />
  </mesh>
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cylinder039.geometry}
    material={nodes.Cylinder039.material}
    position={[4.68, 0, -2.81]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={[0.01, 0.17, 0.02]}
  >
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder034.geometry}
      material={materials["Material.036"]}
      position={[0, -9.99, 0]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder035.geometry}
      material={nodes.Cylinder035.material}
      position={[0, -7.99, 0]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder036.geometry}
      material={materials["Material.037"]}
      position={[0, -5.99, 0]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder037.geometry}
      material={nodes.Cylinder037.material}
      position={[0, -4, 0]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder038.geometry}
      material={materials["Material.038"]}
      position={[0, -2, 0]}
    />
  </mesh>
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Plane005_2.geometry}
    material={materials["Material.027"]}
    position={[4, 0, 0]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Plane006.geometry}
    material={materials["Material.028"]}
    position={[2, 0, 0]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Plane007.geometry}
    material={materials["Material.042"]}
    position={[4.86, -0.02, -0.93]}
    rotation={[1.56, 1.52, -1.54]}
    scale={[0.05, 1, 0.02]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Plane008.geometry}
    material={materials["Material.042"]}
    position={[-0.97, 0.02, -0.93]}
    rotation={[Math.PI, -Math.PI / 2, 0]}
    scale={[0.05, 1, 0.02]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Torus007.geometry}
    material={materials["Material.041"]}
    position={[5.5, 0, -1.27]}
    rotation={[-3.12, 0, 0]}
    scale={[0.01, 0.02, 0.01]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Torus008.geometry}
    material={materials["Material.041"]}
    position={[5.45, 0, -0.04]}
    rotation={[-3.12, 0, 0]}
    scale={[0.01, 0.02, 0.01]}
  >
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cube024.geometry}
      material={materials["Material.040"]}
      position={[2.18, 0, 0.26]}
      rotation={[1.55, 0, 0]}
      scale={[1.5, 1.5, 0.75]}
    />
  </mesh>
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Torus009.geometry}
    material={materials["Material.041"]}
    position={[5.44, 0, 1.5]}
    rotation={[-3.12, 0, 0]}
    scale={[0.01, 0.02, 0.01]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Torus011.geometry}
    material={materials["Material.041"]}
    position={[-1.56, 0, 0.17]}
    rotation={[3.12, 0, Math.PI]}
    scale={[0.01, 0.02, 0.01]}
  >
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cube027.geometry}
      material={materials["Material.040"]}
      position={[2.18, 0, 0.26]}
      rotation={[1.55, 0, 0]}
      scale={[1.5, 1.5, 0.75]}
    />
  </mesh>
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Torus012.geometry}
    material={materials["Material.041"]}
    position={[-1.62, 0, -1.27]}
    rotation={[3.12, 0, Math.PI]}
    scale={[0.01, 0.02, 0.01]}
  >
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cube028.geometry}
      material={materials["Material.040"]}
      position={[2.19, 0.01, 0.66]}
      rotation={[1.55, 0, 0]}
      scale={[1.5, 1.5, 0.75]}
    />
  </mesh>
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cube021.geometry}
    material={materials["Material.039"]}
    position={[5.59, 0, 1.27]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={[0.12, 1.81, 0.2]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cube022.geometry}
    material={materials["Material.039"]}
    position={[-1.7, 0.01, 1.27]}
    rotation={[Math.PI / 2, 0, Math.PI]}
    scale={[0.12, 1.81, 0.2]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cylinder020.geometry}
    material={materials["Material.022"]}
    position={[5.59, 0, 0.88]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={[0.07, 2.23, 0.11]}
  >
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder022.geometry}
      material={materials["Material.030"]}
      position={[-4.69, 0.91, 0]}
      rotation={[0, 0, 2.34]}
      scale={[-0.01, -4.42, -0.02]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder023.geometry}
      material={materials["Material.031"]}
      position={[-4.46, 0.41, 0]}
      rotation={[0, 0, 1.89]}
      scale={[0, -4.54, -0.02]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder024.geometry}
      material={materials["Material.031"]}
      position={[-4.81, -0.19, 0]}
      rotation={[0, 0, 0.71]}
      scale={[-0.01, -4.05, -0.02]}
    />
  </mesh>
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cylinder021.geometry}
    material={materials["Material.026"]}
    position={[-1.7, 0, 0.84]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={[0.07, 2.23, 0.11]}
  >
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder025.geometry}
      material={materials["Material.030"]}
      position={[5.6, 0.89, 0]}
      rotation={[0, 0, 0.83]}
      scale={[0, -4.9, -0.02]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder026.geometry}
      material={materials["Material.030"]}
      position={[5.57, -0.16, 0]}
      rotation={[0, 0, 2.36]}
      scale={[-0.01, -4.92, -0.02]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder027.geometry}
      material={materials["Material.030"]}
      position={[5.51, 0.31, 0]}
      rotation={[0, 0, 1.72]}
      scale={[0, -5, -0.02]}
    />
  </mesh>
</mesh>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.fileu002.geometry}
  material={materials["Material.029"]}
  position={[2.77, 0.06, 7.68]}
  rotation={[Math.PI / 2, 0, -0.32]}
  scale={[0.02, 0.01, 0.01]}
>
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cube029.geometry}
    material={materials["Material.032"]}
    position={[2, 0, -0.95]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={[3.01, 0.08, 0.02]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cube030.geometry}
    material={nodes.Cube030.material}
    position={[2, 0, 0.94]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={[3.01, 0.08, 0.02]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cube031.geometry}
    material={materials["Material.034"]}
    position={[-0.79, 0, 0]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={[0.02, 0.89, 0.02]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cube032.geometry}
    material={materials["Material.035"]}
    position={[4.68, 0, 0]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={[0.03, 0.89, 0.01]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cube035_1.geometry}
    material={materials["Material.040"]}
    position={[5.52, 0, -1.27]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={[0.01, 0.02, 0.01]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cube037.geometry}
    material={materials["Material.040"]}
    position={[5.46, 0, 1.5]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={[0.01, 0.02, 0.01]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cube038.geometry}
    material={materials["Material.040"]}
    position={[-1.57, 0, 1.33]}
    rotation={[Math.PI / 2, 0, Math.PI]}
    scale={[0.01, 0.02, 0.01]}
  >
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Torus016.geometry}
      material={materials["Material.041"]}
      position={[-1.45, 0.09, 0]}
      rotation={[-1.55, 0, 0]}
      scale={[0.67, 1.33, 0.67]}
    />
  </mesh>
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cylinder053.geometry}
    material={nodes.Cylinder053.material}
    position={[-0.79, 0, -2.75]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={[0.01, 0.17, 0.02]}
  >
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder048.geometry}
      material={materials["Material.036"]}
      position={[0, -9.99, 0]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder049.geometry}
      material={nodes.Cylinder049.material}
      position={[0, -7.99, 0]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder050.geometry}
      material={materials["Material.037"]}
      position={[0, -5.99, 0]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder051.geometry}
      material={nodes.Cylinder051.material}
      position={[0, -4, 0]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder052.geometry}
      material={materials["Material.038"]}
      position={[0, -2, 0]}
    />
  </mesh>
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cylinder059.geometry}
    material={nodes.Cylinder059.material}
    position={[4.68, 0, -2.81]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={[0.01, 0.17, 0.02]}
  >
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder054.geometry}
      material={materials["Material.036"]}
      position={[0, -9.99, 0]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder055.geometry}
      material={nodes.Cylinder055.material}
      position={[0, -7.99, 0]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder056.geometry}
      material={materials["Material.037"]}
      position={[0, -5.99, 0]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder057.geometry}
      material={nodes.Cylinder057.material}
      position={[0, -4, 0]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder058.geometry}
      material={materials["Material.038"]}
      position={[0, -2, 0]}
    />
  </mesh>
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Plane009.geometry}
    material={materials["Material.027"]}
    position={[4, 0, 0]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Plane010.geometry}
    material={materials["Material.028"]}
    position={[2, 0, 0]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Plane011.geometry}
    material={materials["Material.042"]}
    position={[4.86, -0.02, -0.93]}
    rotation={[1.56, 1.52, -1.54]}
    scale={[0.05, 1, 0.02]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Plane012.geometry}
    material={materials["Material.042"]}
    position={[-0.97, 0.02, -0.93]}
    rotation={[Math.PI, -Math.PI / 2, 0]}
    scale={[0.05, 1, 0.02]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Torus013.geometry}
    material={materials["Material.041"]}
    position={[5.5, 0, -1.27]}
    rotation={[-3.12, 0, 0]}
    scale={[0.01, 0.02, 0.01]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Torus014.geometry}
    material={materials["Material.041"]}
    position={[5.45, 0, -0.04]}
    rotation={[-3.12, 0, 0]}
    scale={[0.01, 0.02, 0.01]}
  >
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cube036_1.geometry}
      material={materials["Material.040"]}
      position={[2.19, 0, 0.26]}
      rotation={[1.55, 0, 0]}
      scale={[1.5, 1.5, 0.75]}
    />
  </mesh>
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Torus015.geometry}
    material={materials["Material.041"]}
    position={[5.44, 0, 1.5]}
    rotation={[-3.12, 0, 0]}
    scale={[0.01, 0.02, 0.01]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Torus017.geometry}
    material={materials["Material.041"]}
    position={[-1.56, 0, 0.17]}
    rotation={[3.12, 0, Math.PI]}
    scale={[0.01, 0.02, 0.01]}
  >
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cube039_1.geometry}
      material={materials["Material.040"]}
      position={[2.18, 0, 0.26]}
      rotation={[1.55, 0, 0]}
      scale={[1.5, 1.5, 0.75]}
    />
  </mesh>
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Torus018.geometry}
    material={materials["Material.041"]}
    position={[-1.62, 0, -1.27]}
    rotation={[3.12, 0, Math.PI]}
    scale={[0.01, 0.02, 0.01]}
  >
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cube040.geometry}
      material={materials["Material.040"]}
      position={[2.18, 0.01, 0.66]}
      rotation={[1.55, 0, 0]}
      scale={[1.5, 1.5, 0.75]}
    />
  </mesh>
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cube033.geometry}
    material={materials["Material.039"]}
    position={[5.59, 0, 1.27]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={[0.12, 1.81, 0.2]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cube034.geometry}
    material={materials["Material.039"]}
    position={[-1.7, 0.01, 1.27]}
    rotation={[Math.PI / 2, 0, Math.PI]}
    scale={[0.12, 1.81, 0.2]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cylinder040.geometry}
    material={materials["Material.022"]}
    position={[5.59, 0, 0.88]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={[0.07, 2.23, 0.11]}
  >
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder042.geometry}
      material={materials["Material.030"]}
      position={[-4.69, 0.91, 0]}
      rotation={[0, 0, 2.34]}
      scale={[-0.01, -4.42, -0.02]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder043.geometry}
      material={materials["Material.031"]}
      position={[-4.46, 0.41, 0]}
      rotation={[0, 0, 1.89]}
      scale={[0, -4.54, -0.02]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder044.geometry}
      material={materials["Material.031"]}
      position={[-4.81, -0.19, 0]}
      rotation={[0, 0, 0.71]}
      scale={[-0.01, -4.05, -0.02]}
    />
  </mesh>
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cylinder041.geometry}
    material={materials["Material.026"]}
    position={[-1.7, 0, 0.84]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={[0.07, 2.23, 0.11]}
  >
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder045.geometry}
      material={materials["Material.030"]}
      position={[5.6, 0.89, 0]}
      rotation={[0, 0, 0.83]}
      scale={[0, -4.9, -0.02]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder046.geometry}
      material={materials["Material.030"]}
      position={[5.57, -0.16, 0]}
      rotation={[0, 0, 2.36]}
      scale={[-0.01, -4.92, -0.02]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder047.geometry}
      material={materials["Material.030"]}
      position={[5.51, 0.31, 0]}
      rotation={[0, 0, 1.72]}
      scale={[0, -5, -0.02]}
    />
  </mesh>
</mesh>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.fileu003.geometry}
  material={materials["Material.029"]}
  position={[2.98, 0.06, 7.61]}
  rotation={[Math.PI / 2, 0, -0.32]}
  scale={[0.02, 0.01, 0.01]}
>
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cube041.geometry}
    material={materials["Material.032"]}
    position={[2, 0, -0.95]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={[3.01, 0.08, 0.02]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cube042.geometry}
    material={nodes.Cube042.material}
    position={[2, 0, 0.94]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={[3.01, 0.08, 0.02]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cube043.geometry}
    material={materials["Material.034"]}
    position={[-0.79, 0, 0]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={[0.02, 0.89, 0.02]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cube044.geometry}
    material={materials["Material.035"]}
    position={[4.68, 0, 0]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={[0.03, 0.89, 0.01]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cube047.geometry}
    material={materials["Material.040"]}
    position={[5.52, 0, -1.27]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={[0.01, 0.02, 0.01]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cube049.geometry}
    material={materials["Material.040"]}
    position={[5.46, 0, 1.5]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={[0.01, 0.02, 0.01]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cube050.geometry}
    material={materials["Material.040"]}
    position={[-1.57, 0, 1.33]}
    rotation={[Math.PI / 2, 0, Math.PI]}
    scale={[0.01, 0.02, 0.01]}
  >
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Torus022.geometry}
      material={materials["Material.041"]}
      position={[-1.45, 0.09, 0]}
      rotation={[-1.55, 0, 0]}
      scale={[0.67, 1.33, 0.67]}
    />
  </mesh>
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cylinder073.geometry}
    material={nodes.Cylinder073.material}
    position={[-0.79, 0, -2.75]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={[0.01, 0.17, 0.02]}
  >
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder068.geometry}
      material={materials["Material.036"]}
      position={[0, -9.99, 0]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder069.geometry}
      material={nodes.Cylinder069.material}
      position={[0, -7.99, 0]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder070.geometry}
      material={materials["Material.037"]}
      position={[0, -5.99, 0]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder071.geometry}
      material={nodes.Cylinder071.material}
      position={[0, -4, 0]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder072.geometry}
      material={materials["Material.038"]}
      position={[0, -2, 0]}
    />
  </mesh>
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cylinder079.geometry}
    material={nodes.Cylinder079.material}
    position={[4.68, 0, -2.81]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={[0.01, 0.17, 0.02]}
  >
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder074.geometry}
      material={materials["Material.036"]}
      position={[0, -9.99, 0]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder075.geometry}
      material={nodes.Cylinder075.material}
      position={[0, -7.99, 0]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder076.geometry}
      material={materials["Material.037"]}
      position={[0, -5.99, 0]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder077.geometry}
      material={nodes.Cylinder077.material}
      position={[0, -4, 0]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder078.geometry}
      material={materials["Material.038"]}
      position={[0, -2, 0]}
    />
  </mesh>
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Plane013.geometry}
    material={materials["Material.027"]}
    position={[4, 0, 0]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Plane014.geometry}
    material={materials["Material.028"]}
    position={[2, 0, 0]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Plane015.geometry}
    material={materials["Material.042"]}
    position={[4.86, -0.02, -0.93]}
    rotation={[1.56, 1.52, -1.54]}
    scale={[0.05, 1, 0.02]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Plane016.geometry}
    material={materials["Material.042"]}
    position={[-0.97, 0.02, -0.93]}
    rotation={[Math.PI, -Math.PI / 2, 0]}
    scale={[0.05, 1, 0.02]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Torus019.geometry}
    material={materials["Material.041"]}
    position={[5.5, 0, -1.27]}
    rotation={[-3.12, 0, 0]}
    scale={[0.01, 0.02, 0.01]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Torus020.geometry}
    material={materials["Material.041"]}
    position={[5.45, 0, -0.04]}
    rotation={[-3.12, 0, 0]}
    scale={[0.01, 0.02, 0.01]}
  >
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cube048_1.geometry}
      material={materials["Material.040"]}
      position={[2.19, 0, 0.26]}
      rotation={[1.55, 0, 0]}
      scale={[1.5, 1.5, 0.75]}
    />
  </mesh>
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Torus021.geometry}
    material={materials["Material.041"]}
    position={[5.44, 0, 1.5]}
    rotation={[-3.12, 0, 0]}
    scale={[0.01, 0.02, 0.01]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Torus023.geometry}
    material={materials["Material.041"]}
    position={[-1.56, 0, 0.17]}
    rotation={[3.12, 0, Math.PI]}
    scale={[0.01, 0.02, 0.01]}
  >
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cube051_1.geometry}
      material={materials["Material.040"]}
      position={[2.18, 0, 0.26]}
      rotation={[1.55, 0, 0]}
      scale={[1.5, 1.5, 0.75]}
    />
  </mesh>
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Torus024.geometry}
    material={materials["Material.041"]}
    position={[-1.62, 0, -1.27]}
    rotation={[3.12, 0, Math.PI]}
    scale={[0.01, 0.02, 0.01]}
  >
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cube052_1.geometry}
      material={materials["Material.040"]}
      position={[2.18, 0, 0.66]}
      rotation={[1.55, 0, 0]}
      scale={[1.5, 1.5, 0.75]}
    />
  </mesh>
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cube045.geometry}
    material={materials["Material.039"]}
    position={[5.59, 0, 1.27]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={[0.12, 1.81, 0.2]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cube046.geometry}
    material={materials["Material.039"]}
    position={[-1.7, 0.01, 1.27]}
    rotation={[Math.PI / 2, 0, Math.PI]}
    scale={[0.12, 1.81, 0.2]}
  />
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cylinder060.geometry}
    material={materials["Material.022"]}
    position={[5.59, 0, 0.88]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={[0.07, 2.23, 0.11]}
  >
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder062.geometry}
      material={materials["Material.030"]}
      position={[-4.69, 0.91, 0]}
      rotation={[0, 0, 2.34]}
      scale={[-0.01, -4.42, -0.02]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder063.geometry}
      material={materials["Material.031"]}
      position={[-4.46, 0.41, 0]}
      rotation={[0, 0, 1.89]}
      scale={[0, -4.54, -0.02]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder064.geometry}
      material={materials["Material.031"]}
      position={[-4.81, -0.19, 0]}
      rotation={[0, 0, 0.71]}
      scale={[-0.01, -4.05, -0.02]}
    />
  </mesh>
  <mesh
    castShadow
    receiveShadow
    geometry={nodes.Cylinder061.geometry}
    material={materials["Material.026"]}
    position={[-1.7, 0, 0.84]}
    rotation={[-Math.PI / 2, 0, 0]}
    scale={[0.07, 2.23, 0.11]}
  >
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder065.geometry}
      material={materials["Material.030"]}
      position={[5.6, 0.89, 0]}
      rotation={[0, 0, 0.83]}
      scale={[0, -4.9, -0.02]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder066.geometry}
      material={materials["Material.030"]}
      position={[5.57, -0.16, 0]}
      rotation={[0, 0, 2.36]}
      scale={[-0.01, -4.92, -0.02]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cylinder067.geometry}
      material={materials["Material.030"]}
      position={[5.51, 0.31, 0]}
      rotation={[0, 0, 1.72]}
      scale={[0, -5, -0.02]}
    />
  </mesh>
</mesh>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.Plane.geometry}
  material={materials.Mat}
  position={[5.53, 0.05, 8.55]}
  rotation={[1.57, -0.01, 2.9]}
  scale={0}
/>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.Mapa.geometry}
  material={materials.Nylon}
  position={[10.74, 0.06, 10.11]}
  rotation={[-1.57, 0, -3.09]}
  scale={[0.06, 0.06, 0]}
/>
</group>
  );
}

useGLTF.preload("/Bosch_Facility.gltf");



function App() {

  return (
    <div className="App">
      <div className="wrapper">
        <div className="card">
          <Canvas>
            <Suspense fallback={null}>
              <ambientLight/>
              <spotLight
              intensity={0.9}
              angle={0.1}
              penumbra={1}
              position={[10,15,10]}
              castShadow/>
              <Model />
              <OrbitControls 
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              enableDamping={true}
              />
            </Suspense>
          </Canvas>    
        </div>
      </div>
    </div>
  );
}

export default App;
