import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

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
    borderGradient: "from-blue-500 to-cyan-500"
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
    borderGradient: "from-primary to-purple-500"
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
    borderGradient: "from-orange-500 to-pink-500"
  }
];

const additionalServices = [
  { name: "Professional Logo Design", price: "Consultation", description: "Adobe Photoshop, After Effects, Multiple revisions" },
  { name: "Web Development", price: "Consultation", description: "Custom responsive design, SEO optimization, E-commerce" },
  { name: "Social Media & Content", price: "From $200/month", description: "Viral content, Video editing, Growth optimization" },
];

const PricingCard = ({ plan, index }: { plan: typeof pricing[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateY: 15 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        delay: index * 0.15, 
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      whileHover={{ 
        scale: 1.03,
        y: -10,
        transition: { duration: 0.3 }
      }}
      className="relative group flex-shrink-0 w-[350px] md:w-[400px] perspective-1000"
    >
      {/* Animated border gradient */}
      <div className={`absolute -inset-[2px] rounded-2xl bg-gradient-to-br ${plan.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
      <div className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-br ${plan.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      <div className={`relative glass rounded-2xl p-8 h-full border border-white/10 group-hover:border-transparent transition-all duration-500`}>
        {/* Background gradient */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${plan.gradient} opacity-30 group-hover:opacity-60 transition-opacity duration-500`} />
        
        {/* Glow effect */}
        <motion.div 
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
          style={{
            boxShadow: plan.popular 
              ? '0 0 80px hsl(260 80% 60% / 0.5), 0 0 120px hsl(260 80% 60% / 0.3)' 
              : '0 0 60px hsl(var(--primary) / 0.3)'
          }}
        />

        <div className="relative z-10">
          {plan.popular && (
            <motion.div 
              initial={{ scale: 0, rotate: -12 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + 0.3, type: "spring", bounce: 0.5 }}
              className="absolute -top-12 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-primary to-purple-500 rounded-full text-sm font-bold text-primary-foreground shadow-lg"
              style={{
                boxShadow: '0 0 30px hsl(260 80% 60% / 0.6)'
              }}
            >
              ⭐ Most Popular
            </motion.div>
          )}
          
          <motion.h3 
            className="font-display text-4xl font-bold text-gradient mb-3"
          >
            {plan.name}
          </motion.h3>
          
          <p className="text-base font-medium text-foreground mb-2">{plan.subtitle}</p>
          <p className="text-sm text-muted-foreground mb-8">{plan.description}</p>
          
          <div className="font-display text-3xl font-bold text-foreground mb-8">
            {plan.price}
          </div>
          
          <ul className="space-y-4">
            {plan.features.map((feature, j) => (
              <motion.li 
                key={j} 
                className="flex items-start gap-3 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + j * 0.05 }}
              >
                <span className="text-primary mt-0.5 flex-shrink-0 text-lg">✓</span>
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Bottom accent line */}
        <motion.div 
          className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${plan.borderGradient} rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 + 0.5, duration: 0.8 }}
        />
      </div>
    </motion.div>
  );
};

// Hook para manejar scroll horizontal con detección de bordes
const useHorizontalScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    let startX = 0;
    let startY = 0;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = element;
      setIsAtStart(scrollLeft <= 5);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 5);
    };

    const onTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].pageX;
      startY = e.touches[0].pageY;
    };

    const onTouchMove = (e: TouchEvent) => {
      const currentX = e.touches[0].pageX;
      const currentY = e.touches[0].pageY;
      const diffX = Math.abs(currentX - startX);
      const diffY = Math.abs(currentY - startY);

      const { scrollLeft, scrollWidth, clientWidth } = element;
      const isAtStartEdge = scrollLeft <= 0;
      const isAtEndEdge = scrollLeft + clientWidth >= scrollWidth;

      // Solo prevenir scroll vertical si está scrolleando horizontalmente Y NO está en los extremos
      if (diffX > diffY && !isAtStartEdge && !isAtEndEdge) {
        e.preventDefault();
      }
    };

    element.addEventListener('scroll', handleScroll, { passive: true });
    element.addEventListener('touchstart', onTouchStart, { passive: true });
    element.addEventListener('touchmove', onTouchMove, { passive: false });

    handleScroll();

    return () => {
      element.removeEventListener('scroll', handleScroll);
      element.removeEventListener('touchstart', onTouchStart);
      element.removeEventListener('touchmove', onTouchMove);
    };
  }, []);

  return { scrollRef, isAtStart, isAtEnd };
};

