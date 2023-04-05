// https://www.youtube.com/watch?v=2jwqotdQmdQ


import './index.css';
import { Suspense, useRef, useState } from 'react';
//display the 3d models
import {Canvas} from '@react-three/fiber';
// rotate things
import {OrbitControls, useGLTF} from '@react-three/drei'; 

function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Bosch_Facility.gltf')
  return (
        <group {...props} dispose={null}>
      <group position={[10.82, 0.57, 10.1]} rotation={[-Math.PI / 2, 0, 0.02]} scale={0.02}>
        <mesh geometry={nodes.CA_401.geometry} material={materials['Retro Vibe 26']} position={[-3.47, -2.82, -22.71]} rotation={[0, 0, -3.11]} scale={[1, 1.33, 0.47]} />
        <mesh geometry={nodes.CA_402.geometry} material={materials['Retro Vibe 35']} position={[3.46, 1.88, 16.16]} rotation={[0, 0, -3.11]} scale={[0.57, 0.77, 0.27]} />
        <mesh geometry={nodes.CA_404.geometry} material={materials['Retro Vibe 37']} position={[3.71, -5.62, 5.53]} rotation={[0, 0, -3.11]} scale={[0.35, 0.52, 0.13]} />
        <mesh geometry={nodes.Cube001.geometry} material={materials['Material.001']} position={[10.89, 1.79, 18.31]} rotation={[-Math.PI / 2, -0.06, -Math.PI / 2]} scale={[1000, 2790.53, 1340.86]} />
        <mesh geometry={nodes.Cube002.geometry} material={materials['Material.001']} position={[2.81, 6.18, 18.31]} rotation={[Math.PI / 2, -1.52, Math.PI / 2]} scale={[1000, 2790.53, 1340.86]} />
        <mesh geometry={nodes.Cube003.geometry} material={materials['Material.001']} position={[-4.04, 1.32, 18.31]} rotation={[Math.PI / 2, 0.07, Math.PI / 2]} scale={[1000, 2790.53, 1340.86]} />
        <mesh geometry={nodes.Cube004.geometry} material={materials['Material.001']} position={[4.21, -4.3, 18.31]} rotation={[-Math.PI / 2, 1.53, -1.57]} scale={[1000, 2790.53, 1340.86]} />
      </group>
       <mesh geometry={nodes.Mapa.geometry} material={materials.Nylon} position={[10.74, 0.06, 10.11]} rotation={[-1.57, 0, -3.09]} scale={[0.06, 0.06, 0]} />
      <mesh geometry={nodes.Plane.geometry} material={materials.Mat} position={[5.53, 0.05, 8.55]} rotation={[1.57, -0.01, 2.9]} scale={0} />
      <mesh geometry={nodes.Academia.geometry} material={materials['Retro Vibe 29']} position={[6.14, 0.04, 10.14]} rotation={[-1.57, 0.01, 1.79]} scale={[0.02, 0.02, 0.01]} />
      <mesh geometry={nodes.CA_106.geometry} material={materials['Retro Vibe 25']} position={[15.54, 0.04, 9.68]} rotation={[-1.56, -0.05, 0.02]} scale={[0.02, 0.02, 0.05]} />
      <mesh geometry={nodes.CA_126.geometry} material={materials['Retro Vibe 32']} position={[13.97, 0.06, 2.29]} rotation={[-Math.PI / 2, 0, 0.02]} scale={0.02} />
      <mesh geometry={nodes.CA_140.geometry} material={materials['Retro Vibe 8']} position={[15.95, 0.07, 2.96]} rotation={[-Math.PI / 2, 0, 0.25]} scale={[0.02, 0.02, 0.05]} />
      <mesh geometry={nodes.CA_147.geometry} material={materials['Retro Vibe 11']} position={[14.85, 0.07, 1.66]} rotation={[-Math.PI / 2, 0, 0.25]} scale={[0.02, 0.02, 0.05]} />
      <mesh geometry={nodes.CA_148.geometry} material={materials['Retro Vibe 10']} position={[15.77, 0.07, 1.42]} rotation={[-Math.PI / 2, 0, 0.25]} scale={[0.02, 0.02, 0.05]} />
      <mesh geometry={nodes.CA_149.geometry} material={materials['Retro Vibe 9']} position={[15.75, 0.07, 2.15]} rotation={[-Math.PI / 2, 0, 0.25]} scale={[0.02, 0.02, 0.05]} />
      <mesh geometry={nodes.CA_150.geometry} material={materials['Retro Vibe 14']} position={[16.66, 0.07, 7.81]} rotation={[-Math.PI / 2, 0, 0.25]} scale={[0.02, 0.02, 0.06]} />
      <mesh geometry={nodes.CA_151.geometry} material={materials['Retro Vibe 16']} position={[17.72, 0.08, 7.54]} rotation={[-Math.PI / 2, 0, 0.25]} scale={[0.02, 0.02, 0.07]} />
      <mesh geometry={nodes.CA_160.geometry} material={materials['Retro Vibe 6']} position={[16.12, 0.08, 5.78]} rotation={[-Math.PI / 2, 0, 0.25]} scale={[0.02, 0.02, 0.07]} />
      <mesh geometry={nodes.CA_165.geometry} material={materials['Retro Vibe 17']} position={[14.12, 0.06, 2.71]} rotation={[-Math.PI / 2, 0, 0.02]} scale={0.02} />
      <mesh geometry={nodes.CA_170.geometry} material={materials['Retro Vibe 7']} position={[17.59, 0.08, 7.07]} rotation={[-Math.PI / 2, 0, 0.25]} scale={[0.02, 0.02, 0.07]} />
      <mesh geometry={nodes.CA_180.geometry} material={materials['Retro Vibe 15']} position={[17.86, 0.06, 8.42]} rotation={[-1.56, -0.02, 0.02]} scale={[0.02, 0.02, 0.03]} />
      <mesh geometry={nodes.CA_183.geometry} material={materials['Retro Vibe 19']} position={[17.49, 0.08, 9.13]} rotation={[-1.58, 0.02, -2.87]} scale={[0.02, 0.02, 0.03]} />
      <mesh geometry={nodes.CA_204.geometry} material={materials['Retro Vibe 23']} position={[12.94, 0.06, 10.64]} rotation={[-Math.PI / 2, 0, -2.89]} scale={[0.02, 0.02, 0.05]} />
      <mesh geometry={nodes.CA_205.geometry} material={materials['Retro Vibe 22']} position={[14.72, 0.07, 10.06]} rotation={[-Math.PI / 2, 0, -2.89]} scale={[0.02, 0.02, 0.04]} />
      <mesh geometry={nodes.CA_220.geometry} material={materials['Retro Vibe 21']} position={[14.99, 0.07, 10.35]} rotation={[-Math.PI / 2, 0, -2.89]} scale={[0.02, 0.02, 0.03]} />
      <mesh geometry={nodes.CA_300.geometry} material={materials['Calm Balm']} position={[14.5, 0.06, 5.21]} rotation={[-Math.PI / 2, 0, 0.02]} scale={0.02} />
      <mesh geometry={nodes.CA_320.geometry} material={materials['Future Vision']} position={[14.91, 0.06, 6.79]} rotation={[-Math.PI / 2, 0, 0.02]} scale={0.02} />
      <mesh geometry={nodes.CA_325.geometry} material={materials['Retro Vibe 4']} position={[14.31, 0.06, 4.37]} rotation={[-Math.PI / 2, 0, 0.02]} scale={0.02} />
      <mesh geometry={nodes.CA_340.geometry} material={materials['Retro Vibe 33']} position={[12.01, -0.04, 3.5]} rotation={[-1.63, 0.02, 0.02]} scale={[0.02, 0.02, 0.04]} />
      <mesh geometry={nodes.CA_350.geometry} material={materials['Retro Vibe 12']} position={[10.81, 0.04, 4.08]} rotation={[-Math.PI / 2, 0, -1.33]} scale={[0.02, 0.02, 0.05]} />
      <mesh geometry={nodes.CA_360.geometry} material={materials['Calm Balm.001']} position={[13.05, 0.05, 6.58]} rotation={[-Math.PI / 2, 0, 0.02]} scale={0.02} />
      <mesh geometry={nodes.CA_370.geometry} material={materials['Beyond the Pines 1']} position={[11.29, 0.04, 7.08]} rotation={[-Math.PI / 2, 0, 0.02]} scale={0.02} />
      <mesh geometry={nodes.CA_560.geometry} material={materials['Retro Vibe 30']} position={[4.22, 0.03, 9.77]} rotation={[-Math.PI / 2, 0, 0.22]} scale={0.02} />
      <mesh geometry={nodes.CA_600.geometry} material={materials['Retro Vibe 27']} position={[6.44, 0.04, 8.85]} rotation={[-Math.PI / 2, 0, 1.8]} scale={[0.02, 0.03, 0.01]} />
      <mesh geometry={nodes.DigiHub.geometry} material={materials['Retro Vibe 31']} position={[4.36, 0.03, 9.14]} rotation={[-Math.PI / 2, 0, 0.2]} scale={[0.02, 0.02, 0.01]} />
      <mesh geometry={nodes.KINDERHAUS.geometry} material={materials['Retro Vibe 28']} position={[5.83, 0.04, 10.24]} rotation={[-Math.PI / 2, 0, 1.8]} scale={[0.02, 0.02, 0.01]} />
      <mesh geometry={nodes.Portaria_3.geometry} material={materials['Retro Vibe 34']} position={[9.64, 0.03, 11.36]} rotation={[-Math.PI / 2, 0, -2.97]} scale={0.02} />
      <mesh geometry={nodes.Portaria_4.geometry} material={materials['Retro Vibe 18']} position={[16.45, 0.05, 8.71]} rotation={[-Math.PI / 2, 0, -2.84]} scale={0.02} />
      <mesh geometry={nodes.Portaria_5.geometry} material={materials['Retro Vibe 20']} position={[15.89, 0.05, 9.03]} rotation={[-Math.PI / 2, 0, -2.84]} scale={[0.02, 0.02, 0.05]} />
      <mesh geometry={nodes.Portaria_8.geometry} material={materials['Retro Vibe 13']} position={[13.07, 0.06, 2.06]} rotation={[-Math.PI / 2, 0, 0.31]} scale={[0.02, 0.02, 0.05]} />
      <mesh geometry={nodes.Refeitorio.geometry} material={materials['Retro Vibe 24']} position={[13.6, 0.07, 9.86]} rotation={[-Math.PI / 2, 0, -2.89]} scale={0.02} />
    
      
    </group>
  )
}

useGLTF.preload('/Bosch_Facility.gltf')



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
