
import { Float, useGLTF } from '@react-three/drei';

const ReactLogo = (props) => {
   const { nodes, materials } = useGLTF('models/react.glb');
  // const { nodes, materials } = useGLTF('models/beautiful_sphere.glb');
  //const {scene} = useGLTF('vite-react/src/components/scene.gltf')

  return (
    <Float floatIntensity={1}>
      <group position={[5,1.5, 5]} scale={0.3} {...props} dispose={null}>
        <mesh
           geometry={nodes['React-Logo_Material002_0'].geometry}
           material={materials['Material.002']}
           position={[0, 0.079, 0.181]}
           rotation={[0, 0, -Math.PI / 2]}
           scale={[0.392, 0.392, 0.527]}
          
        />
      </group>
    </Float>
    // <mesh {...props} ref={targetRef} rotation={[0,Math.PI/5 , 0]}>
    //     <primitive object={scene}/>
    // </mesh>
  );
};

useGLTF.preload('models/react.glb');

export default ReactLogo;
