import { motion } from 'framer-motion';
import { Magnetic } from './SmoothScroll';
import FramedButton from './FramedButton';

const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <Magnetic strength={0.2}>
          <a href="#" className="font-display font-bold text-xl text-gradient" data-cursor-hover>
            Orbita AI
          </a>
        </Magnetic>
        
        <div className="hidden md:flex items-center gap-8">
          {['Home', 'Features', 'Pricing', 'Integrations'].map((item) => (
            <Magnetic key={item} strength={0.15}>
              <a 
                href={`#${item.toLowerCase()}`} 
                className="group relative text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                data-cursor-hover
              >
                <span className="relative z-10">{item}</span>
                {/* Underline effect */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
              </a>
            </Magnetic>
          ))}
        </div>

        <Magnetic strength={0.2}>
          <FramedButton 
            href="https://www.instagram.com/orbit.bot/"
            external
            glowColor="hsl(260 80% 65%)"
          >
            Follow Us
          </FramedButton>
        </Magnetic>
      </nav>
    </motion.header>
  );
};

export default Header;
