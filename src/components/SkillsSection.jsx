import { useEffect, useRef, useState } from "react";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "Frontend" },
  { name: "JavaScript", level: 93, category: "Frontend" },
  { name: "TypeScript", level: 80, category: "Frontend" },
  { name: "React", level: 90, category: "Frontend" },
  { name: "Next.js", level: 80, category: "Frontend" },
  { name: "Tailwind CSS", level: 85, category: "Frontend" },
  { name: "React Router", level: 85, category: "Frontend" },
  { name: "Radix UI", level: 75, category: "Frontend" },
  { name: "Lucide React", level: 85, category: "Frontend" },

  // Backend
  { name: "Python", level: 90, category: "Backend" },
  { name: "Express.js", level: 85, category: "Backend" },
  { name: "Node.js", level: 90, category: "Backend" },
  { name: "Java", level: 60, category: "Backend" },
  { name: "Spring Boot", level: 70, category: "Backend" },
  { name: "Django", level: 65, category: "Backend" },
  { name: "Flask", level: 60, category: "Backend" },
  { name: "MongoDB", level: 80, category: "Backend" },
  { name: "PostgreSQL", level: 70, category: "Backend" },
  { name: "MySQL", level: 70, category: "Backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "Tools" },
  { name: "Vite", level: 85, category: "Tools" },
  { name: "Docker", level: 70, category: "Tools" },
  { name: "VS Code", level: 90, category: "Tools" },
  { name: "AWS", level: 75, category: "Tools" },
  { name: "Postman", level: 60, category: "Tools" },
  { name: "Figma", level: 60, category: "Tools" },
  { name: "WSL", level: 50, category: "Tools" },
];

const categories = ["Frontend", "Backend", "Tools"];

const TechnologyRow = ({ skill }) => {
  const rowRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    observer.observe(rowRef.current);
    return () => observer.disconnect();
  }, []);

  return <li ref={rowRef} className="technology-row">
    <div className="technology-label"><span>{skill.name}</span><span className="technology-percent">{skill.level}%</span></div>
    <div className="technology-track" role="progressbar" aria-label={skill.name} aria-valuemin={0} aria-valuemax={100} aria-valuenow={skill.level}>
      <div className="technology-fill" data-visible={isVisible} style={{ width: `${skill.level}%` }} />
    </div>
  </li>;
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const visibleCategories = categories.filter(category => activeCategory === "All" || category === activeCategory);

  return <section id="skills" className="technologies-section py-24 px-4 relative">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl text-center"><span className="text-primary">Technology</span> Stack</h2>
      <div className="technology-filters" role="group" aria-label="Filter technologies">
        {["All", ...categories].map(category => <button className={`site-button ${activeCategory === category ? "button-primary" : "button-secondary"}`} key={category} type="button" aria-pressed={activeCategory === category} onClick={() => setActiveCategory(category)}>{category}</button>)}
      </div>
      <div className="technology-groups" data-filtered={activeCategory !== "All"}>
        {visibleCategories.map(category => <div className="technology-group" key={`${activeCategory}-${category}`}>
          <h3>{category}<span>{skills.filter(skill => skill.category === category).length}</span></h3>
          <ul aria-label={`${category} technologies`}>
            {skills.filter(skill => skill.category === category).map(skill => <TechnologyRow key={skill.name} skill={skill}/>)}
          </ul>
        </div>)}
      </div>
    </div>
  </section>;
};

