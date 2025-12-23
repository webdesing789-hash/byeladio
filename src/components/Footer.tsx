import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-8 px-6 border-t border-border"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground">
          Designed & Developed with <span className="text-primary">♥</span>
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
