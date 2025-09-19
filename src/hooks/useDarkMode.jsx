// src/hooks/useDarkMode.jsx
import { useEffect, useState } from "react";

export function useDarkMode() {
  const getIsDark = () =>
    document.documentElement.classList.contains("dark");

  const [isDark, setIsDark] = useState(getIsDark);

  useEffect(() => {
    const update = () => setIsDark(getIsDark());

    // React to <html class="dark"> changes
    const mo = new MutationObserver(update);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    // React to explicit themechange events
    window.addEventListener("themechange", update);

    return () => {
      mo.disconnect();
      window.removeEventListener("themechange", update);
    };
  }, []);

  return isDark;
}
