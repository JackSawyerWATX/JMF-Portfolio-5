import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Technologies", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav aria-label="Main navigation" className={cn(
      "portfolio-nav fixed w-full z-40 transition-all duration-300",
      isScrolled && "bg-background/90 backdrop-blur-md shadow-xs"
    )}>
      <div className="nav-layout">
        <a className="nav-brand" href="#hero">Jack Sawyer Software</a>
        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>{item.name}</a>
          ))}
        </div>
      </div>
    </nav>
  );
};

