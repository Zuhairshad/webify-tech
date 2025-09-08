import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Services from '../components/Services.jsx'
import RecentClients from '../components/RecentClients.jsx'
import FeaturedWork from '../components/FeaturedWork.jsx'
import IndustriesSection from '../components/IndustriesSection.jsx'
import FaqsSection from '../components/FaqsSection.jsx'
import Insights from '../components/Insights.jsx'
import TestimonialsSection from '../components/TestimonialsSection.jsx'
import ContactSection from '../components/ContactSection.jsx'
import FooterIntro from '../components/FooterIntro.jsx'

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />

      <main className="container-x pb-2 bg-white !pt-0">
        <Hero />
        <Services />
        <RecentClients />
        <FeaturedWork />
        <IndustriesSection />
        <FaqsSection />
        <Insights />
        <TestimonialsSection />
        <ContactSection />
        <FooterIntro />
      </main>
    </div>
  );
}
