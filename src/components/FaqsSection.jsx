// src/components/FaqsSection.jsx
import { useMemo, useState } from "react";

const TABS = ["All", "Website", "Branding"];

const faqs = [
  // --- All (shared) ---
  {
    q: "Why choose Brand Vision?",
    a: `At Brand Vision, creativity and transparency aren't just words—they're the pillars of everything we do. As a top web design and branding agency, we select projects where we can add maximum value and leverage our experience. We've received awards from Clutch, Awwwards, UpCity, DAN and more, and maintain consistent 5-star ratings across platforms.`,
    cat: "All",
  },
  {
    q: "What services do you offer?",
    a: `Web Design & Development, Branding (research/strategy + visual identity), Marketing Consultation/Audit, SEO, plus content marketing and graphic design.`,
    cat: "All",
  },
  {
    q: "How long will a web design project take?",
    a: `Web projects typically range from ~4 to 12+ weeks depending on scope. Branding projects ~4–8 weeks. Consultation/audits ~2–4 weeks. Ongoing SEO is monthly.`,
    cat: "All",
  },
  {
    q: "How big is your team?",
    a: `15+ senior specialists: Creative Director, PMs, Designers/Devs, UX/UI, Full-Stack, Branding & Content Strategists.`,
    cat: "All",
  },
  {
    q: "Do you offer copywriting services?",
    a: `Yes. Our content strategists and copywriters create SEO-friendly, on-brand content across pages, blogs, and campaigns.`,
    cat: "All",
  },
  {
    q: "What is typically included in a standard branding package?",
    a: `Two pillars: (1) Research & Strategy (market, audience, positioning), (2) Visual Identity (logo, colors, type, system & guidelines).`,
    cat: "All",
  },
  {
    q: "Do you offer marketing audit & consultation service?",
    a: `Yes. We review website, branding, SEO, social and assets, then deliver a prioritized improvement roadmap with impact & effort estimates.`,
    cat: "All",
  },
  {
    q: "Do you offer SEO services?",
    a: `Yes—ongoing SEO (on-page + off-page) including content, technical optimization and link building. Packages can be tailored.`,
    cat: "All",
  },
  {
    q: "What clientele or industries do you work with?",
    a: `SMB to enterprise across professional services, real estate, technology, startups, and non-profits in North America and beyond.`,
    cat: "All",
  },
  {
    q: "Do you offer maintenance services?",
    a: `Yes—hourly on-demand or monthly maintenance plans for updates, fixes, and optimization.`,
    cat: "All",
  },

  // --- Website tab specifics ---
  {
    q: "Can you upgrade my current site?",
    a: `Yes. We frequently handle redesigns and upgrades across most platforms.`,
    cat: "Website",
  },
  {
    q: "Do you create Wix websites?",
    a: `Yes—we’re experienced with Wix and can design premium, performant sites on the platform.`,
    cat: "Website",
  },
  {
    q: "Do you create WordPress websites?",
    a: `Yes—custom WordPress builds and theme work are both supported.`,
    cat: "Website",
  },
  {
    q: "Can I update and manage my own website myself?",
    a: `We recommend editable platforms when needed and provide handover training so your team can make routine edits confidently.`,
    cat: "Website",
  },
  {
    q: "Do you offer mobile-friendly web design services?",
    a: `All builds are responsive with dedicated mobile layouts for a great small-screen UX.`,
    cat: "Website",
  },
  {
    q: "Is Search Engine Optimization included?",
    a: `On-page SEO fundamentals are included in our web design & development packages.`,
    cat: "Website",
  },
  {
    q: "Can you provide images for my projects?",
    a: `We source high-quality licensed stock when needed (photography services not included).`,
    cat: "Website",
  },
  {
    q: "What countries do you accept projects from?",
    a: `We operate internationally; most clients are in North America.`,
    cat: "Website",
  },
  {
    q: "Who will be working on my project?",
    a: `A management duo (Creative Director + PM) leads the team; specialists join per scope (UX, Dev, Branding, Content).`,
    cat: "Website",
  },
  {
    q: "What is Wireframing?",
    a: `A low-fidelity architecture of pages and layout flows to align on structure before visual design—reduces revisions and speeds delivery.`,
    cat: "Website",
  },
  {
    q: "What is Site Mapping?",
    a: `The information architecture plan (pages, sub-pages, URLs, nav labels) to create logical navigation and support SEO.`,
    cat: "Website",
  },
  {
    q: "Do you work with WordPress themes?",
    a: `We can, but we prioritize custom experiences tailored to your goals and audience.`,
    cat: "Website",
  },
  {
    q: "Are you an authorized web design agency?",
    a: `Yes—an experienced, award-winning team of designers and PMs.`,
    cat: "Website",
  },
  {
    q: "Is there a limit to how many pages my website can have?",
    a: `No hard limit; page count impacts scope and cost. We help right-size content and structure.`,
    cat: "Website",
  },
  {
    q: "What if I don’t know how to operate WordPress? Do you provide instructions?",
    a: `Yes—training sessions and guides are provided at handover.`,
    cat: "Website",
  },
  {
    q: "Do I own the website that you create?",
    a: `Yes. After final approval we transfer files, licenses, and access.`,
    cat: "Website",
  },
  {
    q: "What platforms do you specialize in?",
    a: `WordPress, Webflow, Wix, Squarespace—and custom stacks as needed.`,
    cat: "Website",
  },
  {
    q: "What CRM platforms do you work with?",
    a: `Typical integrations include HubSpot, Pardot, Salesforce, Marketo, and more.`,
    cat: "Website",
  },

  // --- Branding tab specifics ---
  {
    q: "What is Brand Positioning?",
    a: `How your brand is perceived vs. competitors—owning a unique space in the audience’s mind.`,
    cat: "Branding",
  },
  {
    q: "What is Brand Identity?",
    a: `Your visual + verbal system: logo, color, type, voice, messaging, and design language.`,
    cat: "Branding",
  },
  {
    q: "What is Brand Persona?",
    a: `A fictional character embodying your brand’s traits—guides voice, tone, and creative decisions.`,
    cat: "Branding",
  },
  {
    q: "What is Brand Voice and Tone?",
    a: `Voice = personality; Tone = emotion per context. Consistency builds recognition and trust.`,
    cat: "Branding",
  },
  {
    q: "Why is Brand Research a crucial step in Branding?",
    a: `It aligns strategy with audience needs, maps competitors, and clarifies positioning to drive differentiated creative.`,
    cat: "Branding",
  },
];

