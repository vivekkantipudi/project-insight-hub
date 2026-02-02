import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold font-display gradient-text mb-1">
              K Vivek Vardhan
            </p>
            <p className="text-sm text-muted-foreground">
              Cloud Engineer & Full-Stack Developer
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="mailto:vivekkantipudi09@gmail.com" 
              className="p-2 rounded-full glass-card hover:bg-primary/20 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-muted-foreground hover:text-foreground" />
            </a>
            <a 
              href="https://www.linkedin.com/in/vivek-vardhan-k-710b61290/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full glass-card hover:bg-primary/20 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-foreground" />
            </a>
            <a 
              href="https://github.com/vivekkantipudi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full glass-card hover:bg-primary/20 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-muted-foreground hover:text-foreground" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            © {new Date().getFullYear()} K Vivek Vardhan. Built with
            <Heart className="w-4 h-4 text-accent inline" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
