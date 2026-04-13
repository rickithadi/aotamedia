import { useRef } from 'react'
import { useScrollObserver } from '../hooks/useScrollObserver'

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Realtor, Realty ONE Group',
    quote: 'Colin delivered absolutely stunning photos of my listing within 24 hours. The quality blew my clients away — the home sold in 3 days, 15% over asking.',
    stars: 5,
  },
  {
    name: 'James R.',
    role: 'Real Estate Investor',
    quote: "The video tour Aota Media produced felt like something out of a luxury magazine. Worth every penny. My listings now consistently get more showings than the competition.",
    stars: 5,
  },
  {
    name: 'Diana K.',
    role: 'Broker Associate, Coldwell Banker',
    quote: "Fast, professional, and the results speak for themselves. I've used Colin for over 20 listings and he never misses. My go-to photographer in Phoenix.",
    stars: 5,
  },
  {
    name: 'Mark T.',
    role: 'Independent Agent',
    quote: "The headshot session was so relaxed and fun. I finally have photos I'm proud to use on my website and cards. Highly recommend to any agent.",
    stars: 5,
  },
  {
    name: 'Priya S.',
    role: 'Team Lead, Keller Williams',
    quote: "We hired Aota Media for our whole team's headshots and the logo redesign. The consistency and quality across everything was incredible. Our brand looks elite now.",
    stars: 5,
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-gold fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

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
                <StarRating count={t.stars} />
                <blockquote className="font-body text-text-secondary text-sm leading-relaxed mb-6">
                  "{t.quote}"
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
