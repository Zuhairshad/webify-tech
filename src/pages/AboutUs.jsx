import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import RecentClients from '../components/RecentClients.jsx'
import FaqsSection from '../components/FaqsSection.jsx'
import Insights from '../components/Insights.jsx'
import TestimonialsSection from '../components/TestimonialsSection.jsx'
import ContactSection from '../components/ContactSection.jsx'
import FooterIntro from '../components/FooterIntro.jsx'
import WhoWeAre from '../components/WhoAreWe.jsx'
import TeamSection from '../components/TeamSection.jsx'
export default function AboutUs() {
  return (
    <div className="bg-white">
      <Navbar />

      <main className="container-x pb-2 bg-white !pt-0">
        <Hero 
         variant="about"
         minH="min-h-[100vh]"   // 👈 full viewport height

         // Background: dotted world map (desktop/mobile can be same)
         imgDesktop="Aboutus.jpg"   // put your asset in /public/images
         imgMobile="Aboutus.jpg"
       
         // Left content
         titleLines={["We Are Webify Tech."]}
         subtitle="A web design and branding agency headquartered in Pakistan and Canada."
         featured={[
           { src: "webify.jpeg", alt: "AP", height: 35 },
         ]}
       
         // Right content (single paragraph for About)
         aboutTop={`At Webify tech, our primary goal is achieving outstanding results for our clients. Our adaptive team offers a broad range of marketing services, custom-tailored to each client's unique needs. By continuously updating our strategies with the latest marketing trends, we ensure effective engagement with various customer groups. Our dedicated approach often surpasses client expectations, fostering a tradition of success and satisfaction.`}
       
         // Keep right panel visible on About
         showRightPanel
        />
        <WhoWeAre/>

        <RecentClients />
        <TeamSection/>
        <FaqsSection />
        <Insights />
        <TestimonialsSection />
        <ContactSection />
        <FooterIntro />
      </main>
    </div>
  );
}
