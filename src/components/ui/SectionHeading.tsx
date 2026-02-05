interface SectionHeadingProps {
  label: string;
  heading: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeading({
  label,
  heading,
  description,
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={center ? "text-center" : ""}>
      <p className="text-xs uppercase tracking-[0.2em] text-accent-primary font-sans font-semibold mb-4">
        {label}
      </p>
      <h2 className="text-3xl sm:text-4xl font-serif font-bold text-text-primary mb-6">
        {heading}
      </h2>
      {description && (
        <p
          className={`text-lg text-text-secondary leading-relaxed ${
            center ? "max-w-2xl mx-auto" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
