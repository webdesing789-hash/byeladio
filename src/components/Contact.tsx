import { motion } from 'framer-motion';

const socialLinks = [
  { name: "GitHub", url: "#" },
  { name: "LinkedIn", url: "#" },
  { name: "Twitter", url: "#" },
  { name: "Instagram", url: "#" }
];

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl font-bold mb-8"
        >
          LET'S WORK TOGETHER
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto"
        >
          Have a project in mind? I'd love to hear about it. Let's create something amazing together.
        </motion.p>
        
        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          href="mailto:hello@example.com"
          className="inline-block glass px-8 py-4 rounded-full font-display font-bold text-lg hover:glow-primary hover:bg-primary/10 transition-all duration-300"
        >
          hello@example.com
        </motion.a>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 pt-8 border-t border-border"
        >
          <p className="text-sm text-muted-foreground mb-6">Find me on</p>
          <div className="flex items-center justify-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
