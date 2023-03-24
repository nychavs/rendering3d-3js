// https://www.youtube.com/watch?v=2jwqotdQmdQ


import './index.css';
import { Suspense, useRef, useState } from 'react';
//display the 3d models
import {Canvas} from '@react-three/fiber';
// rotate things
import {OrbitControls, useGLTF} from '@react-three/drei'; 

function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh geometry={nodes.Wolf3D_Body.geometry} material={nodes.Wolf3D_Body.material} skeleton={nodes.Wolf3D_Body.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={nodes.Wolf3D_Outfit_Bottom.material} skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Outfit_Footwear.geometry} material={nodes.Wolf3D_Outfit_Footwear.material} skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Outfit_Top.geometry} material={nodes.Wolf3D_Outfit_Top.material} skeleton={nodes.Wolf3D_Outfit_Top.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Hair.geometry} material={nodes.Wolf3D_Hair.material} skeleton={nodes.Wolf3D_Hair.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Glasses.geometry} material={nodes.Wolf3D_Glasses.material} skeleton={nodes.Wolf3D_Glasses.skeleton} />
      <skinnedMesh name="EyeLeft" geometry={nodes.EyeLeft.geometry} material={nodes.EyeLeft.material} skeleton={nodes.EyeLeft.skeleton} morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences} />
      <skinnedMesh name="EyeRight" geometry={nodes.EyeRight.geometry} material={nodes.EyeRight.material} skeleton={nodes.EyeRight.skeleton} morphTargetDictionary={nodes.EyeRight.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight.morphTargetInfluences} />
      <skinnedMesh name="Wolf3D_Head" geometry={nodes.Wolf3D_Head.geometry} material={nodes.Wolf3D_Head.material} skeleton={nodes.Wolf3D_Head.skeleton} morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences} />
      <skinnedMesh name="Wolf3D_Teeth" geometry={nodes.Wolf3D_Teeth.geometry} material={nodes.Wolf3D_Teeth.material} skeleton={nodes.Wolf3D_Teeth.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences} />
    </group>
  )
}

// useGLTF.preload('/scene.gltf')



function App() {

  return (
    <div className="App">
          <div className="wrapper">
            <div className="card">
                <div className="product-canvas">
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
                <h2>Color chooser</h2>
                <div className='colors'>
                    <div>
                        <input type="color" id="head" name="head"
                              value="#e66465" />
                        <label for="head">Main</label>
                      </div>

                    <div>
                        <input type="color" id="body" name="body"
                                value="#f6b73c" />
                        <label for="body">Stripes</label>
                    </div>
                    <div>
                        <input type="color" id="body" name="body"
                                value="#f6b73c" />
                        <label for="body">Soul</label>
                    </div>
                </div>
        </div>
    </div>
     

    </div>
  );
}

export default App;
