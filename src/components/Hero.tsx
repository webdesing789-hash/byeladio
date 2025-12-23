import { motion } from 'framer-motion';
import MarqueeText from './Marquee';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <MarqueeText />
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground text-lg mb-4"
        >
          Hello! I'm
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6"
        >
          <span className="text-gradient">YOUR NAME</span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-xl md:text-2xl"
        >
          <span className="text-muted-foreground">A Creative</span>
          <div className="flex items-center gap-4">
            <span className="font-display font-bold text-foreground">Developer</span>
            <span className="text-primary">&</span>
            <span className="font-display font-bold text-outline">Designer</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12"
        >
          <a 
            href="#work"
            className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full font-medium hover:glow-primary transition-all duration-300"
          >
            View My Work
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
