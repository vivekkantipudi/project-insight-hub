import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Cloud, Brain, Zap } from "lucide-react";

const Projects = () => {
  const project = {
    title: "HireFusion",
    subtitle: "Resume and Interview Analysis Platform",
    description: "An AI-powered recruitment platform that automates resume parsing and interview analysis using AWS serverless architecture. Reduced manual recruiter effort by 40%.",
    features: [
      "Automated resume parsing using AWS Textract and Comprehend",
      "Interview video analysis with Rekognition and Transcribe",
      "S3 Event Notifications and SNS for automated workflows",
      "DynamoDB storage with API Gateway exposure",
      "Real-time sentiment and facial analysis"
    ],
    techStack: [
      "AWS Lambda", "S3", "Textract", "Rekognition", 
      "Transcribe", "Comprehend", "DynamoDB", 
      "API Gateway", "CloudWatch", "Python", "JavaScript"
    ],
    github: "https://github.com/vivekkantipudi/HireFusionAI",
    type: "Team Project"
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(187,100%,42%,0.08),transparent_50%)]" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Featured <span className="gradient-text">Project</span>
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Building innovative solutions with cloud technologies
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="glass-card p-8 md:p-10 glow-effect hover:border-primary/50 transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left: Info */}
              <div className="space-y-6">
                <div>
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-accent text-xs font-medium">
                    {project.type}
                  </span>
                </div>
                
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-2 font-display">
                    {project.title}
                  </h3>
                  <p className="text-xl text-muted-foreground">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex gap-4">
                  <Button variant="gradient" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5" />
                      View on GitHub
                    </a>
                  </Button>
                </div>
              </div>

              {/* Right: Features & Tech */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4 font-display flex items-center gap-2">
                    <Zap className="w-5 h-5 text-accent" />
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4 font-display flex items-center gap-2">
                    <Cloud className="w-5 h-5 text-accent" />
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1.5 rounded-lg bg-secondary text-xs text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
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
      </div>
    </section>
  );
};

export default Projects;
