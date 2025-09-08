// src/sections/Testimonials.jsx
import { useRef } from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function StaticCompanyCard() {
    const bounce = {
        animate: { y: [0, -6, 0], transition: { duration: 1.6, repeat: Infinity, ease: "easeInOut" } },
    };
    const socials = [
        { Icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn", delay: 0 },
        { Icon: FaTwitter, href: "https://twitter.com", label: "Twitter/X", delay: 0.15 },
        { Icon: FaFacebookF, href: "https://facebook.com", label: "Facebook", delay: 0.3 },
        { Icon: FaInstagram, href: "https://instagram.com", label: "Instagram", delay: 0.45 },
    ];
    return (
        <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 md:p-7 shadow-sm">
            <div className="flex flex-col gap-5">
                <img
                    src="TesSecImg.jpg"
                    alt="Webify Tech office"
                    className="h-32 w-full object-cover rounded-xl"
                />
                <div>
                    <h3 className="text-xl font-semibold text-slate-900">Webify Tech</h3>
                    <p className="mt-1.5 text-sm text-slate-600">
                        Our vision is to craft premium, performant web experiences that grow with your business —
                        merging clean UX, modern engineering, and measurable outcomes.
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                        {socials.map(({ Icon, href, label, delay }) => (
                            <motion.a
                                key={label}
                                href={href}
                                aria-label={label}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm hover:shadow transition"
                                variants={bounce}
                                animate="animate"
                                transition={{ delay }}
                            >
                                <Icon className="text-slate-700" />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function TCard({ title, body, author, role }) {
    return (
        <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 md:p-7 shadow-sm">
            <div className="text-lg font-semibold text-slate-900">{title}</div>
            <p className="mt-3 text-slate-600">{body}</p>
            <div className="mt-6 pt-4 border-t border-slate-200">
                <div className="font-medium text-slate-900">{author}</div>
                <div className="text-sm text-slate-500">{role}</div>
            </div>
        </div>
    );
}

export default function TestimonialsSection() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const testimonials = [
        {
          title: "Communication was simple and fast.",
          body:
            "Webify Tech delivered a requirement-accurate website with smooth animations. Responsive team and deep technical knowledge.",
          author: "Jim Willis",
          role: "CEO, Kinshasa Lifestyle",
        },
        {
          title: "We built a great website together.",
          body:
            "Visually pleasing design, engaging interactions, and on-time delivery. Their process was organized and transparent.",
          author: "Brian Mendoza",
          role: "Project Manager, Mendoza Firm",
        },
        {
          title: "Exactly what we wanted.",
          body:
            "They created a beautiful brand + site that helped us stand out. Communication and responsiveness were exceptional.",
          author: "Sean Alberto",
          role: "Marketing Director, Omni Management",
        },
        {
          title: "Exceeded expectations.",
          body:
            "Over 700 registrations after launch. Strategy, design, and execution resonated with our audience.",
          author: "Jordan Kianzad",
          role: "Marketing Coordinator, Winona Towns LTD",
        },
        {
          title: "Highly professional team.",
          body:
            "Their structured workflow and attention to detail ensured our project was delivered ahead of schedule without compromising quality.",
          author: "Amira Khan",
          role: "Operations Head, BrightWave Consulting",
        },
        {
          title: "A seamless collaboration.",
          body:
            "From kickoff to delivery, the process was transparent. They listened closely to our needs and translated them into an elegant product.",
          author: "Daniel Lee",
          role: "Founder, UrbanHive Digital",
        },
        {
          title: "True design innovators.",
          body:
            "The UI/UX strategy gave our platform a modern, user-friendly look. Feedback from our users has been overwhelmingly positive.",
          author: "Sophia Martinez",
          role: "Product Lead, Horizon Media",
        },
        {
          title: "Outstanding reliability.",
          body:
            "We appreciated their responsiveness and ability to solve complex challenges quickly. The final site exceeded our technical requirements.",
          author: "Michael Chen",
          role: "CTO, Nova Systems",
        },
        {
          title: "A valuable long-term partner.",
          body:
            "We’ve worked with many agencies, but Webify Tech consistently outperformed expectations. They are now our go-to partner for digital work.",
          author: "Rachel Adams",
          role: "Managing Director, Corestone Ventures",
        },
        {
          title: "Impressive results.",
          body:
            "Our website traffic increased by 65% post-launch, and conversions improved significantly. Their mix of creativity and strategy is rare.",
          author: "Omar Siddiqui",
          role: "Head of Marketing, Zenith Global",
        },
      ];
      

    return (
        <section className="section bg-white  md:py-24">
            <div className="w-full max-w-6xl mx-auto px-4">
                {/* Section title */}
                <div className="mb-6">
                    <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                        Testimonials
                    </span>
                    <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-900">
                        Hear From Our Clients
                    </h2>
                </div>

                {/* === ROW OF 3 ON DESKTOP === */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* left: static card */}
                    <StaticCompanyCard />

                    {/* right: carousel occupies 2 columns */}
                    <div className="md:col-span-2">
                        <Swiper
                            modules={[Navigation, Autoplay, A11y]}
                            autoplay={{ delay: 4500, disableOnInteraction: false }}
                            spaceBetween={24}
                            slidesPerView={1}
                            breakpoints={{ 768: { slidesPerView: 2 } }}
                            a11y={{ enabled: true }}
                            onInit={(swiper) => {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                                swiper.navigation.init();
                                swiper.navigation.update();
                            }}
                        >
                            {testimonials.map((t, i) => (
                                <SwiperSlide key={i}>
                                    <TCard {...t} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="flex justify-end gap-3 mt-4">
                            <button
                                ref={prevRef}
                                className="h-10 w-10 rounded-full bg-blue-500 text-white flex items-center justify-center shadow hover:bg-blue-600 transition"
                            >
                                ←
                            </button>
                            <button
                                ref={nextRef}
                                className="h-10 w-10 rounded-full bg-blue-500 text-white flex items-center justify-center shadow hover:bg-blue-600 transition"
                            >
                                →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
