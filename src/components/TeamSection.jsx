// src/components/TeamSection.jsx
import React from "react";
const TEAM = [
  {
    name: "Mubashir Aslam",
    role: "Founder & Managing Director",
    bio: "Sets vision and strategy, leads partnerships, and oversees delivery quality across all projects.",
    img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Owais",
    role: "Head of E-commerce",
    bio: "Owns marketplace strategy, catalog operations, and conversion optimization powered by data.",
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Muneeb Tariq",
    role: "Business Development Manager",
    bio: "Builds pipelines and proposals, aligns client needs with scope, and delivers WordPress solutions end-to-end.",
    img: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Saim Ayub",
    role: "UI/UX & Graphic Designer",
    bio: "Designs systems, visuals, and interactive prototypes; crafts clear, accessible interfaces.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Muneeb Mustafa",
    role: "E-commerce Specialist",
    bio: "Manages storefronts, listings, promotions, and performance to drive revenue and retention.",
    img: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Zuhair Ahmad Shad",
    role: "Full-Stack Developer",
    bio: "Leads a 4-member engineering squad; ships performant React/Node stacks with strong code quality and velocity.",
    img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=800&auto=format&fit=crop"
    ,
  },
  {
    name: "Maryam",
    role: "SEO Strategist",
    bio: "Drives keyword research, on-page/off-page plans, content briefs, and technical SEO audits.",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Hannan Saleem",
    role: "Web Developer (WordPress/Webflow) & SEO Specialist",
    bio: "Builds fast, maintainable sites in WordPress and Webflow; pairs development with SEO best practices.",
    img: "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Muhammad Musa",
    role: "Business Development Associate",
    bio: "Prospecting, outreach, and discovery—turns opportunities into long-term client relationships.",
    img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="section-old py-10 s-about-our-team">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ---- Title block (extra breathing room) ---- */}
        <div className="pt-10 md:pt-12">
          <div className="text-sm font-semibold text-slate-500 mb-2">Our Team</div>

          <div className="max-w-3xl">
            <h2 className="text-4xl/tight md:text-5xl/tight font-extrabold tracking-tight text-slate-900">
              Meet Our <span className="text-orange-600">Senior Team</span>
            </h2>
            <p className="mt-5 text-slate-600 leading-7">
              We create great things by surrounding ourselves with great people. Our team blends
              design, engineering, and research to ship work we’re proud of—every day.
            </p>
          </div>
        </div>

        {/* ---- Subtle offset so grid starts a little lower than title ---- */}
        <div className="mt-10 md:mt-12">
          <ul
            className="
              grid gap-5 sm:gap-6 lg:gap-8
              grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
            "
            role="list"
          >
            {TEAM.map((m, i) => (
              <li key={i} className="h-full">
                <article
                  className="
                    h-full rounded-2xl border border-slate-200 bg-white
                    shadow-sm hover:shadow-md transition-shadow
                    overflow-hidden
                  "
                >
                  {/* Avatar */}
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={m.img}
                      alt={`${m.name} headshot`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Info */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="text-lg font-semibold text-slate-900">{m.name}</h3>
                      <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        {m.role}
                      </span>
                    </div>

                    <div className="my-3 h-px bg-slate-200" />

                    {/* Bio (hover effect ONLY here) */}
                    <p
                      className="
                        text-slate-600 leading-6 rounded-md
                        transition-colors duration-200
                        hover:bg-sky-50 hover:text-sky-800
                        p-2 -m-2
                      "
                      title="Hover highlights only the bio"
                    >
                      {m.bio}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
