import HeroSlider from '@/components/HeroSlider';
import CategoryGrid from '@/components/CategoryGrid';
import ProductSection from '@/components/ProductSection';
import QuickCategories from '@/components/QuickCategories';
import { products } from '@/data/products';

export default function Home() {
  const bestSellers = products.filter((p) => p.isBestseller);
  const newArrivals = products.filter((p) => p.isNew);

  return (
    <div>
      {/* Hero Carousel */}
      <HeroSlider />

      {/* Category Grid */}
      <CategoryGrid />

      {/* Best Sellers */}
      <ProductSection
        title="Best Sellers"
        subtitle="Explore the bestselling perfumes of all times"
        href="/shop"
        products={bestSellers.slice(0, 12)}
      />

      {/* New Arrivals */}
      <ProductSection
        title="New Arrivals"
        subtitle="Explore the NEW ARRIVALS perfumes of TOP BRANDS"
        href="/shop"
        products={newArrivals}
      />

      {/* Quick Categories */}
      <QuickCategories />

      {/* Scent Club Banner */}
      <section className="py-8 md:py-12">
        <div className="max-w-[1400px] mx-auto px-4">
          <a href="#" className="block">
            <img
              src="https://perfumebox.com/cdn/shop/files/Untitled-10_copy_90f5216f-8058-487b-9f52-921d5d992c51.gif?v=1732893109"
              alt="Bundle & Save"
              className="w-full"
            />
          </a>
        </div>
      </section>

      {/* Beauty Tips / Review Section */}
      <section className="py-12 md:py-16 bg-[#f8f8f8]">
        <div className="max-w-[1400px] mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl uppercase tracking-wider text-center mb-8">
            Beauty Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6">
              <h3 className="font-bold text-base mb-2">How to Make Your Fragrance Last Longer</h3>
              <p className="text-sm text-[#666] leading-relaxed mb-3">
                Since I like to wear so many different fragrances, I have found that the body creams and lotions are usually much cheaper, but I purchase them because you get the benefit of the good smelly, plus the moisturizing effects.
              </p>
              <a href="#" className="text-xs font-semibold text-[#c8102e] uppercase tracking-wider hover:underline">
                Show More
              </a>
              <p className="text-xs text-[#999] mt-3 italic">Fragrances Tip by patricia tabb</p>
            </div>
            <div className="bg-white p-6">
              <h3 className="font-bold text-base mb-2">Customer Review: Vera Wang Princess</h3>
              <p className="text-sm text-[#666] leading-relaxed mb-3">
                I have wanted this perfume for the longest time and couldn't find it for a good price anywhere until I discovered this site. One of my favorites and I get complimented every time I wear it!
              </p>
              <a href="#" className="text-xs font-semibold text-[#c8102e] uppercase tracking-wider hover:underline">
                Show More
              </a>
              <p className="text-xs text-[#999] mt-3 italic">Review by Suzana</p>
            </div>
            <div className="bg-white p-6">
              <h3 className="font-bold text-base mb-2">Why Choose PerfumeBox?</h3>
              <p className="text-sm text-[#666] leading-relaxed mb-3">
                We offer 100% authentic fragrances at unbeatable prices. Trusted online since 1997 with over 40 million orders shipped worldwide. Free shipping on orders over $59.
              </p>
              <a href="#" className="text-xs font-semibold text-[#c8102e] uppercase tracking-wider hover:underline">
                Show More
              </a>
              <p className="text-xs text-[#999] mt-3 italic">From our team</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
