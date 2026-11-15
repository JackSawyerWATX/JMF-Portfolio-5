import { ArrowUp } from "lucide-react";

export const Footer = () => (
  <footer className="w-full bg-background/80 backdrop-blur-md border-t border-border">
    <div className="container relative flex items-center justify-between py-4">
      <p className="text-sm font-normal leading-6 text-foreground/80">
        &copy; {new Date().getFullYear()} Jack Sawyer Software. All rights reserved.
      </p>
      <a href="#hero" aria-label="Back to top" className="absolute site-button button-secondary button-icon">
        <ArrowUp className="h-4 w-4" />
      </a>
    </div>
  </footer>
);
