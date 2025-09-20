// components/LightBackground.tsx
export const LightBackground = () => {
  return (
    <div
      className="
        fixed inset-0 z-0 pointer-events-none
        bg-no-repeat bg-scroll md:bg-fixed
        bg-[position:center_30%] md:bg-center
        bg-[length:180%_auto] sm:bg-[length:140%_auto] md:bg-cover
        "
      style={{
        backgroundImage: 'url("projects/SeattleIn16Bit_WEBSITE_USE_LARGE - DAY.jpg")', // <-- your light image
        backgroundSize: "cover",
        backgroundPosition: "center left",
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
