import { motion } from 'framer-motion';

const About = () => {
  const words = "I'm a creative developer & designer with a passion for blending technical expertise with creative edge. Driven by curiosity, I always try to explore and learn new skills.".split(' ');

  return (
    <div className="py-20 px-6 flex items-center justify-center min-h-screen">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-sm tracking-[0.3em] text-muted-foreground mb-12 text-center"
        >
          A B O U T &nbsp; M E
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl lg:text-5xl font-display leading-tight text-center"
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0.3 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="inline-block mr-3"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </div>
  );
};

export default About;
