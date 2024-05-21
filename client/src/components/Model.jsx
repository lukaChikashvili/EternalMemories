import React, { useRef } from 'react'
import { Float,  ScrollControls,  SpotLight,   useGLTF, useScroll} from '@react-three/drei'
import { useFrame } from '@react-three/fiber';


const Model = () => {
  

let modelRef = useRef(null);
    const model = useGLTF('./coffin.glb');


  

    model.scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          
        }
      });
    
    
  return (
    <>
  

    <Float speed={0.5}>
        <SpotLight  distance={10}
                    angle={0.15}
                    attenuation={10}
                    anglePower={3} scale={10} position={[-4, 10, -2]} color={'purple'} >


      <primitive object={model.scene} 
                 scale = {0.9} 
               position = {[6, -0.5, 3]}  
                rotation = {[-0.1, -4, 0]}
               ref = {modelRef}
                 
                    />
     </SpotLight>
     </Float>
     <SpotLight  distance={10}
                    angle={0.15}
                    attenuation={10}
                    anglePower={2} scale={10} position={[4, 12, 5]} color={'blue'} >

                    </SpotLight>

                    <SpotLight  distance={10}
                    angle={0.15}
                    attenuation={10}
                    anglePower={2} scale={10} position={[-7, 12, 5]} color={'green'} >

                    </SpotLight>
                        
    </>
  
  )
}

export default Model
