import React, { useEffect, useRef } from "react";

/* inline icons (no external deps) */
const ChevronRight = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </svg>
);
const ClockIcon = (props) => (
  <svg viewBox="0 0 12 13" fill="none" stroke="currentColor" {...props}>
    <path d="M6 3.5V6.5H8.25" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10.5 6.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const CalendarDays = (props) => (
  <svg viewBox="0 0 12 13" fill="currentColor" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.375 1.625a.375.375 0 0 1 .375.375V2.75h4.5V2a.375.375 0 0 1 .75 0v.75h.375c.828 0 1.5.672 1.5 1.5v5.625c0 .828-.672 1.5-1.5 1.5h-6.75c-.828 0-1.5-.672-1.5-1.5V4.25c0-.828.672-1.5 1.5-1.5H3V2a.375.375 0 0 1 .375-.375Zm6.75 4.5a.75.75 0 0 0-.75-.75h-6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75h6.75c.414 0 .75-.336.75-.75V6.125Z"
    />
  </svg>
);

/* time-ago helper */
function timeAgo(datetime) {
  const parsed = new Date(datetime.replace(" ", "T"));
  if (Number.isNaN(parsed)) return "Invalid date";
  const now = new Date();
  const diff = now - parsed;
  const m = 60 * 1000, h = 60 * m, d = 24 * h;
  if (diff < m) return `${Math.round(diff / 1000)} sec ago`;
  if (diff < h) return `${Math.round(diff / m)} min ago`;
  if (diff < d) return `${Math.round(diff / h)} hr ago`;
  return `${Math.round(diff / d)} days ago`;
}

/* demo data */
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
    title: "Most Followed Beauty Influencers (2025): The Top Beauty Creators By Total Followers",
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

export default function Insights() {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let raf, dir = 1;
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
    <section className="bvi-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* header */}
        <div className="flex items-center justify-between py-8">
          <a href="#" className="flex items-center gap-3">
            <div className="text-xl font-semibold tracking-wide">
              <span className="opacity-80">Brand Vision</span>{" "}
              <span className="italic text-primary">Insights</span>
            </div>
          </a>

          <a href="/insights" className="btn-primary">
            <span className="link-underline">Visit Insights</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <div className="soft-divider" />

        {/* main 2-col */}
        <div className="grid lg:grid-cols-[1fr_360px] gap-8 py-8">
          {/* latest feature */}
          <article className="relative bvi-card">
            <div className="overflow-hidden rounded-2xl">
              <div className="aspect-[16/9] relative">
                <img
                  alt={latestFeature.title}
                  src={latestFeature.image}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/10" />
              </div>

              <div className="p-5 sm:p-6">
                <header className="flex flex-wrap items-center gap-3 text-xs">
                  <a
                    href={`/insights/${latestFeature.category.toLowerCase()}`}
                    className="badge"
                  >
                    <span className="link-underline">{latestFeature.category}</span>
                  </a>

                  <div className="inline-flex items-center gap-1 u-tx-secondary">
                    <ClockIcon className="w-3.5 h-3.5" />
                    <span>{latestFeature.readMins} min</span>
                  </div>

                  <div className="inline-flex items-center gap-1 u-tx-secondary">
                    <CalendarDays className="w-3.5 h-3.5" />
                    <span>
                      {new Date(latestFeature.date).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </header>

                <h2 className="mt-3 text-2xl sm:text-3xl leading-snug font-semibold">
                  {latestFeature.title}
                </h2>
                <p className="mt-3 text-base u-tx-secondary line-clamp-3">
                  {latestFeature.description}
                </p>
                <a href={latestFeature.href} className="absolute inset-0" aria-label={latestFeature.title} />
              </div>
            </div>
          </article>

          {/* sidebar */}
          <aside className="space-y-8">
            {/* trending */}
            <div>
              <div className="text-xs uppercase tracking-wide u-tx-secondary mb-3">Trending</div>
              <div className="space-y-3">
                {trending.map((t, i) => (
                  <a
                    key={i}
                    href={t.href}
                    className="group flex gap-3 rounded-xl px-2 py-2 hover:bg-white/[0.04] transition"
                  >
                    <div className="w-28 shrink-0 aspect-video overflow-hidden rounded-md ring-subtle">
                      <img src={t.image} alt="" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div className="py-1 pr-1 flex-1">
                      <div className="text-[11px] u-tx-secondary mb-1">{t.category}</div>
                      <div className="text-sm leading-snug opacity-90 group-hover:opacity-100 clamp-3">
                        {t.title}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* categories */}
            <div>
              <div className="text-xs uppercase tracking-wide u-tx-secondary mb-3">
                Explore All Insights Topic
              </div>
              <div className="grid grid-cols-2 gap-y-2">
                {categories.map((c, i) => (
                  <a
                    key={i}
                    href={c.href}
                    className="group inline-flex items-center gap-2 text-[15px] font-semibold text-white/90 hover:text-white"
                  >
                    <span className="relative inline-flex items-center justify-center w-5 h-5">
                      <ChevronRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-70 group-hover:translate-x-0 transition" />
                    </span>
                    <span className="link-underline">{c.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="soft-divider" />

        {/* mid grid */}
        <div className="py-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {midGrid.map((post, i) => (
              <a
                key={i}
                href={post.href}
                className="group rounded-2xl overflow-hidden ring-subtle ring-subtle-hov bvi-card"
              >
                <div className="aspect-[16/9]">
                  <img src={post.image} alt="" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <header className="flex items-center gap-3 text-[12px] u-tx-secondary">
                    <span>{post.category}</span>
                    <span className="inline-flex items-center gap-1">
                      <ClockIcon className="w-3.5 h-3.5" />
                      {post.mins} min
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <CalendarDays className="w-3.5 h-3.5" />
                      {new Date(post.date).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </header>
                  <h3 className="mt-2 text-[15px] leading-snug text-white/90 group-hover:text-white clamp-3">
                    {post.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* breaking news strip */}
        <div className="py-6">
          <div className="flex items-center justify-between mb-3">
            <div className="inline-flex items-center gap-2">
              <span className="text-[11px] uppercase tracking-wide px-2 py-1 rounded bg-primary text-white">
                Breaking News
              </span>
              <a href="/insights/breaking-news" className="text-sm u-tx-secondary hover:text-white transition">
                View All
              </a>
            </div>
          </div>

          <div ref={scrollerRef} className="flex gap-3 overflow-x-auto no-scrollbar scroll-smooth pr-1">
            {breaking.map((b, i) => (
              <a
                key={i}
                href={b.href}
                className="min-w-[360px] max-w-[480px] flex-1 rounded-xl px-4 py-3 ring-subtle ring-subtle-hov bvi-card"
              >
                <div className="text-xs u-tx-secondary">{timeAgo(b.when)}</div>
                <div className="mt-1 text-base text-white/90">{b.title}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
