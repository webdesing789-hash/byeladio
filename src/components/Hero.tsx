import { motion } from 'framer-motion';
import MarqueeText from './Marquee';
import { Magnetic } from './SmoothScroll';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      <MarqueeText />
      
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-muted-foreground mb-8"
        >
          <span className="text-green-400">✓</span> Trusted by 100+ businesses in the USA
          <span className="mx-2">|</span>
          <span className="text-yellow-400">⚡</span> Response time: Under 3 seconds
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          <span className="text-gradient">AI Solutions & Digital Services</span>
          <br />
          <span className="text-foreground">for Modern Businesses</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6"
        >
          From intelligent chatbots and voice agents to custom web development and branding—we deliver end-to-end digital solutions that automate, elevate, and scale your business 24/7.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-muted-foreground mb-8"
        >
          AI automation • Web & app development • Logo design • Voice agents
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col items-center gap-4"
        >
          <Magnetic strength={0.25}>
            <a 
              href="#features"
              className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full font-medium hover:glow-primary transition-all duration-300"
              data-cursor-hover
            >
              See How It Works
              <motion.svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </motion.svg>
            </a>
          </Magnetic>
          <span className="text-sm text-muted-foreground">No sales pressure • Only real potential projects</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
        >
          <motion.div 
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
