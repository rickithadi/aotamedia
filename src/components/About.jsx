import { useScrollObserver } from '../hooks/useScrollObserver'

export default function About() {
  const sectionRef = useScrollObserver()

  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div ref={sectionRef} className="fade-up">
          <p className="section-eyebrow mb-4">About</p>
          <h2 className="section-title mb-8">
            Real Estate Media,
            <br />
            <span className="text-gold">Done Right.</span>
          </h2>
          <div className="space-y-5 font-body text-text-secondary text-lg leading-relaxed">
            <p>
              Hey, I'm Colin — founder of Aota Media and a Phoenix-based real estate photographer with a passion for making properties look their absolute best.
            </p>
            <p>
              I started Aota Media because I saw too many listings with dark, blurry photos that failed to do justice to beautiful homes. Great photography isn't just aesthetics — it's the difference between a listing that sits and one that sells.
            </p>
            <p>
              Over 500 properties shot across the Valley, FAA-licensed for drone work, and delivered within 24 hours — every time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
