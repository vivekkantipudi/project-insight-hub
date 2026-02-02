import { User, Target, Zap, Code2 } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Problem Solver",
      description: "200+ problems solved on LeetCode with strong DSA foundation"
    },
    {
      icon: Zap,
      title: "Cloud Enthusiast",
      description: "Hands-on experience with AWS serverless architecture"
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Committed to delivering measurable outcomes"
    },
    {
      icon: User,
      title: "Team Player",
      description: "Effective communication and collaboration skills"
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,hsl(204,100%,28%,0.08),transparent_50%)]" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Passionate about building scalable solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a <span className="text-foreground font-medium">B.Tech Computer Science student</span> with 
              a strong foundation in Data Structures, Algorithms, DBMS, and Operating Systems. My journey in 
              tech has been driven by curiosity and a passion for solving complex problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With hands-on experience in <span className="text-foreground font-medium">AWS cloud services</span>, 
              I've built serverless applications involving Lambda, S3, DynamoDB, and more. I thrive under pressure, 
              meet tight deadlines, and communicate effectively.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently seeking opportunities in <span className="text-foreground font-medium">Cloud Engineering</span> and 
              <span className="text-foreground font-medium"> Software Development</span> where I can contribute to 
              innovative projects and continue growing as a developer.
            </p>
          </div>

          {/* Highlight Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="glass-card p-6 glow-effect group hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 font-display">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
