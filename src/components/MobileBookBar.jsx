import { useState, useEffect } from 'react'
import { ARYEO_BOOKING_URL } from '../config'

export default function MobileBookBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-white/95 backdrop-blur-sm border-t border-border px-4 py-3">
        <a
          href={ARYEO_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold w-full text-center block text-sm"
        >
          Book a Shoot
        </a>
      </div>
    </div>
  )
}
