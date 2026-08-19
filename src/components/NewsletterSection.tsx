'use client';

export default function NewsletterSection() {
  return (
    <section className="py-24 md:py-32 bg-green-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

        <div className="relative z-10 max-w-4xl mx-auto px-8 md:px-16 lg:px-24 text-center">
        <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">Join Our Community</span>
        <h2 className="font-display text-4xl md:text-6xl font-light text-white mt-4 mb-6">
          Subscribe to Our <em className="italic font-normal">Newsletter</em>
        </h2>
        <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto">
          Be the first to discover new arrivals, exclusive offers, and beauty insights curated by our experts.
        </p>

        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/50 focus:outline-none focus:border-gold transition-colors backdrop-blur-sm"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-gold text-green-950 font-semibold rounded-full hover:bg-gold-light transition-all duration-500 btn-luxury whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>

        <p className="text-white/40 text-sm mt-6">
          Join 50,000+ beauty enthusiasts. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
