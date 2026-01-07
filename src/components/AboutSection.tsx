import { GraduationCap, MapPin, Calendar } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Cloud Engineer and DevOps student with a strong foundation in cloud infrastructure, containerization, and automation. I love building scalable, reliable systems that power modern applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently exploring the vast ecosystem of AWS services and container orchestration, I'm always eager to learn new technologies and best practices in the ever-evolving DevOps landscape.
              </p>
            </div>

            {/* Education Card */}
            <div className="glass-card p-8 glow-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Education</h3>
                  <p className="text-muted-foreground">Academic Background</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-medium">CGC Jhanjheri</h4>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Chandigarh Group of Colleges</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>Batch of 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
