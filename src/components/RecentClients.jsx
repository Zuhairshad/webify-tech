// src/components/RecentClients.jsx
import { motion } from "framer-motion";

const awards = [
  { href: "https://www.awwwards.com/brandvision/", src: "https://cdn.prod.website-files.com/630bc5625ada9a1e2dbb10a6/661d47db67d58ced2f661103_Awwwards%20Logo.svg", alt: "Awwwards" },
  { href: "https://clutch.co/profile/brand-vision-1#reviews", src: "https://cdn.prod.website-files.com/630bc5625ada9a1e2dbb10a6/661d47dcfa8d01daa6b85a7a_Clutch%20Logo.svg", alt: "Clutch" },
  { href: "https://g.co/kgs/qXiLS2M", src: "https://cdn.prod.website-files.com/630bc5625ada9a1e2dbb10a6/661d47dc8bd93e0c3ceb94df_Generic%20Award.svg", alt: "Award" },
  { href: "https://g.co/kgs/qXiLS2M", src: "https://cdn.prod.website-files.com/630bc5625ada9a1e2dbb10a6/661d47db1a93a19ceda6299b_Google%20Reviews%20Logo.svg", alt: "Google Reviews" },
];

const gridLogos = [
  "https://cdn.prod.website-files.com/630d4d1c4a462569dd189855/66e34a5bfbf4334bf295800b_Arcelor%20Mittal.svg",
  "https://cdn.prod.website-files.com/630d4d1c4a462569dd189855/66c778d1995629f0ac0c46e3_Safeway.avif",
  "https://cdn.prod.website-files.com/630d4d1c4a462569dd189855/66c778a931a885226c7d3db0_Alberta%20Municipalities.avif",
  "https://cdn.prod.website-files.com/630d4d1c4a462569dd189855/66c778945faeaa3e5b96c736_Albertsons.avif",
  "https://cdn.prod.website-files.com/630d4d1c4a462569dd189855/6631621fdbf64dbf0e571c2e_uc.avif",
  "https://cdn.prod.website-files.com/630d4d1c4a462569dd189855/6631621e88a422d4ecabd0bc_uc.avif",
  "https://cdn.prod.website-files.com/630d4d1c4a462569dd189855/682208b22bb5458719450ff8_TDSB.png",
  "https://cdn.prod.website-files.com/630d4d1c4a462569dd189855/6631621de2451c92a69210b3_uc.avif",
];

function LogoTile({ src, alt }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="rounded-xl bg-[#0f0f10] border border-white/5 shadow-sm overflow-hidden
                 flex items-center justify-center aspect-[16/7] w-full"
    >
      <img
        src={src}
        alt={alt || "Client logo"}
        style={{ height: "var(--gridLogoH)" }}
        className="w-auto opacity-90"
        loading="lazy"
      />
    </motion.div>
  );
}
// ---- NEW MarqueeRow (no tiles, fixed height, big logos) ----
function MarqueeRow({ items, speed = 10 }) {
  return (
    <div className="relative overflow-hidden group min-h-[var(--logoH)]">
      {/* soft edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent" />

      <div
        className="flex gap-24 items-center whitespace-nowrap will-change-transform animate-marquee"
        style={{ ["--speed"]: `${speed}s` }}
      >
        {[...items, ...items].map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Client logo"
            style={{ height: "var(--logoH)" }}      // << fixed height
            className="block w-auto object-contain opacity-100"
            loading="eager"
            decoding="async"
          />
        ))}
      </div>

      {/* pause on hover */}
      <style>{`.group:hover .animate-marquee{animation-play-state:paused}`}</style>
    </div>
  );
}

export default function RecentClients() {
  return (
    <section
    className="
    bg-black text-white
    py-36 md:py-48
    [--logoH:88px]
    sm:[--logoH:100px]
    md:[--logoH:112px]
    lg:[--logoH:124px]
    [--gridLogoH:theme(spacing.14)]
    sm:[--gridLogoH:theme(spacing.16)]
    md:[--gridLogoH:theme(spacing.20)]
    lg:[--gridLogoH:theme(spacing.24)]
  "
  data-theme="dark"
    >
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="grid lg:grid-cols-12 gap-10 text-2xl">
          {/* Left: title + awards */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-300/70">
                Clients &amp; Achievements
              </p>
              <h2 className="mt-2 text-3xl md:text-6xl font-semibold">
                Our Recent Clients
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
              {awards.map((a) => (
                <a
                  key={a.alt}
                  href={a.href}
                  target="_blank"
                  rel="noreferrer"
                  className="opacity-80 hover:opacity-100 transition"
                >
                  <img src={a.src} alt={a.alt} className="h-8 w-auto" loading="lazy" />
                </a>
              ))}
            </div>
          </div>

          {/* Right: grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {gridLogos.map((src, i) => (
                <LogoTile key={i} src={src} />
              ))}
            </div>
          </div>
        </div>

        {/* separator */}
        <div className="my-16 h-px w-full bg-white/5" />

        {/* Carousel uses same gridLogos */}
        <MarqueeRow items={gridLogos} speed={10} />
      </div>
    </section>
  );
}
