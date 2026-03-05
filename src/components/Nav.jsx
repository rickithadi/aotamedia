import { useState, useEffect } from 'react'
import { ARYEO_BOOKING_URL } from '../config'

const navLinks = [
  { label: 'Work', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0.1 }
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Wordmark */}
          <a
            href="#hero"
            className={`font-display font-bold text-xl tracking-[0.2em] transition-colors duration-300 flex items-center gap-2 ${
              scrolled ? 'text-text-primary' : 'text-white'
            }`}
          >
            {scrolled && (
              <img
                src="/images/logo.png"
                alt=""
                aria-hidden="true"
                className="h-7 w-auto mix-blend-multiply"
              />
            )}
            AOTA MEDIA
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-body text-sm font-medium transition-colors duration-200 hover:text-gold ${
                  scrolled ? 'text-text-secondary' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={ARYEO_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-white font-body font-medium text-sm px-5 py-2.5 rounded-full hover:bg-amber-600 transition-all duration-200 hover:shadow-lg hover:shadow-gold/25"
            >
              Book Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden flex flex-col gap-1.5 p-2 transition-colors ${
              scrolled ? 'text-text-primary' : 'text-white'
            }`}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className={`block w-6 h-0.5 transition-colors ${scrolled ? 'bg-text-primary' : 'bg-white'}`} />
            <span className={`block w-6 h-0.5 transition-colors ${scrolled ? 'bg-text-primary' : 'bg-white'}`} />
            <span className={`block w-4 h-0.5 transition-colors ${scrolled ? 'bg-text-primary' : 'bg-white'}`} />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-[100] bg-white flex flex-col transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-border">
          <span className="font-display font-bold text-xl tracking-[0.2em] text-text-primary">
            AOTA MEDIA
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col items-center justify-center flex-1 gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-4xl font-semibold text-text-primary hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={ARYEO_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-4 bg-gold text-white font-body font-medium text-lg px-8 py-4 rounded-full hover:bg-amber-600 transition-all duration-200"
          >
            Book Now
          </a>
        </nav>
      </div>
    </>
  )
}
