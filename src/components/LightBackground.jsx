// components/LightBackground.tsx
export const LightBackground = () => {
  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      style={{
        backgroundImage: 'url("projects/SeattleIn16Bit_WEBSITE_USE_LARGE - DAY.jpg")', // <-- your light image
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* optional soft overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(255,255,255,0.0))" }}
      />
    </div>
  );
};
