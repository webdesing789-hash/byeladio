import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: "01",
    title: "Customer Reaches Out",
    description: "Your customer messages via WhatsApp, Instagram DM, or your website chat—any time, any day. The moment they send a message, our AI agent activates.",
    badge: "Available 24/7",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    number: "02",
    title: "AI Responds Intelligently",
    description: "Our conversational AI understands context, answers questions, showcases products or services, and guides customers through your sales process—just like your best employee.",
    badge: "Response in seconds",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    number: "03",
    title: "Process & Verify",
    description: "The AI captures orders, books appointments, verifies payments automatically through Stripe, and updates your CRM in real-time. Zero manual data entry required.",
    badge: "No manual work",
    gradient: "from-green-500/20 to-teal-500/20"
  },
  {
    number: "04",
    title: "You Close More Sales",
    description: "Receive only qualified, ready-to-buy leads. More conversions, less repetitive work, and complete conversation history for every interaction.",
    badge: "+40% conversion",
    gradient: "from-orange-500/20 to-yellow-500/20"
  }
];

const StepCard = ({ step, index }: { step: typeof steps[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.7, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? -50 : 50, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, x, scale }}
      className="h-full"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ 
          delay: index * 0.15, 
          duration: 0.5,
          ease: [0.25, 0.1, 0.25, 1]
        }}
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.2 }
        }}
        className="group relative glass rounded-2xl p-6 h-full border-2 border-transparent hover:border-primary/40 transition-all duration-500"
        data-cursor-hover
      >
        {/* Gradient background on hover */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
        
        {/* Glow effect */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-20"
          style={{
            boxShadow: '0 0 40px hsl(260 80% 60% / 0.2)'
          }}
        />

        <div className="flex items-start gap-4">
          <motion.span 
            className="font-display text-5xl font-bold text-primary/30 group-hover:text-primary/60 transition-colors duration-300"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 + 0.1, type: "spring" }}
          >
            {step.number}
          </motion.span>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <motion.h3 
                className="font-display text-xl font-bold text-foreground"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.15 }}
              >
                {step.title}
              </motion.h3>
              <motion.span 
                className="px-3 py-1 bg-primary/20 rounded-full text-xs text-primary font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.2 }}
              >
                {step.badge}
              </motion.span>
            </div>
            <motion.p 
              className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + 0.25 }}
            >
              {step.description}
            </motion.p>
          </div>
        </div>

        {/* Bottom accent line */}
        <motion.div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded-full"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "50%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
        />
      </motion.div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div id="features" className="py-20 px-6 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-sm tracking-[0.3em] text-primary mb-4"
          >
            AI AUTOMATION IN 4 SIMPLE STEPS
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            How Does Orbita AI Work?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            We automate your customer service so you can focus on growing. Here's our proven process.
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
