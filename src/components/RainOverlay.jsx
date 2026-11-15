import { useEffect, useRef } from "react";

export const RainOverlay = () => {
  const frameRef = useRef(null);
  useEffect(() => {
    const frame = frameRef.current;
    const update = () => {
      const travel = frame.clientHeight + 48;
      // Horizontal travel / vertical travel = tan(10 degrees).
      frame.style.setProperty("--rain-travel", `${travel}px`);
      frame.style.setProperty("--rain-drift", `${travel * Math.tan(Math.PI / 18)}px`);
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  return <div ref={frameRef} className="rain-overlay" aria-hidden="true">
    <div className="rain-field">
      {Array.from({ length: 90 }, (_, i) => {
        const duration = 2.2 + (i % 7) * 0.13;
        return <i key={i} className="rain-drop" style={{
          left: `${((i * 37) % 90) / 90 * 100}%`,
          animationDuration: `${duration}s`,
          animationDelay: `${-((i * 0.61803398875) % 1) * duration}s`,
        }}><span /></i>;
      })}
    </div>
  </div>;
};
