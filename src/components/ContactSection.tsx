import { Mail, Github, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Open to opportunities, collaborations, and interesting conversations about cloud & DevOps
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6" />
          </div>

          {/* Contact Card */}
          <div className="glass-card p-8 md:p-12 text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8 animate-pulse-glow">
              <Send className="w-10 h-10 text-primary" />
            </div>

            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Whether you have a question, opportunity, or just want to say hello, feel free to reach out!
            </p>

            {/* Email */}
            <a
              href="mailto:manish@example.com"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 mb-8"
            >
              <Mail className="w-5 h-5" />
              Say Hello
            </a>

            {/* Social Links */}
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl border border-border bg-secondary/50 flex items-center justify-center transition-all duration-300 hover:bg-primary/10 hover:border-primary/50 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl border border-border bg-secondary/50 flex items-center justify-center transition-all duration-300 hover:bg-primary/10 hover:border-primary/50 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
