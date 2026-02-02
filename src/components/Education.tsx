import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      institution: "Aditya College Of Engineering And Technology",
      location: "Surampalem",
      degree: "B.Tech in Computer Science and Engineering",
      period: "2023 – 2027",
      grade: "CGPA: 8.57",
      current: true
    },
    {
      institution: "Narayana Junior College",
      location: "Kakinada",
      degree: "MPC - Intermediate Education",
      period: "2021 – 2023",
      grade: "GPA: 9.18",
      current: false
    }
  ];

  return (
    <section id="education" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(204,100%,28%,0.08),transparent_50%)]" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Academic background and achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div 
              key={index}
              className={`glass-card p-6 md:p-8 glow-effect hover:border-primary/50 transition-all duration-300 ${
                edu.current ? 'gradient-border' : ''
              }`}
            >
              {edu.current && (
                <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium mb-4">
                  Currently Pursuing
                </span>
              )}
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-accent" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-1 font-display">
                    {edu.institution}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {edu.location}
                  </p>
                  
                  <p className="text-foreground font-medium mb-2">
                    {edu.degree}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1 text-accent font-semibold">
                      <Award className="w-4 h-4" />
                      {edu.grade}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
