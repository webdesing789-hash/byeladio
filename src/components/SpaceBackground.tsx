import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useRef, Suspense, useEffect, useState, useMemo } from 'react';
import * as THREE from 'three';
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader.js';

function GalaxyPoints() {
  const pointsRef = useRef<THREE.Points>(null);
  const geometry = useLoader(PLYLoader, '/models/galaxy.ply');
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0, y: 0 });

  // Create point material with custom shader for glow effect
  const material = useMemo(() => {
    return new THREE.PointsMaterial({
      size: 0.8,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
    });
  }, []);

  // Center and scale the geometry
  useEffect(() => {
    if (geometry) {
      geometry.computeBoundingBox();
      geometry.center();
      geometry.scale(0.015, 0.015, 0.015);
    }
  }, [geometry]);

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
    if (pointsRef.current) {
      // Smooth mouse follow
      targetRotation.current.x = mousePosition.y * 0.1;
      targetRotation.current.y = mousePosition.x * 0.15;

      pointsRef.current.rotation.x += (targetRotation.current.x - pointsRef.current.rotation.x) * 0.02;
      pointsRef.current.rotation.y += (targetRotation.current.y - pointsRef.current.rotation.y) * 0.02;
      
      // Slow continuous rotation
      pointsRef.current.rotation.y += 0.0005;
      pointsRef.current.rotation.z += 0.0002;
      
      // Gentle floating motion
      pointsRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <points ref={pointsRef} geometry={geometry} material={material} />
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
        camera={{ position: [0, 0, 5], fov: 60 }}
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
        <Suspense fallback={<LoadingFallback />}>
          <GalaxyPoints />
        </Suspense>
      </Canvas>
      
      {/* Vignette for better text readability */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, hsl(230 25% 5% / 0.4) 50%, hsl(230 25% 5% / 0.8) 100%)',
        }}
      />
    </div>
  );
};

export default SpaceBackground;