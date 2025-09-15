// ===============================
// StatsSection.jsx (fixed)
// ===============================
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

// simple counter hook with requestAnimationFrame
function useCounter(target = 0, { duration = 1200, inView = false } = {}) {
  const [value, setValue] = useState(0);
  const startRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!inView) return;

    const step = (ts) => {
      if (startRef.current === null) startRef.current = ts;
      const progress = Math.min((ts - startRef.current) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // cubic easeOut
      setValue(Math.floor(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      startRef.current = null;
    };
  }, [target, duration, inView]);

  return value;
}

function CounterCard({ target, label, suffix = "", prefix = "", hint }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  const value = useCounter(target, { duration: 1500, inView });

  return (
    <div
      ref={ref}
      className="relative rounded-2xl bg-white border border-gray-200 shadow-sm p-8 md:p-10"
    >
      <div className="text-5xl md:text-6xl font-bold text-gray-900">
        {prefix}
        {value.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-4 text-lg font-medium text-gray-900">{label}</div>
      {hint && <p className="mt-2 text-sm text-gray-500">{hint}</p>}
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="w-full bg-[#0b0e14] py-16 md:py-24 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <CounterCard
          target={10}
          suffix="+ Years"
          label="of Industry Experience"
          hint="Delivering reliable, senior-led execution since day one."
        />
        <CounterCard
          target={500}
          suffix="+"
          label="Legacy Processes Transformed"
          hint="Replatforming and modernizing workflows across teams."
        />
        <CounterCard
          target={3000}
          suffix="+"
          label="Custom Projects Delivered"
          hint="From rapid MVPs to enterprise-grade builds."
        />
        <CounterCard
          target={950}
          prefix="$"
          suffix="M+"
          label="Funding Raised for Clients"
          hint="Products that convert traction into capital."
        />
        <CounterCard
          target={50}
          suffix="+"
          label="Awards and Certifications"
          hint="Recognized craft, verified expertise."
        />
        <CounterCard
          target={98}
          suffix="%"
          label="Client Retention"
          hint="Long-term partnerships built on outcomes and trust."
        />
      </div>
    </section>
  );
}
