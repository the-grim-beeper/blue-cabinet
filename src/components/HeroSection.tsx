"use client";

import { useEffect, useRef } from "react";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let nodes: { x: number; y: number; vx: number; vy: number; type: "policy" | "tech" | "intersection" }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const initNodes = () => {
      nodes = [];
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      // Create nodes
      for (let i = 0; i < 25; i++) {
        const type = i < 8 ? "policy" : i < 16 ? "tech" : "intersection";
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          type,
        });
      }
    };

    const animate = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      ctx.clearRect(0, 0, width, height);

      // Update positions
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
      });

      // Draw connections
      ctx.strokeStyle = "rgba(30, 58, 95, 0.08)";
      ctx.lineWidth = 1;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            const opacity = (1 - dist / 150) * 0.15;

            // Highlight connections between different types
            if (nodes[i].type !== nodes[j].type) {
              ctx.strokeStyle = `rgba(30, 58, 95, ${opacity * 2})`;
            } else {
              ctx.strokeStyle = `rgba(30, 58, 95, ${opacity})`;
            }

            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((node) => {
        ctx.beginPath();

        let radius = 3;
        let color = "rgba(30, 58, 95, 0.3)";

        if (node.type === "policy") {
          color = "rgba(30, 58, 95, 0.4)";
          radius = 4;
        } else if (node.type === "tech") {
          color = "rgba(44, 82, 130, 0.4)";
          radius = 4;
        } else {
          color = "rgba(30, 58, 95, 0.7)";
          radius = 6;
        }

        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    resize();
    initNodes();
    animate();

    window.addEventListener("resize", () => {
      resize();
      initNodes();
    });

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-bg-secondary overflow-hidden">
      {/* Animated network background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.7 }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-secondary via-transparent to-bg-secondary pointer-events-none" />

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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
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
