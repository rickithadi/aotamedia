import { useState, useEffect, useRef } from 'react'
import { useScrollObserver } from '../hooks/useScrollObserver'

const FILTERS = ['All', 'Photos', 'Headshots', 'Logos']

// Placeholder portfolio items — replace src with real Google Drive / CDN URLs
const portfolioItems = [
  { id: 1, src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80', category: 'Photos', alt: 'Luxury home exterior', aspect: 'tall' },
  { id: 2, src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', category: 'Photos', alt: 'Modern living room', aspect: 'wide' },
  { id: 3, src: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80', category: 'Photos', alt: 'Kitchen interior', aspect: 'square' },
  { id: 4, src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80', category: 'Photos', alt: 'Master bedroom', aspect: 'wide' },
  { id: 5, src: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80', category: 'Photos', alt: 'Pool and backyard', aspect: 'tall' },
  { id: 6, src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80', category: 'Photos', alt: 'Contemporary exterior', aspect: 'square' },
  { id: 7, src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80', category: 'Headshots', alt: 'Professional headshot', aspect: 'square' },
  { id: 8, src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80', category: 'Headshots', alt: 'Real estate agent headshot', aspect: 'tall' },
  { id: 9, src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80', category: 'Headshots', alt: 'Corporate headshot', aspect: 'square' },
  { id: 10, src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', category: 'Logos', alt: 'Brand logo design', aspect: 'wide' },
  { id: 11, src: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80', category: 'Logos', alt: 'Real estate logo', aspect: 'square' },
  { id: 12, src: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&q=80', category: 'Photos', alt: 'Bathroom interior', aspect: 'tall' },
]

const INITIAL_SHOW = 9

function LightboxModal({ item, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, onPrev, onNext])

  return (
    <div className="lightbox-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <button
        className="absolute top-4 right-4 text-white/70 hover:text-white p-2 transition-colors"
        onClick={onClose}
        aria-label="Close"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 transition-colors"
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        aria-label="Previous"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <img
        src={item.src}
        alt={item.alt}
        className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 transition-colors"
        onClick={(e) => { e.stopPropagation(); onNext() }}
        aria-label="Next"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [showAll, setShowAll] = useState(false)
  const [lightbox, setLightbox] = useState(null)
  const sectionRef = useScrollObserver()

  const filtered = portfolioItems.filter(
    (item) => activeFilter === 'All' || item.category === activeFilter
  )
  const visible = showAll ? filtered : filtered.slice(0, INITIAL_SHOW)

  const openLightbox = (item) => {
    const idx = filtered.findIndex((i) => i.id === item.id)
    setLightbox(idx)
  }
  const closeLightbox = () => setLightbox(null)
  const prevLightbox = () => setLightbox((i) => (i - 1 + filtered.length) % filtered.length)
  const nextLightbox = () => setLightbox((i) => (i + 1) % filtered.length)

  return (
    <section id="portfolio" className="py-24 px-6 bg-bg-warm">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={sectionRef} className="fade-up text-center mb-16">
          <p className="section-eyebrow mb-3">Portfolio</p>
          <h2 className="section-title mb-4">Our Work</h2>
          <p className="font-body text-text-secondary text-lg max-w-xl mx-auto">
            Every image tells a story. Every frame sells a home.
          </p>
        </div>

        {/* Video showreel */}
        <div className="fade-up mb-16 rounded-2xl overflow-hidden shadow-xl aspect-video max-w-4xl mx-auto">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&mute=1&controls=1&rel=0"
            title="Aota Media Showreel"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => { setActiveFilter(filter); setShowAll(false) }}
              className={`font-body font-medium text-sm px-5 py-2 rounded-full border transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-gold border-gold text-white shadow-md shadow-gold/20'
                  : 'border-border text-text-secondary hover:border-gold hover:text-gold bg-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {visible.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid group relative overflow-hidden rounded-xl cursor-pointer"
              onClick={() => openLightbox(item)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
              <span className="absolute top-3 right-3 bg-white/90 text-text-secondary text-xs font-medium px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                {item.category}
              </span>
            </div>
          ))}
        </div>

        {/* View More */}
        {filtered.length > INITIAL_SHOW && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-outline-dark"
            >
              {showAll ? 'Show Less' : `View More (${filtered.length - INITIAL_SHOW} more)`}
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <LightboxModal
          item={filtered[lightbox]}
          onClose={closeLightbox}
          onPrev={prevLightbox}
          onNext={nextLightbox}
        />
      )}
    </section>
  )
}
