import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    number: 1,
    title: "Connect",
    description:
      "Reach out through our contact form. Tell us about your investment background and areas of interest.",
  },
  {
    number: 2,
    title: "Qualify",
    description:
      "We review alignment on thesis, accreditation, and investment capacity. Our bar is conviction, not just capital.",
  },
  {
    number: 3,
    title: "Access",
    description:
      "Qualified co-investors receive deal flow memos on select opportunities with our analysis and terms.",
  },
  {
    number: 4,
    title: "Invest",
    description:
      "Decide on a deal-by-deal basis. We handle all coordination, legal, and SPV structure.",
  },
];

export default function CoInvestSection() {
  return (
    <section
      id="co-invest"
      className="py-24 sm:py-32 bg-bg-primary"
      style={{ scrollMarginTop: "80px" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          label="Co-Invest"
          heading="Invest Alongside Us"
          description="We open select deals to a curated network of co-investors who share our conviction in the policy-tech frontier."
          center
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-accent-primary/20 bg-accent-muted/50 mb-5">
                <span className="text-lg font-serif font-bold text-accent-primary">
                  {step.number}
                </span>
              </div>

              <h3 className="text-lg font-serif font-bold text-text-primary mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom quote + CTA */}
        <div className="mt-16 border border-border rounded-xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="text-lg text-text-secondary leading-relaxed font-serif italic max-w-xl">
            &ldquo;The best angel investing is not just about capital &mdash; it
            is about shared conviction and collective intelligence.&rdquo;
          </p>
          <a
            href="#contact"
            className="shrink-0 px-8 py-4 rounded-full bg-accent-primary hover:bg-accent-dark text-white font-medium transition-colors"
          >
            Apply to Co-Invest
          </a>
        </div>
      </div>
    </section>
  );
}
