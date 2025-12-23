import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FramedButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  glowColor?: string;
  external?: boolean;
}

const FramedButton = ({ 
  children, 
  href, 
  onClick, 
  className = '', 
  glowColor = 'hsl(260 80% 60%)',
  external = false 
}: FramedButtonProps) => {
  const Component = href ? 'a' : 'button';
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="inline-block"
    >
      <Component
        href={href}
        onClick={onClick}
        className={`group relative inline-flex items-center justify-center cursor-none ${className}`}
        data-cursor-hover
        {...externalProps}
      >
        {/* Outer glow on hover */}
        <div
          className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-70 blur-lg transition-all duration-300"
          style={{ 
            backgroundColor: glowColor,
            boxShadow: `0 0 20px ${glowColor}, 0 0 40px ${glowColor}`
          }}
        />
        
        {/* Main button frame */}
        <div 
          className="relative px-6 py-3 rounded-full border-2 border-border/60 bg-card/80 backdrop-blur-sm transition-all duration-300 group-hover:border-foreground/80 group-hover:bg-card"
        >
          {/* Corner accents */}
          <div className="absolute inset-0 pointer-events-none">
            <span className="absolute top-0 left-2 w-2 h-2 border-t-2 border-transparent group-hover:border-foreground transition-all duration-300" />
            <span className="absolute top-0 right-2 w-2 h-2 border-t-2 border-transparent group-hover:border-foreground transition-all duration-300" />
            <span className="absolute bottom-0 left-2 w-2 h-2 border-b-2 border-transparent group-hover:border-foreground transition-all duration-300" />
            <span className="absolute bottom-0 right-2 w-2 h-2 border-b-2 border-transparent group-hover:border-foreground transition-all duration-300" />
          </div>
          
          {/* Inner glow */}
          <div 
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-40 transition-all duration-300"
            style={{ 
              background: `radial-gradient(circle at center, ${glowColor} 0%, transparent 70%)`
            }}
          />
          
          {/* Content */}
          <span className="relative z-10 font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
            {children}
          </span>
        </div>
      </Component>
    </motion.div>
  );
};

export default FramedButton;
