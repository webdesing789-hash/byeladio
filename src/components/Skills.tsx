import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Customer Reaches Out",
    description: "Your customer messages via WhatsApp, Instagram DM, or your website chat—any time, any day. The moment they send a message, our AI agent activates.",
    badge: "Available 24/7"
  },
  {
    number: "02",
    title: "AI Responds Intelligently",
    description: "Our conversational AI understands context, answers questions, showcases products or services, and guides customers through your sales process—just like your best employee.",
    badge: "Response in seconds"
  },
  {
    number: "03",
    title: "Process & Verify",
    description: "The AI captures orders, books appointments, verifies payments automatically through Stripe, and updates your CRM in real-time. Zero manual data entry required.",
    badge: "No manual work"
  },
  {
    number: "04",
    title: "You Close More Sales",
    description: "Receive only qualified, ready-to-buy leads. More conversions, less repetitive work, and complete conversation history for every interaction.",
    badge: "+40% conversion"
  }
];

const Skills = () => {
  return (
    <div id="features" className="py-20 px-6 flex items-center justify-center min-h-screen">
      <div className="max-w-6xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-sm tracking-[0.3em] text-primary mb-4 text-center"
        >
          AI AUTOMATION IN 4 SIMPLE STEPS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-bold text-center mb-4"
        >
          How Does Orbita AI Work?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto"
        >
          We automate your customer service so you can focus on growing. Here's our proven process.
        </motion.p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="glass rounded-2xl p-6 hover:glow-primary transition-all duration-500"
              data-cursor-hover
            >
              <div className="flex items-start gap-4">
                <span className="font-display text-4xl font-bold text-primary/30">
                  {step.number}
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-display text-xl font-bold">{step.title}</h3>
                    <span className="px-2 py-1 bg-primary/20 rounded-full text-xs text-primary">
                      {step.badge}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
