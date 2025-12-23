import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Center } from '@react-three/drei';
import { useRef, Suspense, useEffect, useState } from 'react';
import * as THREE from 'three';

function SpaceModel() {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/models/need_some_space.glb');
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      targetRotation.current.x = mousePosition.y * 0.15;
      targetRotation.current.y = mousePosition.x * 0.25;

      groupRef.current.rotation.x += (targetRotation.current.x - groupRef.current.rotation.x) * 0.03;
      groupRef.current.rotation.y += (targetRotation.current.y - groupRef.current.rotation.y) * 0.03;
      groupRef.current.rotation.y += 0.0003;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <Center>
        <primitive object={scene} scale={4} />
      </Center>
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
        camera={{ position: [0, 0, 12], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ 
          background: 'transparent',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.4,
        }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.6} color="#a855f7" />
        <pointLight position={[-5, -5, -5]} intensity={0.3} color="#4a9eff" />
        
        <Suspense fallback={<LoadingFallback />}>
          <SpaceModel />
        </Suspense>
      </Canvas>
      
      {/* Stronger vignette for better text readability */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, hsl(230 25% 5% / 0.5) 50%, hsl(230 25% 5% / 0.85) 100%)',
        }}
      />
    </div>
  );
};

export default SpaceBackground;
