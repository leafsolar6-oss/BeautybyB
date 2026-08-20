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
          <div className="max-w-3xl mx-auto text-center">

            {/* Decorative Element */}
            <div className="animate-fade-in-up flex items-center justify-center gap-4 mb-8" style={{ animationDelay: '0.2s', opacity: 0 }}>
              <div className="w-12 h-px bg-gold/60" />
              <span className="text-gold/90 text-[10px] md:text-xs tracking-[0.4em] uppercase font-semibold whitespace-nowrap">
                Luxury Beauty Redefined
              </span>
              <div className="w-12 h-px bg-gold/60" />
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
            <div className="animate-fade-in-up mb-6 flex justify-center" style={{ animationDelay: '0.5s', opacity: 0 }}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-gold/50" />
                <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />
                <div className="w-16 h-px bg-gold/30" />
              </div>
            </div>

            {/* Description */}
            <p className="animate-fade-in-up text-white/85 text-base md:text-lg font-normal leading-relaxed max-w-xl mx-auto mb-10 text-center px-4" style={{ animationDelay: '0.6s', opacity: 0 }}>
              Discover our curated collection of premium skincare, luxury fragrances,
              and professional beauty treatments crafted for the discerning individual.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-in-up flex flex-col sm:flex-row items-center justify-center gap-4 mb-20" style={{ animationDelay: '0.8s', opacity: 0 }}>
              <Link
                href="#categories"
                className="group relative inline-flex items-center gap-3 px-9 py-4 bg-gold text-green-950 text-sm font-bold tracking-[0.15em] uppercase hover:bg-gold-light transition-all duration-500 rounded-sm"
              >
                <span className="relative z-10">Explore Collection</span>
                <svg className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="animate-fade-in-up flex flex-wrap items-center justify-center gap-4 md:gap-6" style={{ animationDelay: '1s', opacity: 0 }}>
              {/* Clean Beauty Badge */}
              <div className="flex items-center gap-3 px-5 py-3 border border-gold/30 rounded-sm bg-white/5 backdrop-blur-sm">
                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                </svg>
                <div className="text-left">
                  <div className="text-white text-xs font-bold tracking-wide">Clean Beauty</div>
                  <div className="text-white/60 text-[10px]">Non-toxic formulas</div>
                </div>
              </div>

              {/* Dermatologist Tested Badge */}
              <div className="flex items-center gap-3 px-5 py-3 border border-gold/30 rounded-sm bg-white/5 backdrop-blur-sm">
                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-left">
                  <div className="text-white text-xs font-bold tracking-wide">Dermatologist Tested</div>
                  <div className="text-white/60 text-[10px]">Clinically verified</div>
                </div>
              </div>

              {/* Cruelty Free Badge */}
              <div className="flex items-center gap-3 px-5 py-3 border border-gold/30 rounded-sm bg-white/5 backdrop-blur-sm">
                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                <div className="text-left">
                  <div className="text-white text-xs font-bold tracking-wide">Cruelty Free</div>
                  <div className="text-white/60 text-[10px]">Never tested on animals</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1.5s', opacity: 0 }}>
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Welcome — Scroll to Explore</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </div>

      {/* Bottom Fade - Separates welcome page from content */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />
    </section>
  );
}
