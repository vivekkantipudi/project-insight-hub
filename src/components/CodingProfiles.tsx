import { ExternalLink, Code, Trophy, Star } from "lucide-react";

const CodingProfiles = () => {
  const profiles = [
    {
      name: "LeetCode",
      stats: "200+ Problems Solved",
      description: "Arrays, Dynamic Programming, Graph Theory",
      highlight: "Active Contest Participant",
      url: "https://leetcode.com/u/vivekkantipudi/",
      color: "from-amber-500 to-orange-500"
    },
    {
      name: "GeeksForGeeks",
      stats: "100+ Problems Solved",
      description: "Data Structures & Algorithms",
      highlight: "Focus on Core Concepts",
      url: "https://www.geeksforgeeks.org/user/vivekvardhankantipudi/",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "CodeChef",
      stats: "1★ Coder",
      description: "Best Rating: 1368",
      highlight: "Competitive Programming",
      url: "https://www.codechef.com/users/vivekvardhan09",
      color: "from-amber-600 to-yellow-500"
    },
    {
      name: "HackerRank",
      stats: "4★ Problem Solving",
      description: "4★ SQL, 4★ C | 3★ Python, Java, C++",
      highlight: "Multi-Domain Expertise",
      url: "https://www.hackerrank.com/profile/vivekkantipudi09",
      color: "from-green-400 to-teal-500"
    }
  ];

  return (
    <section id="coding" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(187,100%,42%,0.06),transparent_60%)]" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Coding <span className="gradient-text">Profiles</span>
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Competitive programming and problem-solving journey
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {profiles.map((profile, index) => (
            <a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 group hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${profile.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Code className="w-6 h-6 text-white" />
              </div>
              
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-bold text-foreground font-display">{profile.name}</h3>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <p className="text-lg font-semibold text-accent mb-1">{profile.stats}</p>
              <p className="text-sm text-muted-foreground mb-3">{profile.description}</p>
              
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-secondary text-xs text-muted-foreground">
                <Star className="w-3 h-3" />
                {profile.highlight}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
