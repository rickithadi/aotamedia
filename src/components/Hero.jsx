import { ARYEO_BOOKING_URL } from '../config'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden"
    >
      {/* Left — Colin's photo */}
      <div className="relative lg:w-[58%] h-[55vh] lg:h-screen flex-shrink-0">
        <img
          src="/images/colin-hero.png"
          alt="Colin, founder of Aota Media, with his camera rig"
          className="w-full h-full object-cover object-left-top"
          fetchPriority="high"
        />
        {/* Soft right-edge blend into content panel */}
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-r from-transparent to-bg-warm hidden lg:block" />
        {/* Bottom blend on mobile */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-bg-warm lg:hidden" />
      </div>

      {/* Right — Content */}
      <div className="flex-1 bg-bg-warm flex items-center justify-start px-8 md:px-12 lg:px-16 py-16 lg:py-0">
        <div className="max-w-lg w-full">
          <p className="section-eyebrow mb-5">Phoenix Real Estate Media</p>

          <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-text-primary leading-[1.05] mb-6">
            Listings That
            <br />
            <span className="text-gold">Sell Themselves</span>
          </h1>

          <p className="font-body text-text-secondary text-lg leading-relaxed mb-10 max-w-sm">
            Stunning photography, cinematic video tours, and fast 24-hour turnaround for Phoenix real estate professionals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={ARYEO_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-white font-body font-medium px-8 py-4 rounded-full text-base hover:bg-amber-600 transition-all duration-200 hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-0.5 text-center"
            >
              Book a Shoot
            </a>
            <a
              href="#portfolio"
              className="border border-border text-text-primary font-body font-medium px-8 py-4 rounded-full text-base hover:border-gold hover:text-gold transition-all duration-200 hover:-translate-y-0.5 text-center"
            >
              See Our Work ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
