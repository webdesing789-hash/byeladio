import { useRef, useEffect, useState, ReactNode } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';

interface ScrollSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export const ScrollSection = ({ children, id, className = '' }: ScrollSectionProps) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);

  const smoothOpacity = useSpring(opacity, { damping: 30, stiffness: 100 });
  const smoothY = useSpring(y, { damping: 30, stiffness: 100 });
  const smoothScale = useSpring(scale, { damping: 30, stiffness: 100 });

  return (
    <motion.section
      ref={ref}
      id={id}
      style={{
        opacity: smoothOpacity,
        y: smoothY,
        scale: smoothScale,
      }}
      className={`min-h-screen snap-start snap-always flex flex-col justify-center ${className}`}
    >
      {children}
    </motion.section>
  );
};

interface ScrollContainerProps {
  children: ReactNode;
}

export const ScrollContainer = ({ children }: ScrollContainerProps) => {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sections = container.querySelectorAll('section');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const index = Array.from(sections).indexOf(entry.target as HTMLElement);
            setActiveSection(index);
          }
        });
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="snap-y snap-mandatory h-screen overflow-y-auto overflow-x-hidden scroll-smooth touch-pan-y"
      style={{ scrollBehavior: 'smooth', overscrollBehaviorX: 'none' }}
    >
      {children}
      
      {/* Section indicators */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
        {Array.from({ length: 7 }).map((_, i) => (
          <motion.button
            key={i}
            onClick={() => {
              const sections = containerRef.current?.querySelectorAll('section');
              sections?.[i]?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative flex items-center justify-end"
            whileHover={{ scale: 1.2 }}
          >
            <motion.div
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeSection === i 
                  ? 'bg-primary w-8' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
              }`}
              layout
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
};

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export const Parallax = ({ children, speed = 0.5, className = '' }: ParallaxProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);
  const smoothY = useSpring(y, { damping: 50, stiffness: 400 });

  return (
    <motion.div ref={ref} style={{ y: smoothY }} className={className}>
      {children}
    </motion.div>
  );
};

interface FadeInViewProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const FadeInView = ({ children, className = '', delay = 0 }: FadeInViewProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export const Magnetic = ({ children, className = '', strength = 0.3 }: MagneticProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = 'translate(0, 0)';
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-300 ease-out ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollContainer;
