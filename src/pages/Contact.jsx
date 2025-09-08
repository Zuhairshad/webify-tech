import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'

import ContactPageForm from '../components/ContactPageForm.jsx'
import FooterIntro from '../components/FooterIntro.jsx'

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />

      <main className="container-x pb-2 bg-white !pt-0">
      <Hero
                    variant="work"
                    minH="min-h-[70vh]"
                    imgDesktop="Contact.jpg"
                    imgMobile="Contact.jpg"
                    overlayClass="bg-gradient-to-t from-slate-50 via-[#795448] to-transparent"
                    titleLines={['Lets Get Started With Webify Tech']}
                    subtitle="Contact us to discuss your inquiry, and we'll get back to you shortly."
                />
        
        <ContactPageForm />
        <FooterIntro />
      </main>
    </div>
  );
}
