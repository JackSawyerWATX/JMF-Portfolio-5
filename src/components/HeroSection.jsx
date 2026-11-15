import { ArrowUpRight, MapPin } from "lucide-react";
import { RainOverlay } from "./RainOverlay";
import { SeattleScene } from "./SeattleScene";
import { useDarkMode } from "../hooks/useDarkMode";
export const HeroSection = () => {
  const rainy = useDarkMode();
  return <section id="hero" className="portfolio-hero">
    <div className="hero-copy">
      <h1><span>Jack Sawyer Software</span></h1>
      <p className="hero-description">We develop web applications that connect organizations and ideas.</p>
      <div className="hero-actions"><a className="hero-primary site-button button-primary" href="#projects">Explore our work <ArrowUpRight size={17}/></a><a className="hero-secondary site-button button-secondary" href="#contact">Discuss a project <ArrowUpRight size={16}/></a></div>
    </div>
    <SeattleScene/>
    <RainOverlay/>
    <div className="scene-caption"><span><MapPin size={13}/> SEATTLE, REIMAGINED IN PIXELS</span><span className="weather-caption" aria-live="polite">{rainy ? 'A little rain. Still creating.' : ''}</span></div>
  </section>;
};
export default HeroSection;






