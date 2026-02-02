import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(204,100%,28%,0.06),transparent_60%)]" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Professional journey and contributions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20 md:-translate-x-1/2" />

            {/* Experience Card */}
            <div className="relative pl-8 md:pl-0 md:pr-8 md:w-1/2 mb-8">
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-auto md:right-0 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50 -translate-x-1/2 md:translate-x-1/2 top-6" />
              
              <div className="glass-card p-6 md:p-8 glow-effect hover:border-primary/50 transition-all duration-300 md:ml-8">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-accent text-xs font-medium">
                    Cloud Intern
                  </span>
                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    May 2025 – July 2025
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2 font-display">
                  Technical Hub Private Limited
                </h3>
                <p className="text-muted-foreground mb-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Aditya Group of Engineering Colleges
                </p>

                <ul className="space-y-3">
                  {[
                    "Contributed to cloud-based application development using AWS (EC2, S3, DynamoDB, CloudWatch)",
                    "Automated deployment workflows, reducing setup time by 30% and improving release consistency",
                    "Worked on real-time projects including a municipal issue reporting system hosted on AWS",
                    "Enhanced hands-on expertise in infrastructure automation and monitoring"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-6">
                  {["AWS", "EC2", "S3", "DynamoDB", "CloudWatch", "Python"].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 rounded-full bg-secondary text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
