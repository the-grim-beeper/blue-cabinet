import Image from "next/image";
import Link from "next/link";

const founders = [
  {
    name: "Nicklas Berild Lundblad",
    role: "Co-Founder",
    image: "/nicklas.webp",
    bio: "Nicklas brings deep experience from the intersection of technology and policy. He has held senior roles at Google, where he led public policy across Europe, and at DeepMind, where he worked on AI governance. Most recently, he served at Stripe, focusing on financial regulation and fintech policy. His unique perspective bridges the worlds of cutting-edge technology and the regulatory frameworks that shape them.",
    companies: ["Google", "DeepMind", "Stripe"],
    linkedin: "#",
  },
  {
    name: "Andreas Krohn",
    role: "Co-Founder",
    image: "/andreas.jpg",
    bio: "Andreas is an experienced serial entrepreneur with a track record of building and scaling successful companies. His hands-on operational experience gives Blue Cabinet a founder's perspective on what it takes to build from zero to one. He brings practical insight into company building, go-to-market strategy, and the challenges founders face at every stage of growth.",
    companies: [],
    linkedin: "#",
  },
];

export const metadata = {
  title: "Team | Blue Cabinet",
  description: "Meet the founders of Blue Cabinet.",
};

export default function TeamPage() {
  return (
    <>
      {/* Navbar */}
      <nav className="border-b border-border bg-white">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="font-serif text-sm tracking-[0.25em] uppercase font-bold text-accent-primary"
          >
            Blue Cabinet
          </Link>
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-text-secondary hover:text-accent-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/portfolio"
              className="text-sm font-medium text-text-secondary hover:text-accent-primary transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/team"
              className="text-sm font-medium text-accent-primary"
            >
              Team
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-medium px-5 py-2.5 rounded-full bg-accent-primary hover:bg-accent-dark text-white transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </nav>

      <main className="bg-bg-primary">
        {/* Header */}
        <section className="py-24 sm:py-32 bg-bg-secondary">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-accent-light font-sans font-semibold mb-4">
              Team
            </p>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-text-primary mb-6">
              Meet the Founders
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Blue Cabinet was founded by two partners who share a conviction
              that the most important companies of the next decade will be built
              at the intersection of policy and technology.
            </p>
          </div>
        </section>

        {/* Founders */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="space-y-24">
              {founders.map((founder, index) => (
                <div
                  key={founder.name}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="relative max-w-md mx-auto lg:mx-0">
                      {/* Decorative background */}
                      <div className="absolute -inset-4 bg-gradient-to-br from-accent-primary/5 to-transparent rounded-3xl" />
                      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
                        <Image
                          src={founder.image}
                          alt={founder.name}
                          fill
                          className="object-cover"
                        />
                        {/* Subtle overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>
                      {/* Company badges positioned over image */}
                      {founder.companies.length > 0 && (
                        <div className="absolute -bottom-4 left-4 right-4 flex justify-center gap-2">
                          {founder.companies.map((company) => (
                            <span
                              key={company}
                              className="px-4 py-2 text-sm bg-white text-accent-primary rounded-full shadow-md font-medium"
                            >
                              {company}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""} ${founder.companies.length > 0 ? "lg:pt-0 pt-8" : ""}`}>
                    <p className="text-xs uppercase tracking-[0.2em] text-accent-primary font-sans font-semibold mb-2">
                      {founder.role}
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-text-primary mb-6">
                      {founder.name}
                    </h2>
                    <p className="text-text-secondary leading-relaxed text-lg">
                      {founder.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 border-t border-border bg-bg-secondary">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="text-lg text-text-secondary mb-6">
              Want to work with us?
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-4 rounded-full bg-accent-primary hover:bg-accent-dark text-white font-medium transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-bg-primary">
        <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-serif text-sm tracking-[0.25em] uppercase font-bold text-accent-primary">
            Blue Cabinet
          </span>
          <p className="text-xs text-text-tertiary">
            &copy; 2026 Blue Cabinet. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
