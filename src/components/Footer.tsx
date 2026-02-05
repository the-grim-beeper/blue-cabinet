const navLinks = [
  { label: "About", href: "#about" },
  { label: "Thesis", href: "#thesis" },
  { label: "Co-Invest", href: "#co-invest" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-primary">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <span className="font-serif text-sm tracking-[0.25em] uppercase font-bold text-accent-primary">
              Blue Cabinet
            </span>
            <p className="mt-3 text-sm text-text-secondary leading-relaxed">
              Angel investing where policy meets technology.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-text-tertiary font-sans font-semibold mb-4">
              Navigation
            </h4>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-text-secondary hover:text-accent-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-text-tertiary font-sans font-semibold mb-4">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:info@bluecabinet.se"
                className="text-sm text-text-secondary hover:text-accent-primary transition-colors"
              >
                info@bluecabinet.se
              </a>
              <span className="text-sm text-text-secondary">
                Stockholm, Sweden
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-tertiary">
            &copy; 2026 Blue Cabinet. All rights reserved.
          </p>
          <a
            href="#"
            className="text-xs text-text-tertiary hover:text-text-secondary transition-colors"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
