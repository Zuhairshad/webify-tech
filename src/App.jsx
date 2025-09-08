// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Work from "./pages/Work.jsx"
import CaseStudy from "./pages/CaseStudy.jsx";
import Contact from "./pages/Contact.jsx"
import RequestProposal from "./pages/RequestProposal.jsx";
import WebDesign from "./pages/websiteDesign.jsx";
import Navbar from "./components/Navbar.jsx";
import UIUX from "./pages/UIUX.jsx";
import DigitalMarketing from "./pages/digitalMarketing.jsx";
export default function App() {
  return (<>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/work" element={<Work />} />
        <Route path="/work/:id" element={<CaseStudy />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/proposalrequest" element={<RequestProposal/>} />
        <Route path="/services/web-development" element={<WebDesign/>} />
        <Route path="/services/SEO" />
        <Route path="/services/UIUX" element={<UIUX />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />


      {/* add more routes here */}
    </Routes>
    </>
  );
}
