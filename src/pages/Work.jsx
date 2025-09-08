import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import TestimonialsSection from '../components/TestimonialsSection.jsx'
import ContactSection from '../components/ContactSection.jsx'
import FooterIntro from '../components/FooterIntro.jsx'
import Portfolio from '../components/Portfolio.jsx'
export default function Work() {
    return (
        <div className="bg-white">
            <Navbar />

            <main className="container-x pb-2 bg-white !pt-0">
                <Hero
                    variant="work"
                    imgDesktop="Work.jpg"
                    imgMobile="Work.jpg"
                    overlayClass="bg-gradient-to-b from-black via-[#111827] to-black"
                    titleLines={['Our Latest Work']}
                    subtitle="Our goal is to nurture your vision and provide innovative, custom solutions for all your marketing needs. We provide customized services including branding, website design & development, consultation, SEO, and more."
                />
                <Portfolio />
                <TestimonialsSection />
                <ContactSection />
                <FooterIntro />
            </main>
        </div>
    );
}
