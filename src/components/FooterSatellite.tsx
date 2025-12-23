import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment } from '@react-three/drei';
import * as THREE from 'three';

const SatelliteModel = () => {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/models/satellite/scene.gltf');

  useFrame((state) => {
    if (groupRef.current) {
      // Slow rotation
      groupRef.current.rotation.y += 0.003;
      // Gentle floating motion
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef} scale={1.2} position={[0, 0, 0]}>
      <primitive object={scene} />
    </group>
  );
};

const FooterSatellite = () => {
  return (
    <div className="absolute right-4 md:right-12 bottom-0 w-24 h-24 md:w-32 md:h-32 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <pointLight position={[-5, -5, -5]} intensity={0.5} color="#8B5CF6" />
          <SatelliteModel />
          <Environment preset="night" />
        </Suspense>
      </Canvas>
      
      {/* Attribution - hidden but in DOM for compliance */}
      <span className="sr-only">
        3D Model "Satellite" by deableko (sketchfab.com/deableko) licensed under CC-BY-4.0
      </span>
    </div>
  );
};

// Preload the model
useGLTF.preload('/models/satellite/scene.gltf');

export default FooterSatellite;
