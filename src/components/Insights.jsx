import React, { useEffect, useRef } from "react";

/* ------- tiny inline icons (no external deps) ------- */
const ChevronRight = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
  </svg>
);
const ClockIcon = (props) => (
  <svg viewBox="0 0 12 13" fill="none" stroke="currentColor" {...props}>
    <path d="M6 3.5V6.5H8.25" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.5 6.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const CalendarDays = (props) => (
  <svg viewBox="0 0 12 13" fill="currentColor" {...props}>
    <path fillRule="evenodd" clipRule="evenodd"
      d="M3.375 1.625a.375.375 0 0 1 .375.375V2.75h4.5V2a.375.375 0 0 1 .75 0v.75h.375c.828 0 1.5.672 1.5 1.5v5.625c0 .828-.672 1.5-1.5 1.5h-6.75c-.828 0-1.5-.672-1.5-1.5V4.25c0-.828.672-1.5 1.5-1.5H3V2a.375.375 0 0 1 .375-.375Zm6.75 4.5a.75.75 0 0 0-.75-.75h-6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75h6.75c.414 0 .75-.336.75-.75V6.125Z"/>
  </svg>
);

/* ------- helper: "time ago" ------- */
function timeAgo(datetime) {
  const parsed = new Date(datetime.replace(" ", "T"));
  if (Number.isNaN(parsed)) return "Invalid date";
  const now = new Date();
  const diff = now - parsed;
  const m = 60 * 1000, h = 60 * m, d = 24 * h;
  if (diff < m) {
    const s = Math.round(diff / 1000);
    return s === 1 ? "1 sec ago" : `${s} sec ago`;
  }
  if (diff < h) {
    const mins = Math.round(diff / m);
    return mins === 1 ? "1 min ago" : `${mins} min ago`;
  }
  if (diff < d) {
    const hrs = Math.round(diff / h);
    return hrs === 1 ? "1 hr ago" : `${hrs} hr ago`;
  }
  const days = Math.round(diff / d);
  return days === 1 ? "1 day ago" : `${days} days ago`;
}

/* ------- mock data (swap with CMS/API when ready) ------- */
const latestFeature = {
  category: "Marketing",
  readMins: 15,
  date: "2025-09-05",
  title: "Gap vs. American Eagle: Which Viral Denim Ad Won 2025?",
  description:
    "A research-based comparison of Gap’s “Better in Denim” with Katseye and American Eagle’s Sydney Sweeney campaign. Explore ad highlights, tactics, controversies, public reaction, and verified stats on views, impressions, foot traffic, and new customers.",
  href: "/post/gap-vs-american-eagle-ads-2025",
  image:
    "https://cdn.prod.website-files.com/630d4d1c4a462569dd189855/68bb46001106b2f54c7ac7ee_Gap%20Ad_American%20Eagle%20Ad_KATSEYE_Sydney_Sweeney.webp",
};

const trending = [
  {
    category: "Educational",
    title: "STUDY #2 — Scarcity, Waitlists & Resale Premiums in Luxury (2019–2025)",
    href: "/post/study-scarcity-waitlists-resale-premiums-luxury-2019-2025",
    image:
      "https://cdn.prod.website-files.com/630d4d1c4a462569dd189855/68b9fdc8fb11f9f847777fef_Scarcity%2C%20waitlists%20and%20resale%20premium%20in%20luxury%20(2019-2025).webp",
  },
  {
    category: "Marketing",
    title: "Social Media Marketing For Small Businesses In 2025: Adoption, ROI, Platforms, And Risks",
    href: "/post/social-media-marketing-for-small-businesses",
    image:
      "https://cdn.prod.website-files.com/630d4d1c4a462569dd189855/68b8a5ad19703e64f5bb61cc_Social%20Media%20Marketing%20For%20Small%20Businesses%20In%202025.webp",
  },
  {
    category: "Educational",
    title: "Tallest Active Basketball Players 2025: Ranking Biggest Giants",
    href: "/post/tallest-active-basketball-players-2025",
    image:
      "https://cdn.prod.website-files.com/630d4d1c4a462569dd189855/68b86457b3b087d4c62345d6_Tallest%20Active%20Basketball%20Players%202025.webp",
  },
];

const categories = [
  { name: "Breaking News", href: "/insights/breaking-news" },
  { name: "Educational", href: "/insights/educational" },
  { name: "Tech", href: "/insights/tech" },
  { name: "Marketing", href: "/insights/marketing" },
  { name: "Entertainment", href: "/insights/entertainment" },
  { name: "Social Media", href: "/insights/social-media" },
  { name: "Products", href: "/insights/products" },
  { name: "Events", href: "/insights/events" },
  { name: "Business", href: "/insights/business" },
  { name: "Business Directory", href: "/directory" },
];

const midGrid = [
  {
    category: "Entertainment",
    mins: 5,
    date: "2025-09-02",
    title:
      "Most Followed Beauty Influencers (2025): The Top Beauty Creators By Total Followers",
    href: "/post/most-followed-beauty-influencers-2025",
    image:
      "https://cdn.prod.website-files.com/630d4d1c4a462569dd189855/68b746ba8eac5f8bdd4a714e_most%20followed%20beauty%20creators.webp",
  },
  {
    category: "Business",
    mins: 5,
    date: "2025-09-02",
    title: "Richest Shark Tank Investor in 2025",
    href: "/post/richest-shark-tank-investor",
    image:
      "https://cdn.prod.website-files.com/630d4d1c4a462569dd189855/68b742d7fb02ab036a1ae261_Richest%20Shark%20Tank%20Investor%20in%202025.webp",
  },
  {
    category: "Business",
    mins: 5,
    date: "2025-09-02",
    title: "Top 10 Most Followed Person on TikTok August 2025",
    href: "/post/top-10-most-followed-people-on-tiktok",
    image:
      "https://cdn.prod.website-files.com/630d4d1c4a462569dd189855/68b708f717cf445157ce7a15_Top%2010%20Most%20Followed%20Person%20on%20TikTok%20August%202025%20.webp",
  },
];

const breaking = [
  { when: "2025-09-04 17:10", title: "Tesla Opens Robotaxi App to Public, Musk Predicts Driverless Rides by Year-End", href: "/post/tesla-opens-robotaxi-app-public" },
  { when: "2025-09-04 12:08", title: "Alix Earle Joins ‘Dancing With the Stars’ Season 34 Cast", href: "/post/alix-earle-dancing-with-the-stars" },
  { when: "2025-09-04 10:53", title: "Giorgio Armani, Legendary Italian Designer, Dies at 91", href: "/post/giorgio-armani-dies-91" },
  { when: "2025-09-03 14:00", title: "Roku Outpaces Broadcast For Third Straight Month, Nielsen Says", href: "/post/roku-outpaces-broadcast-third-straight-month" },
  { when: "2025-09-03 12:05", title: "More Listings As Canada’s Fall Housing Market Cooldown Begins", href: "/post/canada-fall-housing-cooldown-more-listings-2025" },
  { when: "2025-09-03 10:45", title: "Beavis & Butt-Head Return: Season 11 Premieres Tonight On Comedy Central", href: "/post/beavis-and-butt-head-season-11-premiere-tonight" },
  { when: "2025-09-02 20:00", title: "Doug Ford Dumps Crown Royal In Protest Of Ontario Plant Closure", href: "/post/ford-dumps-crown-royal-ontario-plant-closure" },
  { when: "2025-09-02 18:05", title: "Saudi Tourism Goes Global With Cristiano Ronaldo In “Unreal Calendar” Push", href: "/post/saudi-tourism-cristiano-ronaldo-global-unreal-calendar" },
  { when: "2025-09-02 16:30", title: "DKNY Taps Hailey Bieber As Global Face, Launches Fall 2025 Campaign", href: "/post/dkny-hailey-bieber-global-face-fall-2025-campaign" },
  { when: "2025-09-02 15:48", title: "Vogue Names Chloe Malle as New Editor", href: "/post/vogue-new-editor" },
];

/* ------- component ------- */
export default function Insights() {
  const scrollerRef = useRef(null);

  // simple, dependency-free auto-scroll for the breaking strip
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let raf;
    let dir = 1;
    const step = () => {
      el.scrollLeft += 0.5 * dir;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 2) dir = -1;
      if (el.scrollLeft <= 0) dir = 1;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="s-brand-vision-insights bg-gradient-to-r from-gray-900 to-black">
      {/* header row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-8">
          {/* Logo (short, clean placeholder) */}
          <a href="#" aria-label="BrandVision Insights" className="flex items-center gap-3">
            <div className="text-4xl font-['Inter'] tracking-wide">WebifyTech • Insights</div>
          </a>

          <a
            href="/insights"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white hover:opacity-90 transition"
          >
            <span className="underline decoration-transparent hover:decoration-white/60">Visit Insights</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <div className="h-px w-full bg-border/60" />

        {/* main 2-col: latest + sidebar */}
        <div className="grid lg:grid-cols-[1fr_360px] gap-8 py-8">
          {/* latest feature card */}
          <article className="rounded-2xl overflow-hidden bg-card border border-border/60 shadow-soft">
            <div className="aspect-[16/9] w-full overflow-hidden">
              <img
                alt={latestFeature.title}
                src={latestFeature.image}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="p-5 sm:p-7">
              <header className="flex flex-wrap items-center gap-3 text-xs">
                <a
                  href={`/insights/${latestFeature.category.toLowerCase()}`}
                  className="rounded-full bg-white/5 border border-border/60 px-3 py-1 hover:bg-white/10 transition"
                >
                  <span className="underline decoration-transparent hover:decoration-white/40">
                    {latestFeature.category}
                  </span>
                </a>

                <div className="flex items-center gap-1 rounded-full bg-white/5 border border-border/60 px-3 py-1">
                  <ClockIcon className="w-3.5 h-3.5 text-dim" />
                  <span className="text-dim">{latestFeature.readMins} min</span>
                </div>

                <div className="flex items-center gap-1 rounded-full bg-white/5 border border-border/60 px-3 py-1">
                  <CalendarDays className="w-3.5 h-3.5 text-dim" />
                  <span className="text-dim">
                    {new Date(latestFeature.date).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </header>

              <div className="mt-4">
                <h2 className="text-2xl sm:text-3xl leading-snug font-semibold">
                  {latestFeature.title}
                </h2>
                <p className="mt-3 text-base text-dim">
                  {latestFeature.description}
                </p>
                <a href={latestFeature.href} className="absolute inset-0" aria-label={latestFeature.title}></a>
              </div>
            </div>
          </article>

          {/* sidebar: trending + categories */}
          <aside className="space-y-6">
            <div>
              <div className="text-xs uppercase tracking-wide text-dim mb-2">Trending</div>
              <div className="space-y-4">
                {trending.map((t, i) => (
                  <a
                    key={i}
                    href={t.href}
                    className="flex gap-3 rounded-xl overflow-hidden border border-border/60 bg-card hover:bg-white/5 transition"
                  >
                    <div className="w-28 shrink-0 aspect-video bg-black/20">
                      <img src={t.image} alt="" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div className="py-3 pr-3 flex-1">
                      <div className="flex items-center gap-2 text-xs mb-1">
                        <span className="rounded-full bg-white/5 border border-border/60 px-2 py-0.5 text-dim">
                          {t.category}
                        </span>
                      </div>
                      <div className="text-sm leading-snug line-clamp-3">{t.title}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-wide text-dim mb-2">
                Explore All Insights Topic
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {categories.map((c, i) => (
                  <a
                    key={i}
                    href={c.href}
                    className="group flex items-center gap-3 rounded-xl border border-border/60 bg-card px-3 py-2 hover:bg-white/5 transition"
                  >
                    <div className="opacity-60 group-hover:opacity-100 transition">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    <div className="font-semibold">{c.name}</div>
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="h-px w-full bg-border/60" />

        {/* mid grid */}
        <div className="py-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {midGrid.map((post, i) => (
              <a
                key={i}
                href={post.href}
                className="group rounded-2xl overflow-hidden bg-card border border-border/60 hover:bg-white/5 transition"
              >
                <div className="aspect-[16/9]">
                  <img src={post.image} alt="" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <header className="flex items-center gap-2 text-xs">
                    <span className="rounded-full bg-white/5 border border-border/60 px-2 py-0.5">
                      <span className="underline decoration-transparent group-hover:decoration-white/40">
                        {post.category}
                      </span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-dim">
                      <ClockIcon className="w-3.5 h-3.5" />
                      {post.mins} min
                    </span>
                    <span className="inline-flex items-center gap-1 text-dim">
                      <CalendarDays className="w-3.5 h-3.5" />
                      {new Date(post.date).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </header>
                  <h3 className="mt-3 text-base leading-snug line-clamp-3">{post.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* breaking news strip */}
        <div className="py-6">
          <div className="flex items-center justify-between mb-3">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs uppercase tracking-wide px-2 py-1 rounded bg-primary text-white">
                Breaking News
              </span>
              <a href="/insights/breaking-news" className="text-sm text-dim hover:text-white transition">
                View All
              </a>
            </div>
          </div>

          <div
            ref={scrollerRef}
            className="flex gap-3 overflow-x-auto no-scrollbar scroll-smooth pr-1"
          >
            {breaking.map((b, i) => (
              <a
                key={i}
                href={b.href}
                className="min-w-[360px] max-w-[480px] flex-1 rounded-xl border border-border/60 bg-card px-4 py-3 hover:bg-white/5 transition"
              >
                <div className="text-xs text-dim">{timeAgo(b.when)}</div>
                <div className="mt-1 text-base">{b.title}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
