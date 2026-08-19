import Link from 'next/link';

export default function EmptyState() {
  return (
    <div className="relative py-24 md:py-32">
      {/* Decorative top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="text-center px-8">
        {/* Decorative icon */}
        <div className="mb-8">
          <svg className="w-16 h-16 mx-auto text-gold/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        </div>

        {/* Elegant heading */}
        <h3 className="font-serif text-3xl md:text-4xl text-dark mb-4">
          Curated Selection
        </h3>

        {/* Sophisticated description */}
        <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-3 leading-relaxed">
          Our master curators are selecting the finest fragrances
        </p>
        <p className="text-muted/70 text-base max-w-xl mx-auto mb-10">
          A bespoke collection of exceptional scents will be revealed shortly
        </p>

        {/* Elegant divider */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="w-16 h-px bg-border" />
          <div className="w-2 h-2 rounded-full bg-gold" />
          <div className="w-16 h-px bg-border" />
        </div>

        {/* Premium CTA */}
        <Link
          href="/shop"
          className="group inline-flex items-center gap-3 px-10 py-4 bg-dark text-white text-sm font-semibold tracking-widest uppercase hover:bg-dark/90 transition-all duration-300"
        >
          <span>Explore Collection</span>
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>

        {/* Subtle tagline */}
        <p className="mt-12 text-xs text-muted/50 tracking-widest uppercase">
          Authentic · Curated · Delivered Nationwide
        </p>
      </div>

      {/* Decorative bottom divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
    </div>
  );
}
