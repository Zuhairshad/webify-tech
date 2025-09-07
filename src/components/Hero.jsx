import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] text-white flex items-end">
      {/* ---- Background (image + tints) ---- */}
      <div className="absolute inset-0 z-0 bg-[#111111]">
        {/* Desktop/Laptop */}
        <img
          src="heroooo.jpg"
          alt="Showcase of our works"
          className="hidden sm:block w-full h-full object-cover [object-position:center_20%]"
        />
        {/* Mobile */}
        <img
          src="heroooo.jpg"
          alt=""
          loading="eager"
          className=" lg:pt-30 sm:hidden w-full h-full object-cover [object-position:center_38%]"
        />

        {/* Top fade (keeps nav readable) */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/80 via-black/35 to-transparent pointer-events-none" />

        {/* Global tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/20 to-black/55 pointer-events-none" />

        {/* Side + bottom fades */}
        <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-black/70 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-black/70 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />
      </div>

      {/* ---- Foreground ---- */}
      <div className="relative z-10 lg:pb-20 mx-auto w-full max-w-[1700px] px-4 sm:px-6 md:px-8 pb-6 sm:pb-8">
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10">
          {/* Left: Heading + CTAs */}
          <motion.div
            initial={{ y: 14, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 self-end space-y-5 pl-10"
          >
            <div className="max-w-[680px] drop-shadow-[0_2px_16px_rgba(0,0,0,0.4)]">
              <h2
                className="font-extrabold tracking-tight leading-[1.05]
                           text-[36px] xs:text-[40px] sm:text-[48px] md:text-[56px]
                           text-center sm:text-left"
              >
                Award-Winning
                <br />
                <span className="block">Media Company</span>
              </h2>
            </div>

            {/* Small pills */}
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              {[
                "Web Design Agency",
                "Marketing Agency",
                "Publication and Media",
              ].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-[11px] bg-white/10 border border-white/15 backdrop-blur"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="h-px w-full max-w-md bg-white/15 mx-auto sm:mx-0" />

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-white text-black font-semibold hover:opacity-90 transition"
              >
                <span>Request a Proposal</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 border border-white/20 text-white hover:bg-white/10 transition"
              >
                <span>Let&apos;s Discuss</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right: Info */}
          <motion.aside
            initial={{ y: 14, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="lg:col-span-5 hidden pb-10 md:block self-end space-y-3 max-w-[640px] ml-auto pr-10"
          >
            <div className="text-2xl">
              <p className="text-3xl font-['Outfit'] sm:text-2xl text-white/500">Webify Tech</p>
            </div>
            <p className="text-white/200 pr-0 sm:pr-6">
              We are Webify Tech, a media company and an award-winning marketing
              and web design agency.
            </p>
            <p className="text-white/200 mr-0 sm:mr-6">
              Our goal is to nurture your vision and provide innovative, custom
              solutions for all your marketing needs. We provide a range of
              customized services, including{" "}
              <a href="https://www.brandvm.com/branding" className="underline">
                branding
              </a>
              ,{" "}
              <a href="https://www.brandvm.com/web-design" className="underline">
                website design
              </a>{" "}
              &amp; development,{" "}
              <a href="https://www.brandvm.com/seo-agency" className="underline">
                SEO
              </a>
              ,{" "}
              <a href="https://www.brandvm.com/marketing-consultation" className="underline">
                marketing consultation
              </a>
              , and more.
            </p>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
