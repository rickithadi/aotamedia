import { useState, useEffect } from 'react'
import { useScrollObserver } from '../hooks/useScrollObserver'

const FILTERS = ['All', 'Photos', 'Videos']

const portfolioItems = [
  // Photos — real compressed files
  { id: 1,  type: 'photo', src: '/images/_DSC2963-HDR.jpg', category: 'Photos', alt: 'Real estate photography' },
  { id: 2,  type: 'photo', src: '/images/_DSC2969-HDR.jpg', category: 'Photos', alt: 'Real estate photography' },
  { id: 3,  type: 'photo', src: '/images/_DSC2984-HDR.jpg', category: 'Photos', alt: 'Real estate photography' },
  { id: 4,  type: 'photo', src: '/images/_DSC3008-HDR.jpg', category: 'Photos', alt: 'Real estate photography' },
  { id: 5,  type: 'photo', src: '/images/_DSC3021-HDR.jpg', category: 'Photos', alt: 'Real estate photography' },
  { id: 6,  type: 'photo', src: '/images/_DSC3155-HDR.jpg', category: 'Photos', alt: 'Real estate photography' },
  { id: 7,  type: 'photo', src: '/images/_DSC3186-HDR.jpg', category: 'Photos', alt: 'Real estate photography' },
  { id: 8,  type: 'photo', src: '/images/_DSC3253-HDR.jpg', category: 'Photos', alt: 'Real estate photography' },
  { id: 9,  type: 'photo', src: '/images/_DSC3256-HDR.jpg', category: 'Photos', alt: 'Real estate photography' },
  { id: 10, type: 'photo', src: '/images/_DSC3271-HDR.jpg', category: 'Photos', alt: 'Real estate photography' },
  { id: 11, type: 'photo', src: '/images/_DSC3276-HDR.jpg', category: 'Photos', alt: 'Real estate photography' },
  { id: 12, type: 'photo', src: '/images/_DSC3288-HDR.jpg', category: 'Photos', alt: 'Real estate photography' },
  { id: 13, type: 'photo', src: '/images/_DSC5031-HDR.jpg', category: 'Photos', alt: 'Real estate photography' },
  { id: 14, type: 'photo', src: '/images/_DSC5053-HDR.jpg', category: 'Photos', alt: 'Real estate photography' },
  { id: 15, type: 'photo', src: '/images/_DSC5095-HDR.jpg', category: 'Photos', alt: 'Real estate photography' },
  { id: 16, type: 'photo', src: '/images/_DSC5675.jpg',     category: 'Photos', alt: 'Real estate photography' },
  { id: 17, type: 'photo', src: '/images/_DSC5681.jpg',     category: 'Photos', alt: 'Real estate photography' },
  { id: 18, type: 'photo', src: '/images/_DSC5684.jpg',     category: 'Photos', alt: 'Real estate photography' },
  { id: 19, type: 'photo', src: '/images/_DSC5687.jpg',     category: 'Photos', alt: 'Real estate photography' },
  { id: 20, type: 'photo', src: '/images/_DSC9656.jpg',     category: 'Photos', alt: 'Real estate photography' },
  { id: 21, type: 'photo', src: '/images/_DSC9665.jpg',     category: 'Photos', alt: 'Real estate photography' },
  { id: 22, type: 'photo', src: '/images/_DSC9668.jpg',     category: 'Photos', alt: 'Real estate photography' },
  { id: 23, type: 'photo', src: '/images/_DSC9671.jpg',     category: 'Photos', alt: 'Real estate photography' },
  { id: 24, type: 'photo', src: '/images/_DSC9680.jpg',     category: 'Photos', alt: 'Real estate photography' },
  { id: 25, type: 'photo', src: '/images/_DSC9689.jpg',     category: 'Photos', alt: 'Real estate photography' },
  { id: 26, type: 'photo', src: '/images/_DSC9703.jpg',     category: 'Photos', alt: 'Real estate photography' },
  { id: 27, type: 'photo', src: '/images/_DSC9808.jpg',     category: 'Photos', alt: 'Real estate photography' },
  { id: 28, type: 'photo', src: '/images/_DSC9841.jpg',     category: 'Photos', alt: 'Real estate photography' },
  // Videos
  { id: 29, type: 'video', src: '/videos/elizabeth-reel.mp4',   poster: '/images/thumb-elizabeth-reel.jpg', category: 'Videos', alt: 'Elizabeth property reel' },
  { id: 30, type: 'video', src: '/videos/daniel-reel.mp4',      poster: '/images/thumb-daniel-reel.jpg',    category: 'Videos', alt: 'Daniel, Lauren, Monica & Jordan reel' },
  { id: 31, type: 'video', src: '/videos/2ahead.mp4',           poster: '/images/thumb-2ahead.jpg',         category: 'Videos', alt: '2Ahead property showcase' },
  { id: 32, type: 'video', src: '/videos/josh-main-reel.mp4',   poster: '/images/thumb-josh-main-reel.jpg', category: 'Videos', alt: 'Josh main reel' },
  { id: 33, type: 'video', src: '/videos/josh-airbnb.mp4',      poster: '/images/thumb-josh-airbnb.jpg',    category: 'Videos', alt: 'Josh AirBnB showcase' },
  { id: 34, type: 'video', src: '/videos/bre-reel.mp4',         poster: '/images/thumb-bre-reel.jpg',       category: 'Videos', alt: 'Bre reel' },
  { id: 35, type: 'video', src: '/videos/jordan-page-reel.mp4', poster: '/images/thumb-jordan-page-reel.jpg', category: 'Videos', alt: 'Jordan Page reel' },
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
        <div ref={sectionRef} className="fade-up mb-12">
          <h2 className="font-display font-semibold text-5xl md:text-7xl text-text-primary leading-none mb-4">
            Our Work
          </h2>
          <p className="font-body text-text-secondary text-lg max-w-md">
            Every image tells a story. Every frame sells a home.
          </p>
        </div>

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
                className="w-full block"
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

              {/* Video badge */}
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
