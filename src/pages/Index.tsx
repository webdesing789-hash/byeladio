import { useState } from 'react';
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
import { ScrollContainer, ScrollSection } from "@/components/SmoothScroll";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-screen overflow-hidden cursor-none">
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
          
          <ScrollContainer>
            <ScrollSection id="hero">
              <Hero />
            </ScrollSection>
            
            <ScrollSection id="about">
              <About />
            </ScrollSection>
            
            <ScrollSection id="skills">
              <Skills />
            </ScrollSection>
            
            <ScrollSection id="experience">
              <Experience />
            </ScrollSection>
            
            <ScrollSection id="work">
              <Projects />
            </ScrollSection>
            
            <ScrollSection id="contact">
              <Contact />
            </ScrollSection>
            
            <section className="snap-start">
              <Footer />
            </section>
          </ScrollContainer>
        </>
      )}
    </div>
  );
};

export default Index;
