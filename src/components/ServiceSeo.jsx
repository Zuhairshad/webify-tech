export default function ServiceSeo({ title, desc }) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur">
        <h4 className="text-base font-semibold text-slate-800">{title}</h4>
        <p className="mt-1 text-sm leading-6 text-slate-600">{desc}</p>
      </div>
    );
  }
  