import { Cloud, Terminal, Server } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute inset-0 bg-radial-glow" />
      
      {/* Floating Icons */}
      <div className="absolute top-1/4 left-1/4 animate-float opacity-20">
        <Cloud className="w-16 h-16 text-primary" />
      </div>
      <div className="absolute top-1/3 right-1/4 animate-float opacity-20" style={{ animationDelay: '2s' }}>
        <Terminal className="w-12 h-12 text-primary" />
      </div>
      <div className="absolute bottom-1/3 left-1/3 animate-float opacity-20" style={{ animationDelay: '4s' }}>
        <Server className="w-14 h-14 text-primary" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </div>

          {/* Main Heading */}
          <h1 className="animate-fade-up-delay-1 text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="text-gradient animate-typing">Manish Khadka</span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-up-delay-2 text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Cloud Engineer & DevOps Enthusiast crafting scalable infrastructure solutions
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              Get in Touch
            </a>
            <a
              href="#skills"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-border bg-secondary/50 font-semibold transition-all duration-300 hover:bg-secondary hover:border-primary/50"
            >
              View Skills
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
