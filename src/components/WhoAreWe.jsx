// src/components/AboutWhoWeAre.jsx
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

/**
 * About / Who We Are
 * - Left: big headline with generous spacing
 * - Middle: custom titles (start slightly below the headline baseline)
 * - Right: paragraphs with more whitespace; HOVER/TAP a paragraph to reveal a pinned overlay card
 * - Card uses Unsplash images (custom), blur->sharp + lift/tilt animation
 */
export default function WhoAreWe() {
  const root = useRef(null);

  // refs for interaction
  const paraRefs = useRef([]);      // hover/tap targets (paragraphs)
  const cardLayers = useRef([]);    // stacked cards (one per paragraph)
  const pinWrap = useRef(null);     // pinned container
  const rightColRef = useRef(null); // scroll area for pinning

  // ---- content (custom titles + custom Unsplash images) ----
  const items = [
    {
      title: "We Build for Clarity & Impact",
      body:
        "Our process focuses on crisp communication and measurable outcomes. We design for clarity, ship with confidence, and iterate where it matters most.",
      img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop",
      badge: "Product Design Excellence",
      year: "2024",
      tag: "Studio Highlight",
    },
    {
      title: "Quality Over Everything",
      body:
        "We take on work where we can truly add value. That means fewer distractions, deeper focus, and a standard that never slides.",
      img: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop",
      badge: "Engineering Craft",
      year: "2024",
      tag: "Build Better",
    },
    {
      title: "A Decade of Shipping",
      body:
        "Ten years of launches taught us the same lesson over and over: simple wins. We simplify choices, streamline teams, and ship on purpose.",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
      badge: "Trusted Delivery",
      year: "2024",
      tag: "On-Time Launch",
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // stack & hide all cards initially
      cardLayers.current.forEach((el, i) => {
        gsap.set(el, {
          position: "absolute",
          inset: 0,
          autoAlpha: 0,          // hidden until hover
          filter: "blur(22px)",
          y: 26,
          rotate: -2,
          scale: 0.985,
          zIndex: i + 1,
          transformOrigin: "50% 60%",
          willChange: "transform, filter, opacity",
        });
      });

      const hideAll = () =>
        gsap.to(cardLayers.current, {
          autoAlpha: 0,
          filter: "blur(22px)",
          y: -10,
          rotate: -3,
          duration: 0.35,
          ease: "power2.out",
        });

      const showIndex = (i) => {
        const el = cardLayers.current[i];
        // hide others instantly
        cardLayers.current.forEach((n, idx) => idx !== i && gsap.set(n, { autoAlpha: 0 }));
        // reveal selected
        gsap.fromTo(
          el,
          { autoAlpha: 0, filter: "blur(22px)", y: 22, rotate: 3, scale: 0.985 },
          { autoAlpha: 1, filter: "blur(0px)", y: 0, rotate: 0, scale: 1, duration: 0.55, ease: "power3.out" }
        );
      };

      // hover/focus/click on PARAGRAPHS -> reveal card
      paraRefs.current.forEach((el, i) => {
        el.addEventListener("mouseenter", () => showIndex(i));
        el.addEventListener("focus", () => showIndex(i));
        el.addEventListener("mouseleave", hideAll);
        el.addEventListener("blur", hideAll);
        el.addEventListener("click", () => showIndex(i)); // mobile
      });

      // click outside -> hide (mobile escape)
      const onDocClick = (e) => {
        if (!root.current?.contains(e.target)) hideAll();
      };
      document.addEventListener("click", onDocClick);

      // pin the overlay card so it rides the scroll
      gsap.timeline({
        scrollTrigger: {
          trigger: rightColRef.current,
          start: "top 28%",
          end: "bottom 28%",
          scrub: 0.6,
          pin: pinWrap.current,
          pinSpacing: false, // overlay look
        },
      }).fromTo(
        pinWrap.current,
        { y: 42, rotate: -3, scale: 0.98 },
        { y: -160, rotate: 5, scale: 1, ease: "none" }
      );

      return () => {
        document.removeEventListener("click", onDocClick);
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    }, root);

    return () => ctx.revert();
  }, []);

  return (
<section
  ref={root}
  className="
    bg-gradient-to-b 
    from-black 
    via-[#795448] 
    to-black 
    text-white
    py-28
  "
>      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: BIG headline with generous breathing room */}
        <div className="lg:col-span-5">
          <h2 className="text-[48px]  leading-[1.02] md:text-[92px] md:leading-[1.02] font-extrabold tracking-tight max-w-[10ch]">
            Here To
            <br /> Deliver
            <br /> Perfection
          </h2>
          <div className="mt-8 inline-flex items-center rounded-full bg-white/8 px-4 py-2 text-sm text-white/80 ring-1 ring-white/15">
            Who Are We?
          </div>
        </div>

        {/* Middle: custom titles, intentionally start lower than the headline */}
        <div className="lg:col-span-4 pt-12">
          <div className="divide-y divide-white/10">
            {items.map((it) => (
              <div key={it.title} className="py-10">
                <h3 className="text-[20px] md:text-[22px] font-semibold text-white/90">
                  {it.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Right: PARAGRAPHS are the hover targets (more spacing, comfy measure) */}
        <div ref={rightColRef} className="lg:col-span-3 relative">
          <div className="space-y-14">
            {items.map((it, i) => (
              <p
                key={it.title}
                ref={(el) => (paraRefs.current[i] = el)}
                className="leading-[1.85] text-white/75 max-w-[58ch] cursor-pointer outline-none hover:text-white"
                tabIndex={0}
              >
                {it.body}
              </p>
            ))}
          </div>

          {/* Pinned overlay card stack (hidden until paragraph hover) */}
          <div
            ref={pinWrap}
            className="absolute right-2 top-20 w-[300px] md:w-[330px] will-change-transform pointer-events-none"
          >
            <div className="relative h-[380px]">
              {items.map((it, i) => (
                <div
                  key={i}
                  ref={(el) => (cardLayers.current[i] = el)}
                  className="h-full w-full rounded-2xl overflow-hidden border border-white/12 
                             bg-[#0F1622]/85 backdrop-blur shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
                >
                  <div className="relative">
                    <img src={it.img} alt="" className="h-44 w-full object-cover" />
                    <div className="absolute inset-x-0 -bottom-1 h-8 bg-gradient-to-b from-transparent to-[#0F1622]/95" />
                  </div>
                  <div className="p-5">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-white/60">{it.year}</div>
                    <div className="mt-1 text-[17px] font-semibold">{it.badge}</div>
                    <div className="mt-1 text-base font-bold">{it.tag}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
