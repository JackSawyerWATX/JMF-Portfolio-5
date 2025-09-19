import { useDarkMode } from "../hooks/useDarkMode";
import { StarBackground } from "./StarBackground";
import { LightBackground } from "./LightBackground";

export const Background = () => {
  const isDark = useDarkMode();
  console.log("Background is Dark:", isDark);
  return isDark ? <StarBackground /> : <LightBackground />;
};
