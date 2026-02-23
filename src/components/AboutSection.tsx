import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  {
    title: "Early Stage Capital",
    description:
      "We invest at the earliest stages \u2014 pre-seed and seed \u2014 when conviction matters most and a single check can change a company\u2019s trajectory.",
  },
  {
    title: "Policy Expertise",
    description:
      "Our team brings deep experience in government, regulation, and public affairs. We help founders navigate the policy landscape as a competitive advantage.",
  },
  {
    title: "Tech Networks",
    description:
      "Deep relationships across global tech ecosystems give our portfolio companies access to talent, partnerships, and follow-on capital.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-bg-primary"
      style={{ scrollMarginTop: "80px" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          label="About Us"
          heading="Investing in the Future of Governance"
          description="Blue Cabinet is an angel investment firm founded in 2020 on the conviction that the most transformative companies of the coming decade will emerge where public policy and technology converge."
          center
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="border border-border rounded-xl p-8 hover:border-border-hover transition-colors"
            >
              <h3 className="text-lg font-serif font-bold text-text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
