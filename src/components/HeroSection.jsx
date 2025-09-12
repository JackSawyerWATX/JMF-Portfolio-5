import { ArrowDown } from 'lucide-react';
import React, { useEffect, useState } from 'react';

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger visibility once the component mounts
    const timer = setTimeout(() => setIsVisible(true), 100); // Slight delay for smoothness
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span
              className={`transition-opacity duration-1000 text-glow text-shadow-lg/560 ${isVisible ? 'opacity-100' : 'opacity-0'}`}> Hello, I'm
            </span>
            <span
              className={`text-primary transition-opacity duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}> Jack</span>
            <span
              className={`transition-opacity duration-1000 delay-400 text-glow text-shadow-lg/560 ${isVisible ? 'opacity-100' : 'opacity-0'}`}> Sawyer.</span>
          </h1>
          <p className={`text-left text-lg md:text-xl transition-opacity text-shadow-lg/560 duration-1000 delay-800 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            I design and develop engaging, user-friendly web interfaces
            using the latest technologies. I can create seamless and
            visually appealing digital experience for web based software
            solutions.
          </p>

          <div className={`pt-4 transition-opacity duration-1000 delay-1200 text-shadow-lg/560 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-md text-muted-foreground mb-2 text-shadow-lg/40"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>

    </section>
  );
};

export default HeroSection;
