import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import NoticeBoard from './components/NoticeBoard'
import About from './components/About'
import Facilities from './components/Facilities'
import Academics from './components/Academics'
import WhyChooseUs from './components/WhyChooseUs'
import Gallery from './components/Gallery'
import Admission from './components/Admission'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import StickyApply from './components/StickyApply'
import PrincipalSection from './components/PrincipalSection'
import AdmissionBanner from './components/AddmissionBanner'
import ResultSection from './components/ResultSection'
import ResultShowcase from './components/ResultShowCase'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">

      <Navbar />

      {/* FIRST IMPRESSION */}
      <Hero />
      <NoticeBoard />

      {/* TRUST BUILDING */}
      <About />
      <PrincipalSection />

      {/* DECISION MAKING */}
      <WhyChooseUs />
      <Academics />

      {/* PROOF */}
      <Facilities />
      <Gallery />

      {/* SOCIAL PROOF */}
      <Testimonials />
      <ResultShowcase/>
      <ResultSection />

      {/* CONVERSION */}
      <AdmissionBanner />
      <Admission />

      {/* FINAL ACTION */}
      <Contact />
      <Footer />

      {/* FLOATING CTA */}
      <FloatingWhatsApp />
      <StickyApply />
    </div>
  )
}

export default App
