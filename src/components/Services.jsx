import { useScrollObserver } from '../hooks/useScrollObserver'

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Real Estate Photos',
    description: 'Magazine-quality interior and exterior photography that makes every room look its absolute best.',
    href: '#pricing',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Video Tours',
    description: 'Cinematic walk-through videos and aerial drone footage that give buyers an immersive first look.',
    href: '#pricing',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: 'Headshots',
    description: 'Professional agent headshots and branding portraits that build trust before the first showing.',
    href: '#pricing',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: 'Logo Design',
    description: 'Custom brand identities for agents and brokerages — logos, color systems, and style guides.',
    href: '#pricing',
  },
]

export default function Services() {
  const sectionRef = useScrollObserver()

  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div ref={sectionRef} className="fade-up text-center mb-16">
          <p className="section-eyebrow mb-3">What We Offer</p>
          <h2 className="section-title mb-4">What We Create</h2>
          <p className="font-body text-text-secondary text-lg max-w-xl mx-auto">
            Full-service real estate media, all under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <a
              key={service.title}
              href={service.href}
              className="group block bg-bg-warm border border-border rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 hover:border-gold/30"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 bg-gold-light rounded-xl flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="font-display font-semibold text-xl text-text-primary mb-3">
                {service.title}
              </h3>
              <p className="font-body text-text-secondary text-sm leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6 flex items-center gap-2 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                See Packages
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
