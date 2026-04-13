import { useScrollObserver } from '../hooks/useScrollObserver'

const services = [
  {
    title: 'Real Estate Photos',
    description: 'Magazine-quality interior and exterior photography that makes every room look its absolute best.',
    href: '#pricing',
  },
  {
    title: 'Video Tours',
    description: 'Cinematic walk-through videos and aerial drone footage that give buyers an immersive first look.',
    href: '#pricing',
  },
  {
    title: 'Headshots',
    description: 'Professional agent headshots and branding portraits that build trust before the first showing.',
    href: '#pricing',
  },
  {
    title: 'Logo Design',
    description: 'Custom brand identities for agents and brokerages — logos, color systems, and style guides.',
    href: '#pricing',
  },
]

export default function Services() {
  const sectionRef = useScrollObserver()

  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Left-aligned — breaks the centered eyebrow pattern */}
        <div ref={sectionRef} className="fade-up mb-16">
          <h2 className="section-title mb-4">What We Create</h2>
          <p className="font-body text-text-secondary text-lg max-w-md leading-relaxed">
            Full-service real estate media, all under one roof.
          </p>
        </div>

        {/* Editorial numbered list */}
        <div className="divide-y divide-border">
          {services.map((service, i) => (
            <a
              key={service.title}
              href={service.href}
              className="group flex items-center gap-6 md:gap-10 py-8 md:py-10 hover:pl-3 transition-all duration-300"
            >
              <span className="font-display text-gold/40 text-sm tracking-[0.2em] flex-shrink-0 w-6">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-12 min-w-0">
                <h3 className="font-display font-semibold text-2xl md:text-4xl text-text-primary group-hover:text-gold transition-colors duration-300 leading-tight flex-shrink-0">
                  {service.title}
                </h3>
                <p className="font-body text-text-secondary text-sm leading-relaxed md:max-w-sm">
                  {service.description}
                </p>
              </div>
              <svg
                className="w-5 h-5 text-text-secondary/30 group-hover:text-gold group-hover:translate-x-1 transition-all duration-300 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
