'use client';

export default function NewsletterSection() {
  return (
    <section className="py-14 md:py-20 bg-[#f5f5f5]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 text-center">
        <p className="text-[#888] text-sm mb-2">Our Newsletter</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-3">
          Subscribe to Our Newsletter to<br className="hidden md:block" />
          Get <span className="text-[#b8956a]">Updates on Our Latest Offers</span>
        </h2>
        <p className="text-[#888] text-sm mb-8">Get 25% off on your first order just by subscribing to our newsletter</p>
        <form onSubmit={(e) => e.preventDefault()} className="flex max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter Email Address"
            className="flex-1 px-5 py-3 bg-white border border-gray-200 text-sm rounded-l-full focus:outline-none focus:ring-2 focus:ring-[#2d5016]"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-[#2d5016] text-white text-sm font-semibold rounded-r-full hover:bg-[#1e3a0e] transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
