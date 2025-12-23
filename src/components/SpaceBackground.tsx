import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import * as THREE from 'three';

function SpaceModel() {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/models/need_some_space.glb');

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0005;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.05;
    }
  });

  return (
    <group ref={groupRef} scale={2} position={[0, 0, 0]}>
      <primitive object={scene} />
    </group>
  );
}

function LoadingFallback() {
  return null;
}

const SpaceBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-cosmic" />
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#a855f7" />
        <pointLight position={[-10, -10, -10]} intensity={0.4} color="#4a9eff" />
        
        <Suspense fallback={<LoadingFallback />}>
          <SpaceModel />
        </Suspense>
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.2}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
};

export default SpaceBackground;
