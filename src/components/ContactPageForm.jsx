// src/pages/Contact.jsx
import { useState } from "react";

export default function ContactPageFrom() {
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus({ state: "success", msg: "Thanks! We’ll get back to you shortly." });
    form.reset();
  }

  return (
    <main className="bg-slate-50">
      {/* top spacer so it sits below your navbar */}
      <div className="h-8" />

      {/* ---- FORM: pulled up and docked to hero ---- */}
      <section className="relative -mt-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="rounded-3xl bg-white shadow-xl ring-1 ring-black/5 p-5 sm:p-8 md:p-10">
          <h2 className="sr-only">Contact</h2>

          <form onSubmit={onSubmit} className="grid py-4 md:py-6 grid-cols-1 md:grid-cols-2 gap-5">
            {/* First Name */}
            <Field label="First Name" required>
              <Input name="firstName" placeholder="" required />
            </Field>

            {/* Last Name */}
            <Field label="Last Name">
              <Input name="lastName" placeholder="" />
            </Field>

            {/* Email */}
            <Field label="Email" required>
              <Input type="email" name="email" required />
            </Field>

            {/* Phone */}
            <Field label="Phone Number" required>
              <Input type="tel" name="phone" required />
            </Field>

            {/* Service */}
            <Field label="What service are you looking for?" required>
              <Select name="service" required defaultValue="">
                <option value="" disabled>Please Select</option>
                <option>Website Design</option>
                <option>Web Development</option>
                <option>Branding / Identity</option>
                <option>UI/UX</option>
                <option>SEO</option>
                <option>Consultation & Audit</option>
                <option>Other</option>
              </Select>
            </Field>

            {/* How did you hear about us */}
            <Field label="Where did you hear about us?">
              <Select name="referrer" defaultValue="">
                <option value="" disabled>Please Select</option>
                <option>Google</option>
                <option>Instagram</option>
                <option>LinkedIn</option>
                <option>Referral</option>
                <option>Other</option>
              </Select>
            </Field>

            {/* Budget */}
            <Field label="What is your budget?" required className="md:col-span-2">
              <Select name="budget" required defaultValue="">
                <option value="" disabled>Select</option>
                <option>$3k – $7k</option>
                <option>$7k – $15k</option>
                <option>$15k – $40k</option>
                <option>$40k+</option>
              </Select>
            </Field>

            {/* Project details */}
            <Field label="Tell us more about your project:" required className="md:col-span-2">
              <Textarea name="message" rows={6} placeholder="" required />
            </Field>

            {/* File upload */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1">File upload</label>
              <input
                type="file"
                name="attachment"
                className="block w-full text-sm text-slate-600
                           file:mr-4 file:rounded-md file:border-0
                           file:bg-slate-100 file:px-3 file:py-2
                           file:text-slate-700 hover:file:bg-slate-200"
              />
            </div>

            {/* Submit */}
            <div className="md:col-span-2 mt-2">
              <button
                type="submit"
                className="inline-flex items-center rounded-full bg-blue-600 px-6 py-3 text-white font-semibold shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Submit
              </button>

              {status.state === "success" && (
                <p className="mt-3 text-sm text-emerald-700">{status.msg}</p>
              )}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

/* ---------- UI primitives ---------- */
function Field({ label, required, className = "", children }) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-slate-700 mb-1">
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}
function Input(props) {
  return (
    <input
      {...props}
      className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-2.5
                 text-slate-800 outline-none ring-0 placeholder:text-slate-400
                 focus:border-slate-400 focus:bg-white"
    />
  );
}
function Select(props) {
  return (
    <select
      {...props}
      className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-2.5
                 text-slate-800 outline-none ring-0
                 focus:border-slate-400 focus:bg-white"
    />
  );
}
function Textarea(props) {
  return (
    <textarea
      {...props}
      className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-2.5
                 text-slate-800 outline-none ring-0
                 focus:border-slate-400 focus:bg-white"
    />
  );
}
