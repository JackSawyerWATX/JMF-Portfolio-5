import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full bg-background/80 backdrop-blur-md shadow-xs border-t border-border">
      <div className="container relative flex items-center justify-between py-4 text-foreground">
        {/* Left: copyright with matching glow */}
        <p className="text-sm md:text-base text-foreground/80">
          &copy; {new Date().getFullYear()}{" "}
          <span className="relative z-10">
            <span className="text-glow text-foreground text-shadow-lg/360">
              Jack Sawyer
            </span>
          </span>{" "}
          - All Rights Reserved
        </p>

        {/* Center: arrow (absolute center so left text doesn’t shift it) */}
        <a
          href="#hero"
          aria-label="Back to top"
          className="absolute left-1/2 -translate-x-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-border hover:bg-primary/10 hover:text-primary transition-colors"
        >
          <ArrowUp className="h-4 w-4" />
        </a>

        {/* Right: invisible spacer to balance justify-between */}
        <span className="opacity-0 select-none text-sm md:text-base">.</span>
      </div>
    </footer>
  );
};
