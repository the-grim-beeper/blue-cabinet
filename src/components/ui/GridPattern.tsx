interface GridPatternProps {
  className?: string;
}

export default function GridPattern({ className = "" }: GridPatternProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none opacity-30 ${className}`}
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(37,99,235,0.15) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
        maskImage:
          "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)",
      }}
    />
  );
}
