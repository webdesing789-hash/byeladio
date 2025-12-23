import { motion } from 'framer-motion';
import { Magnetic } from './SmoothScroll';

const pricing = [
  {
    name: "Simon",
    subtitle: "Social Media AI Assistant",
    description: "Perfect for E-commerce, Retail, Service Businesses",
    price: "From $180/month",
    features: [
      "Automated Instagram DM responses",
      "Story mention tracking and replies",
      "Comment management across posts",
      "Lead qualification and handoff",
      "Integration with your product catalog"
    ],
    popular: false
  },
  {
    name: "Sofía",
    subtitle: "Orders & Appointment Automation",
    description: "Perfect for Restaurants, Salons, Medical Practices",
    price: "From $250/month",
    features: [
      "24/7 WhatsApp order processing",
      "Automated appointment scheduling",
      "Payment verification (Stripe, PayPal)",
      "Calendar integration (Google, Outlook)",
      "Booking confirmations and reminders",
      "No-show reduction through follow-ups"
    ],
    popular: true
  },
  {
    name: "Bertor",
    subtitle: "Complete Business Manager",
    description: "Perfect for Growing Businesses, Multi-Channel Operations",
    price: "From $450/month",
    features: [
      "Multi-channel management (WhatsApp, Email, Web, SMS)",
      "Automated payment collection and tracking",
      "Document processing (invoices, contracts)",
      "Advanced CRM integration",
      "Custom workflow automation with n8n",
      "Real-time business intelligence dashboard"
    ],
    popular: false
  }
];

const additionalServices = [
  { name: "Professional Logo Design", price: "Consultation", description: "Adobe Photoshop, After Effects, Multiple revisions" },
  { name: "Web Development", price: "Consultation", description: "Custom responsive design, SEO optimization, E-commerce" },
  { name: "Social Media & Content", price: "From $200/month", description: "Viral content, Video editing, Growth optimization" },
];

const Projects = () => {
  return (
    <div id="pricing" className="py-20 px-6 flex items-center justify-center min-h-screen">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Custom AI Solutions for Every Business
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-center mb-16"
        >
          Choose the perfect AI assistant for your business type
        </motion.p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {pricing.map((plan, i) => (
            <Magnetic key={i} strength={0.03}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative glass rounded-2xl p-6 hover:glow-primary transition-all duration-500 h-full ${plan.popular ? 'border-primary/50' : ''}`}
                data-cursor-hover
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary rounded-full text-xs font-bold text-primary-foreground">
                    Popular
                  </div>
                )}
                
                <h3 className="font-display text-2xl font-bold text-gradient mb-1">{plan.name}</h3>
                <p className="text-sm font-medium text-foreground mb-1">{plan.subtitle}</p>
                <p className="text-xs text-muted-foreground mb-4">{plan.description}</p>
                
                <div className="font-display text-xl font-bold text-foreground mb-6">
                  {plan.price}
                </div>
                
                <ul className="space-y-2">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-0.5">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Magnetic>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {additionalServices.map((service, i) => (
            <div key={i} className="glass rounded-xl p-4 text-center">
              <h4 className="font-display font-bold text-foreground mb-1">{service.name}</h4>
              <p className="text-primary font-medium text-sm mb-2">{service.price}</p>
              <p className="text-muted-foreground text-xs">{service.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
