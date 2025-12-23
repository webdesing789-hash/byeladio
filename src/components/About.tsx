import { motion } from 'framer-motion';
import FramedCard from './FramedCard';

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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display text-sm tracking-[0.3em] text-primary mb-4 text-center"
        >
          PROVEN TRACK RECORD
        </motion.h2>
        
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display text-4xl md:text-5xl font-bold text-center mb-6"
        >
          Measurable Results
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto"
        >
          Real outcomes from businesses that chose Orbita AI
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <FramedCard 
              key={i} 
              delay={0.3 + i * 0.1}
              glowColor="hsl(260 80% 65%)"
              className="text-center"
            >
              <div className="p-6">
                <div className="font-display text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </div>
            </FramedCard>
          ))}
        </div>

        <FramedCard 
          delay={0.6}
          glowColor="hsl(260 80% 65%)"
          className="mt-20"
        >
          <div className="p-8 text-center">
            <h4 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Why Businesses Choose Orbita AI
            </h4>
            <div className="grid md:grid-cols-2 gap-6 mt-8 text-left">
              {[
                { title: "24/7 Availability Without the Cost", desc: "One AI agent handles the workload of 5+ employees at a fraction of the cost—saving businesses an average of $50,000+ annually." },
                { title: "Instant Response, Every Time", desc: "Our bots respond in under 3 seconds, capturing leads when they're most engaged." },
                { title: "Smart Integration with Your Business", desc: "Connects with Stripe, Google Calendar, HubSpot, Salesforce, Shopify, and 400+ more tools seamlessly." },
                { title: "Unlimited Automation Flows", desc: "Capture → Qualify → Schedule → Collect → Deliver. Zero manual data entry required." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 + i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  className="space-y-2 group"
                >
                  <h5 className="font-display font-bold text-foreground group-hover:text-gradient transition-all duration-300">{item.title}</h5>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </FramedCard>
      </div>
    </div>
  );
};

export default About;
