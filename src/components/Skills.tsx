import { motion } from 'framer-motion';

const skillsData = {
  develop: {
    title: "DEVELOP",
    description: "Building modern web experiences with cutting-edge technologies and a focus on performance.",
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Three.js", "CSS/Tailwind", "Express.js"]
  },
  design: {
    title: "DESIGN", 
    description: "Creating visually stunning designs that blend aesthetics with functionality.",
    skills: ["UI/UX Design", "Figma", "Blender", "Motion Design", "3D Modeling", "Prototyping", "Brand Identity", "Animation"]
  }
};

const SkillCard = ({ data, index }: { data: typeof skillsData.develop; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2 }}
    className="bg-card-gradient glass rounded-2xl p-8 hover:glow-primary transition-all duration-500"
    data-cursor-hover
  >
    <h3 className="font-display text-2xl font-bold mb-4 text-gradient">{data.title}</h3>
    <p className="text-muted-foreground mb-6 leading-relaxed">{data.description}</p>
    <div className="flex flex-wrap gap-2">
      {data.skills.map((skill) => (
        <span 
          key={skill}
          className="px-3 py-1.5 bg-secondary rounded-full text-sm text-foreground/80"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <div className="py-20 px-6 flex items-center justify-center min-h-screen">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl font-bold text-center mb-4"
        >
          WHAT I DO
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto"
        >
          Combining development expertise with design sensibility to create exceptional digital experiences.
        </motion.p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <SkillCard data={skillsData.develop} index={0} />
          <SkillCard data={skillsData.design} index={1} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
