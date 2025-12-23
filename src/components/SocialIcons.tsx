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
      className="fixed left-4 md:left-6 bottom-6 z-50 flex flex-col gap-3"
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
          whileHover={{ 
            scale: 1.2,
            rotate: 10,
            transition: { type: 'spring', stiffness: 400, damping: 10 }
          }}
          whileTap={{ scale: 0.9 }}
          className="group relative w-10 h-10 rounded-full glass flex items-center justify-center cursor-none overflow-hidden"
          data-cursor-hover
          aria-label={social.name}
        >
          {/* Background glow on hover */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ backgroundColor: social.color }}
          />
          
          {/* Icon */}
          <social.icon 
            size={18} 
            className="relative z-10 text-muted-foreground group-hover:text-white transition-colors duration-300" 
          />
          
          {/* Tooltip */}
          <span className="absolute left-full ml-3 px-2 py-1 text-xs font-medium bg-background/90 backdrop-blur-sm border border-border rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
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
