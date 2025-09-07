// src/components/Navbar.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // heights (Tailwind h-28 = 112px, h-20 = 80px)
  const H_EXPANDED = 112;
  const H_COMPACT = 80;

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [mobileOpen]);

  // set CSS var --nav-h so floating pill can position; hero should NOT use it
  useEffect(() => {
    const apply = () =>
      document.documentElement.style.setProperty(
        "--nav-h",
        `${window.scrollY > 10 ? H_COMPACT : H_EXPANDED}px`
      );
    apply();
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      apply();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const link = `text-[15px] sm:text-sm transition-colors ${
    scrolled
      ? "text-slate-700 hover:text-slate-900"
      : "text-slate-200 hover:text-white"
  }`;

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white text-slate-900 border-b border-slate-200 shadow-sm"
          : "bg-transparent text-white",
      ].join(" ")}
    >
      {/* Top bar (height animates) */}
      <div
        className={[
          "mx-auto w-full max-w-7xl flex items-center justify-between px-3 sm:px-4 md:px-[10px] transition-all duration-300",
          scrolled ? "h-16 sm:h-20" : "h-[88px] sm:h-28",
        ].join(" ")}
      >
        {/* Brand */}
        <a href="/" className="flex items-center gap-1 !pl-0 min-w-0">
          <span
            className={`font-['Dancing_Script'] tracking-tight block truncate ${
              scrolled
                ? "text-[clamp(22px,4vw,30px)] text-slate-900"
                : "text-[clamp(26px,5vw,36px)] text-white"
            }`}
          >
            Webify Tech
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
          <a href="/" className={link}>
            Home
          </a>

          <button
            type="button"
            onClick={() =>
              setOpenDropdown(openDropdown === "services" ? null : "services")
            }
            aria-expanded={openDropdown === "services"}
            aria-controls="services-menu"
            className={`${link} inline-flex items-center gap-1`}
          >
            Services
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              className={`transition ${openDropdown === "services" ? "rotate-180" : ""}`}
            >
              <path
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <a href="/about" className={link}>
            About Us
          </a>
          <a href="/our-work-portfolio" className={link}>
            Work
          </a>
          <a href="/contact" className={link}>
            Contact
          </a>

          <a
            href="/contact"
            className={
              scrolled
                ? "px-4 py-2 rounded-xl bg-black text-white text-sm font-medium hover:opacity-90"
                : "px-4 py-2 rounded-xl bg-white text-black text-sm font-medium hover:opacity-90"
            }
          >
            Request a Proposal
          </a>
        </nav>

        {/* Mobile actions */}
        <div className="lg:hidden flex items-center gap-2 sm:gap-3">
          <a
            href="/contact"
            className={
              scrolled
                ? "px-3 py-2 rounded-xl bg-black text-white text-sm hover:opacity-90"
                : "px-3 py-2 rounded-xl border border-white/20 text-sm text-white hover:bg-white/10"
            }
          >
            Proposal
          </a>
          <button
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => {
              setMobileOpen((v) => !v);
              setOpenDropdown(null);
            }}
            className={
              scrolled
                ? "px-3 py-2 rounded-xl border border-slate-300 text-sm text-slate-800 hover:bg-slate-100"
                : "px-3 py-2 rounded-xl border border-white/20 text-sm text-slate-200 hover:bg-white/10"
            }
          >
            Menu
          </button>
        </div>
      </div>

      {/* Floating logo pill positioned just under nav height (hide on xs to avoid overlap) */}
      <div
        className="pointer-events-none absolute left-0 right-0 hidden sm:block"
        style={{ top: "var(--nav-h)" }}
      >
        <div className="mx-auto w-full max-w-7xl px-3 sm:px-4 md:px-[10px]">
          <div className="flex justify-end">
            <a
              href="/"
              className="pointer-events-auto inline-flex items-center gap-2 rounded-full px-3 py-2 shadow-md"
              style={{
                background: scrolled ? "#0B1220" : "rgba(255,255,255,0.12)",
                border: scrolled
                  ? "1px solid rgba(15,23,42,0.2)"
                  : "1px solid rgba(255,255,255,0.25)",
                color: "#fff",
                backdropFilter: "saturate(140%) blur(6px)",
              }}
            >
              <span className="inline-grid place-items-center h-6 w-6 rounded-full bg-white text-black text-xs font-bold">
                WT
              </span>
              <span className="text-xs font-medium">Webify Tech</span>
            </a>
          </div>
        </div>
      </div>

      {/* Desktop dropdown (desktop only) */}
      <div
        id="services-menu"
        onMouseLeave={() => setOpenDropdown(null)}
        className={`hidden lg:block absolute inset-x-0 top-full border-t transition duration-200 ${
          scrolled
            ? "bg-white border-slate-200 shadow"
            : "bg-[#151515] border-white/10 shadow-soft"
        } ${
          openDropdown === "services"
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="mx-auto w-full max-w-7xl px-4 md:px-[10px] py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 xl:gap-8">
            {[
              ["Website Design", ["Website Design", "Website Development", "Mock Ups", "Prototyping"]],
              ["Branding", ["Research & Strategy", "Visual Identity", "Brand Identity"]],
              ["UI/UX", ["User Research", "Interaction Design", "Prototyping"]],
              ["Consultation & Audit", ["Business Consultation", "Website Audit", "Brand Audit"]],
            ].map(([title, items]) => (
              <a href="#" className="block min-w-0" key={title}>
                <div className={scrolled ? "text-slate-900 font-semibold" : "text-white font-semibold"}>
                  {title}
                </div>
                <div
                  className={`mt-2 space-y-1 text-sm ${
                    scrolled ? "text-slate-600/90" : "text-slate-300/80"
                  }`}
                >
                  {items.map((it) => (
                    <div key={it} className="truncate">
                      {it}
                    </div>
                  ))}
                </div>
              </a>
            ))}
            <a
              href="https://seo.brandvm.com/"
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              <div className={scrolled ? "text-slate-900 font-semibold" : "text-white font-semibold"}>
                SEO
              </div>
              <div
                className={`mt-2 space-y-1 text-sm ${
                  scrolled ? "text-slate-600/90" : "text-slate-300/80"
                }`}
              >
                <div>Technical SEO</div>
                <div>On-Page SEO</div>
                <div>Off-Page SEO</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-[max-height,opacity] duration-300 overflow-hidden ${
          mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        } ${scrolled ? "border-t border-slate-200 bg-white" : "border-t border-white/10 bg-[#0B1220]"}`}
      >
        <div className="mx-auto w-full max-w-7xl px-3 sm:px-4 md:px-[10px] py-4 space-y-1">
          <a href="/" className={`${link} block py-2`}>Home</a>
          <a href="/about" className={`${link} block py-2`}>About Us</a>
          <a href="/our-work-portfolio" className={`${link} block py-2`}>Work</a>
          <a href="/contact" className={`${link} block py-2`}>Contact</a>
        </div>
      </div>
    </motion.header>
  );
}
