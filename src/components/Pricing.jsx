import { useState } from 'react'
import { ARYEO_BOOKING_URL, CONTACT_EMAIL } from '../config'
import { useScrollObserver } from '../hooks/useScrollObserver'

const SERVICES = ['Photos', 'Video', 'Headshots', 'Logos']

const pricingData = {
  Photos: [
    {
      name: 'Essential',
      price: '$149',
      duration: 'Up to 25 photos',
      popular: false,
      features: [
        'Up to 2,000 sq ft',
        '25 HDR photos',
        '24-hour delivery',
        'Online gallery',
        'MLS-ready files',
      ],
    },
    {
      name: 'Standard',
      price: '$229',
      duration: 'Up to 40 photos',
      popular: true,
      features: [
        'Up to 3,500 sq ft',
        '40 HDR photos',
        'Twilight shot included',
        '24-hour delivery',
        'Online gallery + download',
        'Aerial drone photos (5)',
      ],
    },
    {
      name: 'Premium',
      price: '$349',
      duration: 'Up to 60 photos',
      popular: false,
      features: [
        'Any size home',
        '60 HDR photos',
        'Twilight & blue hour shots',
        'Aerial drone photos (10)',
        'Floor plan included',
        'Social media edits',
        '24-hour delivery',
      ],
    },
  ],
  Video: [
    {
      name: 'Essential',
      price: '$299',
      duration: '1–2 min walk-through',
      popular: false,
      features: [
        'Interior walk-through video',
        '1080p resolution',
        'Background music',
        '48-hour delivery',
        'Optimized for social media',
      ],
    },
    {
      name: 'Standard',
      price: '$499',
      duration: '2–3 min cinematic',
      popular: true,
      features: [
        'Cinematic walk-through',
        '4K resolution',
        'Aerial drone footage',
        'Licensed music',
        'Branded intro/outro',
        '48-hour delivery',
        'MLS + social versions',
      ],
    },
    {
      name: 'Premium',
      price: '$799',
      duration: '3–5 min showcase',
      popular: false,
      features: [
        'Full cinematic production',
        '4K + color grading',
        'Extended drone sequences',
        'Voiceover option',
        'Custom music licensing',
        'Agent brand integration',
        '72-hour delivery',
        'All format versions',
      ],
    },
  ],
  Headshots: [
    {
      name: 'Solo Session',
      price: '$199',
      duration: '30 min session',
      popular: false,
      features: [
        '1 outfit change',
        '10 edited photos',
        '1 location',
        '48-hour delivery',
        'Online gallery',
      ],
    },
    {
      name: 'Brand Session',
      price: '$349',
      duration: '60 min session',
      popular: true,
      features: [
        'Up to 2 outfit changes',
        '25 edited photos',
        '2 locations',
        '48-hour delivery',
        'LinkedIn + social crops',
        'Background color options',
      ],
    },
    {
      name: 'Team Package',
      price: '$199/person',
      duration: 'Full team',
      popular: false,
      features: [
        '4+ people',
        '10 edited photos each',
        'Consistent background',
        'Priority delivery',
        'Team composite photo',
        'Bulk pricing available',
      ],
    },
  ],
  Logos: [
    {
      name: 'Starter',
      price: '$299',
      duration: '5–7 business days',
      popular: false,
      features: [
        '3 initial concepts',
        '2 revision rounds',
        'Final files: PNG, SVG',
        'Transparent background',
        'Color + B&W versions',
      ],
    },
    {
      name: 'Brand Kit',
      price: '$549',
      duration: '7–10 business days',
      popular: true,
      features: [
        '5 initial concepts',
        'Unlimited revisions',
        'Full brand guide',
        'Business card design',
        'Email signature',
        'Social profile kit',
        'All file formats',
      ],
    },
    {
      name: 'Full Identity',
      price: '$999',
      duration: '10–14 business days',
      popular: false,
      features: [
        'Complete brand strategy',
        'Logo + submark + icon',
        'Full style guide',
        'Stationery suite',
        'Marketing template pack',
        'Ongoing support (30 days)',
        'All file formats',
      ],
    },
  ],
}

