import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[800px] overflow-hidden bg-green-950">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60"
          poster="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=1920&h=1080&fit=crop&q=90"
        >
          <source src="https://cdn.coverr.co/videos/coverr-applying-face-cream-2745/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 via-green-950/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-green-950 via-transparent to-green-950/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 w-full">
          <div className="max-w-3xl md:ml-8">
            {/* Tagline */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
              <span className="inline-flex items-center gap-2 text-gold text-xs md:text-sm tracking-[0.3em] uppercase font-bold mb-6">
                <span className="w-8 h-px bg-gold" />
                Luxury Beauty Redefined
              </span>
            </div>

            {/* Headline */}
            <h1 className="animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
              <span className="block font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] mb-4">
                The Art of
              </span>
              <span className="block font-display text-5xl md:text-7xl lg:text-8xl font-bold italic gradient-text leading-[0.9]">
                Radiance
              </span>
            </h1>

            {/* Description */}
            <p className="animate-fade-in-up mt-8 text-white/90 text-base md:text-lg lg:text-xl font-medium leading-relaxed max-w-xl" style={{ animationDelay: '0.6s', opacity: 0 }}>
              Discover our curated collection of premium skincare, luxury fragrances, and professional beauty treatments crafted for the discerning individual.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-in-up mt-12 flex flex-col sm:flex-row gap-4 px-4" style={{ animationDelay: '0.8s', opacity: 0 }}>
              <Link
                href="/shop"
                className="btn-luxury inline-flex items-center justify-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-gold text-green-950 font-bold tracking-wide hover:bg-gold-light transition-all duration-500 group"
              >
                Explore Collection
                <svg className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-3 px-8 md:px-10 py-4 md:py-5 border border-white/30 text-white font-bold tracking-wide hover:bg-white/10 transition-all duration-500 backdrop-blur-sm"
              >
                Our Story
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="animate-fade-in-up mt-16 flex flex-wrap items-center gap-6 md:gap-8 px-4" style={{ animationDelay: '1s', opacity: 0 }}>
              {[
                { icon: '🌿', text: 'Clean Beauty' },
                { icon: '✨', text: 'Dermatologist Tested' },
                { icon: '', text: 'Cruelty Free' },
              ].map((badge) => (
                <div key={badge.text} className="flex items-center gap-2 text-white/90 text-sm md:text-base font-medium">
                  <span className="text-lg md:text-xl">{badge.icon}</span>
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1.5s', opacity: 0 }}>
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
