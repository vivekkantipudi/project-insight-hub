import { Award, ExternalLink, Calendar } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Red Hat Certified System Administrator (RHCSA)",
      issuer: "Red Hat",
      year: "2025",
      url: "https://www.credly.com/badges/3cffd95e-efeb-4f9b-b464-bc2658ba9969/public_url",
      featured: true
    },
    {
      title: "Java Foundations Certified Associate",
      issuer: "Oracle",
      year: "2025",
      url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=4B72812FE6545AEDFAEC82B3B18EE28C4120C0BB0E42B9ABCA247DBF3C3A6E77",
      featured: true
    },
    {
      title: "Programming Essentials in Python",
      issuer: "Cisco NetAcad",
      year: "2024",
      url: "https://www.credly.com/badges/c6dba818-e410-4188-9276-896c11448ed8/public_url",
      featured: false
    },
    {
      title: "HTML & CSS Certification",
      issuer: "Certiport - Web Foundations Series",
      year: "2024",
      url: "https://www.credly.com/badges/2789d722-0284-4034-a5e5-f325b0f7ebb1/public_url",
      featured: false
    }
  ];

  return (
    <section id="certifications" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(204,100%,28%,0.08),transparent_50%)]" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Professional certifications and credentials
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`glass-card p-6 group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 ${
                cert.featured ? 'gradient-border' : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  cert.featured ? 'bg-primary/20' : 'bg-secondary'
                }`}>
                  <Award className={`w-6 h-6 ${cert.featured ? 'text-accent' : 'text-muted-foreground'}`} />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-foreground font-display leading-tight">
                      {cert.title}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </div>
                  
                  <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                  
                  <div className="flex items-center gap-1 mt-3 text-sm text-accent">
                    <Calendar className="w-4 h-4" />
                    {cert.year}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
