import { Cloud, Database, Shield, Cpu, Container, Terminal, Network, Server } from "lucide-react";

const skills = [
  {
    name: "Amazon EC2",
    description: "Virtual servers in the cloud",
    icon: Server,
    category: "AWS"
  },
  {
    name: "Amazon S3",
    description: "Scalable object storage",
    icon: Database,
    category: "AWS"
  },
  {
    name: "AWS IAM",
    description: "Identity & access management",
    icon: Shield,
    category: "AWS"
  },
  {
    name: "AWS Lambda",
    description: "Serverless compute service",
    icon: Cpu,
    category: "AWS"
  },
  {
    name: "Docker",
    description: "Container platform",
    icon: Container,
    category: "DevOps"
  },
  {
    name: "Linux",
    description: "System administration",
    icon: Terminal,
    category: "OS"
  },
  {
    name: "Networking",
    description: "VPC, subnets & security",
    icon: Network,
    category: "Infrastructure"
  },
  {
    name: "Cloud Architecture",
    description: "Scalable system design",
    icon: Cloud,
    category: "Design"
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative bg-secondary/20">
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building expertise across cloud platforms, containerization, and infrastructure automation
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6" />
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group glass-card p-6 transition-all duration-500 hover:scale-105 hover:border-primary/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                <skill.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Category Badge */}
              <span className="inline-block px-2 py-1 text-xs font-medium text-primary bg-primary/10 rounded-md mb-3">
                {skill.category}
              </span>

              {/* Name & Description */}
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {skill.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
