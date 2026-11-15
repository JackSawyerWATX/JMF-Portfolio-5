import { ExternalLink, Github } from "lucide-react"
import { useEffect, useState } from "react";

const projects = [
  {
    id: 1,
    title: "Vintage Airplanes",
    description: "React page built to demo use of parallax movement.",
    tags: ["React", "JavaScript", "CSS", "HTML", "Tailwind"],
    demoUrl: "https://main.d2imdrhasvzmd4.amplifyapp.com/",
    githubUrl: "https://github.com/JackSawyerWATX/react-parallax-airplanes"
  },
  {
    id: 2,
    title: "Record Store Database",
    description: "Built using the PERN stack.",
    tags: ["PostgreSQL", "ExpressJS", "React.js", "Node.js", "PERN"],
    demoUrl: "https://pern-store-a4w9.onrender.com/",
    githubUrl: "https://github.com/JackSawyerWATX/pern-store"
  },
  {
    id: 3,
    title: "Personal Blog",
    description: "Page built using Gatsby framework and NoSQL.",
    tags: ["JavaScript", "Gatsby", "HTML", "CSS"],
    demoUrl: "https://master--jonchron.netlify.app/",
    githubUrl: "https://github.com/JackSawyerWATX/my-gatsby-site"
  },
  {
    id: 4,
    title: "Online Camera Store",
    description: "Retail page using Stripe in the MERN stack.",
    tags: ["MongoDB", "Express.js", "React", "Node.js", "Stripe", "Tailwind"],
    demoUrl: "https://pern-store-a4w9.onrender.com/",
    githubUrl: "https://github.com/JackSawyerWATX/e-commerce-store"
  },
  {
    id: 5,
    title: "Three.js Portfolio Page",
    description: "Page built using Three.js and React.",
    tags: ["JavaScript", "Three.js", "React", "Tailwind"],
    demoUrl: "https://www.jonathanfausset.com/",
    githubUrl: "https://github.com/JackSawyerWATX/Nextjs-Creative-Portfolio"
  },
  {
    id: 6,
    title: "Landon Hotel",
    description: "Page using React.js and vanilla CSS.",
    tags: ["JavaScript", "React", "HTML", "CSS"],
    demoUrl: "https://master.de0tmva8pq6x6.amplifyapp.com/",
    githubUrl: "https://github.com/JackSawyerWATX/Landon"
  },
  {
    id: 7,
    title: "Photographer's Blog",
    description: "A photo blog using JSON.",
    tags: ["JavaScript", "React", "HTML", "CSS", "JSON"],
    demoUrl: "https://master.d2d6sf0i0ht16r.amplifyapp.com/",
    githubUrl: "https://github.com/JackSawyerWATX/photo-gallery"
  },
  {
    id: 8,
    title: "Portfolio Website",
    description: "Page built using React.js and Tailwind.",
    tags: ["JavaScript", "React", "Node.js"],
    demoUrl: "https://master.d371qrhx3z8fmf.amplifyapp.com/",
    githubUrl: "https://github.com/JackSawyerWATX/jmf-react-portfolio"
  }
]

export const ProjectsSection = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      // Trigger visibility once the component mounts
      const timer = setTimeout(() => setIsVisible(true), 100); // Slight delay for smoothness
      return () => clearTimeout(timer);
    }, []);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-12 text-center  ${isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
          <span className="text-shadow-lg/560">
          Featured
          </span>{" "}
          <span className="text-primary"> 
            Projects
          </span>
        </h2>

        <p className="text-left text-lg/6 mb-12 max-w-2xl mx-auto text-shadow-lg/560">
                Explore selected application and interface projects across web development,
                e-commerce, and interactive experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col">
              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-primary/70 text-white text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 justify-between mt-auto">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="site-button button-secondary"
                  >
                    {" "}
                    View project <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="site-button button-secondary"
                  >
                    Source <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}

        </div>
          <div className="text-center mt-12">
            <a 
              className="site-button button-primary mx-auto"
              target="_blank" 
              href="https://github.com/JackSawyerWATX">View Source Repositories <Github size={16} /></a>
          </div>
      </div>
    </section>
  )
}