function PriceCard({ pkg, bookingUrl }) {
  return (
    <div
      className={`relative flex flex-col bg-white rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
        pkg.popular
          ? 'border-gold shadow-lg shadow-gold/10 ring-1 ring-gold'
          : 'border-border hover:border-gold/40'
      }`}
    >
      {pkg.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="bg-gold text-white text-xs font-medium font-body px-4 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}

      <div className="p-8 flex flex-col flex-1">
        <div className="mb-6">
          <h3 className="font-display font-semibold text-xl text-text-primary mb-1">{pkg.name}</h3>
          <div className="flex items-baseline gap-1 mb-1">
            <span className="font-display font-bold text-4xl text-text-primary">{pkg.price}</span>
          </div>
          <span className="inline-flex items-center gap-1.5 bg-gold-light text-gold text-xs font-medium px-3 py-1 rounded-full">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {pkg.duration}
          </span>
        </div>

        <ul className="space-y-3 flex-1 mb-8">
          {pkg.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <svg className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-body text-sm text-text-secondary leading-snug">{feature}</span>
            </li>
          ))}
        </ul>

        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full text-center font-body font-medium text-sm py-3.5 rounded-full transition-all duration-200 ${
            pkg.popular
              ? 'bg-gold text-white hover:bg-amber-600 hover:shadow-lg hover:shadow-gold/25'
              : 'border border-border text-text-primary hover:border-gold hover:text-gold'
          }`}
        >
          Book This Package →
        </a>
        <p className="text-center font-body text-text-secondary/60 text-xs mt-2">
          No payment required to schedule
        </p>
      </div>
    </div>
  )
}

export default function Pricing() {
  const [activeService, setActiveService] = useState('Photos')
  const [isTransitioning, setIsTransitioning] = useState(false)
  const sectionRef = useScrollObserver()

  const handleServiceChange = (service) => {
    if (service === activeService) return
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveService(service)
      setIsTransitioning(false)
    }, 160)
  }

  return (
    <section id="pricing" className="py-24 px-6 bg-bg-warm">
      <div className="max-w-7xl mx-auto">
        <div ref={sectionRef} className="fade-up text-center mb-4">
          <p className="section-eyebrow mb-3">Pricing</p>
          <h2 className="section-title mb-4">Simple, Transparent Pricing</h2>
          <p className="font-body text-text-secondary text-lg max-w-xl mx-auto mb-2">
            No hidden fees. No surprises. Ever.
          </p>
        </div>

        {/* Recommendation nudge */}
        <p className="text-center font-body text-text-secondary text-sm mt-6 mb-2">
          Most Phoenix agents start with{' '}
          <span className="text-text-primary font-medium">Standard Photos</span>
          {' '}— add Video for listings over $500k.
        </p>

        {/* Service bubbles */}
        <div className="flex flex-wrap gap-3 justify-center mb-12 mt-4">
          {SERVICES.map((service) => (
            <button
              key={service}
              onClick={() => handleServiceChange(service)}
              className={`font-body font-medium px-6 py-3 rounded-full border-2 transition-all duration-200 text-sm ${
                activeService === service
                  ? 'bg-gold border-gold text-white shadow-lg shadow-gold/25 scale-105'
                  : 'border-border bg-white text-text-secondary hover:border-gold hover:text-gold hover:scale-105'
              }`}
            >
              {service}
            </button>
          ))}
        </div>

        {/* Package cards — fade transition on tab switch */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-opacity duration-150"
          style={{ opacity: isTransitioning ? 0 : 1 }}
        >
          {pricingData[activeService].map((pkg) => (
            <PriceCard key={pkg.name} pkg={pkg} bookingUrl={ARYEO_BOOKING_URL} />
          ))}
        </div>

        {/* Custom quote */}
        <p className="text-center mt-10 font-body text-text-secondary">
          Need something custom?{' '}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-gold hover:text-amber-600 font-medium underline underline-offset-2 transition-colors"
          >
            Let's talk.
          </a>
        </p>
      </div>
    </section>
  )
}
