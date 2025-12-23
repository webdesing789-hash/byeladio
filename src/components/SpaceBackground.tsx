import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useRef, Suspense, useEffect, useState } from 'react';
import * as THREE from 'three';

function SpaceModel() {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/models/need_some_space.glb');
  const { viewport } = useThree();
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position to -1 to 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Smooth interpolation towards mouse position
      targetRotation.current.x = mousePosition.y * 0.3;
      targetRotation.current.y = mousePosition.x * 0.5;

      // Lerp current rotation towards target
      groupRef.current.rotation.x += (targetRotation.current.x - groupRef.current.rotation.x) * 0.05;
      groupRef.current.rotation.y += (targetRotation.current.y - groupRef.current.rotation.y) * 0.05;
      
      // Add subtle continuous rotation
      groupRef.current.rotation.y += 0.001;
      
      // Subtle floating motion
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef} scale={2.5} position={[0, 0, 0]}>
      <primitive object={scene} />
    </group>
  );
}

function LoadingFallback() {
  return null;
}

const SpaceBackground = () => {
  return (
    <div className="fixed inset-0 z-0 flex items-center justify-center">
      <div className="absolute inset-0 bg-cosmic" />
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#a855f7" />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#4a9eff" />
        <pointLight position={[0, 0, 5]} intensity={0.3} color="#ffffff" />
        
        <Suspense fallback={<LoadingFallback />}>
          <SpaceModel />
        </Suspense>
      </Canvas>
      
      {/* Subtle vignette overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, hsl(230 25% 5% / 0.3) 70%, hsl(230 25% 5% / 0.7) 100%)',
        }}
      />
    </div>
  );
};

export default SpaceBackground;