function Chevron({ open }) {
  return (
    <svg
      className={`h-5 w-5 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function Item({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-200">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-6 py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-[15px] md:text-base font-medium text-slate-800">
          {q}
        </span>
        <span className="text-slate-500 shrink-0">
          <Chevron open={open} />
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows,opacity,transform] duration-300 ease-out ${
          open
            ? "grid-rows-[1fr] opacity-100 translate-y-0"
            : "grid-rows-[0fr] opacity-0 -translate-y-1"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-4 text-sm leading-6 text-slate-600">{a}</div>
        </div>
      </div>
    </div>
  );
}

export default function FaqsSection() {
  const [tab, setTab] = useState("All");

  const filtered = useMemo(() => {
    if (tab === "All") return faqs.filter((f) => f.cat === "All");
    return faqs.filter((f) => f.cat === tab);
  }, [tab]);

  return (
    <section className="relative bg-blue-50 h-[660px] pt-10">
      {/* soft top gradient wash like the reference */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50/70 via-sky-50/50 to-white" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[360px,1fr] gap-12">
          {/* Left intro column */}
          <div>
            <div className="inline-flex items-center rounded-full bg-white shadow-sm border border-slate-200 px-3 py-1 text-[11px] font-semibold tracking-wide text-slate-700">
              FAQs
            </div>

            <h2 className="mt-4 text-3xl md:text-3xl font-semibold text-slate-900">
              Answers To Frequently Asked Questions
            </h2>

            <p className="mt-4 text-slate-600 text-base leading-7">
              Curious about how Brand Vision operates? Explore our FAQ section
              for a comprehensive understanding of our services and procedures.
            </p>

            <a
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              <span>Let&apos;s Discuss</span>
              <svg
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </a>

            {/* Resources boxes (optional placeholder like screenshot) */}
            <div className="mt-14 space-y-4">
              <div className="rounded-xl border border-slate-200 bg-white/70 px-4 py-3">
                <div className="text-[12px] font-semibold text-slate-700">
                  Latest Business Articles
                </div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white/70 px-4 py-3">
                <div className="text-[12px] font-semibold text-slate-700">
                  Latest Marketing Articles
                </div>
              </div>
            </div>
          </div>

          {/* Right content: tabs + two-column accordions */}
          <div>
            {/* Tabs */}
            <div className="flex items-center gap-2">
              {TABS.map((t) => {
                const active = t === tab;
                return (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={`rounded-full px-3 py-1 text-[12px] font-semibold border ${
                      active
                        ? "bg-slate-900 text-white border-slate-900"
                        : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    {t}
                  </button>
                );
              })}
            </div>

            {/* Lists (two columns on lg like reference) */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Column 1 */}
              <div className="rounded-2xl bg-white/70 backdrop-blur border border-slate-200 p-2 md:p-3">
                {filtered.filter((_, i) => i % 2 === 0).map((f) => (
                  <Item key={f.q} q={f.q} a={f.a} />
                ))}
              </div>

              {/* Column 2 */}
              <div className="rounded-2xl bg-white/70 backdrop-blur border border-slate-200 p-2 md:p-3">
                {filtered.filter((_, i) => i % 2 === 1).map((f) => (
                  <Item key={f.q} q={f.q} a={f.a} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
