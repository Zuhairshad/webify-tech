// src/components/IndustriesSection.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function IndustryCard({ title, blurb, more, href }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
      {/* Toggle */}
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        className="w-full p-5 flex items-start justify-between gap-4"
        aria-expanded={open}
      >
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-blue-600"></span>
            <h3 className="text-base font-medium text-slate-900">{title}</h3>
          </div>
          <p className="mt-2 text-sm text-slate-600">{blurb}</p>
        </div>

        <svg
          className={`mt-1 h-5 w-5 text-slate-500 transition-transform ${
            open ? "rotate-180" : ""
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {/* Accordion content */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0, y: -6 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -6 }}
            transition={{ duration: 0.22 }}
          >
            <div className="px-5 pb-5 pt-0 text-sm text-slate-700">
              <p className="mb-4">{more}</p>
              {href && (
                <a
                  href={href}
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                  Learn more
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4.5 12h15M19.5 12l-6.75-6.75M19.5 12l-6.75 6.75" />
                  </svg>
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const ITEMS = [
  {
    title: "Not-For-Profit",
    blurb: "All NFPs receive 10% discount as a token of our support",
    more:
      "We tailor sites and branding for nonprofits, focusing on clear storytelling, donations, and impact—built to scale and easy to manage.",
    href: "https://www.brandvm.com/industry/not-for-profit-marketing",
  },
  {
    title: "Real Estate & Construction",
    blurb: "Pioneers in real estate web design and marketing",
    more:
      "Market-ready websites, listings UX, and lead-gen funnels aligned to how buyers search and evaluate properties today.",
    href: "https://www.brandvm.com/real-estate-marketing",
  },
  {
    title: "B2B",
    blurb: "Custom Web Design & Branding for B2B",
    more:
      "Positioning, message architecture, and high-converting sites that shorten complex sales cycles.",
    href: "https://www.brandvm.com/industry/b2b-marketing",
  },
  {
    title: "E-Commerce",
    blurb: "Boost your online sales with the perfect website",
    more:
      "Conversion-first storefronts with secure checkout, merchandising, and analytics baked in.",
    href: "https://www.brandvm.com/industry/e-commerce-marketing",
  },
  {
    title: "Education",
    blurb: "Elevating the impact of marketing in educational institutions",
    more:
      "Accessible, content-rich sites for schools and programs with clear journeys for applicants and parents.",
    href: "https://www.brandvm.com/industry/education-marketing",
  },
  {
    title: "Technology",
    blurb: "Content audit included with all web design packages",
    more:
      "Credible, developer-friendly sites for product marketing, docs, and enterprise trust signals.",
    href: "https://www.brandvm.com/industry/technology-marketing",
  },
  {
    title: "Business-to-Consumer",
    blurb: "Competitor conversion points analysis included",
    more:
      "Brand and site experiences that translate attention into repeat customers.",
    href: "https://www.brandvm.com/industry/b2c-marketing",
  },
  {
    title: "Health & Wellness",
    blurb: "Creating user friendly websites for health care industry",
    more:
      "HIPAA-aware UX and clear service paths for clinics, practices, and wellness brands.",
    href: "https://www.brandvm.com/industry/health-wellness-marketing",
  },
  {
    title: "Law",
    blurb: "Portraying trust & confidence through marketing",
    more:
      "Reputation-forward sites, practice area pages, and intake flows that build confidence.",
    href: "https://www.brandvm.com/industry/law-marketing",
  },
  {
    title: "Food & Beverage",
    blurb: "Marketing material curated for food & beverage industry",
    more:
      "Menu UX, locations, and visuals that capture taste and drive footfall or orders.",
    href: "https://www.brandvm.com/industry/food-and-beverage-marketing",
  },
  {
    title: "Professional Services",
    blurb: "Specializing in helping professional services win work",
    more:
      "From positioning to proposals: sites that convert complex B2B decisions into signed engagements.",
    href: "https://www.brandvm.com/industry/professional-services-marketing",
  },
  {
    title: "Entertainment & Media",
    blurb: "#1 agency for Interactive design and development",
    more:
      "Motion-rich, pop-culture aware sites with seamless performance and accessibility.",
    href: "https://www.brandvm.com/industry/entertainment-marketing",
  },
  {
    title: "StartUps",
    blurb: "Startup Marketing Agency",
    more:
      "Zero-to-one brand, narrative, and site—built to iterate fast across GTM stages.",
    href: "https://www.brandvm.com/industry/startups-marketing",
  },
  {
    title: "Sports & Fitness",
    blurb: "Web Design that adds excitement to the business",
    more:
      "Energetic visuals and booking funnels for gyms, camps, resorts, and franchises.",
    href: "https://www.brandvm.com/industry/sports-fitness-marketing",
  },
  {
    title: "Travel & Hospitality",
    blurb: "Elevating the impact of marketing in educational institutions",
    more:
      "Location pages, offers, and review trust woven into a premium booking experience.",
    href: "https://www.brandvm.com/industry/travel-hospitality-marketing",
  },
];

export default function IndustriesSection() {
  return (
    <section className="py-10 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-sm font-medium text-slate-500">Industries</div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            Industries We Collaborate With
          </h2>
          <p className="mt-4 text-base text-slate-600">
            As a company with over a decade of experience, we’re proud to have
            partnered across many industries—expanding our expertise and
            delivering excellent results for our clients.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((it) => (
            <IndustryCard key={it.title} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}
