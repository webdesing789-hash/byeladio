import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useRef, Suspense, useEffect, useState, useMemo } from 'react';
import * as THREE from 'three';

function EarthModel() {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/models/earth/export.gltf');
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0, y: 0 });

  // Enhance materials
  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Points) {
        const material = child.material as THREE.PointsMaterial;
        material.transparent = true;
        material.opacity = 0.9;
        material.sizeAttenuation = true;
        material.blending = THREE.AdditiveBlending;
      }
      if (child instanceof THREE.Mesh) {
        const material = child.material as THREE.MeshStandardMaterial;
        if (material.emissive) {
          material.emissiveIntensity = 1.5;
        }
      }
    });
  }, [scene]);

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
      // Smooth mouse follow
      targetRotation.current.x = mousePosition.y * 0.15;
      targetRotation.current.y = mousePosition.x * 0.2;

      groupRef.current.rotation.x += (targetRotation.current.x - groupRef.current.rotation.x) * 0.02;
      groupRef.current.rotation.y += (targetRotation.current.y - groupRef.current.rotation.y) * 0.02;
      
      // Slow continuous rotation
      groupRef.current.rotation.y += 0.001;
      
      // Gentle floating motion
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  return (
    <group ref={groupRef} scale={0.35} position={[0, 0, 0]}>
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
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ 
          background: 'transparent',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#a855f7" />
        
        <Suspense fallback={<LoadingFallback />}>
          <EarthModel />
        </Suspense>
      </Canvas>
      
      {/* Vignette for better text readability */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, hsl(230 25% 5% / 0.3) 50%, hsl(230 25% 5% / 0.75) 100%)',
        }}
      />
    </div>
  );
};

// Preload the model
useGLTF.preload('/models/earth/export.gltf');

export default SpaceBackground;