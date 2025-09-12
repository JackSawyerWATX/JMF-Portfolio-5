import { useEffect, useState } from "react"
import { cn } from "../lib/utils"

const skills = [
  // frontend
  { name: "HTML/CSS", level: 95, catagory: "Frontend" },
  { name: "JavaScript", level: 93, catagory: "Frontend" },
  { name: "TypeScript", level: 80, catagory: "Frontend" },
  { name: "SpringBoot", level: 70, catagory: "Frontend" },
  { name: "Django", level: 65, catagory: "Frontend" },
  { name: "Flask", level: 60, catagory: "Frontend" },
  { name: "Next.JS", level: 80, catagory: "Frontend" },

  // backend
  { name: "Python", level: 90, catagory: "Backend" },
  { name: "Express.JS", level: 85, catagory: "Backend" },
  { name: "Node.JS", level: 90, catagory: "Backend" },
  { name: "Java", level: 60, catagory: "Backend" },
  { name: "MongoDB", level: 80, catagory: "Backend" },
  { name: "PostgreSQL", level: 70, catagory: "Backend" },
  { name: "MySQL", level: 70, catagory: "Backend" },

  // tools
  { name: "Git/GitHub", level: 90, catagory: "Tools" },
  { name: "Docker", level: 70, catagory: "Tools" },
  { name: "VSCode", level: 90, catagory: "Tools" },
  { name: "AWS", level: 75, catagory: "Tools" },
  { name: "Postman", level: 60, catagory: "Tools" },
  { name: "Figma", level: 60, catagory: "Tools" },
  { name: "WSL", level: 50, catagory: "Tools" },
]

const categories = ["all", "Frontend", "Backend", "Tools"]

export const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger visibility once the component mounts
    const timer = setTimeout(() => setIsVisible(true), 100); // Slight delay for smoothness
    return () => clearTimeout(timer);
  }, []);

  const [activeCatagory, setActiveCatagory] = useState("all")

  const filteredSkills = skills.filter(
    (skill) => activeCatagory === "all" || skill.catagory === activeCatagory)

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30 ">

      <div className="container mx-auto max-w-5xl">
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center  ${isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
          <span className="text-primary">
            My
          </span>{" "}
          <span className="text-shadow-lg/560">
            Skills
          </span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((catagory, key) => (
            <button
              key={key}
              onClick={() => setActiveCatagory(catagory)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCatagory === catagory ?
                  "bg-primary text-primary-foreground" :
                  "bg-secondary/70 text-foreground hover:bd-secondary"
              )}>{catagory}</button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-sm card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg text-glow">{skill.name}</h3>
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                  <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                    style={{ width: skill.level + "%" }}
                  />
                </div>

              </div>
              <div className="text-right mt-1">
                <span className="text-muted-foreground text-sm">{skill.level} % </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}