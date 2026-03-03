import { useState, useEffect } from 'react'
import { ARYEO_BOOKING_URL } from '../config'

// Placeholder hero images — swap with real property photos
const heroSlides = [
  {
    url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=85',
    alt: 'Luxury home exterior at dusk',
  },
  {
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85',
    alt: 'Modern living room interior',
  },
  {
    url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=85',
    alt: 'Contemporary home with pool',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="hero"
      className="relative h-screen min-h-[600px] overflow-hidden flex items-center justify-center"
    >
      {/* Photo carousel */}
      {heroSlides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.url}
            alt={slide.alt}
            className="w-full h-full object-cover"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-gold font-body font-medium text-sm tracking-[0.25em] uppercase mb-4">
          Phoenix Real Estate Media
        </p>
        <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-6">
          Listings That
          <br />
          <span className="text-gold">Sell Themselves</span>
        </h1>
        <p className="font-body text-white/80 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
          Stunning photography, cinematic video tours, and fast 24-hour turnaround for Phoenix real estate professionals.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={ARYEO_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-white font-body font-medium px-8 py-4 rounded-full text-base hover:bg-amber-600 transition-all duration-200 hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-0.5"
          >
            Book a Shoot
          </a>
          <a
            href="#portfolio"
            className="border border-white/70 text-white font-body font-medium px-8 py-4 rounded-full text-base hover:bg-white hover:text-text-primary transition-all duration-200 hover:-translate-y-0.5"
          >
            See Our Work ↓
          </a>
        </div>

        {/* Slide dots */}
        <div className="flex gap-2 justify-center mt-12">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? 'bg-gold w-6' : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll arrow */}
      <a
        href="#portfolio"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-gold transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  )
}
