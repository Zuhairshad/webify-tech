// ServicesSection.jsx
import { useState } from "react";

function ExactServiceCard({
  title,
  intro,
  more,
  tags = [],
  primary = { label: "Learn more", href: "#" },
  secondary = { label: "View Our Work", href: "#" },
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-full w-auto rounded-2xl border border-slate-200 bg-grey-400 px-10 py-8 xl:px-12 xl:py-10 shadow-md">
      {/* Title */}
      <h2 className="text-2xl lg:text-2xl font-bold mb-4 text-slate-900">
        {title}
      </h2>

      {/* Intro + Read More */}
      <p className="text-base lg:text-lg leading-7 lg:leading-8 text-slate-700">
        {intro}
      </p>

      <button
        type="button"
        className="mt-2 text-sm font-semibold underline text-slate-600"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "Read less" : "Read more"}
      </button>

      {open && (
        <p className="mt-3 text-base leading-7 text-slate-700">{more}</p>
      )}

      {/* Tag pills */}
      {!!tags.length && (
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* CTAs */}
      <div className="mt-5 flex items-center justify-between">
        <a
          href={primary.href}
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
        >
          {primary.label}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            className="opacity-70"
          >
            <path
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <a
          href={secondary.href}
          className="text-sm font-semibold text-slate-600 hover:text-slate-900 underline"
        >
          {secondary.label}
        </a>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const NAV_OFFSET_PX = 88;

  const services = [
    {
      title: "Web Design & Development",
      intro:
        "We redefine what it means to work with a web design agency. Our award-winning team combines creativity and technical expertise to craft digital experiences that captivate your audience.",
      more:
        "Whether you need a sleek, modern platform or a robust e-commerce solution, our commitment to excellence ensures polish and performance.",
      tags: ["WordPress", "Webflow", "UI/UX", "React.js", "Next.js", "Magento"],
      primary: { label: "Web Design Service", href: "/web-design" },
      secondary: { label: "View Our Work", href: "/our-work-portfolio" },
    },
    {
      title: "Search Engine Optimization (SEO)",
      intro:
        "A successful website starts with a carefully crafted SEO strategy to improve visibility and user experience.",
      more:
        "We optimize crawlability, site speed, and Core Web Vitals while building intent-driven content that ranks and converts.",
      tags: ["Technical SEO", "On-page", "Content"],
      primary: { label: "See Plans", href: "#" },
      secondary: { label: "Read More", href: "#" },
    },
    {
      title: "Visual Branding",
      intro: "We create cohesive, memorable visual identities that resonate.",
      more:
        "From logos and typography to palettes and style guides, we deliver consistent, documented systems your team can rely on.",
      tags: ["Logo Design", "Typography", "Style Guide"],
      primary: { label: "Learn More", href: "/branding" },
      secondary: { label: "See Work", href: "#" },
    },
    {
      title: "Brand Research & Strategy",
      intro: "Positioning, insights, and messaging frameworks that align teams.",
      more:
        "We conduct market analysis, define value props, and craft narratives that differentiate and inspire.",
      tags: ["Positioning", "Competitor Analysis", "Messaging"],
      primary: { label: "Learn More", href: "/branding" },
      secondary: { label: "View Insights", href: "#" },
    },
    {
      title: "Consultation & Audit",
      intro: "One-on-one sessions to diagnose challenges and set priorities.",
      more:
        "We deliver design/code audits, growth strategies, and prioritized roadmaps tailored to your context.",
      tags: ["Design Review", "Code Audit", "Roadmap"],
      primary: { label: "Book a Call", href: "/consultation" },
      secondary: { label: "Learn More", href: "#" },
    },
    {
      title: "UI / UX",
      intro: "User-centric flows that drive engagement and conversions.",
      more:
        "Wireframes, prototypes, usability tests, and design systems—crafted for performance and delight.",
      tags: ["Wireframes", "Prototypes", "Usability", "Systems"],
      primary: { label: "See Process", href: "/ui-ux" },
      secondary: { label: "Learn More", href: "#" },
    },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16">
        <h2 className="text-center text-5xl font-bold mb-12 text-slate-900">
          Webify Tech Creative Services
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
          {/* LEFT sticky info panel */}
          <aside
            className="hidden lg:block lg:col-span-1 self-start"
            style={{ position: "sticky", top: NAV_OFFSET_PX }}
          >
            <div className="space-y-4 bg-white">
              <div className="text-xs uppercase tracking-wide text-slate-500">
                Our Services
              </div>
              <p className="text-xl font-semibold text-slate-900">
                Customized &amp; creative marketing solutions for businesses
              </p>

              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1200&auto=format&fit=crop"
                  alt="Featured project"
                  className="w-full h-60 object-cover"
                  loading="lazy"
                />
                <div className="p-5">
                  <div className="text-sm font-semibold text-slate-900">
                    Leaside Blvd
                  </div>
                  <a
                    href="#"
                    className="mt-2 inline-block text-sm font-semibold underline text-slate-700"
                  >
                    Read Our Case
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white"
                >
                  Request a Proposal
                </a>
                <a href="#" className="text-sm text-slate-700">
                  Contact Us
                </a>
              </div>
            </div>
          </aside>

          {/* RIGHT cards */}
          <div className="lg:col-span-2">
            {/* CHANGED: fewer columns overall so each card is wider */}
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-12">
              {services.map((s) => (
                <ExactServiceCard key={s.title} {...s} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
