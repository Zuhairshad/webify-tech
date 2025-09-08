import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Reusable service block (title + description + image + tags)
const ServiceSection = ({ title, eyebrow, description, tags, image, reverse }) => {
  return (
    <div className="flex flex-col md:flex-col lg:flex-row items-center justify-between px-6 md:px-8 lg:px-12 py-12  lg:py-20  h-full">
      {/* Left side text */}
      <div
        className={`max-w-xl mb-8 md:mb-0 ${
          reverse ? "md:order-2 md:pl-6 lg:pl-12" : "md:order-1 md:pr-6 lg:pr-12"
        }`}
      >
        {eyebrow && <p className="text-sm text-gray-400 mb-2">{eyebrow}</p>}
        <h2 className="text-3xl md:text-6xl font-semibold text-gray-900 mb-6">
          {title}
        </h2>
        <p className="text-gray-500 text-lg leading-relaxed mb-6">{description}</p>

        {/* Tags */}
        {tags?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Right side image */}
      <div
        className={`w-full md:w-1/2 flex justify-center ${
          reverse ? "md:order-1" : "md:order-2"
        }`}
      >
        <img
          src={image}
          alt={title}
          className="rounded-2xl shadow-lg object-contain w-64 sm:w-80 md:w-96 lg:w-[22rem]"
        />
      </div>
    </div>
  );
};

const ScrollSection = ({ sections }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Animation for the second section
  const y = useTransform(scrollYProgress, [0.3, 0.7], ["100%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);

  return (
    <div ref={ref} className="relative">
      {/* First section (static sticky) */}
      <div className="sticky top-0 min-h-screen bg-white flex items-center">
        <ServiceSection {...sections[0]} />
      </div>

      {/* Second section (slides in) */}
      <motion.div
        style={{ y, opacity }}
        className="sticky top-0 min-h-screen bg-white flex items-center"
      >
        <ServiceSection {...sections[1]} />
      </motion.div>
    </div>
  );
};

export default ScrollSection;
