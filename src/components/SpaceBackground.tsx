import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useRef, Suspense, useEffect, useState, useMemo } from 'react';
import * as THREE from 'three';

// Hook to detect mobile/tablet devices
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return { isMobile, isTablet };
}

function EarthModel({ isMobile, isTablet }: { isMobile: boolean; isTablet: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/models/earth/export.gltf');
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0, y: 0 });

  // Responsive scale and position - larger on mobile for better visibility
  const scale = useMemo(() => {
    if (isMobile) return 0.28; // Increased from 0.22
    if (isTablet) return 0.32;
    return 0.35;
  }, [isMobile, isTablet]);

  const position = useMemo((): [number, number, number] => {
    if (isMobile) return [0.15, 0.1, 0]; // More centered
    if (isTablet) return [0.15, 0.05, 0];
    return [0, 0, 0];
  }, [isMobile, isTablet]);

  // Enhance materials - HIGH QUALITY on all devices
  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Points) {
        const material = child.material as THREE.PointsMaterial;
        material.transparent = true;
        material.opacity = 1.0; // Full opacity for visibility
        material.sizeAttenuation = true;
        material.blending = THREE.AdditiveBlending;
        // Larger points on mobile for better visibility
        if (isMobile && material.size) {
          material.size = material.size * 1.2; // Increased from 0.7
        }
      }
      if (child instanceof THREE.Mesh) {
        const material = child.material as THREE.MeshStandardMaterial;
        if (material.emissive) {
          material.emissiveIntensity = 2.0; // Higher glow
        }
      }
    });
  }, [scene, isMobile]);

  // Only track mouse on non-touch devices
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

  // Touch interaction removed - using automatic animation on mobile instead

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.elapsedTime;
      
      if (isMobile || isTablet) {
        // Automatic gentle animation on mobile/tablet (no touch required)
        groupRef.current.rotation.x = Math.sin(time * 0.2) * 0.1;
        groupRef.current.rotation.y = time * 0.15; // Continuous rotation
        
        // Gentle floating motion
        groupRef.current.position.y = position[1] + Math.sin(time * 0.4) * 0.04;
        groupRef.current.position.x = position[0] + Math.sin(time * 0.3) * 0.02;
      } else {
        // Desktop: mouse follow + rotation
        const sensitivity = 0.15;
        targetRotation.current.x = mousePosition.y * sensitivity;
        targetRotation.current.y = mousePosition.x * 0.2;

        groupRef.current.rotation.x += (targetRotation.current.x - groupRef.current.rotation.x) * 0.02;
        groupRef.current.rotation.y += (targetRotation.current.y - groupRef.current.rotation.y) * 0.02;
        
        // Slow continuous rotation
        groupRef.current.rotation.y += 0.001;
        
        // Gentle floating motion
        groupRef.current.position.y = position[1] + Math.sin(time * 0.3) * 0.05;
      }
    }
  });

  return (
    <group ref={groupRef} scale={scale} position={position}>
      <primitive object={scene} />
    </group>
  );
}

function LoadingFallback() {
  return null;
}

const SpaceBackground = () => {
  const { isMobile, isTablet } = useIsMobile();
  
  // Camera settings - closer on mobile for better detail
  const cameraSettings = useMemo((): { position: [number, number, number]; fov: number } => ({
    position: isMobile ? [0, 0, 4.5] : [0, 0, 5], // Closer camera on mobile
    fov: isMobile ? 50 : 50,
  }), [isMobile]);

  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-cosmic" />
      <Canvas
        camera={{ position: cameraSettings.position, fov: cameraSettings.fov }}
        gl={{ 
          antialias: true, // Enable antialiasing on all devices for quality
          alpha: true,
          powerPreference: 'high-performance', // Max quality
        }}
        dpr={[1.5, 2]} // Higher pixel ratio for crisp visuals
        style={{ 
          background: 'transparent',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
        <pointLight position={[0, 5, 5]} intensity={0.4} color="#60a5fa" />
        
        <Suspense fallback={<LoadingFallback />}>
          <EarthModel isMobile={isMobile} isTablet={isTablet} />
        </Suspense>
      </Canvas>
      
      {/* Lighter vignette for better galaxy visibility */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isMobile 
            ? 'radial-gradient(ellipse at center, transparent 0%, hsl(230 25% 5% / 0.2) 50%, hsl(230 25% 5% / 0.6) 100%)'
            : 'radial-gradient(ellipse at center, transparent 0%, hsl(230 25% 5% / 0.2) 55%, hsl(230 25% 5% / 0.65) 100%)',
        }}
      />
    </div>
  );
};

// Preload the model
useGLTF.preload('/models/earth/export.gltf');

export default SpaceBackground;