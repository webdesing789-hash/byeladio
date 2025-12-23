import { motion } from 'framer-motion';
import { MessageCircle, Linkedin, Instagram } from 'lucide-react';

// Orbita AI brand color - coral/pink
const orbitaColor = '#FF6B6B';

const socialLinks = [
  {
    name: 'WhatsApp',
    icon: MessageCircle,
    href: 'https://wa.link/gpyd1p',
    color: orbitaColor
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/company/orbita-ai/',
    color: orbitaColor
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://www.instagram.com/orbit.bot/',
    color: orbitaColor
  }
];

const SocialIcons = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="fixed left-4 md:left-6 bottom-6 z-50 flex flex-col gap-4"
    >
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          className="group relative w-12 h-12 cursor-none"
          data-cursor-hover
          aria-label={social.name}
        >
          {/* Intense outer glow */}
          <div
            className="absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-300"
            style={{ 
              backgroundColor: social.color,
              boxShadow: `0 0 30px ${social.color}, 0 0 60px ${social.color}`
            }}
          />
          
          {/* Secondary glow layer */}
          <div
            className="absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-80 blur-md transition-all duration-300"
            style={{ backgroundColor: social.color }}
          />
          
          {/* Main frame/box */}
          <div 
            className="absolute inset-0 rounded-lg border-2 border-border/60 bg-background/90 backdrop-blur-sm transition-all duration-300 group-hover:border-white group-hover:bg-black/80"
            style={{
              boxShadow: 'inset 0 0 20px rgba(0,0,0,0.3)'
            }}
          />
          
          {/* Corner brackets */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Top-left corner */}
            <span className="absolute -top-0.5 -left-0.5 w-3 h-3 border-t-2 border-l-2 border-transparent group-hover:border-white transition-all duration-300" />
            {/* Top-right corner */}
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 border-t-2 border-r-2 border-transparent group-hover:border-white transition-all duration-300" />
            {/* Bottom-left corner */}
            <span className="absolute -bottom-0.5 -left-0.5 w-3 h-3 border-b-2 border-l-2 border-transparent group-hover:border-white transition-all duration-300" />
            {/* Bottom-right corner */}
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 border-b-2 border-r-2 border-transparent group-hover:border-white transition-all duration-300" />
          </div>
          
          {/* Inner color glow */}
          <div 
            className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-50 transition-all duration-300"
            style={{ 
              background: `radial-gradient(circle at center, ${social.color}60 0%, transparent 70%)`
            }}
          />
          
          {/* Icon */}
          <div className="relative w-full h-full flex items-center justify-center z-10">
            <social.icon 
              size={20} 
              className="text-muted-foreground group-hover:text-white transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" 
            />
          </div>
          
          {/* Tooltip with glow */}
          <span 
            className="absolute left-full ml-4 px-3 py-1.5 text-xs font-medium text-white bg-black/90 backdrop-blur-sm border border-white/20 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none"
            style={{
              boxShadow: `0 0 20px ${social.color}50, 0 4px 20px rgba(0,0,0,0.5)`
            }}
          >
            {social.name}
          </span>
        </motion.a>
      ))}
      
      {/* Vertical line decoration */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 1.6, duration: 0.5 }}
        className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent mx-auto mt-2 origin-top"
      />
    </motion.div>
  );
};

export default SocialIcons;
