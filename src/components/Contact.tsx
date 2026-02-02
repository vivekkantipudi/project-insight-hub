import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "vivekkantipudi09@gmail.com",
      href: "mailto:vivekkantipudi09@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7337009824",
      href: "tel:+917337009824"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "VivekVardhanK",
      href: "https://www.linkedin.com/in/vivek-vardhan-k-710b61290/"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "vivekkantipudi",
      href: "https://github.com/vivekkantipudi"
    }
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(204,100%,28%,0.1),transparent_50%)]" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Let's connect and discuss opportunities
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 text-center">
            <div className="mb-8">
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                I'm currently open to new opportunities in Cloud Engineering and Software Development. 
                Feel free to reach out if you'd like to collaborate or just say hello!
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="glass-card p-4 group hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-xs text-muted-foreground">{info.label}</span>
                    <span className="text-sm text-foreground font-medium truncate max-w-full">
                      {info.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <Button variant="gradient" size="xl" asChild>
              <a href="mailto:vivekkantipudi09@gmail.com">
                <Send className="w-5 h-5" />
                Send Me an Email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
