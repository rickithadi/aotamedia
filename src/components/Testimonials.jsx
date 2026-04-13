import { useRef } from 'react'
import { useScrollObserver } from '../hooks/useScrollObserver'

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Realtor, Realty ONE Group',
    headline: 'Sold in 3 days, 15% over asking.',
    quote: 'Colin delivered absolutely stunning photos of my listing within 24 hours. The quality blew my clients away.',
  },
  {
    name: 'James R.',
    role: 'Real Estate Investor',
    headline: 'More showings than the competition.',
    quote: 'The video tour felt like something out of a luxury magazine. Worth every penny.',
  },
  {
    name: 'Diana K.',
    role: 'Broker Associate, Coldwell Banker',
    headline: '20+ listings and he never misses.',
    quote: "Fast, professional, and the results speak for themselves. My go-to photographer in Phoenix.",
  },
  {
    name: 'Mark T.',
    role: 'Independent Agent',
    headline: "Photos I'm finally proud to use.",
    quote: "The headshot session was so relaxed and fun. Highly recommend to any agent.",
  },
  {
    name: 'Priya S.',
    role: 'Team Lead, Keller Williams',
    headline: 'Our brand looks elite now.',
    quote: "We hired Aota Media for our whole team's headshots and the logo redesign. The consistency and quality across everything was incredible.",
  },
]

export default function Testimonials() {
  const scrollRef = useRef(null)
  const sectionRef = useScrollObserver()

  const scroll = (dir) => {
    const container = scrollRef.current
    if (!container) return
    container.scrollBy({ left: dir * 340, behavior: 'smooth' })
  }

  return (
    <section id="testimonials" className="py-24 bg-bg-warm overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Featured pull quote — replaces the generic eyebrow+title */}
        <div ref={sectionRef} className="fade-up mb-12">
          <p className="section-eyebrow mb-5">What Agents Are Saying</p>
          <blockquote className="font-display font-semibold text-3xl md:text-5xl text-text-primary leading-tight max-w-3xl mb-3">
            "Sold in 3 days, 15% over asking."
          </blockquote>
          <cite className="font-body text-text-secondary not-italic text-sm">
            — Sarah M., Realtor, Realty ONE Group
          </cite>
        </div>

        <div className="relative">
          {/* Scroll buttons */}
          <button
            onClick={() => scroll(-1)}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white border border-border rounded-full shadow-md items-center justify-center text-text-secondary hover:text-gold hover:border-gold transition-colors"
            aria-label="Scroll left"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Gradient fade — right edge peek */}
          <div className="absolute right-0 top-0 bottom-4 w-16 md:w-24 bg-gradient-to-l from-bg-warm to-transparent z-10 pointer-events-none" />

          {/* Card strip */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex-none w-80 md:w-96 bg-white border border-border rounded-2xl p-8 snap-start hover:shadow-lg hover:border-gold/30 transition-all duration-300"
              >
                <p className="font-display font-semibold text-text-primary text-lg leading-snug mb-3">
                  "{t.headline}"
                </p>
                <blockquote className="font-body text-text-secondary text-sm leading-relaxed mb-6">
                  {t.quote}
                </blockquote>
                <div>
                  <p className="font-body font-semibold text-text-primary text-sm">{t.name}</p>
                  <p className="font-body text-text-secondary text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll(1)}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white border border-border rounded-full shadow-md items-center justify-center text-text-secondary hover:text-gold hover:border-gold transition-colors"
            aria-label="Scroll right"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile swipe hint */}
        <p className="md:hidden text-center text-text-secondary/50 text-xs font-body mt-3 tracking-wide">
          swipe for more →
        </p>
      </div>
    </section>
  )
}
