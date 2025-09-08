// src/components/FooterIntro.jsx
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaTiktok,
} from "react-icons/fa6";

export default function FooterIntro() {
  const socials = [
    { href: "https://www.instagram.com/brandvisionofficial/", label: "Instagram", Icon: FaInstagram },
    { href: "https://www.facebook.com/BrandVisionM", label: "Facebook", Icon: FaFacebookF },
    { href: "https://www.linkedin.com/company/brandvm", label: "LinkedIn", Icon: FaLinkedinIn },
    { href: "https://x.com/brandvmofficial", label: "X (Twitter)", Icon: FaXTwitter },
    { href: "https://www.tiktok.com/@brandvisioninsights", label: "TikTok", Icon: FaTiktok },
  ];

  const footerLinks = [
    {
      title: "Quick Links",
      items: [
        { label: "Home", href: "/" },
        { label: "Our Work", href: "/our-work-portfolio" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Services",
      items: [
        { label: "All Services", href: "/services" },
        { label: "Web Design", href: "/web-design" },
        { label: "Branding", href: "/branding" },
        { label: "UI UX", href: "/ui-ux-agency" },
        { label: "Consultation & Audit", href: "/marketing-consultation" },
        { label: "SEO", href: "#" },
      ],
    },
    {
      title: "Company",
      items: [
        { label: "Insights", href: "/insights" },
        { label: "Career", href: "/career" },
        { label: "FAQ", href: "/faq" },
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Sitemap", href: "/sitemap" },
      ],
    },
  ];

  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* ---- Brand + Socials ---- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-6">
            <span className="font-['Dancing_Script'] text-[clamp(22px,4vw,30px)] tracking-tight">
              WebifyTech
            </span>
            <p className="mt-5 max-w-sm text-base text-white/80">
              We are Webify Tech, a media company and an award-winning marketing and web design agency.
            </p>
          </div>

          <div className="md:col-span-6 md:justify-self-end">
            <div className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/70">
              Follow Us:
            </div>
            <ul className="flex flex-wrap items-center gap-3 sm:gap-4">
              {socials.map(({ href, label, Icon }, i) => (
                <motion.li
                  key={label}
                  initial={{ y: 0 }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    repeatDelay: 0.3,
                    ease: "easeInOut",
                    delay: i * 0.15,
                  }}
                >
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20 transition"
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* ---- Divider Line ---- */}
        <div className="border-t border-white/20 my-10"></div>

        {/* ---- Links + Contacts Section ---- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Links */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-white/80 hover:text-white transition text-sm"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contacts */}
          <div className="md:col-span-4">
            <h4 className="text-lg font-semibold mb-4">Contacts</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <a href="mailto:info@brandvm.com" className="hover:text-white transition">
                  info@webifytech.com
                </a>
              </li>
              <li>
                <a href="tel:+1888-832-2917" className="hover:text-white transition">
                  +1 888-832-2917 (Toll-Free)
                </a>
                <br />
                <a href="tel:+1416360-3434" className="hover:text-white transition">
                  +1 416 360-3434
                </a>
              </li>
              <li>
                Spaces by Kaizen , Block C Firdous Market Lahore <br />
                <a
                  href="https://goo.gl/maps/r8dQY34yU76VLDHX7"
                  target="_blank"
                  className="underline text-white/60 hover:text-white"
                >
                  Get Direction
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
