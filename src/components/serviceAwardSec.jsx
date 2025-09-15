// HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";

// ✅ Carousel row (copied/adapted from RecentClients.jsx)
function MarqueeRow({ items, speed = 12 }) {
  return (
    <div className="relative overflow-hidden group min-h-[88px] mt-12">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent" />

      <div
        className="flex gap-24 items-center whitespace-nowrap will-change-transform animate-marquee"
        style={{ ["--speed"]: `${speed}s` }}
      >
        {[...items, ...items].map((label, i) => (
          <div
            key={i}
            className="shrink-0 w-[220px] md:w-[260px] text-center"
          >
            <img
              src={label}
              alt={`Logo ${i}`}
              className="h-16 mx-auto object-contain"
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee var(--speed) linear infinite;
        }
        .group:hover .animate-marquee{ animation-play-state: paused; }
      `}</style>
    </div>
  );
}

const AwardSec = ({ topText, heading, subHeading, description }) => {
  // ✅ Example logos (replace with yours)
  const logos = [
    "https://dripzclub.com/wp-content/uploads/2025/09/Screenshot-2025-08-29-175157.png",
    "https://dripzclub.com/wp-content/uploads/2025/09/Screenshot-2025-08-29-175128.png",
    "https://dripzclub.com/wp-content/uploads/2025/09/Screenshot-2025-08-29-175106.png",
    "https://dripzclub.com/wp-content/uploads/2025/09/Screenshot-2025-08-29-175026.png",
    "https://dripzclub.com/wp-content/uploads/2025/09/Screenshot-2025-08-29-175255.png",
  ];

  return (
    <section className="w-full bg-slate-50 font-Inter text-slate-900 px-12 py-28">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center space-y-6">
          {topText && (
            <p className="md:text-lg font-semibold text-slate-700 text-sm">
              {topText}
            </p>
          )}

          <h5 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
            {heading}{" "}
            <span className="block text-slate-600">{subHeading}</span>
          </h5>

          <div className="max-w-3xl mx-auto">
            <p className="text-base text-slate-700 leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* ✅ Carousel Section */}
        <MarqueeRow items={logos} speed={12} />
      </div>
    </section>
  );
};

export default AwardSec;
