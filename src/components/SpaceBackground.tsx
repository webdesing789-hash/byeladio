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

  // Responsive scale and position
  const scale = useMemo(() => {
    if (isMobile) return 0.22;
    if (isTablet) return 0.28;
    return 0.35;
  }, [isMobile, isTablet]);

  const position = useMemo((): [number, number, number] => {
    if (isMobile) return [0.3, 0.2, 0];
    if (isTablet) return [0.2, 0.1, 0];
    return [0, 0, 0];
  }, [isMobile, isTablet]);

  // Enhance materials with mobile optimizations
  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Points) {
        const material = child.material as THREE.PointsMaterial;
        material.transparent = true;
        material.opacity = isMobile ? 0.7 : 0.9;
        material.sizeAttenuation = true;
        material.blending = THREE.AdditiveBlending;
        // Reduce point size on mobile for performance
        if (isMobile && material.size) {
          material.size = material.size * 0.7;
        }
      }
      if (child instanceof THREE.Mesh) {
        const material = child.material as THREE.MeshStandardMaterial;
        if (material.emissive) {
          material.emissiveIntensity = isMobile ? 1.2 : 1.5;
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

  // Touch interaction for mobile
  useEffect(() => {
    if (!isMobile && !isTablet) return;
    
    const handleTouch = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const x = (touch.clientX / window.innerWidth) * 2 - 1;
        const y = -(touch.clientY / window.innerHeight) * 2 + 1;
        setMousePosition({ x: x * 0.5, y: y * 0.5 }); // Reduced sensitivity for touch
      }
    };

    window.addEventListener('touchmove', handleTouch, { passive: true });
    return () => window.removeEventListener('touchmove', handleTouch);
  }, [isMobile, isTablet]);

  useFrame((state) => {
    if (groupRef.current) {
      // Smooth mouse/touch follow
      const sensitivity = isMobile ? 0.08 : 0.15;
      targetRotation.current.x = mousePosition.y * sensitivity;
      targetRotation.current.y = mousePosition.x * (isMobile ? 0.12 : 0.2);

      const lerpSpeed = isMobile ? 0.015 : 0.02;
      groupRef.current.rotation.x += (targetRotation.current.x - groupRef.current.rotation.x) * lerpSpeed;
      groupRef.current.rotation.y += (targetRotation.current.y - groupRef.current.rotation.y) * lerpSpeed;
      
      // Slow continuous rotation
      groupRef.current.rotation.y += isMobile ? 0.0008 : 0.001;
      
      // Gentle floating motion (reduced on mobile)
      const floatIntensity = isMobile ? 0.03 : 0.05;
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.3) * floatIntensity;
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
  
  // Adjust camera settings for mobile
  const cameraSettings = useMemo((): { position: [number, number, number]; fov: number } => ({
    position: isMobile ? [0, 0, 6] : [0, 0, 5],
    fov: isMobile ? 55 : 50,
  }), [isMobile]);

  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-cosmic" />
      <Canvas
        camera={{ position: cameraSettings.position, fov: cameraSettings.fov }}
        gl={{ 
          antialias: !isMobile, // Disable antialiasing on mobile for performance
          alpha: true,
          powerPreference: isMobile ? 'low-power' : 'high-performance',
        }}
        dpr={isMobile ? [1, 1.5] : [1, 2]} // Reduce pixel ratio on mobile
        style={{ 
          background: 'transparent',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <ambientLight intensity={isMobile ? 0.3 : 0.2} />
        <pointLight position={[10, 10, 10]} intensity={isMobile ? 0.8 : 1} color="#ffffff" />
        {!isMobile && (
          <pointLight position={[-10, -10, -10]} intensity={0.3} color="#a855f7" />
        )}
        
        <Suspense fallback={<LoadingFallback />}>
          <EarthModel isMobile={isMobile} isTablet={isTablet} />
        </Suspense>
      </Canvas>
      
      {/* Vignette for better text readability - adjusted for mobile */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isMobile 
            ? 'radial-gradient(ellipse at center, transparent 0%, hsl(230 25% 5% / 0.4) 40%, hsl(230 25% 5% / 0.85) 100%)'
            : 'radial-gradient(ellipse at center, transparent 0%, hsl(230 25% 5% / 0.3) 50%, hsl(230 25% 5% / 0.75) 100%)',
        }}
      />
    </div>
  );
};

// Preload the model
useGLTF.preload('/models/earth/export.gltf');

export default SpaceBackground;