// AboutSection.jsx
import { Briefcase, Code, User } from "lucide-react";
import { useEffect, useState } from "react";
// If the PDF lives under src/assets:
// import resumePDF from "../assets/resume.pdf";

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
          className={`text-3xl md:text-4xl font-bold mb-12 text-center ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-shadow-lg/560">About</span>{" "}
          <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <h3 className="text-left text-2xl font-bold text-glow text-shadow-lg/560">
              Full Stack Web Developer
            </h3>

            <p className="text-lg leading-6 text-shadow-lg/560">
              I am a full stack web developer with a passion for creating dynamic and responsive web
              applications. I have experience in both front-end and back-end development, and I am
              constantly learning new technologies that allow me to bring ideas to life and solve
              complex problems.
            </p>

            <p className="text-lg leading-6 text-shadow-lg/560">
              I specialize in building web applications using the latest JavaScript technologies
              including Node.js, React.js, Express.js, PostgreSQL, and MongoDB. I am also
              knowledgeable in Python and the Python libraries TensorFlow, Matplotlib, NumPy, and
              Pandas for machine learning, data analysis, and visualizations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="cosmic-button text-shadow-lg/560">
                <span>Let's Talk</span>
              </a>

              {/* If file is in /public: use href="/resume.pdf" */}
              <a
                href="src\assets\resume.pdf"
                // href={resumePDF} // <- use this if you imported from src/assets
                className="px-6 py-2 rounded-full border border-primary text-white hover:bg-primary/25 transition-colors duration-300 ease-in-out flex items-center justify-center gap-2 text-shadow-lg/560"
                download="resume.pdf"
              >
                Download CV
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
                    I create responsive websites using modern frameworks and libraries.
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
                    I design intuitive and visually appealing user interfaces for web applications.
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
                    I manage projects using Agile methodologies to ensure on time and under budget
                    completion.
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
