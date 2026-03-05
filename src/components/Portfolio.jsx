import { useState, useEffect } from 'react'
import { useScrollObserver } from '../hooks/useScrollObserver'

const FILTERS = ['All', 'Photos', 'Videos']

const portfolioItems = [
  // Jordan Page — Photos
  { id: 1,  src: '/images/jordan-kitchen-1.jpg',  category: 'Photos', alt: 'Jordan Page kitchen' },
  { id: 2,  src: '/images/jordan-pool-sunset.jpg', category: 'Photos', alt: 'Jordan Page pool at sunset' },
  { id: 3,  src: '/images/jordan-living.jpg',      category: 'Photos', alt: 'Jordan Page living room' },
  { id: 4,  src: '/images/jordan-dining.jpg',      category: 'Photos', alt: 'Jordan Page dining room' },
  { id: 5,  src: '/images/jordan-kitchen-2.jpg',   category: 'Photos', alt: 'Jordan Page kitchen and dining' },
  { id: 6,  src: '/images/jordan-pool-2.jpg',      category: 'Photos', alt: 'Jordan Page pool view' },
  { id: 7,  src: '/images/jordan-patio-1.jpg',     category: 'Photos', alt: 'Jordan Page patio' },
  { id: 8,  src: '/images/jordan-patio-2.jpg',     category: 'Photos', alt: 'Jordan Page outdoor living' },
  { id: 9,  src: '/images/jordan-staircase.jpg',   category: 'Photos', alt: 'Jordan Page interior overview' },
  { id: 10, src: '/images/jordan-patio-3.jpg',     category: 'Photos', alt: 'Jordan Page backyard sunset' },
  // Josh AirBnB — Photos
  { id: 11, src: '/images/josh-pool.jpg',          category: 'Photos', alt: 'Josh AirBnB pool at night' },
  { id: 12, src: '/images/josh-living-1.jpg',      category: 'Photos', alt: 'Josh AirBnB living room' },
  { id: 13, src: '/images/josh-living-2.jpg',      category: 'Photos', alt: 'Josh AirBnB fireplace' },
  // Videos
  { id: 14, type: 'video', src: '/videos/jordan-page.mp4',    poster: '/images/jordan-pool-sunset.jpg', category: 'Videos', alt: 'Jordan Page Reel' },
  { id: 15, type: 'video', src: '/videos/josh-airbnb.mp4',    poster: '/images/josh-pool.jpg',          category: 'Videos', alt: 'Josh AirBnB Reel' },
  { id: 16, type: 'video', src: '/videos/elizabeth-reel.mp4', poster: '/images/staircase.jpg',          category: 'Videos', alt: 'Elizabeth Reel' },
  { id: 17, type: 'video', src: '/videos/daniel-reel.mp4',    poster: '/images/kitchen.jpg',            category: 'Videos', alt: 'Daniel Reel' },
  { id: 18, type: 'video', src: '/videos/2ahead.mp4',         poster: '/images/staircase.jpg',          category: 'Videos', alt: '2 Ahead Reel' },
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

      {item.type === 'video' ? (
        <video
          key={item.src}
          controls
          autoPlay
          poster={item.poster}
          className="max-h-[85vh] max-w-[90vw] rounded-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <source src={item.src} type="video/mp4" />
        </video>
      ) : (
        <img
          src={item.src}
          alt={item.alt}
          className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
          onClick={(e) => e.stopPropagation()}
        />
      )}

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
        <div className="mb-16 rounded-2xl overflow-hidden shadow-xl aspect-video max-w-4xl mx-auto">
          <video
            controls
            poster="/images/jordan-kitchen-1.jpg"
            className="w-full h-full object-cover"
          >
            <source src="/videos/main-reel.mp4" type="video/mp4" />
          </video>
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
              {item.type === 'video' ? (
                <video
                  src={item.src}
                  poster={item.poster}
                  muted
                  playsInline
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.type === 'video' ? (
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  ) : (
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  )}
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
