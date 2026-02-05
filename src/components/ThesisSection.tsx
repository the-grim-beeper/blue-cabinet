import SectionHeading from "@/components/ui/SectionHeading";

const focusAreas = [
  {
    title: "AI Safety & Governance",
    description:
      "Tools and platforms enabling responsible AI deployment and regulatory compliance.",
  },
  {
    title: "GovTech & Civic Infrastructure",
    description:
      "Technology modernizing how governments serve citizens and make decisions.",
  },
  {
    title: "RegTech & Compliance",
    description:
      "Solutions helping organizations navigate increasingly complex regulatory environments.",
  },
  {
    title: "Climate Policy Tech",
    description:
      "Platforms at the intersection of environmental regulation and clean technology.",
  },
  {
    title: "Digital Public Goods",
    description:
      "Open infrastructure for identity, data, and digital services.",
  },
];

export default function ThesisSection() {
  return (
    <section
      id="thesis"
      className="py-24 sm:py-32 bg-bg-secondary"
      style={{ scrollMarginTop: "80px" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left column: text */}
          <div>
            <SectionHeading
              label="Investment Thesis"
              heading="The Intersection That Matters"
              description="The boundary between public policy and technology is where the most consequential innovations are being built. The founders who understand both worlds are building companies that will define the next era."
            />

            <div className="mt-10 space-y-5">
              {focusAreas.map((area) => (
                <div
                  key={area.title}
                  className="border-l-2 border-accent-primary/20 pl-5 hover:border-accent-primary/50 transition-colors"
                >
                  <h4 className="text-base font-sans font-semibold text-text-primary mb-1">
                    {area.title}
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: Venn diagram */}
          <div className="flex items-center justify-center lg:pt-12">
            <div className="relative w-[300px] h-[260px] sm:w-[360px] sm:h-[300px]">
              {/* Left circle */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[190px] h-[190px] sm:w-[230px] sm:h-[230px] rounded-full border border-accent-primary/20 bg-accent-muted/40 flex items-center justify-center">
                <span className="text-xs uppercase tracking-[0.12em] text-text-secondary font-sans font-medium -translate-x-5 sm:-translate-x-7">
                  Public
                  <br />
                  Policy
                </span>
              </div>

              {/* Right circle */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[190px] h-[190px] sm:w-[230px] sm:h-[230px] rounded-full border border-accent-primary/20 bg-accent-muted/40 flex items-center justify-center">
                <span className="text-xs uppercase tracking-[0.12em] text-text-secondary font-sans font-medium translate-x-5 sm:translate-x-7">
                  Tech&shy;nology
                </span>
              </div>

              {/* Overlap zone */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <span className="text-xs uppercase tracking-[0.15em] text-accent-primary font-sans font-bold whitespace-nowrap">
                  Blue
                  <br />
                  Cabinet
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
