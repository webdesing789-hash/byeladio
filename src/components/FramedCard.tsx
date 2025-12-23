import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FramedCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  delay?: number;
}

const FramedCard = ({ children, className = '', glowColor = 'hsl(260 80% 60%)', delay = 0 }: FramedCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`group relative ${className}`}
    >
      {/* Outer glow on hover */}
      <div
        className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-60 blur-xl transition-all duration-500"
        style={{ 
          backgroundColor: glowColor,
          boxShadow: `0 0 40px ${glowColor}, 0 0 80px ${glowColor}`
        }}
      />
      
      {/* Secondary glow layer */}
      <div
        className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-40 blur-md transition-all duration-400"
        style={{ backgroundColor: glowColor }}
      />
      
      {/* Main frame/box */}
      <div 
        className="relative rounded-xl border-2 border-border/60 bg-card/90 backdrop-blur-sm transition-all duration-300 group-hover:border-foreground/60 group-hover:bg-card"
        style={{
          boxShadow: 'inset 0 0 30px rgba(0,0,0,0.2)'
        }}
      >
        {/* Corner brackets */}
        <div className="absolute inset-0 pointer-events-none rounded-xl">
          {/* Top-left corner */}
          <span className="absolute -top-0.5 -left-0.5 w-4 h-4 border-t-2 border-l-2 border-transparent group-hover:border-foreground transition-all duration-300 rounded-tl" />
          {/* Top-right corner */}
          <span className="absolute -top-0.5 -right-0.5 w-4 h-4 border-t-2 border-r-2 border-transparent group-hover:border-foreground transition-all duration-300 rounded-tr" />
          {/* Bottom-left corner */}
          <span className="absolute -bottom-0.5 -left-0.5 w-4 h-4 border-b-2 border-l-2 border-transparent group-hover:border-foreground transition-all duration-300 rounded-bl" />
          {/* Bottom-right corner */}
          <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 border-b-2 border-r-2 border-transparent group-hover:border-foreground transition-all duration-300 rounded-br" />
        </div>
        
        {/* Inner color glow */}
        <div 
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 transition-all duration-300"
          style={{ 
            background: `radial-gradient(circle at center, ${glowColor} 0%, transparent 70%)`
          }}
        />
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default FramedCard;
