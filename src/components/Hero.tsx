import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, Download, ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(204,100%,28%,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(187,100%,42%,0.1),transparent_50%)]" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(217,32%,20%,0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(217,32%,20%,0.3)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/30">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Open to opportunities</span>
          </div>

          {/* Name & Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight">
              <span className="text-foreground">K Vivek</span>
              <span className="gradient-text"> Vardhan</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              <span className="text-foreground font-medium">Cloud Engineer</span> & 
              <span className="text-foreground font-medium"> Full-Stack Developer</span>
              <br />
              <span className="text-lg">B.Tech CSE Student | AWS Enthusiast</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button 
              variant="gradient" 
              size="lg"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </Button>
            <Button 
              variant="gradient-outline" 
              size="lg"
              asChild
            >
              <a href="https://github.com/vivekkantipudi" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                View GitHub
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-6">
            <a 
              href="mailto:vivekkantipudi09@gmail.com" 
              className="p-3 rounded-full glass-card hover:bg-primary/20 transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-muted-foreground hover:text-foreground" />
            </a>
            <a 
              href="tel:+917337009824" 
              className="p-3 rounded-full glass-card hover:bg-primary/20 transition-all duration-300 hover:scale-110"
              aria-label="Phone"
            >
              <Phone className="w-5 h-5 text-muted-foreground hover:text-foreground" />
            </a>
            <a 
              href="https://www.linkedin.com/in/vivek-vardhan-k-710b61290/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover:bg-primary/20 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-foreground" />
            </a>
            <a 
              href="https://github.com/vivekkantipudi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover:bg-primary/20 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-muted-foreground hover:text-foreground" />
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 pt-8">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold gradient-text">200+</p>
              <p className="text-sm text-muted-foreground">LeetCode Problems</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold gradient-text">8.57</p>
              <p className="text-sm text-muted-foreground">CGPA</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold gradient-text">4+</p>
              <p className="text-sm text-muted-foreground">Certifications</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
          aria-label="Scroll to about section"
        >
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
