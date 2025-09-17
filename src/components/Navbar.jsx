import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";
// import { ThemeToggle } from "./ThemeToggle"; // <-- toggle component

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10); // FIX
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-sm" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between gap-4">
        {/* Left: Logo */}
        <a className="text-xl font-bold text-primary flex items-center h-10" href="#hero">
          <span className="relative z-10">
            <span className="text-glow text-foreground text-shadow-lg/360">Jack Sawyer</span>
          </span>
        </a>

        {/* Middle: desktop nav and toggle in the SAME row */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="inline-flex items-center h-10 text-foreground/80 hover:text-primary transition-colors duration-300 text-shadow-lg/560"
            >
              {item.name}
            </a>
          ))}

          {/* Alignment to match page links to theme toggle */}
          <button
            type="button"
            aria-label="Toggle theme"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border hover:bg-accent/10 transition"
            // onClick={... theme toggle ...}
          >
            {/* <ThemeToggle /> icon(s) go here */}
            ⛯
          </button>
        </div>

        {/* Right: mobile controls (toggle and hamburger) */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            aria-label="Toggle theme"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border"
            // onClick={...}
          >
            ⛯
          </button>

          <button
            onClick={() => setIsMenuOpen((p) => !p)}
            className="p-2 text-foreground z-50"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col items-center space-y-8 text-xl">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            {/* Toggle for mobile menu */}
            <button
              type="button"
              aria-label="Toggle theme"
              className="mt-4 inline-flex h-10 w-10 items-center justify-center rounded-md border border-border"
              // onClick={...}
            >
              ⛯
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
