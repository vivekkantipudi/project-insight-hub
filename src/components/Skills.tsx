import { useState } from "react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All" },
    { id: "languages", label: "Languages" },
    { id: "cloud", label: "Cloud & Tools" },
    { id: "core", label: "Core Concepts" },
  ];

  const skills = [
    { name: "Python", level: 85, category: "languages" },
    { name: "Java", level: 80, category: "languages" },
    { name: "C++", level: 75, category: "languages" },
    { name: "C", level: 75, category: "languages" },
    { name: "HTML/CSS", level: 85, category: "languages" },
    { name: "JavaScript", level: 70, category: "languages" },
    { name: "AWS", level: 80, category: "cloud" },
    { name: "Git & GitHub", level: 85, category: "cloud" },
    { name: "Lambda", level: 75, category: "cloud" },
    { name: "S3 & DynamoDB", level: 80, category: "cloud" },
    { name: "Data Structures", level: 85, category: "core" },
    { name: "Algorithms", level: 85, category: "core" },
    { name: "DBMS & SQL", level: 80, category: "core" },
    { name: "Operating Systems", level: 75, category: "core" },
    { name: "SDLC", level: 70, category: "core" },
  ];

  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,hsl(187,100%,42%,0.08),transparent_50%)]" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "glass-card text-muted-foreground hover:text-foreground hover:border-primary/50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.name}
              className="glass-card p-5 group hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-medium text-foreground">{skill.name}</span>
                <span className="text-sm text-accent font-semibold">{skill.level}%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ 
                    width: `${skill.level}%`,
                    background: 'linear-gradient(90deg, hsl(204, 100%, 28%) 0%, hsl(187, 100%, 42%) 100%)'
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-6 font-display">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Communication", "Teamwork", "Critical Thinking", "Problem Solving", "Adaptability", "Time Management"].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 rounded-full glass-card text-muted-foreground text-sm hover:text-foreground hover:border-primary/50 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
