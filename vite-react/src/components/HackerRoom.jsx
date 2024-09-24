

// import { useGLTF, useTexture } from '@react-three/drei';
// import { useLoader } from '@react-three/fiber';
// import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
// import getStarfield from './getStarfield';


// export function HackerRoom(props) {
//   const gltf = useLoader(GLTFLoader , '/models/66e74045bcaf191d5a70c3d2.glb')
//   const stars = getStarfield({numstars: 2000})

//    return (
//     <group scale={6} position={[0,-9,0]}  >
      
//    <primitive object={gltf.scene.add(stars)   }  />
   
//    </group>
//   );
    
  
// }

//  useGLTF.preload('/models/66e74045bcaf191d5a70c3d2.glb');



// import { useEffect } from 'react';
// import { useLoader } from '@react-three/fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import getStarfield from './getStarfield';

// export function HackerRoom(props) {
//   const gltf = useLoader(GLTFLoader, '/models/66e74045bcaf191d5a70c3d2.glb');
//   const stars = getStarfield({ numstars: 3000 });

//   useEffect(() => {
//     // Add stars to the GLTF scene after component mounts
//     gltf.scene.add(stars);

//     // Cleanup function to remove stars when component unmounts
//     return () => {
//       gltf.scene.remove(stars);
//     };
//   }, [gltf, stars]);

//   return (
//     <group scale={6} position={[0, -9, 0]}>
//       {/* Render the GLTF scene with stars */}
//       <primitive object={gltf.scene} />
//     </group>
//   );
// }

// // Preload the GLTF model
// useLoader.preload(GLTFLoader, '/models/66e74045bcaf191d5a70c3d2.glb');


// import { useLoader } from '@react-three/fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// // Remove getStarfield temporarily
// // import getStarfield from './getStarfield';

// export function HackerRoom(props) {
//   const gltf = useLoader(GLTFLoader, '/models/66e74045bcaf191d5a70c3d2.glb');

//   return (
//     <group scale={6} position={[0, -9, 0]}>
//       {/* Render the GLTF scene only */}
//       <primitive object={gltf.scene} />
//     </group>
//   );
// }

// // Preload the GLTF model
// useLoader.preload(GLTFLoader, '/models/66e74045bcaf191d5a70c3d2.glb');

import { useEffect, useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import getStarfield from './getStarfield';

export function HackerRoom(props) {
  const gltf = useLoader(GLTFLoader, '/models/66e74045bcaf191d5a70c3d2.glb');
  const groupRef = useRef();

  return (
    <group ref={groupRef} scale={6} position={[0, -9, 0]}>
      {/* Render the GLTF scene */}
      <primitive object={gltf.scene} />
      {/* Add the Stars component */}
      <Stars groupRef={groupRef} />
    </group>
  );
}

// Preload the GLTF model
useLoader.preload(GLTFLoader, '/models/66e74045bcaf191d5a70c3d2.glb');

// Separate Stars Component
function Stars({ groupRef }) {
  useEffect(() => {
    if (groupRef.current) {
      const stars = getStarfield({ numstars: 2000 });
      groupRef.current.add(stars);

      // Clean up on unmount
      return () => {
        groupRef.current.remove(stars);
      };
    }
  }, [groupRef]);

  return null;
}


