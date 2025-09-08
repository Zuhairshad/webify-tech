// src/pages/CaseStudy.jsx
import { useParams, Link } from "react-router-dom";
import projects from "../data/projects.js"; // make sure path matches exactly
import Navbar from '../components/Navbar.jsx'
export default function CaseStudy() {
  
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-600">Case study not found.</p>
      </div>
    );
  }

  return (
    
    <article className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative h-96 w-full overflow-hidden">
      <Navbar/>
        <img
          src={project.image}
          alt={project.title}
          className="min-h-[100vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            {project.title}
          </h1>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <span className="inline-flex items-center rounded-full bg-emerald-600/10 text-emerald-700 ring-1 ring-emerald-600/20 px-3 py-1 text-sm font-medium">
            {project.category}
          </span>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900">
            {project.title}
          </h2>
          <p className="mt-2 text-slate-600">{project.blurb}</p>
        </div>

        {/* If details exist, render them */}
        {project.details ? (
          <div className="space-y-8">
            <section>
              <h3 className="text-xl font-semibold text-slate-900">
                📌 Challenge
              </h3>
              <p className="mt-2 text-slate-700 leading-relaxed">
                {project.details.challenge}
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-slate-900">
                🛠 Solution
              </h3>
              <p className="mt-2 text-slate-700 leading-relaxed">
                {project.details.solution}
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-slate-900">
                🚀 Outcome
              </h3>
              <p className="mt-2 text-slate-700 leading-relaxed">
                {project.details.outcome}
              </p>
            </section>
          </div>
        ) : (
          <p className="text-slate-700">
            Detailed content coming soon for this case study.
          </p>
        )}

        {/* Extra image */}
        <div className="my-12">
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1600&auto=format&fit=crop"
            alt="Case study supporting visual"
            className="rounded-xl shadow-lg"
          />
        </div>

        <Link
          to="/work"
          className="inline-block mt-6 text-sm font-medium text-emerald-600 hover:underline"
        >
          ← Back to Work
        </Link>
      </div>
    </article>
  );
}
