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

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-screen cursor-none">
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
          
          <main className="relative z-10">
            <section id="hero" className="min-h-screen flex items-center justify-center">
              <Hero />
            </section>
            
            <section id="about">
              <About />
            </section>
            
            <section id="skills">
              <Skills />
            </section>
            
            <section id="experience">
              <Experience />
            </section>
            
            <section id="work">
              <Projects />
            </section>
            
            <section id="contact">
              <Contact />
            </section>
            
            <Footer />
          </main>
        </>
      )}
    </div>
  );
};

export default Index;
