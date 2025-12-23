import FooterSatellite from './FooterSatellite';

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border relative overflow-visible">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-display font-bold text-gradient">Orbita AI</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Orbita AI. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground">
          100% Confidential — Your data is protected under strict NDA
        </p>
      </div>
      
      {/* Animated 3D Satellite */}
      <FooterSatellite />
    </footer>
  );
};

export default Footer;
