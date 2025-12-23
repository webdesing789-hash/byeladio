import { useState, useRef, createContext, useContext } from 'react';
import { AnimatePresence } from 'framer-motion';
import SpaceBackground from "@/components/SpaceBackground";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";

// Context to share scroll container ref
export const ScrollContainerContext = createContext<React.RefObject<HTMLElement> | null>(null);
export const useScrollContainer = () => useContext(ScrollContainerContext);

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const mainRef = useRef<HTMLElement>(null);

  return (
    <div className="relative cursor-none">
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <ScrollContainerContext.Provider value={mainRef}>
          <CustomCursor />
          <SpaceBackground />
          <Header />
          
          <main 
            ref={mainRef}
            className="relative z-10 h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth"
          >
            <section id="hero" className="min-h-screen snap-start snap-always flex items-center justify-center">
              <Hero />
            </section>
            
            <section id="about" className="min-h-screen snap-start snap-always">
              <About />
            </section>
            
            <section id="skills" className="min-h-screen snap-start snap-always">
              <Skills />
            </section>
            
            <section id="experience" className="min-h-screen snap-start snap-always">
              <Experience />
            </section>
            
            <section id="work" className="snap-start snap-always">
              <Projects />
            </section>
            
            <section id="contact" className="min-h-screen snap-start snap-always">
              <Contact />
            </section>
            
            <section className="snap-start">
              <Footer />
            </section>
          </main>
        </ScrollContainerContext.Provider>
      )}
    </div>
  );
};

export default Index;
