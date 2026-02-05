interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
}: GlassCardProps) {
  return (
    <div
      className={`bg-bg-card/60 backdrop-blur-xl border border-white/[0.05] rounded-2xl p-6 sm:p-8 shadow-lg shadow-black/20 ${
        hover
          ? "hover:border-accent-primary/20 hover:shadow-accent-glow/5 transition-all duration-500"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
