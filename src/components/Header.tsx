import { motion } from 'framer-motion';
import { Magnetic } from './SmoothScroll';

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
          <a href="#" className="font-display font-bold text-lg text-foreground hover:text-primary transition-colors" data-cursor-hover>
            portfolio.dev
          </a>
        </Magnetic>
        
        <div className="hidden md:flex items-center gap-8">
          {['About', 'Skills', 'Work', 'Contact'].map((item) => (
            <Magnetic key={item} strength={0.15}>
              <a 
                href={`#${item.toLowerCase()}`} 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-cursor-hover
              >
                {item}
              </a>
            </Magnetic>
          ))}
        </div>

        <Magnetic strength={0.2}>
          <a 
            href="#contact"
            className="glass px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
            data-cursor-hover
          >
            Let's Talk
          </a>
        </Magnetic>
      </nav>
    </motion.header>
  );
};

export default Header;
