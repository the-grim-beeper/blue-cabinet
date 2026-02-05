import Image from "next/image";
import Link from "next/link";

const investments = [
  { name: "Warp News", logo: "/logos/warp-news.png" },
  { name: "Civic Marketplace", logo: "/logos/civic-marketplace.png" },
  { name: "Source.", logo: "/logos/source.png" },
  { name: "Strive", logo: "/logos/strive.png" },
  { name: "Kausable", logo: "/logos/kausable.png" },
  { name: "FenoMark Diagnostics", logo: "/logos/fenomark.png" },
  { name: "Besara", logo: "/logos/besara.png" },
  { name: "E14 Invest", logo: "/logos/e14invest.png" },
  { name: "Jord", logo: "/logos/jord.png" },
  { name: "FitWise", logo: "/logos/fitwise.png" },
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
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {investments.map((company) => (
                <div
                  key={company.name}
                  className="border border-border rounded-xl p-6 flex items-center justify-center aspect-[4/3] hover:border-border-hover transition-colors bg-white"
                >
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={180}
                    height={100}
                    className="object-contain max-h-20"
                  />
                </div>
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
