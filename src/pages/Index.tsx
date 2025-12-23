import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import SpaceBackground from "@/components/SpaceBackground";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";
import SocialIcons from "@/components/SocialIcons";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative cursor-none">
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <CustomCursor />
          <SpaceBackground />
          <Header />
          <SocialIcons />
          
          <main className="relative z-10 h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
            <section id="hero" className="min-h-screen snap-start snap-always flex items-center justify-center">
              <Hero />
            </section>
            
            <section id="about" className="min-h-screen snap-start snap-always">
              <About />
            </section>
            
            <section id="work" className="min-h-screen snap-start snap-always">
              <Projects />
            </section>
            
            <section id="contact" className="min-h-screen snap-start snap-always">
              <Contact />
            </section>
            
            <section className="snap-start">
              <Footer />
            </section>
          </main>
        </>
      )}
    </div>
  );
};

export default Index;
