import Image from "next/image";
import Link from "next/link";

const investments = [
  {
    name: "Warp News",
    logo: "/logos/warp-news.png",
    description: "Fact-based optimistic news platform",
    url: "https://warpnews.org",
  },
  {
    name: "Civic Marketplace",
    logo: "/logos/civic-marketplace.png",
    description: "Procurement platform for public sector",
    url: "https://civicmarketplace.com",
  },
  {
    name: "Source.",
    logo: "/logos/source.png",
    description: "Developer tools and infrastructure",
    url: "#",
  },
  {
    name: "Strive",
    logo: "/logos/strive.png",
    description: "Corporate governance solutions",
    url: "#",
  },
  {
    name: "Kausable",
    logo: "/logos/kausable.png",
    description: "Impact measurement platform",
    url: "#",
  },
  {
    name: "FenoMark Diagnostics",
    logo: "/logos/fenomark.png",
    description: "Medical diagnostics technology",
    url: "#",
  },
  {
    name: "Besara",
    logo: "/logos/besara.png",
    description: "Accounting and business development",
    url: "#",
  },
  {
    name: "E14 Invest",
    logo: "/logos/e14invest.png",
    description: "Real estate investment",
    url: "#",
  },
  {
    name: "Jord",
    logo: "/logos/jord.png",
    description: "Sustainable land management",
    url: "#",
  },
  {
    name: "FitWise",
    logo: "/logos/fitwise.png",
    description: "Health and fitness technology",
    url: "#",
  },
];

export const metadata = {
  title: "Portfolio | Blue Cabinet",
  description: "Companies backed by Blue Cabinet.",
};

export default function PortfolioPage() {
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
              className="text-sm font-medium text-accent-primary"
            >
              Portfolio
            </Link>
            <Link
              href="/team"
              className="text-sm font-medium text-text-secondary hover:text-accent-primary transition-colors"
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
              Portfolio
            </p>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-text-primary mb-6">
              Our Investments
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              We back founders building at the intersection of public policy and
              technology. Here are the companies we are proud to support.
            </p>
          </div>
        </section>

        {/* Logo grid */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {investments.map((company) => (
                <a
                  key={company.name}
                  href={company.url}
                  target={company.url !== "#" ? "_blank" : undefined}
                  rel={company.url !== "#" ? "noopener noreferrer" : undefined}
                  className="group border border-border rounded-xl p-6 hover:border-accent-primary/30 hover:shadow-lg hover:shadow-accent-primary/5 transition-all duration-300 bg-white"
                >
                  <div className="flex items-center justify-center h-24 mb-4">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={160}
                      height={80}
                      className="object-contain max-h-16 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-text-primary mb-1">
                      {company.name}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {company.description}
                    </p>
                  </div>
                  {company.url !== "#" && (
                    <div className="mt-3 text-center">
                      <span className="text-xs text-accent-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Visit website &rarr;
                      </span>
                    </div>
                  )}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 border-t border-border">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="text-lg text-text-secondary mb-6">
              Interested in co-investing with us?
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
