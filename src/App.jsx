import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import RecentClients from './components/RecentClients.jsx'
import FeaturedWork from './components/FeaturedWork.jsx'
import IndustriesSection from './components/IndustriesSection.jsx'
import FaqsSection from './components/FaqsSection.jsx'
import Insights from './components/Insights.jsx'


export default function App() {
  return (
    <div className='bg-white'>
      <Navbar />

      <main className="container-x space-y-16 pb-2 bg-white !pt-0">{/* add bg */}
        <Hero/>
        <Services />
        <RecentClients />
        <FeaturedWork />
        <IndustriesSection />
        <FaqsSection/>
        <Insights/>
      </main>
    </div>
  );
}

