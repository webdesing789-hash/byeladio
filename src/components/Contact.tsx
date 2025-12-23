import { motion } from 'framer-motion';
import FramedCard from './FramedCard';
import FramedButton from './FramedButton';

const integrations = [
  "WhatsApp", "Stripe", "Google Calendar", "Shopify", "Instagram", 
  "Facebook", "HubSpot", "Salesforce", "Slack", "Telegram",
  "WordPress", "WooCommerce", "PayPal", "Notion", "Airtable", "Google Sheets"
];

const Contact = () => {
  return (
    <div id="integrations" className="py-20 px-6 flex items-center justify-center min-h-screen">
      <div className="max-w-5xl mx-auto text-center w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display text-4xl md:text-5xl font-bold mb-4"
        >
          Seamless Integration with 400+ Tools
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto"
        >
          Orbita AI connects with your existing tech stack in days, not months. Built on n8n workflow automation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {integrations.map((tool, i) => (
            <motion.span
              key={tool}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.03, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="group relative px-4 py-2 rounded-full text-sm text-foreground cursor-default"
            >
              {/* Frame background */}
              <div className="absolute inset-0 glass-strong rounded-full border border-border/50 transition-all duration-300 group-hover:border-foreground/40" />
              {/* Glow on hover */}
              <div className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-30 blur-md bg-primary transition-all duration-300" />
              <span className="relative z-10">{tool}</span>
            </motion.span>
          ))}
        </motion.div>

        <FramedCard delay={0.4} glowColor="hsl(260 80% 65%)" className="mb-12">
          <div className="p-8">
            <h3 className="font-display text-2xl font-bold mb-4">
              Ready to Automate Your Business?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We don't take on every client. We prioritize businesses where automation will make a real impact. If your business handles repetitive customer inquiries, processes orders, or books appointments—we can help.
            </p>
            <p className="text-sm text-muted-foreground">
              Ask any question directly to our team | Response within 24 hours | No sales pressure
            </p>
          </div>
        </FramedCard>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <FramedButton 
            href="https://wa.link/gpyd1p"
            external
            glowColor="hsl(142 70% 45%)"
          >
            WhatsApp
          </FramedButton>
          <FramedButton 
            href="https://www.linkedin.com/company/orbita-ai/"
            external
            glowColor="hsl(210 80% 55%)"
          >
            LinkedIn
          </FramedButton>
          <FramedButton 
            href="https://www.instagram.com/orbit.bot/"
            external
            glowColor="hsl(330 80% 55%)"
          >
            Instagram
          </FramedButton>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
