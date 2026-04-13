import Nav from './components/Nav'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Pricing from './components/Pricing'
import About from './components/About'
import Testimonials from './components/Testimonials'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'
import MobileBookBar from './components/MobileBookBar'

export default function App() {
  return (
    <div className="min-h-screen bg-bg-warm">
      <Nav />
      <main className="pb-20 md:pb-0">
        <Hero />
        <Portfolio />
        <Services />
        <Pricing />
        <About />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
      <MobileBookBar />
    </div>
  )
}
