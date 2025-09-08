// Hero component WITHOUT framer-motion for debugging
export default function Hero({
  // ===== Variant =====
  variant = "default", // "default" | "about" | "work"
  minH,

  // ===== Backgrounds =====
  imgDesktop = "Herooo.jpg",
  imgMobile = "Herooo.jpg",
  overlayClass = "bg-gradient-to-b from-black/25 via-black/20 to-black/55",

  // ===== Left (heading area) =====
  titleLines = ["Award-Winning", "Media Company"],
  subtitle = null, // used by about/work
  pills = ["Web Design Agency", "Marketing Agency", "Publication and Media"],

  // ===== Featured logos (about) =====
  featured = [], // e.g. [{src:'/ap.png', alt:'AP', height:24}, ...]

  // ===== Right panel =====
  showRightPanel = true,
  brand = "Webify Tech",
  aboutTop = "We are Webify Tech, a media company and an award-winning marketing and web design agency.",
  aboutBody = "Our goal is to nurture your vision and provide innovative, custom solutions for all your marketing needs.",

  // ===== CTAs =====
  ctas = [
    { label: "Request a Proposal", href: "/contact", primary: true },
    { label: "Let's Discuss", href: "/contact", primary: false },
  ],
}) {
  const isAbout = variant === "about";

  /* =======================
   * WORK VARIANT (centered)
   * ======================= */
  if (variant === "work") {
    return (
      <section
        className={`relative isolate ${minH || "min-h-[86vh]"} flex items-center justify-center text-white`}
      >
        {/* ---- Background ---- */}
        <div className="absolute inset-0 z-0 bg-slate-950">   {/* <-- was -z-10 */}
          <img
            src={imgDesktop}
            alt="Work background"
            className="hidden sm:block w-full h-full object-cover"
          />
          <img
            src={imgMobile}
            alt="Work background mobile"
            className="sm:hidden w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 pointer-events-none" />
          <div className={`absolute inset-0 pointer-events-none ${overlayClass}`} />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />
        </div>
  
        {/* ---- Centered Content ---- */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            {titleLines.map((line, i) => (
              <span key={i} className={i ? "block" : ""}>{line}</span>
            ))}
          </h1>
          <div className="mt-6 h-px w-24 mx-auto bg-white/25" />
          {subtitle && (
            <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </section>
    );
  }

  /* =======================
   * DEFAULT / ABOUT VARIANTS
   * ======================= */
  return (
    <section
      className={`relative ${minH ? minH : isAbout ? "min-h-[80vh]" : "min-h-[100vh]"} text-white flex items-end`}
    >
      {/* ---- Background (image + tints) ---- */}
      <div className="absolute inset-0 z-0 bg-[#0B0F19]">
        {/* Desktop/Laptop */}
        <img
          src={imgDesktop}
          alt="Showcase"
          className={`hidden sm:block w-full h-full object-cover ${isAbout ? "[object-position:center_50%]" : "[object-position:center_20%]"}`}
        />
        {/* Mobile */}
        <img
          src={imgMobile}
          alt=""
          loading="eager"
          className={`sm:hidden w-full h-full object-cover ${isAbout ? "[object-position:center_60%]" : "[object-position:center_38%]"}`}
        />

        {/* Top fade (keeps nav readable) */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/80 via-black/35 to-transparent pointer-events-none" />

        {/* Global tint */}
        <div className={`absolute inset-0 ${overlayClass} pointer-events-none`} />

        {/* Side + bottom fades */}
        <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-black/70 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-black/70 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />
      </div>

      {/* ---- Foreground ---- */}
      <div className="relative z-10 lg:pb-20 mx-auto w-full max-w-[1700px] px-4 sm:px-6 md:px-8 pb-6 sm:pb-8">
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10">
          {/* Left: Heading + CTAs (or subtitle/featured in About) */}
          <div className={`self-end ${isAbout ? "lg:col-span-6" : "lg:col-span-7"} ${isAbout ? "pl-0" : "pl-10"}`}>
            <div className={`${isAbout ? "max-w-[720px]" : "max-w-[680px]"} drop-shadow-[0_2px_16px_rgba(0,0,0,0.4)]`}>
              <h1
                className={`font-extrabold tracking-tight leading-[1.05]
                  text-[36px] xs:text-[40px] sm:text-[48px] md:text-[56px]
                  ${isAbout ? "" : "text-center sm:text-left"}`}
              >
                {titleLines.map((line, i) => (
                  <span key={i} className={i === 0 ? "" : "block"}>
                    {line}
                  </span>
                ))}
              </h1>
            </div>

            {/* Subtitle (About) or Pills (Default) */}
            {isAbout ? (
              <>
                {subtitle && <p className="mt-4 text-lg text-white/70 max-w-lg">{subtitle}</p>}
                {!!featured.length && (
                  <div className="flex items-center gap-6 pt-6">
                    <span className="text-xs tracking-wide text-white/50 uppercase">Featured On</span>
                    {featured.map(({ src, alt, height = 24 }, i) => (
                      <img key={i} src={src} alt={alt} className="opacity-90" style={{ height }} />
                    ))}
                  </div>
                )}
              </>
            ) : (
              <>
                {!!pills?.length && (
                  <div className="mt-4 flex flex-wrap gap-2 justify-center sm:justify-start">
                    {pills.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full text-[11px] bg-white/10 border border-white/15 backdrop-blur"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                <div className="h-px w-full max-w-md bg-white/15 mx-auto sm:mx-0 mt-4" />
                {!!ctas?.length && (
                  <div className="mt-4 flex flex-wrap gap-3 justify-center sm:justify-start">
                    {ctas.map(({ label, href, primary }) => (
                      <a
                        key={label}
                        href={href}
                        className={
                          primary
                            ? "inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-white text-black font-semibold hover:opacity-90 transition"
                            : "inline-flex items-center gap-2 rounded-xl px-5 py-3 border border-white/20 text-white hover:bg-white/10 transition"
                        }
                      >
                        <span>{label}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                          className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                      </a>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>

          {/* Right: long paragraph (About/default) */}
          {showRightPanel && (
            <aside className={`${isAbout ? "lg:col-span-6" : "lg:col-span-5"} hidden pb-10 md:block self-end space-y-3 max-w-[720px] ml-auto ${isAbout ? "pr-0" : "pr-10"}`}>
              {isAbout ? (
                <p className="text-white/80">{aboutTop}</p>
              ) : (
                <>
                  <div className="text-2xl">
                    <p className="text-3xl font-['Outfit'] sm:text-2xl text-white/80">{brand}</p>
                  </div>
                  <p className="text-white/80 pr-0 sm:pr-6">{aboutTop}</p>
                  <p className="text-white/80 mr-0 sm:mr-6">{aboutBody}</p>
                </>
              )}
            </aside>
          )}
        </div>
      </div>
    </section>
  );
}