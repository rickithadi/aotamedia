import { ARYEO_BOOKING_URL } from '../config'
import { useScrollObserver } from '../hooks/useScrollObserver'

export default function CTABanner() {
  const sectionRef = useScrollObserver()

  return (
    <section className="py-24 px-6 bg-gold-light border-t border-b border-gold/20">
      <div ref={sectionRef} className="fade-up max-w-3xl mx-auto text-center">
        <h2 className="font-display font-bold text-4xl md:text-6xl text-text-primary leading-tight mb-6">
          Ready to make your
          <br />
          <span className="text-gold">listing shine?</span>
        </h2>
        <p className="font-body text-text-secondary text-lg mb-10 max-w-xl mx-auto">
          Join hundreds of Phoenix agents who trust Aota Media to make their properties stand out. Fast turnaround. Unmatched quality.
        </p>
        <a
          href={ARYEO_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gold text-white font-body font-medium text-lg px-10 py-4 rounded-full hover:bg-amber-600 transition-all duration-200 hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-0.5"
        >
          Book Your Shoot Today
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>

        <div className="flex flex-wrap gap-6 justify-center mt-10 text-sm text-text-secondary font-body">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            24-hour delivery
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            No surprise fees
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            100% satisfaction guarantee
          </span>
        </div>
      </div>
    </section>
  )
}
