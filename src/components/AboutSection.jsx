import { ArrowUpRight, Briefcase, Code, User } from "lucide-react";
import { useEffect, useState } from "react";

export const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-12 text-center ${isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
          <span className="text-shadow-lg/560">About</span>{" "}
          <span className="text-primary">Us</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <h3 className="text-left text-2xl font-bold text-glow text-shadow-lg/560">
              Software Development for Business
            </h3>

            <p className="text-lg leading-6 text-shadow-lg/560">
              Jack Sawyer Software develops web applications and digital interfaces for business.
              Our approach brings design and engineering together to turn operational needs
              into practical, intuitive software.
            </p>

            <p className="text-lg leading-6 text-shadow-lg/560">
              Our capabilities span interface design, application development, and data integration.
              We work with React, Node.js, Python, and relational and document databases
              to build solutions around each projectâ€™s requirements.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-7">
              <a href="#contact" className="site-button button-primary">
                <span>Contact Us</span><ArrowUpRight size={17}/>
              </a>

              <a href="#projects" className="site-button button-secondary">
                View Our Work <ArrowUpRight size={16}/>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-glow">Web Development</h4>
                  <p className="text-muted-foreground">
                    We develop responsive websites and applications with modern web technologies.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-glow">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    We design clear, accessible interfaces that support user needs and business objectives.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-glow">Project Management</h4>
                  <p className="text-muted-foreground">
                    We coordinate delivery through defined milestones, clear communication, and iterative development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
