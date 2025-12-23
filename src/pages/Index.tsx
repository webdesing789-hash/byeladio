import SpaceBackground from "@/components/SpaceBackground";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <SpaceBackground />
      
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-gradient-cosmic">
            Need Some Space?
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore the infinite cosmos through an immersive 3D experience.
            Drag to rotate, discover the universe.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
