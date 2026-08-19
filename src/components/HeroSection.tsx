import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden bg-green-950">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-50"
          poster="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=1920&h=1080&fit=crop&q=90"
        >
          <source src="https://cdn.coverr.co/videos/coverr-applying-face-cream-2745/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-green-950/95 via-green-950/70 to-green-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-green-950/60 via-transparent to-green-950/20" />
      </div>

      {/* Decorative Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 w-full">
          <div className="max-w-2xl md:ml-4">

            {/* Decorative Element */}
            <div className="animate-fade-in-up flex items-center gap-4 mb-8" style={{ animationDelay: '0.2s', opacity: 0 }}>
              <div className="w-12 h-px bg-gold/60" />
              <span className="text-gold/90 text-[10px] md:text-xs tracking-[0.4em] uppercase font-semibold">
                Luxury Beauty Redefined
              </span>
            </div>

            {/* Headline */}
            <h1 className="animate-fade-in-up mb-6" style={{ animationDelay: '0.4s', opacity: 0 }}>
              <span className="block font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-white leading-[0.95] tracking-tight">
                The Art of
              </span>
              <span className="block font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold italic gradient-text leading-[0.95] tracking-tight mt-1">
                Radiance
              </span>
            </h1>

            {/* Elegant Divider */}
            <div className="animate-fade-in-up mb-6" style={{ animationDelay: '0.5s', opacity: 0 }}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-gold/50" />
                <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />
                <div className="w-16 h-px bg-gold/30" />
              </div>
            </div>

            {/* Description */}
            <p className="animate-fade-in-up text-white/85 text-base md:text-lg font-normal leading-relaxed max-w-lg mb-10" style={{ animationDelay: '0.6s', opacity: 0 }}>
              Discover our curated collection of premium skincare, luxury fragrances,
              and professional beauty treatments crafted for the discerning individual.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-in-up flex flex-col sm:flex-row items-start gap-4 mb-14" style={{ animationDelay: '0.8s', opacity: 0 }}>
              <Link
                href="/shop"
                className="group relative inline-flex items-center gap-3 px-9 py-4 bg-gold text-green-950 text-sm font-bold tracking-[0.15em] uppercase hover:bg-gold-light transition-all duration-500 rounded-sm"
              >
                <span className="relative z-10">Explore Collection</span>
                <svg className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 px-9 py-4 text-white text-sm font-semibold tracking-[0.15em] uppercase border border-white/25 hover:border-white/50 hover:bg-white/5 transition-all duration-500 rounded-sm"
              >
                Our Story
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="animate-fade-in-up flex flex-wrap items-center gap-8" style={{ animationDelay: '1s', opacity: 0 }}>
              {[
                { icon: '🌿', label: 'Clean Beauty' },
                { icon: '✨', label: 'Dermatologist Tested' },
                { label: 'Cruelty Free' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  {item.icon && <span className="text-base">{item.icon}</span>}
                  <span className="text-white/75 text-xs md:text-sm font-medium tracking-wide">
                    {item.label}
                  </span>
                  {i < 2 && (
                    <span className="ml-4 w-px h-4 bg-white/20" />
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1.5s', opacity: 0 }}>
        <div className="flex flex-col items-center gap-3 text-white/50">
          <span className="text-[9px] tracking-[0.3em] uppercase font-medium">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  );
}
