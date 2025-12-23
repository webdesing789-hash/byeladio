import { motion } from 'framer-motion';

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
              className="px-4 py-2 glass rounded-full text-sm text-foreground hover:bg-primary/20 transition-colors cursor-default"
            >
              {tool}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="glass rounded-2xl p-8 mb-12"
        >
          <h3 className="font-display text-2xl font-bold mb-4">
            Ready to Automate Your Business?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We don't take on every client. We prioritize businesses where automation will make a real impact. If your business handles repetitive customer inquiries, processes orders, or books appointments—we can help.
          </p>
          <p className="text-sm text-muted-foreground">
            Ask any question directly to our team | Response within 24 hours | No sales pressure
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <a
            href="https://wa.link/gpyd1p"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            data-cursor-hover
          >
            WhatsApp
          </a>
          <a
            href="https://www.linkedin.com/company/orbita-ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            data-cursor-hover
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/orbit.bot/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            data-cursor-hover
          >
            Instagram
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