const Projects = () => {
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const [maxX, setMaxX] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollAttempts = useRef(0);
  const lastScrollTime = useRef(0);
  
  // Hook para scroll horizontal móvil
  const { scrollRef: mobileScrollRef, isAtStart, isAtEnd } = useHorizontalScroll();

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    
    const update = () => {
      const track = horizontalRef.current;
      const viewportEl = scrollAreaRef.current;
      if (!track || !viewportEl) return;

      const viewportWidth = viewportEl.clientWidth;
      const totalWidth = track.scrollWidth;
      const max = Math.min(0, viewportWidth - totalWidth);
      setMaxX(max);
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [isMobile]);

  const xRaw = useMotionValue(0);
  const x = useSpring(xRaw, { damping: 30, stiffness: 240, mass: 0.8 });

  useEffect(() => {
    if (isMobile) return;
    
    const el = scrollAreaRef.current;
    if (!el) return;

    const updateX = () => {
      const maxScroll = el.scrollHeight - el.clientHeight;
      const p = maxScroll > 0 ? el.scrollTop / maxScroll : 0;
      xRaw.set(p * maxX);
    };

    updateX();
    el.addEventListener('scroll', updateX, { passive: true });
    return () => el.removeEventListener('scroll', updateX);
  }, [maxX, xRaw, isMobile]);

  // Handle wheel events for desktop
  useEffect(() => {
    if (isMobile) return;
    
    const el = scrollAreaRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      const maxScroll = el.scrollHeight - el.clientHeight;
      const atTop = el.scrollTop <= 2;
      const atBottom = el.scrollTop >= maxScroll - 2;

      if (now - lastScrollTime.current > 300) {
        scrollAttempts.current = 0;
      }
      lastScrollTime.current = now;

      if (e.deltaY > 0 && atBottom) {
        scrollAttempts.current++;
        if (scrollAttempts.current >= 2) {
          scrollAttempts.current = 0;
          const contactSection = document.getElementById('contact');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
        return;
      }

      if (e.deltaY < 0 && atTop) {
        scrollAttempts.current++;
        if (scrollAttempts.current >= 2) {
          scrollAttempts.current = 0;
          const aboutSection = document.getElementById('about');
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
        return;
      }

      scrollAttempts.current = 0;
    };

    el.addEventListener('wheel', handleWheel, { passive: true });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [isMobile]);

  // Mobile layout
  if (isMobile) {
    return (
      <section className="w-full py-16 px-4" id="pricing" style={{ overscrollBehavior: 'auto' }}>
        {/* Header */}
        <div className="mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-bold mb-3"
          >
            Custom AI Solutions for Every Business
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-base"
          >
            Swipe to explore our AI assistants
          </motion.p>
        </div>

        {/* Horizontal scrolling cards con detección de bordes */}
        <div className="relative">
          <div 
            ref={mobileScrollRef}
            className="flex gap-4 pb-4 overflow-x-auto overflow-y-hidden snap-x snap-mandatory"
            style={{ 
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              overscrollBehaviorX: 'contain',
              overscrollBehaviorY: 'auto',
              touchAction: 'pan-x pan-y'
            }}
          >
            {pricing.map((plan, i) => (
              <div key={i} className="snap-start flex-shrink-0 w-[85vw] max-w-[350px] first:ml-0">
                <PricingCard plan={plan} index={i} />
              </div>
            ))}
            {/* Spacer al final */}
            <div className="flex-shrink-0 w-4" aria-hidden="true" />
          </div>
          
          {/* Indicadores de scroll */}
          {!isAtStart && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-full bg-gradient-to-r from-background/80 to-transparent pointer-events-none" />
          )}
          {!isAtEnd && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-full bg-gradient-to-l from-background/80 to-transparent pointer-events-none" />
          )}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {pricing.map((_, i) => (
            <div 
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === 0 && isAtStart ? 'bg-primary w-4' : 
                i === pricing.length - 1 && isAtEnd ? 'bg-primary w-4' :
                'bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>

        {/* Additional services */}
        <div className="mt-8">
          <h3 className="font-display text-xl font-bold text-gradient mb-4">
            Additional Services
          </h3>
          <div className="flex flex-col gap-3">
            {additionalServices.map((service, i) => (
              <div 
                key={i} 
                className="glass rounded-xl p-4 border border-white/10"
              >
                <h4 className="font-display font-bold text-foreground mb-1">{service.name}</h4>
                <p className="text-primary font-medium text-sm mb-1">{service.price}</p>
                <p className="text-muted-foreground text-xs">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Desktop layout - horizontal parallax scroll
  return (
    <div className="h-screen w-full" id="pricing">
      <div 
        ref={scrollAreaRef} 
        className="h-full w-full overflow-y-auto scroll-smooth overscroll-contain"
      >
        <div ref={containerRef} className="relative h-[300vh]">
          <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
            {/* Header */}
            <div className="px-6 mb-8 md:mb-12">
              <div className="max-w-7xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
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
                    className="text-muted-foreground text-lg max-w-xl"
                  >
                    Choose the perfect AI assistant for your business type — scroll to explore
                  </motion.p>
                </motion.div>
              </div>
            </div>

            {/* Horizontal scrolling cards */}
            <motion.div 
              ref={horizontalRef}
              style={{ x }}
              className="flex gap-8 px-6 md:px-12 pb-8"
            >
              {pricing.map((plan, i) => (
                <PricingCard key={i} plan={plan} index={i} />
              ))}
              
              {/* Additional services section inline */}
              <div className="flex-shrink-0 flex flex-col gap-4 w-[350px] md:w-[400px] justify-center">
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="font-display text-2xl font-bold text-gradient mb-2"
                >
                  Additional Services
                </motion.h3>
                {additionalServices.map((service, i) => (
                  <motion.div 
                    key={i} 
                    className="glass rounded-xl p-5 border border-white/10 hover:border-primary/50 transition-all duration-300 group"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <h4 className="font-display font-bold text-foreground mb-1 group-hover:text-gradient transition-all duration-300">{service.name}</h4>
                    <p className="text-primary font-medium text-sm mb-1">{service.price}</p>
                    <p className="text-muted-foreground text-xs">{service.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="flex-shrink-0 w-[30vw]" aria-hidden="true" />
            </motion.div>

            {/* Scroll indicator */}
            <motion.div 
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
              >
                <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
