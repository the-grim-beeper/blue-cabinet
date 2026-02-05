interface GradientOrbProps {
  size?: "sm" | "md" | "lg";
  color?: "blue" | "purple" | "cyan";
  className?: string;
  delayed?: boolean;
}

const sizeMap = {
  sm: "w-[300px] h-[300px] blur-[80px]",
  md: "w-[500px] h-[500px] blur-[100px]",
  lg: "w-[700px] h-[700px] blur-[120px]",
};

const colorMap = {
  blue: "from-accent-primary/20 to-transparent",
  purple: "from-purple-500/20 to-transparent",
  cyan: "from-cyan-500/15 to-transparent",
};

export default function GradientOrb({
  size = "md",
  color = "blue",
  className = "",
  delayed = false,
}: GradientOrbProps) {
  return (
    <div
      className={`absolute rounded-full bg-gradient-radial ${colorMap[color]} ${sizeMap[size]} pointer-events-none ${delayed ? "animate-float-delayed" : "animate-float"} ${className}`}
      style={{
        background: `radial-gradient(circle, ${
          color === "blue"
            ? "rgba(37,99,235,0.2)"
            : color === "purple"
              ? "rgba(139,92,246,0.2)"
              : "rgba(6,182,212,0.15)"
        } 0%, transparent 70%)`,
      }}
    />
  );
}
