import { useScrollObserver } from '../hooks/useScrollObserver'

const badges = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    label: 'Fast 24hr Turnaround',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    label: '100% Satisfaction',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    label: 'Licensed Drone Operator',
  },
]

export default function About() {
  const sectionRef = useScrollObserver()

  return (
    <section id="about" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo side */}
          <div ref={sectionRef} className="fade-up relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <img
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&q=80"
                alt="Colin — Founder of Aota Media"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Decorative gold accent */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold-light rounded-2xl -z-10" />
            </div>

            {/* Floating stat card */}
            <div className="absolute bottom-8 -right-4 lg:right-0 bg-white rounded-xl shadow-xl border border-border px-6 py-4 hidden sm:block">
              <p className="font-display font-bold text-3xl text-text-primary">500+</p>
              <p className="font-body text-text-secondary text-sm">Properties Photographed</p>
            </div>
          </div>

          {/* Text side */}
          <div className="fade-up">
            <p className="section-eyebrow mb-4">About</p>
            <h2 className="section-title mb-6">
              Real Estate Media,
              <br />
              <span className="text-gold">Done Right.</span>
            </h2>
            <div className="space-y-4 font-body text-text-secondary leading-relaxed mb-8">
              <p>
                Hey, I'm Colin — founder of Aota Media and a Phoenix-based real estate photographer with a passion for making properties look their absolute best.
              </p>
              <p>
                I started Aota Media because I saw too many listings with dark, blurry photos that failed to do justice to beautiful homes. Great photography isn't just aesthetics — it's the difference between a listing that sits and one that sells.
              </p>
              <p>
                With fast 24-hour turnaround, licensed drone capabilities, and a genuine love for this craft, I'm here to make your next listing shine.
              </p>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4">
              {badges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2.5 bg-gold-light text-text-primary rounded-xl px-4 py-3"
                >
                  <span className="text-gold">{badge.icon}</span>
                  <span className="font-body font-medium text-sm">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
