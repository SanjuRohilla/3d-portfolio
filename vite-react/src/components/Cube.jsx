

// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
// import React, { useRef, useState } from 'react';
// import { Float, useGLTF, useTexture } from '@react-three/drei';

// const Cube = ({ ...props }) => {
//   const { nodes } = useGLTF('models/cube.glb');
//   const texture = useTexture('textures/cube.png');
//   const cubeRef = useRef();
//   const [hovered, setHovered] = useState(false);

//   useGSAP(() => {
//     gsap
//       .timeline({
//         repeat: -1,
//         repeatDelay: 0.5,
//       })
//       .to(cubeRef.current.rotation, {
//         y: hovered ? '+=2' : `+=${Math.PI * 2}`,
//         x: hovered ? '+=2' : `-=${Math.PI * 2}`,
//         duration: 2.5,
//         stagger: {
//           each: 0.15,
//         },
//       });
//   });

//   return (
//     <Float floatIntensity={2}>
//       <group position={[9, -4, 0]} rotation={[2.6, 0.8, -1.8]} scale={0.74} dispose={null} {...props}>
//         <mesh
//           ref={cubeRef}
//           castShadow
//           receiveShadow
//           geometry={nodes.Cube.geometry}
//           material={nodes.Cube.material}
//           onPointerEnter={() => setHovered(true)}>
//           <meshMatcapMaterial matcap={texture} toneMapped={false} />
//         </mesh>
//       </group>
//     </Float>
//   );
// };

// useGLTF.preload('models/cube.glb');

// export default Cube;


import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGLTF, useTexture, Float } from '@react-three/drei';

const Cube = ({ ...props }) => {
  const { nodes } = useGLTF('models/cube.glb');
  const texture = useTexture('textures/cube.png');
  const cubeRef = useRef();
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!cubeRef.current) return; // Avoid running animation if ref is not attached

    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.5,
    });

    tl.to(cubeRef.current.rotation, {
      y: hovered ? '+=2' : `+=${Math.PI * 2}`,
      x: hovered ? '+=2' : `-=${Math.PI * 2}`,
      duration: 2.5,
      stagger: {
        each: 0.15,
      },
    });

    // Cleanup function to remove the timeline on unmount
    return () => {
      tl.kill();
    };
  }, [hovered]); // Only re-run effect when `hovered` state changes

  return (
    <Float floatIntensity={2}>
      <group position={[9, -4, 0]} rotation={[2.6, 0.8, -1.8]} scale={0.74} dispose={null} {...props}>
        <mesh
          ref={cubeRef}
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)} // Added this to revert `hovered` state on mouse leave
        >
          <meshMatcapMaterial matcap={texture} toneMapped={false} />
        </mesh>
      </group>
    </Float>
  );
};

// Preload the GLTF model
useGLTF.preload('models/cube.glb');

export default Cube;


