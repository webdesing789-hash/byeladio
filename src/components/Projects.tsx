import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

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
    popular: false,
    gradient: "from-blue-500/20 to-cyan-500/20",
    borderColor: "hover:border-blue-500/50"
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
    popular: true,
    gradient: "from-primary/30 to-purple-500/20",
    borderColor: "border-primary/50"
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
    popular: false,
    gradient: "from-orange-500/20 to-pink-500/20",
    borderColor: "hover:border-orange-500/50"
  }
];

const PricingCard = ({ plan, index }: { plan: typeof pricing[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 50, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 0.9, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, y, scale, rotateX }}
      className="perspective-1000"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ 
          delay: index * 0.2, 
          duration: 0.6,
          ease: [0.25, 0.1, 0.25, 1]
        }}
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.3 }
        }}
        className={`relative group glass rounded-2xl p-8 h-full border-2 border-transparent ${plan.borderColor} transition-all duration-500`}
        data-cursor-hover
      >
        {/* Animated gradient border on hover */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
        
        {/* Glow effect */}
        <motion.div 
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-20"
          style={{
            boxShadow: plan.popular 
              ? '0 0 60px hsl(260 80% 60% / 0.4), 0 0 100px hsl(260 80% 60% / 0.2)' 
              : '0 0 40px hsl(260 80% 60% / 0.2)'
          }}
        />

        {plan.popular && (
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
            className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-primary rounded-full text-xs font-bold text-primary-foreground shadow-lg"
            style={{
              boxShadow: '0 0 20px hsl(260 80% 60% / 0.5)'
            }}
          >
            Popular
          </motion.div>
        )}
        
        <motion.h3 
          className="font-display text-3xl font-bold text-gradient mb-2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 + 0.1 }}
        >
          {plan.name}
        </motion.h3>
        
        <p className="text-sm font-medium text-foreground mb-1">{plan.subtitle}</p>
        <p className="text-xs text-muted-foreground mb-6">{plan.description}</p>
        
        <motion.div 
          className="font-display text-2xl font-bold text-foreground mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 + 0.2 }}
        >
          {plan.price}
        </motion.div>
        
        <ul className="space-y-3">
          {plan.features.map((feature, j) => (
            <motion.li 
              key={j} 
              className="flex items-start gap-3 text-sm text-muted-foreground"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 + 0.1 + j * 0.05 }}
            >
              <motion.span 
                className="text-primary mt-0.5 flex-shrink-0"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.15 + j * 0.05, type: "spring" }}
              >
                ✓
              </motion.span>
              <span className="group-hover:text-foreground transition-colors duration-300">
                {feature}
              </span>
            </motion.li>
          ))}
        </ul>

        {/* Bottom accent line */}
        <motion.div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "60%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 + 0.4, duration: 0.6 }}
        />
      </motion.div>
    </motion.div>
  );
};

const additionalServices = [
  { name: "Professional Logo Design", price: "Consultation", description: "Adobe Photoshop, After Effects, Multiple revisions" },
  { name: "Web Development", price: "Consultation", description: "Custom responsive design, SEO optimization, E-commerce" },
  { name: "Social Media & Content", price: "From $200/month", description: "Viral content, Video editing, Growth optimization" },
];

const Projects = () => {
  return (
    <div id="pricing" className="py-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Custom AI Solutions for Every Business
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Choose the perfect AI assistant for your business type
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricing.map((plan, i) => (
            <PricingCard key={i} plan={plan} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {additionalServices.map((service, i) => (
            <motion.div 
              key={i} 
              className="glass rounded-xl p-6 text-center border border-transparent hover:border-primary/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.1 }}
              whileHover={{ y: -5 }}
              data-cursor-hover
            >
              <h4 className="font-display font-bold text-foreground mb-2">{service.name}</h4>
              <p className="text-primary font-medium text-sm mb-2">{service.price}</p>
              <p className="text-muted-foreground text-xs">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
