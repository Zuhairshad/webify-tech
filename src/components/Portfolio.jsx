// src/components/Portfolio.jsx
import { useMemo } from "react";
import projects from "../data/projects.js";

export default function Portfolio() {
  // Always show everything
  const filtered = useMemo(() => projects, []);

  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pt-16">
        <div className="mb-6">
          <p className="text-sm uppercase tracking-wider text-slate-500">
            Case Studies <span className="text-slate-400">· Featured Projects</span>
          </p>
          <h1 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-900">
            Our Work Portfolio
          </h1>
        </div>

        {/* Filter Bar (ONLY "All") */}
        <div className="mb-8 flex flex-wrap items-center gap-2">
          <button
            type="button"
            aria-pressed="true"
            className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm transition border-slate-900 bg-slate-900 text-white"
          >
            <span>All</span>
            <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-xs bg-white/20 text-white">
              {projects.length}
            </span>
          </button>
          {/* removed all other filter buttons + search */}
        </div>
      </div>

      {/* Cards */}
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pb-16 space-y-10">
        {filtered.map((p) => {
          const facts = [
            p.details?.client ? `Client: ${p.details.client}` : null,
            p.details?.industry ? `Industry: ${p.details.industry}` : null,
            p.details?.timeframe ? `Timeframe: ${p.details.timeframe}` : null,
          ].filter(Boolean);

          return (
            <article
              key={p.id}
              className="relative grid grid-cols-1 gap-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md md:grid-cols-3"
            >
              {/* Left */}
              <div className="p-6 sm:p-8 md:col-span-1">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-emerald-600/10 text-emerald-700 ring-1 ring-emerald-600/20 px-2 py-0.5 text-xs font-medium">
                    {p.category}
                  </span>
                  {p.tags?.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full bg-slate-100 text-slate-700 ring-1 ring-slate-200 px-2 py-0.5 text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-slate-600 leading-7">{p.blurb}</p>

                {/* Optional quick facts (renders only if present) */}
                {facts.length > 0 && (
                  <ul className="mt-4 space-y-1 text-sm text-slate-600">
                    {facts.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-slate-300" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <a
                    href={p.caseHref}
                    className="inline-flex items-center rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-800"
                  >
                    View Case Study
                  </a>
                </div>
              </div>

              {/* Right */}
              <div className="md:col-span-2 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 to-white" />
                <div className="relative h-full w-full p-4 sm:p-6">
                  <div className="mx-auto h-[420px] w-full overflow-hidden rounded-xl ring-1 ring-slate-200 bg-slate-100">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
