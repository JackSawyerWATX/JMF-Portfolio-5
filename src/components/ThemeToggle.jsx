import { CloudRain, Sun } from "lucide-react";
import { useEffect, useState } from "react";
export const ThemeToggle = () => {
  const [rainy, setRainy] = useState(() => localStorage.getItem("theme") === "dark");
  useEffect(() => {
    document.documentElement.classList.toggle("dark", rainy);
    localStorage.setItem("theme", rainy ? "dark" : "light");
    window.dispatchEvent(new Event("themechange"));
  }, [rainy]);
  return <div className="weather-switch" role="group" aria-label="Seattle weather">
    <button className={`site-button ${!rainy ? "button-primary" : "button-secondary"}`} onClick={() => setRainy(false)} aria-pressed={!rainy}><Sun size={15}/> <span>Sunny</span></button>
    <button className={`site-button ${rainy ? "button-primary" : "button-secondary"}`} onClick={() => setRainy(true)} aria-pressed={rainy}><CloudRain size={15}/> <span>Rainy</span></button>
  </div>;
};
