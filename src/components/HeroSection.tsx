export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-bg-secondary">
      {/* Subtle top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center pt-20">
        <p className="text-xs uppercase tracking-[0.3em] text-accent-light font-sans font-semibold mb-8">
          Angel Investing at the Frontier
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight mb-8 leading-[1.1] text-text-primary">
          Where{" "}
          <span className="text-accent-primary">Policy</span>
          <br />
          Meets Technology
        </h1>

        <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-12">
          Blue Cabinet is an angel investment firm backing founders who are
          building at the intersection of public policy and technology. We also
          offer select co-investment opportunities for aligned investors.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#thesis"
            className="px-8 py-4 rounded-full bg-accent-primary hover:bg-accent-dark text-white font-medium transition-colors"
          >
            Our Thesis
          </a>
          <a
            href="#co-invest"
            className="px-8 py-4 rounded-full border border-border text-text-primary font-medium hover:border-accent-primary/40 hover:text-accent-primary transition-colors"
          >
            Co-Invest With Us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          className="text-text-tertiary"
        >
          <path
            d="M12 5v14M19 12l-7 7-7-7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
