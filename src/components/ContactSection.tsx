"use client";

import { useState, FormEvent } from "react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Blue Cabinet inquiry from ${name}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nType: ${type || "Not specified"}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:info@bluecabinet.se?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-bg-secondary"
      style={{ scrollMarginTop: "80px" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left column */}
          <div className="flex flex-col justify-center">
            <SectionHeading
              label="Get in Touch"
              heading="Start a Conversation"
              description="Whether you are a founder building at the intersection of policy and technology, or an investor seeking co-investment opportunities, we would like to hear from you."
            />

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-muted flex items-center justify-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-accent-primary"
                  >
                    <path
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <a
                  href="mailto:info@bluecabinet.se"
                  className="text-text-secondary hover:text-accent-primary transition-colors"
                >
                  info@bluecabinet.se
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-muted flex items-center justify-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-accent-primary"
                  >
                    <path
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-text-secondary">Stockholm, Sweden</span>
              </div>
            </div>
          </div>

          {/* Right column: form */}
          <div className="border border-border rounded-xl p-8 bg-bg-primary">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-text-secondary mb-2"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-text-secondary mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="type"
                  className="block text-sm text-text-secondary mb-2"
                >
                  I am a...
                </label>
                <select
                  id="type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="">Select one</option>
                  <option value="Founder seeking investment">
                    Founder seeking investment
                  </option>
                  <option value="Investor seeking co-investment">
                    Investor seeking co-investment
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-text-secondary mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about yourself and what brings you here..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-lg bg-accent-primary hover:bg-accent-dark text-white font-medium transition-colors"
              >
                Send Message
              </button>

              <p className="text-xs text-text-tertiary text-center">
                This will open your email client with your message pre-filled.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
