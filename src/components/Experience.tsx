import { motion } from 'framer-motion';

const benefits = [
  { title: "Works 24/7/365", description: "Never sleeps, never takes breaks. Your AI agent responds instantly at 3am on Christmas Day.", stat: "24/7" },
  { title: "Always Patient & Friendly", description: "No bad days, no frustration. Every customer gets the same excellent service, every single time.", stat: "100%" },
  { title: "Massive Cost Savings", description: "One AI agent handles the work of 5+ staff members. No salaries, no benefits, no turnover costs.", stat: "70%" },
  { title: "Instant Responses", description: "No hold times, no wait. Customers get answers in under 3 seconds, not minutes or hours.", stat: "<3s" },
  { title: "Handles Unlimited Volume", description: "Peak season? No problem. AI scales instantly to handle 10 or 10,000 conversations simultaneously.", stat: "∞" },
  { title: "Zero Human Error", description: "No typos, no forgotten follow-ups, no miscommunication. Accurate information every time.", stat: "0%" },
];

const Experience = () => {
  return (
    <div className="py-20 px-6 flex items-center justify-center min-h-screen">
      <div className="max-w-6xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-sm tracking-[0.3em] text-primary mb-4 text-center"
        >
          THE REAL COST OF NOT AUTOMATING
        </motion.p>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Save Money, Scale Effortlessly
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-center mb-16 max-w-3xl mx-auto"
        >
          Every minute your team spends on repetitive tasks is a minute not spent growing your business. A traditional customer service rep costs $45,000-$60,000/year plus benefits. An AI agent costs a fraction and works every second of every day.
        </motion.p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center hover:glow-primary transition-all duration-500"
              data-cursor-hover
            >
              <div className="font-display text-3xl font-bold text-gradient mb-3">
                {benefit.stat}
              </div>
              <h3 className="font-display text-lg font-bold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 glass rounded-2xl p-6 text-center"
        >
          <p className="text-lg italic text-muted-foreground mb-4">
            "Our AI agent paid for itself in the first week. After-hours sales increased by 47%."
          </p>
          <p className="text-sm text-primary">— Michael Thompson, Managing Director, Thompson Electronics, Miami</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
