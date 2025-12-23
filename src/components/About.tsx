import { motion } from 'framer-motion';

const stats = [
  { value: "100+", label: "Businesses Automated" },
  { value: "50K+", label: "Conversations Managed" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "24/7", label: "Availability" },
];

const About = () => {
  return (
    <div className="py-20 px-6 flex items-center justify-center min-h-screen">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-sm tracking-[0.3em] text-primary mb-4 text-center"
        >
          PROVEN TRACK RECORD
        </motion.h2>
        
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-bold text-center mb-6"
        >
          Measurable Results
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto"
        >
          Real outcomes from businesses that chose Orbita AI
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-4xl md:text-5xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 glass rounded-2xl p-8 text-center"
        >
          <h4 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Why Businesses Choose Orbita AI
          </h4>
          <div className="grid md:grid-cols-2 gap-6 mt-8 text-left">
            <div className="space-y-2">
              <h5 className="font-display font-bold text-foreground">24/7 Availability Without the Cost</h5>
              <p className="text-muted-foreground text-sm">One AI agent handles the workload of 5+ employees at a fraction of the cost—saving businesses an average of $50,000+ annually.</p>
            </div>
            <div className="space-y-2">
              <h5 className="font-display font-bold text-foreground">Instant Response, Every Time</h5>
              <p className="text-muted-foreground text-sm">Our bots respond in under 3 seconds, capturing leads when they're most engaged.</p>
            </div>
            <div className="space-y-2">
              <h5 className="font-display font-bold text-foreground">Smart Integration with Your Business</h5>
              <p className="text-muted-foreground text-sm">Connects with Stripe, Google Calendar, HubSpot, Salesforce, Shopify, and 400+ more tools seamlessly.</p>
            </div>
            <div className="space-y-2">
              <h5 className="font-display font-bold text-foreground">Unlimited Automation Flows</h5>
              <p className="text-muted-foreground text-sm">Capture → Qualify → Schedule → Collect → Deliver. Zero manual data entry required.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
