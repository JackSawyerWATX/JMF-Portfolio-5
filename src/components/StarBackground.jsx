import { useEffect, useState } from "react";

// id, size, x, y, opacity, animationDuration
// id, size, x, y, delay, animationDuration

export const StarBackground = () => {
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateMeteors();

    const handleResize = () => {
      // Optionally, regenerate meteors or do other things when resizing
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateMeteors = () => {
    const numberOfMeteors = 400;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 1 + 1,
        x: Math.random() * 100,
        y: Math.random() * 40,
        delay: Math.random() * 65,
        animationDuration: Math.random() * 4 + 3,
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      style={{
        backgroundImage: 'url("projects/SeattleIn16Bit_WEBSITE_USE_LARGE.jpg")', // Set image here
        backgroundSize: "cover", 
        backgroundPosition: "center center",
        backgroundAttachment: "fixed", 
      }}
    >
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 1 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};
