import { motion } from 'framer-motion';
import { MessageCircle, Linkedin, Instagram } from 'lucide-react';

const socialLinks = [
  {
    name: 'WhatsApp',
    icon: MessageCircle,
    href: 'https://wa.link/gpyd1p',
    color: '#25D366'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/company/orbita-ai/',
    color: '#0A66C2'
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://www.instagram.com/orbit.bot/',
    color: '#E4405F'
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
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          className="group relative w-11 h-11 cursor-none"
          data-cursor-hover
          aria-label={social.name}
        >
          {/* Outer glow ring */}
          <motion.div
            className="absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"
            style={{ backgroundColor: social.color }}
          />
          
          {/* Animated border frame */}
          <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-white/50 transition-all duration-300 overflow-hidden">
            {/* Corner accents that appear on hover */}
            <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-transparent group-hover:border-white transition-all duration-300 rounded-tl-sm" />
            <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-transparent group-hover:border-white transition-all duration-300 rounded-tr-sm" />
            <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-transparent group-hover:border-white transition-all duration-300 rounded-bl-sm" />
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-transparent group-hover:border-white transition-all duration-300 rounded-br-sm" />
          </div>
          
          {/* Background box */}
          <div 
            className="absolute inset-0 rounded-lg bg-background/80 backdrop-blur-sm border border-border/50 group-hover:border-white/30 group-hover:bg-background/90 transition-all duration-300"
            style={{
              boxShadow: 'none',
            }}
          />
          
          {/* Glow effect on hover */}
          <div 
            className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"
            style={{ 
              backgroundColor: social.color,
              boxShadow: `0 0 20px ${social.color}, 0 0 40px ${social.color}40`
            }}
          />
          
          {/* Icon */}
          <div className="relative w-full h-full flex items-center justify-center">
            <social.icon 
              size={18} 
              className="text-muted-foreground group-hover:text-white transition-colors duration-300" 
            />
          </div>
          
          {/* Tooltip */}
          <span 
            className="absolute left-full ml-4 px-3 py-1.5 text-xs font-medium bg-background/95 backdrop-blur-sm border border-border rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-lg"
            style={{
              boxShadow: `0 0 15px ${social.color}30`
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
        className="w-px h-16 bg-gradient-to-b from-border to-transparent mx-auto mt-2 origin-top"
      />
    </motion.div>
  );
};

export default SocialIcons;
