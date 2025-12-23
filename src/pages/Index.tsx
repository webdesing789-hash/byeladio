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
import SmoothScroll from "@/components/SmoothScroll";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden cursor-none">
      <CustomCursor />
      <SpaceBackground />
      <Header />
      
      <SmoothScroll>
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </SmoothScroll>
      
      <Footer />
    </div>
  );
};

export default Index;
