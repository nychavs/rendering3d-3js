import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";



    const canvas = document.querySelector('webgl')
    const scene = new THREE.Scene();

    const loader = new GLTFLoader()
    loader.load('../public/Bosch_Facility.gltf', function(gltf){
        const root = gltf.scene()
        root.scale.set(1,1,1,1)
        scene.add(root)
    })

    const camera = new THREE.PerspectiveCamera(75, window.innerHeight / window.innerWidth, 0.1, 1000)
    camera.position.set(0,1,2)
    scene.add(camera)
    
    const light = new THREE.DirectionalLight(0xffffff,1)
    light.position.set(2,2,5)
    scene.add(light)

    const renderer = new THREE.WebGLRenderer({
        canvas: canvas
    })
    renderer.setSize(window.innerHeight, window.innerWidth)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled=true
    document.body.appendChild(renderer.domElement)


function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
  }
  
  animate()