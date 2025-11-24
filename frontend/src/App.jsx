import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import PerformanceMaxSection from './components/PerformanceMaxSection';
import SignupOffers from './components/SignupOffers';
import CaseStudyCarousel from './components/CaseStudyCarousel';
import HelpCallout from './components/HelpCallout';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  const handleCTA = () => {
    document
      .getElementById("offer-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">

      {/* HERO SECTION */}
      <Hero onCTAClick={handleCTA} />

      {/* FEATURES SECTION — this appears right after hero */}
      <Features />
      {/* <AdFeatureSelector /> */}
      <PerformanceMaxSection />
      <SignupOffers />
      <CaseStudyCarousel />
      <HelpCallout />
      <FAQSection />
      <Footer />

      {/* Keep empty placeholder for future sections */}
      <div id="offer-section"></div>

    </div>
  );
}

export default App;
