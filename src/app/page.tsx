import Link from 'next/link';
import HeroSlider from '@/components/HeroSlider';
import CategoryGrid from '@/components/CategoryGrid';
import QuickCategories from '@/components/QuickCategories';

export default function Home() {
  return (
    <div className="bg-[#0a0a0a]">
      {/* Hero Carousel */}
      <HeroSlider />

      {/* Category Grid */}
      <div className="py-12 md:py-20">
        <CategoryGrid />
      </div>

      {/* Quick Categories */}
      <QuickCategories />

      {/* ===== PROMOTIONAL BANNER — Exotic Gold ===== */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-[#c8a84e] via-[#e8c94e] to-[#c8a84e] relative overflow-hidden">
        {/* Exotic pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="goldPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="25" fill="none" stroke="#0a0a0a" strokeWidth="1"/>
                <path d="M 30 5 L 30 55 M 5 30 L 55 30" stroke="#0a0a0a" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#goldPattern)"/>
          </svg>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 relative z-10">
          <div className="text-center">
            <p className="text-[#0a0a0a] text-xs font-bold tracking-[0.4em] uppercase mb-4"> Exclusive Offer ❋</p>
            <h3 className="text-[#0a0a0a] text-4xl md:text-6xl font-heading font-bold mb-4">
              BUNDLE & SAVE
            </h3>
            <p className="text-[#0a0a0a]/70 text-lg md:text-xl mb-8 font-light">
              Get up to 30% off when you purchase 2 or more fragrances
            </p>
            <Link
              href="/shop"
              className="inline-block px-12 py-5 bg-[#0a0a0a] text-[#c8a84e] text-xs font-bold tracking-[0.3em] uppercase hover:bg-[#1a1a1a] transition-all duration-300 shadow-xl"
            >
              Shop Now →
            </Link>
          </div>
        </div>
      </section>

      {/* Beauty Tips / Review Section */}
      <section className="py-16 md:py-24 bg-[#faf8f5]">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#c8a84e] text-xs tracking-[0.4em] uppercase font-medium">Fragrance Insights</span>
            <h2 className="font-heading text-3xl md:text-4xl uppercase tracking-wider text-[#1a1a1a] mt-4">
              Wisdom from Connoisseurs
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-[#c8a84e]/20 hover:border-[#c8a84e]/50 transition-all duration-300">
              <div className="text-[#c8a84e] text-4xl mb-4">❋</div>
              <h3 className="font-bold text-lg mb-3 text-[#1a1a1a]">How to Make Your Fragrance Last Longer</h3>
              <p className="text-sm text-[#666] leading-relaxed mb-4">
                Since I like to wear so many different fragrances, I have found that the body creams and lotions are usually much cheaper, but I purchase them because you get the benefit of the good smelly, plus the moisturizing effects.
              </p>
              <a href="#" className="text-xs font-semibold text-[#c8102e] uppercase tracking-wider hover:underline">
                Show More
              </a>
              <p className="text-xs text-[#999] mt-4 italic">Fragrances Tip by patricia tabb</p>
            </div>
            <div className="bg-white p-8 border border-[#c8a84e]/20 hover:border-[#c8a84e]/50 transition-all duration-300">
              <div className="text-[#c8a84e] text-4xl mb-4">✦</div>
              <h3 className="font-bold text-lg mb-3 text-[#1a1a1a]">Customer Review: Vera Wang Princess</h3>
              <p className="text-sm text-[#666] leading-relaxed mb-4">
                I have wanted this perfume for the longest time and couldn't find it for a good price anywhere until I discovered this site. One of my favorites and I get complimented every time I wear it!
              </p>
              <a href="#" className="text-xs font-semibold text-[#c8102e] uppercase tracking-wider hover:underline">
                Show More
              </a>
              <p className="text-xs text-[#999] mt-4 italic">Review by Suzana</p>
            </div>
            <div className="bg-white p-8 border border-[#c8a84e]/20 hover:border-[#c8a84e]/50 transition-all duration-300">
              <div className="text-[#c8a84e] text-4xl mb-4">❖</div>
              <h3 className="font-bold text-lg mb-3 text-[#1a1a1a]">Why Choose BeautybyB?</h3>
              <p className="text-sm text-[#666] leading-relaxed mb-4">
                We offer 100% authentic fragrances at unbeatable prices. Your trusted destination for designer, Arabian, and niche perfumes. Free shipping on orders over ₦50,000.
              </p>
              <a href="#" className="text-xs font-semibold text-[#c8102e] uppercase tracking-wider hover:underline">
                Show More
              </a>
              <p className="text-xs text-[#999] mt-4 italic">From our team</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
