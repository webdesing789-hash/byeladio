import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useRef, Suspense, useEffect, useState, useMemo } from 'react';
import * as THREE from 'three';
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader.js';

// Hook to detect mobile/tablet devices
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

// Galaxy component using PLY point cloud
function Galaxy({ isMobile }: { isMobile: boolean }) {
  const pointsRef = useRef<THREE.Points>(null);
  const geometry = useLoader(PLYLoader, '/models/galaxy.ply');
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
  
  const material = useMemo(() => {
    return new THREE.PointsMaterial({
      size: isMobile ? 0.02 : 0.015,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
    });
  }, [isMobile]);

  useFrame((state) => {
    if (pointsRef.current) {
      const time = state.clock.elapsedTime;
      
      // Base slow rotation
      pointsRef.current.rotation.y = time * 0.03;
      
      if (isMobile) {
        // Gentle automatic tilt on mobile
        pointsRef.current.rotation.x = Math.sin(time * 0.15) * 0.1 + 0.3;
      } else {
        // Mouse-reactive tilt on desktop
        pointsRef.current.rotation.x = 0.3 + mousePosition.y * 0.1;
        pointsRef.current.rotation.z = mousePosition.x * 0.05;
      }
    }
  });

  return (
    <points 
      ref={pointsRef} 
      geometry={geometry} 
      material={material} 
      scale={0.012} 
      position={[0, 0, -1]} 
    />
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
        camera={{ position: [0, 0, 3], fov: 60 }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        dpr={[1.5, 2]}
        style={{ 
          background: 'transparent',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.4} color="#a855f7" />
        
        <Suspense fallback={<LoadingFallback />}>
          <Galaxy isMobile={isMobile} />
        </Suspense>
      </Canvas>
      
      {/* Subtle vignette */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, hsl(230 25% 5% / 0.3) 60%, hsl(230 25% 5% / 0.7) 100%)',
        }}
      />
    </div>
  );
};

export default SpaceBackground;
