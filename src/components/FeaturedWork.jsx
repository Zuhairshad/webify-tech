// src/components/FeaturedWork.jsx
import { Fragment } from "react";

const items = [
  {
    tagPrimary: "Website",
    tagSecondary: "Branding",
    title: "Safeway (Albertsons)",
    blurb:
      "Website Redesign & B2B Customer Experience for a National Grocery Brand",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2400&auto=format&fit=crop",
    caseHref: "#",
    liveHref: "#",
  },
  {
    tagPrimary: "Website",
    tagSecondary: "Branding",
    title: "Mostardi Platt",
    blurb:
      "Website Design & Brand Refresh for an Environmental Consultancy",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2400&auto=format&fit=crop",
    caseHref: "#",
    liveHref: "#",
  },
  {
    tagPrimary: "Website",
    title: "ArcelorMittal",
    blurb:
      "Website Design for the World’s Leading Steel Manufacturer",
    // 🔧 fixed image (previous link intermittently fails)
    image:
      "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8S1V6ZDl5RUZUQXN8ZW58MHx8MHx8&auto=format&fit=crop&w=2400&q=80",
    caseHref: "#",
    liveHref: "#",
  },
  {
    tagPrimary: "Website",
    title: "Flipp",
    blurb: "Web Design and Development for a Professional Business",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2400&auto=format&fit=crop",
    caseHref: "#",
    liveHref: "#",
  },
  {
    tagSecondary: "Branding",
    title: "2992 Sheppard",
    blurb: "Branding for Real Estate Project",
    image:
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=2400&auto=format&fit=crop",
    caseHref: "#",
    liveHref: null,
  },
];

export default function FeaturedWork() {
  const stickyTop = "calc(var(--nav-h, 80px) + 16px)";

  return (
    <section className="section bg-white py-16 lg:py-24">
      {/* ⬅ widen page container */}
      <div className="mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-8">
        {/* ⬅ give more space to the cards: 3 / 9 split */}
        <div className="grid grid-cols-12 gap-8 lg:gap-10">
          <aside
            className="col-span-12 lg:col-span-3 self-start sticky"
            style={{ top: stickyTop }}
          >
            <div className="space-y-6">
              <div>
                <span className="text-2xl tracking-wide uppercase text-slate-500">
                  Featured Work
                </span>
                <h2 className="mt-3 text-2xl leading-snug text-slate-900 font-medium">
                  Our goal is to nurture your vision and provide innovative,
                  custom solutions for all your marketing needs.
                </h2>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-white text-sm font-semibold hover:bg-blue-700 transition"
                >
                  <span className="p-2">Request a Proposal</span>
                  <Chevron />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-slate-800 text-sm font-semibold hover:bg-slate-50 transition"
                >
                  <span>Contact Us</span>
                  <Chevron />
                </a>
              </div>
            </div>
          </aside>

          <div className="col-span-12 lg:col-span-9 space-y-10">
            {items.map((p, i) => (
              <ProjectCard key={i} {...p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  tagPrimary,
  tagSecondary,
  title,
  blurb,
  image,
  caseHref,
  liveHref,
}) {
  return (
    <article className="group relative overflow-hidden rounded-[20px]">
      <img
        src={image}
        alt={title}
        className="h-[600px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
      />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black/40 to-transparent" />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 md:p-9">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
          <div className="max-w-2xl">
            <div className="flex flex-wrap gap-2">
              {tagPrimary && (
                <span className="rounded-full bg-white/15 px-2.5 py-1 text-[11px] uppercase tracking-wide text-white ring-1 ring-white/20">
                  {tagPrimary}
                </span>
              )}
              {tagSecondary && (
                <span className="rounded-full bg-white/15 px-2.5 py-1 text-[11px] uppercase tracking-wide text-white ring-1 ring-white/20">
                  {tagSecondary}
                </span>
              )}
            </div>

            <h3 className="mt-3 text-2xl md:text-3xl font-semibold text-white drop-shadow-sm">
              {title}
            </h3>
            <p className="mt-2 text-sm md:text-base text-white/85 max-w-xl">
              {blurb}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={caseHref || "#"}
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-md hover:shadow-lg transition"
            >
              Read Our Case
              <Chevron />
            </a>

            {liveHref && (
              <a
                href={liveHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-black/70 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur hover:bg-black/80 transition"
              >
                Live Site
                <Chevron />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function Chevron() {
  return (
    <svg viewBox="0 0 24 24" className="h-3 w-3">
      <g strokeWidth="2.5" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </g>
    </svg>
  );
}
