import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useRef, Suspense, useEffect, useState, useMemo } from 'react';
import * as THREE from 'three';

// Hook to detect mobile devices
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return isMobile;
}

// Stars model component
function StarsModel({ isMobile }: { isMobile: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/models/stars/scene.gltf');
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Enhance star materials
  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const material = child.material as THREE.MeshStandardMaterial;
        if (material) {
          material.emissive = new THREE.Color('#ffffff');
          material.emissiveIntensity = 2;
          material.transparent = true;
          material.opacity = 0.9;
        }
      }
    });
  }, [scene]);

  // Mouse tracking for desktop
  useEffect(() => {
    if (isMobile) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.elapsedTime;
      
      // Slow rotation
      groupRef.current.rotation.y = time * 0.02;
      
      if (isMobile) {
        groupRef.current.rotation.x = Math.sin(time * 0.1) * 0.05;
      } else {
        // Mouse-reactive movement on desktop
        groupRef.current.rotation.x = mousePosition.y * 0.05;
        groupRef.current.rotation.z = mousePosition.x * 0.03;
      }
    }
  });

  const scale = useMemo(() => isMobile ? 0.003 : 0.004, [isMobile]);

  return (
    <group ref={groupRef} scale={scale} position={[0, 0, -50]}>
      <primitive object={scene} />
    </group>
  );
}

function LoadingFallback() {
  return null;
}

const SpaceBackground = () => {
  const isMobile = useIsMobile();

  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-cosmic" />
      <Canvas
        camera={{ position: [0, 0, 100], fov: 60 }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        dpr={[1, 2]}
        style={{ 
          background: 'transparent',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[100, 100, 100]} intensity={1} color="#ffffff" />
        <pointLight position={[-100, -100, -100]} intensity={0.5} color="#a855f7" />
        
        <Suspense fallback={<LoadingFallback />}>
          <StarsModel isMobile={isMobile} />
        </Suspense>
      </Canvas>
      
      {/* Vignette */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, hsl(230 25% 5% / 0.2) 50%, hsl(230 25% 5% / 0.7) 100%)',
        }}
      />
    </div>
  );
};

// Preload the model
useGLTF.preload('/models/stars/scene.gltf');

export default SpaceBackground;
