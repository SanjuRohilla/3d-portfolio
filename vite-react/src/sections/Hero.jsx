
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader.jsx';
import { HackerRoom } from '../components/HackerRoom.jsx';
import { Leva } from 'leva';
import { useControls } from 'leva';
import { useMediaQuery } from 'react-responsive';
import {calculateSizes} from '../constants/index.js';
import Target from '../components/Target.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import Button from '../components/Button.jsx';
import Globe from 'react-globe.gl';
import getStarfield from '../components/getStarfield.js';

import { Controls } from 'three';
const Hero = () => {
  const stars = getStarfield({numstars: 2000})
  const isMobile = useMediaQuery({maxWidth: 768});
  const isSmall = useMediaQuery({maxWidth: 480});
  const isTablet = useMediaQuery({minWidth: 768, maxWidth:1024})
  const sizes = calculateSizes(isSmall , isMobile , isTablet);
  return (
    <section className=' min-h-screen w-full flex flex-col relative'>
        <div className='w-full mx-auto flex flex-col sm:mt-s6 mt-20 c-space gap-3'>
           <p className='am:text-3xl text-2xl font-medium text-white text-center font-generalsans'>Hi, I am Sanju <span className='waving-hand'>👋</span></p>
           <p className='hero_tag text-gray_gradient'>Building Projects & Future</p>
        </div>

        <div className='w-full h-full absolute inset-0'>
           {/* <Leva/> */}
         <Canvas className='w-full h-full '>
            <Suspense fallback={<CanvasLoader/>}>
            <PerspectiveCamera makeDefault position={[0,0,20]}/>
            <HeroCamera isMobile={isMobile}>
            <HackerRoom 
            style={{':hover': {backgroundColor: 'white' , color: 'yellow'}}}
            scale={sizes.deskScale} 
            //scale={x.scale}
            position={sizes.deskPosition} 
            rotation={[0,-Math.PI ,0 ]}
            // scale={[x.positionX , x.positionY , x.positionZ]}
            // position = {[x.rotationX , x.rotationY , x.rotationZ]}
            // rotation = {[x.scale, x.scale , x.scale]}
            />
            
            
            </HeroCamera>
            <group>
              <Target position={sizes.targetPosition}/>
              <ReactLogo positon={sizes.ReactLogo}/>
              <Cube position={sizes.cubePosition} />
              {/* <Rings postion={sizes.ringPosition} /> */}
              
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10,10,10]} intensity={0.5}/>
            </Suspense>
         </Canvas>
        </div>
        <div className='absolute  bottom-0 left-0 right-0 w-full z-10 c-space'>
         <a href="#contact" className='w-fit'>
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
         </a>
        </div>
    </section>
  )
}

export default Hero