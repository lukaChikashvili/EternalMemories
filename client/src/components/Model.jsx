import React, { useRef } from 'react'
import { Float,  ScrollControls,  SpotLight,   useGLTF, useMatcapTexture, useScroll} from '@react-three/drei'
import { useFrame } from '@react-three/fiber';


const Model = () => {
  
 const [texture] = useMatcapTexture('5F1827_9B4A60_1F0404_340406', 256);
 const [texture2] = useMatcapTexture('5F1827_9B4A60_1F0404_340406', 256);
  return (
    <>
  

    <Float speed={1.5}>
        <SpotLight  distance={10}
                    angle={0.15}
                    attenuation={10}
                    anglePower={3} scale={10} position={[-4, 10, -2]} color={'purple'} >


     <mesh scale={5}>
       <sphereGeometry />
       <meshMatcapMaterial matcap={texture}/>
     </mesh>


 
     </SpotLight>
     </Float>
     
     <Float speed={1.5}>
     <mesh scale={3} position={[5, 0, 5]}>
       <sphereGeometry />
       <meshMatcapMaterial matcap={texture2}/>
     </mesh>

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
