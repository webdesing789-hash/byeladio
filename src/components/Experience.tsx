import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const benefits = [
  { title: "Works 24/7/365", description: "Never sleeps, never takes breaks. Your AI agent responds instantly at 3am on Christmas Day.", stat: "24/7", gradient: "from-blue-500/20 to-cyan-500/20" },
  { title: "Always Patient & Friendly", description: "No bad days, no frustration. Every customer gets the same excellent service, every single time.", stat: "100%", gradient: "from-green-500/20 to-teal-500/20" },
  { title: "Massive Cost Savings", description: "One AI agent handles the work of 5+ staff members. No salaries, no benefits, no turnover costs.", stat: "70%", gradient: "from-purple-500/20 to-pink-500/20" },
  { title: "Instant Responses", description: "No hold times, no wait. Customers get answers in under 3 seconds, not minutes or hours.", stat: "<3s", gradient: "from-yellow-500/20 to-orange-500/20" },
  { title: "Handles Unlimited Volume", description: "Peak season? No problem. AI scales instantly to handle 10 or 10,000 conversations simultaneously.", stat: "∞", gradient: "from-pink-500/20 to-red-500/20" },
  { title: "Zero Human Error", description: "No typos, no forgotten follow-ups, no miscommunication. Accurate information every time.", stat: "0%", gradient: "from-indigo-500/20 to-purple-500/20" },
];

const BenefitCard = ({ benefit, index }: { benefit: typeof benefits[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.7, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, y, scale }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        whileHover={{ 
          scale: 1.03,
          transition: { duration: 0.2 }
        }}
        className="group relative glass rounded-2xl p-6 text-center h-full border-2 border-transparent hover:border-primary/40 transition-all duration-500"
        data-cursor-hover
      >
        {/* Gradient background on hover */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
        
        {/* Glow effect */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-20"
          style={{
            boxShadow: '0 0 30px hsl(260 80% 60% / 0.15)'
          }}
        />

        <motion.div 
          className="font-display text-4xl font-bold text-gradient mb-4"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.1, type: "spring", stiffness: 200 }}
        >
          {benefit.stat}
        </motion.div>
        
        <motion.h3 
          className="font-display text-lg font-bold mb-2 text-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.15 }}
        >
          {benefit.title}
        </motion.h3>
        
        <motion.p 
          className="text-muted-foreground text-sm group-hover:text-foreground/80 transition-colors duration-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.2 }}
        >
          {benefit.description}
        </motion.p>

        {/* Bottom accent line */}
        <motion.div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded-full"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "40%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.25, duration: 0.4 }}
        />
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <div className="py-20 px-6 min-h-screen flex items-center">
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
            THE REAL COST OF NOT AUTOMATING
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Save Money, Scale Effortlessly
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-3xl mx-auto"
          >
            A traditional customer service rep costs $45,000-$60,000/year plus benefits. An AI agent costs a fraction and works every second of every day.
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, i) => (
            <BenefitCard key={i} benefit={benefit} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.01 }}
          className="glass rounded-2xl p-8 text-center border border-transparent hover:border-primary/30 transition-all duration-500"
        >
          <motion.p 
            className="text-xl italic text-foreground/90 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            "Our AI agent paid for itself in the first week. After-hours sales increased by 47%."
          </motion.p>
          <motion.p 
            className="text-sm text-primary font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            — Michael Thompson, Managing Director, Thompson Electronics, Miami
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
