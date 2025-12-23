import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Senior Developer",
    company: "Tech Company",
    year: "2022",
    description: "Leading development of web applications, mentoring junior developers, and implementing modern frontend architectures."
  },
  {
    role: "Full Stack Developer",
    company: "Digital Agency",
    year: "2020",
    description: "Built interactive web experiences with React, Node.js, and integrated 3D elements using Three.js."
  },
  {
    role: "Freelance & Learning",
    company: "Self-employed",
    year: "NOW",
    description: "Working on diverse projects while continuously expanding my skill set in new technologies and design tools."
  }
];

const Experience = () => {
  return (
    <div className="py-20 px-6 flex items-center justify-center min-h-screen">
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl font-bold text-center mb-16"
        >
          EXPERIENCE
        </motion.h2>
        
        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-colors"
              data-cursor-hover
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">{exp.role}</h3>
                  <p className="text-primary">{exp.company}</p>
                </div>
                <span className="font-display text-3xl font-bold text-muted-foreground/50">
                  {exp.year}
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
