import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="font-display font-bold text-lg text-foreground hover:text-primary transition-colors">
          portfolio.dev
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Skills
          </a>
          <a href="#work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Work
          </a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </div>

        <a 
          href="#contact"
          className="glass px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
        >
          Let's Talk
        </a>
      </nav>
    </motion.header>
  );
};

export default Header;
