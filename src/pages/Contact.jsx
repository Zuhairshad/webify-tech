import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'

import ContactPageForm from '../components/ContactPageForm.jsx'
import FooterIntro from '../components/FooterIntro.jsx'

export default function Home() {
  return (
    <div className="bg-slate-50">
      <Navbar />

      <main className="container-x pb-2 bg-slate-50 !pt-0">
      <Hero
  variant="work"
  minH="min-h-[70vh]"
  imgDesktop="Contact.jpg"
  imgMobile="Contact.jpg"
  overlayClass="bg-gray-700"

  titleLines={['Lets Get Started With Webify Tech']}
  titleColor="text-white"        // <-- make title black
  subtitle="Contact us to discuss your inquiry, and we'll get back to you shortly."
/>

        
        <ContactPageForm />
        <FooterIntro />
      </main>
    </div>
  );
}
