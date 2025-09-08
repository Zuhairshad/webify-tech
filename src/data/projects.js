// src/Assets/projects.js
const projects = [
  // ===== Consultation & Audit (2) =====
  {
    id: "ops-readiness-review",
    title: "Ops Readiness Review",
    blurb:
      "Comprehensive discovery to align business goals, KPIs, and tech constraints before execution.",
    category: "Consultation & Audit",
    tags: ["Discovery", "Roadmap", "Workshops"],
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
    caseHref: "/work/ops-readiness-review",
    liveHref: "#",
    details: {
      challenge:
        "Leadership lacked a clear view of priorities and technical constraints, causing stalled initiatives.",
      solution:
        "Ran stakeholder workshops, mapped KPIs to initiatives, and produced a sequenced delivery roadmap.",
      outcome:
        "Alignment across teams, 12-week delivery plan approved, and faster sign-offs on key projects.",
    },
  },
  {
    id: "commerce-tech-audit",
    title: "Commerce Tech Audit",
    blurb:
      "End-to-end evaluation of the existing commerce stack with quick wins and a migration plan.",
    category: "Consultation & Audit",
    tags: ["Audit", "Architecture"],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
    caseHref: "/work/commerce-tech-audit",
    liveHref: "#",
    details: {
      challenge:
        "High cart abandonment and slow releases due to monolithic code and unclear ownership.",
      solution:
        "Audited stack, recommended modular services, and introduced CI/CD with observability KPIs.",
      outcome:
        "Checkout failures down 35%, deployments 3× more frequent, and clearer ownership boundaries.",
    },
  },

  // ===== SEO (2) =====
  {
    id: "topical-map-expansion",
    title: "Topical Map Expansion",
    blurb:
      "Built a content cluster and internal-link structure that lifted non-brand traffic by 48%.",
    category: "SEO",
    tags: ["On-Page", "Content"],
    image:
      "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?q=80&w=1600&auto=format&fit=crop",
    caseHref: "/work/topical-map-expansion",
    liveHref: "#",
    details: {
      challenge:
        "Fragmented content with low topical authority and weak internal linking.",
      solution:
        "Created topical clusters, pillar pages, and a schema strategy; rolled out an internal link policy.",
      outcome:
        "+48% non-brand organic traffic and +23% average position across priority keywords in 90 days.",
    },
  },
  {
    id: "core-web-vitals-sprint",
    title: "Core Web Vitals Sprint",
    blurb:
      "LCP + CLS improvements via image optimization, font policies, and route-level code splitting.",
    category: "SEO",
    tags: ["CWV", "Performance"],
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop",
    caseHref: "/work/core-web-vitals-sprint",
    liveHref: "#",
    details: {
      challenge:
        "Poor LCP and CLS scores were capping rankings and hurting conversions on mobile.",
      solution:
        "Implemented responsive image policy, critical CSS, preconnect hints, and font-display swap.",
      outcome:
        "LCP improved by 42%, CLS stabilized under 0.1, and mobile conversion rate increased by 18%.",
    },
  },

  // ===== Branding (2) =====
  {
    id: "northwind-rebrand",
    title: "Northwind Rebrand",
    blurb:
      "A confident visual system: typography, color, and motion rules shipped as a brand kit.",
    category: "Branding",
    tags: ["Identity", "Guidelines"],
    image:
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=1600&auto=format&fit=crop",
    caseHref: "/work/northwind-rebrand",
    liveHref: "#",
    details: {
      challenge:
        "Inconsistent identity across touchpoints diluted brand recognition and trust.",
      solution:
        "Developed a scalable design language, motion guidelines, and an asset library with usage rules.",
      outcome:
        "Consistent brand application, faster creative production, and stronger recall in surveys.",
    },
  },
  {
    id: "aurora-naming-voice",
    title: "Aurora Naming & Voice",
    blurb:
      "Naming sprint, story pillars, and tone of voice for a climate-tech startup.",
    category: "Branding",
    tags: ["Naming", "Copy"],
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1600&auto=format&fit=crop",
    caseHref: "/work/aurora-naming-voice",
    liveHref: "#",
    details: {
      challenge:
        "Founders needed a memorable name and voice that balanced innovation with trust.",
      solution:
        "Ran name exploration, legal pre-checks, and voice of customer research to craft tone pillars.",
      outcome:
        "Approved name and messaging framework; improved pitch clarity and investor engagement.",
    },
  },

  // ===== Web Development (5) =====
  {
    id: "safeway-b2b-portal",
    featured: true,
    tagPrimary: "Website",
    tagSecondary: "Branding",
    title: "Safeway (Albertsons)",
    blurb:
      "Website Redesign & B2B Customer Experience for a national grocery brand.",
    category: "Web Development",
    tags: ["React", "Node", "RBAC"],
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop",
    caseHref: "/work/safeway-b2b-portal",
    liveHref: "#",
    details: {
      challenge:
        "Outdated B2B portal with slow performance and confusing user flows for corporate buyers.",
      solution:
        "Rebuilt as a component-driven React app with role-based dashboards, faster search, and updated brand UI.",
      outcome:
        "Time-to-checkout reduced by ~40%, higher buyer satisfaction scores, and a scalable codebase.",
    },
  },
  {
    id: "saas-billing-trials",
    title: "SaaS Billing & Trials",
    blurb:
      "Stripe-based billing, trial logic, and usage metering with audit-ready events.",
    category: "Web Development",
    tags: ["SaaS", "Stripe"],
    image:
      "https://images.unsplash.com/photo-1551281044-8b89aac3b24f?q=80&w=1600&auto=format&fit=crop",
    caseHref: "/work/saas-billing-trials",
    liveHref: "#",
    details: {
      challenge:
        "Billing edge cases and manual proration caused revenue leakage and support load.",
      solution:
        "Implemented metered billing, webhooks with idempotency, and a customer portal for plan changes.",
      outcome:
        "Refund tickets down 55%, revenue recognition simplified, and faster plan experimentation.",
    },
  },
  {
    id: "headless-cms-publishing",
    title: "Headless CMS Publishing",
    blurb:
      "Next.js + headless content modeling for fast editorial workflows and preview flows.",
    category: "Web Development",
    tags: ["Next.js", "Headless CMS"],
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop",
    caseHref: "/work/headless-cms-publishing",
    liveHref: "#",
    details: {
      challenge:
        "Marketing couldn’t move quickly due to dev bottlenecks and rigid content structures.",
      solution:
        "Modeled reusable content types, added preview environments, and role-based publishing.",
      outcome:
        "Editorial velocity up 3×, fewer dev handoffs, and safer release workflows.",
    },
  },
  {
    id: "analytics-marketing-site",
    title: "Analytics-Ready Marketing Site",
    blurb:
      "Static-first routing, form endpoints, and privacy-friendly analytics instrumentation.",
    category: "Web Development",
    tags: ["Vite", "Edge"],
    image:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop",
    caseHref: "/work/analytics-marketing-site",
    liveHref: "#",
    details: {
      challenge:
        "No reliable funnel analytics and frequent form spam polluted reporting.",
      solution:
        "Implemented serverless form handlers, consent mode, and event schema with auto-tracking.",
      outcome:
        "Clean analytics pipeline, spam reduced by 98%, and clear attribution for campaigns.",
    },
  },
  {
    id: "design-system-theming",
    title: "Design System & Theming",
    blurb:
      "Token-based theming with dark mode, accessibility passes, and UI docs.",
    category: "Web Development",
    tags: ["Design System", "A11y"],
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
    caseHref: "/work/design-system-theming",
    liveHref: "#",
    details: {
      challenge:
        "UI inconsistency across teams slowed delivery and created accessibility regressions.",
      solution:
        "Built tokens, components, and linting rules; set WCAG targets and visual regression tests.",
      outcome:
        "Higher UI consistency, faster product teams, and fewer a11y bugs escaping to prod.",
    },
  },

  // ===== Web Design (2) =====
  {
    id: "wellness-saas",
    featured: true,
    tagPrimary: "Website",
    title: "Wellness SaaS Landing System",
    blurb:
      "Hero variants, social proof, and conversion-first layouts tested across segments.",
    category: "Web Design",
    tags: ["Landing", "A/B"],
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop",
    caseHref: "/work/wellness-saas",
    liveHref: "#",
    details: {
      challenge:
        "Low trial sign-ups due to generic messaging and unclear value propositions.",
      solution:
        "Introduced segmented hero variations, testimonial patterns, and pricing clarity tests.",
      outcome:
        "+27% trial starts and better comprehension scores in user testing.",
    },
  },
  {
    id: "editorial-magazine-ux",
    title: "Editorial Magazine UX",
    blurb:
      "Grid, rhythm, and typography system for long-form reading with subtle motion.",
    category: "Web Design",
    tags: ["Editorial", "Typography"],
    image:
      "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=1600&auto=format&fit=crop",
    caseHref: "/work/editorial-magazine-ux",
    liveHref: "#",
    details: {
      challenge:
        "Readers struggled with long articles on mobile due to cramped typography and weak hierarchy.",
      solution:
        "Defined a fluid typographic scale, reading rhythm, and unobtrusive motion cues.",
      outcome:
        "Reading completion rates up 22% and longer average session time.",
    },
  },

  // ===== UI/UX (2) =====
  {
    id: "onboarding-flow-revamp",
    title: "Onboarding Flow Revamp",
    blurb:
      "Reduced time-to-value with guided tasks, clarity copy, and progressive disclosure.",
    category: "UI/UX",
    tags: ["Onboarding", "Product"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    caseHref: "/work/onboarding-flow-revamp",
    liveHref: "#",
    details: {
      challenge:
        "Users dropped off at the first session due to setup friction and unclear next steps.",
      solution:
        "Designed a guided checklist, in-product tours, and contextual empty states.",
      outcome:
        "Activation rate +19% and time-to-first-value shortened by 35%.",
    },
  },
  {
    id: "mobile-ia-refresh",
    title: "Mobile IA Refresh",
    blurb:
      "Card-sort sessions → simplified information architecture and quicker nav patterns.",
    category: "UI/UX",
    tags: ["Mobile", "Research"],
    image:
      "https://images.unsplash.com/photo-1581092787761-6a4f5d94bb6b?q=80&w=1600&auto=format&fit=crop",
    caseHref: "/work/mobile-ia-refresh",
    liveHref: "#",
    details: {
      challenge:
        "Crowded navigation and unclear labels made key tasks hard to find.",
      solution:
        "Ran card sorts and tree tests; simplified IA and introduced a task-based tab bar.",
      outcome:
        "Task success rate up 31% and support tickets for ‘can’t find’ queries down 45%.",
    },
  },

  // ===== Home Page Featured (additional 4 to make 6 total) =====
  {
    id: "mostardi-platt",
    featured: true,
    tagPrimary: "Website",
    tagSecondary: "Branding",
    title: "Mostardi Platt",
    blurb:
      "Website Design & Brand Refresh for an Environmental Consultancy.",
    category: "Branding",
    tags: ["Website", "Refresh"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    caseHref: "/work/mostardi-platt",
    liveHref: "#",
    details: {
      challenge:
        "Site failed to communicate credibility and expertise to enterprise prospects.",
      solution:
        "Modernized brand, clarified services, and restructured IA with case evidence.",
      outcome:
        "Leads doubled in six months; longer session duration and higher contact conversions.",
    },
  },
  {
    id: "arcelormittal",
    featured: true,
    tagPrimary: "Website",
    title: "ArcelorMittal",
    blurb:
      "Website Design for the world’s leading steel manufacturer.",
    category: "Web Development",
    tags: ["Enterprise", "Global"],
    image:
      "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1600&auto=format&fit=crop",
    caseHref: "/work/arcelormittal",
    liveHref: "#",
    details: {
      challenge:
        "Complex offerings and global footprint needed a clear digital narrative.",
      solution:
        "Clear IA, modular content, and localization support with an industrial yet accessible design.",
      outcome:
        "+35% qualified inquiries from partners and stakeholders across regions.",
    },
  },
  {
    id: "flipp",
    featured: true,
    tagPrimary: "Website",
    title: "Flipp",
    blurb:
      "Web design and development for a professional services brand.",
    category: "Web Development",
    tags: ["Marketing", "CMS"],
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
    caseHref: "/work/flipp",
    liveHref: "#",
    details: {
      challenge:
        "Needed a site that communicated expertise while remaining approachable.",
      solution:
        "Performance-first build with CMS, structured case studies, and trust signals.",
      outcome:
        "Bounce rate halved; improved SEO visibility and stronger brand perception.",
    },
  },
  {
    id: "2992-sheppard",
    featured: true,
    tagSecondary: "Branding",
    title: "2992 Sheppard",
    blurb:
      "Brand identity for a premium real estate development.",
    category: "Branding",
    tags: ["Identity", "Real Estate"],
    image:
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop",
    caseHref: "/work/2992-sheppard",
    liveHref: "#",
    details: {
      challenge:
        "Project struggled to stand out in a crowded market with look-alike brands.",
      solution:
        "Created a refined identity system, marketing collateral, and on-site signage pack.",
      outcome:
        "Sales inquiries +60% post-launch; campaign hit near sell-out within timeline.",
    },
  },
  {
    id: "brandvision",
    featured: true,
    tagSecondary: "Branding",
    title: "Brand Vision",
    blurb:
      "Brand identity and campaign system for a creative agency.",
    category: "Branding",
    tags: ["Campaign", "Identity"],
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1600&auto=format&fit=crop",
    caseHref: "/work/brandvision",
    liveHref: "#",
    details: {
      challenge:
        "Needed a bold identity and site that demonstrates innovation and trust.",
      solution:
        "Built a cohesive brand system and portfolio site showcasing outcomes and awards.",
      outcome:
        "Multiple award recognitions and increased inbound inquiries.",
    },
  },
];

export default projects;
