import { motion } from 'framer-motion';
import { Magnetic } from './SmoothScroll';

const projects = [
  {
    number: "01",
    title: "Project Alpha",
    category: "Web Development",
    tools: "React, TypeScript, Three.js, Tailwind",
    color: "from-purple-500/20 to-blue-500/20"
  },
  {
    number: "02", 
    title: "Project Beta",
    category: "3D Design & Animation",
    tools: "Blender, Substance Painter, After Effects",
    color: "from-pink-500/20 to-purple-500/20"
  },
  {
    number: "03",
    title: "Project Gamma",
    category: "Full Stack Application",
    tools: "Next.js, Node.js, PostgreSQL, Prisma",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    number: "04",
    title: "Project Delta",
    category: "UI/UX Design",
    tools: "Figma, Framer, Motion Design",
    color: "from-orange-500/20 to-pink-500/20"
  }
];

const Projects = () => {
  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl font-bold text-center mb-16"
        >
          MY WORK
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <Magnetic key={i} strength={0.05}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative glass rounded-2xl overflow-hidden hover:glow-primary transition-all duration-500 cursor-pointer"
                data-cursor-hover
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative p-8">
                  <span className="font-display text-6xl font-bold text-muted-foreground/20 group-hover:text-primary/30 transition-colors">
                    {project.number}
                  </span>
                  
                  <div className="mt-4">
                    <p className="text-sm text-primary mb-2">{project.category}</p>
                    <h3 className="font-display text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.tools}</p>
                  </div>
                  
                  <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <span>View Project</span>
                    <motion.svg 
                      className="w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      whileHover={{ x: 5 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </div>
                </div>
              </motion.div>
            </Magnetic>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
