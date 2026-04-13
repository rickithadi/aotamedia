import { useState, useEffect } from 'react'
import { useScrollObserver } from '../hooks/useScrollObserver'

const FILTERS = ['All', 'Photos', 'Videos']

const portfolioItems = [
  // Jordan Page — Photos
  { id: 1,  type: 'photo', src: '/images/jordan-kitchen-1.jpg',  category: 'Photos', alt: 'Jordan Page kitchen' },
  { id: 2,  type: 'photo', src: '/images/jordan-pool-sunset.jpg', category: 'Photos', alt: 'Jordan Page pool at sunset' },
  { id: 3,  type: 'photo', src: '/images/jordan-living.jpg',      category: 'Photos', alt: 'Jordan Page living room' },
  { id: 4,  type: 'photo', src: '/images/jordan-dining.jpg',      category: 'Photos', alt: 'Jordan Page dining room' },
  { id: 5,  type: 'photo', src: '/images/jordan-kitchen-2.jpg',   category: 'Photos', alt: 'Jordan Page kitchen and dining' },
  { id: 6,  type: 'photo', src: '/images/jordan-pool-2.jpg',      category: 'Photos', alt: 'Jordan Page pool view' },
  { id: 7,  type: 'photo', src: '/images/jordan-patio-1.jpg',     category: 'Photos', alt: 'Jordan Page patio' },
  { id: 8,  type: 'photo', src: '/images/jordan-patio-2.jpg',     category: 'Photos', alt: 'Jordan Page outdoor living' },
  { id: 9,  type: 'photo', src: '/images/jordan-staircase.jpg',   category: 'Photos', alt: 'Jordan Page interior overview' },
  { id: 10, type: 'photo', src: '/images/jordan-patio-3.jpg',     category: 'Photos', alt: 'Jordan Page backyard sunset' },
  // Josh AirBnB — Photos
  { id: 11, type: 'photo', src: '/images/josh-pool.jpg',          category: 'Photos', alt: 'Josh AirBnB pool at night' },
  { id: 12, type: 'photo', src: '/images/josh-living-1.jpg',      category: 'Photos', alt: 'Josh AirBnB living room' },
  { id: 13, type: 'photo', src: '/images/josh-living-2.jpg',      category: 'Photos', alt: 'Josh AirBnB fireplace' },
  // Videos
  { id: 14, type: 'video', src: '/videos/main-reel.mp4',      poster: '/images/kitchen.jpg',           category: 'Videos', alt: 'Aota Media main showreel' },
  { id: 15, type: 'video', src: '/videos/daniel-reel.mp4',    poster: '/images/josh-pool.jpg',         category: 'Videos', alt: 'Daniel property reel' },
  { id: 16, type: 'video', src: '/videos/elizabeth-reel.mp4', poster: '/images/staircase.jpg',         category: 'Videos', alt: 'Elizabeth property reel' },
  { id: 17, type: 'video', src: '/videos/2ahead.mp4',         poster: '/images/jordan-pool-sunset.jpg', category: 'Videos', alt: '2Ahead property showcase' },
]

const INITIAL_SHOW = 9

function LightboxModal({ item, index, total, onClose, onPrev, onNext }) {
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
          src={item.src}
          poster={item.poster}
          controls
          autoPlay
          className="max-h-[85vh] max-w-[90vw] rounded-lg"
          onClick={(e) => e.stopPropagation()}
        />
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

      {/* Position counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm font-body tracking-widest">
        {index + 1} / {total}
      </div>
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
        {/* Left-aligned — no eyebrow, confident display heading */}
        <div ref={sectionRef} className="fade-up mb-12">
          <h2 className="font-display font-semibold text-5xl md:text-7xl text-text-primary leading-none mb-4">
            Our Work
          </h2>
          <p className="font-body text-text-secondary text-lg max-w-md">
            Every image tells a story. Every frame sells a home.
          </p>
        </div>

        {/* Filter tabs — left-aligned to match header */}
        <div className="flex flex-wrap gap-3 mb-10">
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
                src={item.type === 'video' ? item.poster : item.src}
                alt={item.alt}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.type === 'video' ? (
                    <svg className="w-14 h-14" viewBox="0 0 56 56" fill="none">
                      <circle cx="28" cy="28" r="28" fill="rgba(0,0,0,0.55)" />
                      <path d="M22 19l16 9-16 9V19z" fill="white" />
                    </svg>
                  ) : (
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  )}
                </div>
              </div>

              {/* Video badge — always visible */}
              {item.type === 'video' && (
                <span className="absolute bottom-3 left-3 bg-black/65 text-white text-xs font-body font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-sm">
                  <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M2 2l8 4-8 4V2z" />
                  </svg>
                  Video
                </span>
              )}
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
          index={lightbox}
          total={filtered.length}
          onClose={closeLightbox}
          onPrev={prevLightbox}
          onNext={nextLightbox}
        />
      )}
    </section>
  )
}
