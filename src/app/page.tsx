import Link from 'next/link';
import HeroSlider from '@/components/HeroSlider';
import CategoryGrid from '@/components/CategoryGrid';
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

      {/* ===== BEST SELLERS — Exotic Dark Luxury ===== */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#1a1a1a] via-[#2a1f2d] to-[#1a1a1a] relative overflow-hidden">
        {/* Exotic decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-10 left-10 text-[200px] font-heading text-[#c8a84e] select-none">✦</div>
          <div className="absolute bottom-10 right-10 text-[180px] font-heading text-[#c8a84e] select-none">✦</div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#c8a84e]/20 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-[#c8a84e]/10 rounded-full" />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 relative z-10">
          {/* Section Header — Exotic */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#c8a84e]" />
              <span className="text-[#c8a84e] text-xs tracking-[0.3em] uppercase font-semibold">The Most Coveted</span>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#c8a84e]" />
            </div>
            <h2 className="font-heading text-4xl md:text-6xl text-white mb-4">
              BEST <span className="text-[#c8a84e]">SELLERS</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
              Explore the bestselling perfumes of all times
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <span className="text-[#c8a84e]">❖</span>
              <span className="text-[#c8a84e] text-sm tracking-widest">CROWNED BY CUSTOMERS</span>
              <span className="text-[#c8a84e]">❖</span>
            </div>
          </div>

          {bestSellers.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
              {bestSellers.slice(0, 12).map((product) => (
                <div key={product.id} className="group relative">
                  {/* Glow effect behind image */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#c8a84e]/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <Link href={`/product/${product.id}`} className="block relative">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-[#c8a84e]/20 group-hover:border-[#c8a84e]/50 transition-all duration-500">
                      <img
                        src={product.hoverImage || product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Gold crown badge */}
                      <div className="absolute top-3 left-3 bg-gradient-to-r from-[#c8a84e] to-[#e8c94e] text-[#1a1a1a] text-[9px] font-bold px-2.5 py-1 tracking-wider uppercase">
                        ♛ Bestseller
                      </div>
                      {product.discount > 0 && (
                        <div className="absolute top-3 right-3 bg-[#c8102e] text-white text-[9px] font-bold px-2 py-1 tracking-wider">
                          {product.discount}% OFF
                        </div>
                      )}
                    </div>
                  </Link>

                  <div className="mt-3 px-1">
                    <p className="text-[#c8a84e] text-[10px] font-bold tracking-widest uppercase mb-1">
                      {product.brand}
                    </p>
                    <Link href={`/product/${product.id}`} className="block">
                      <h3 className="text-white text-sm font-bold leading-tight mb-1 line-clamp-2 group-hover:text-[#c8a84e] transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-white/40 text-xs mb-2">{product.gender} · {product.size}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-[#c8a84e] text-base font-bold">
                        ${product.price.toFixed(2)}
                      </span>
                      <span className="text-white/30 text-xs line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    </div>
                    {product.reviews > 0 && (
                      <p className="text-white/40 text-[10px] mt-1">
                        ★★★★★ ({product.reviews} reviews)
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border border-[#c8a84e]/20 rounded-lg">
              <p className="text-[#c8a84e] text-6xl mb-4">✦</p>
              <p className="text-white/60 text-lg mb-2">Our crown jewels are being curated</p>
              <p className="text-white/30 text-sm mb-6">Bestsellers coming soon</p>
              <Link href="/shop" className="inline-block px-8 py-3 bg-gradient-to-r from-[#c8a84e] to-[#e8c94e] text-[#1a1a1a] text-xs font-bold tracking-widest uppercase hover:from-[#e8c94e] hover:to-[#c8a84e] transition-all">
                Shop All Products
              </Link>
            </div>
          )}

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="inline-flex items-center gap-3 px-8 py-4 border border-[#c8a84e] text-[#c8a84e] text-xs font-bold tracking-widest uppercase hover:bg-[#c8a84e] hover:text-[#1a1a1a] transition-all duration-300"
            >
              <span>View All Best Sellers</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== NEW ARRIVALS — Exotic Fresh Elegance ===== */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white via-[#fdf8f0] to-white relative overflow-hidden">
        {/* Exotic decorative elements */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-[#c8102e]/5 to-transparent rounded-bl-full" />
        <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-gradient-to-tr from-[#c8a84e]/5 to-transparent rounded-tr-full" />

        <div className="max-w-[1400px] mx-auto px-4 relative z-10">
          {/* Section Header — Exotic Fresh */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#c8102e]" />
              <span className="text-[#c8102e] text-xs tracking-[0.3em] uppercase font-semibold">Just Dropped</span>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#c8102e]" />
            </div>
            <h2 className="font-heading text-4xl md:text-6xl text-[#1a1a1a] mb-4">
              NEW <span className="text-[#c8102e]">ARRIVALS</span>
            </h2>
            <p className="text-[#666] text-base md:text-lg max-w-2xl mx-auto">
              Explore the NEW ARRIVALS perfumes of TOP BRANDS
            </p>
            <div className="inline-block mt-4 px-4 py-1.5 bg-[#c8102e]/10 text-[#c8102e] text-[10px] font-bold tracking-[0.2em] uppercase">
              ✦ Be the First to Discover ✦
            </div>
          </div>

          {newArrivals.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
              {newArrivals.map((product) => (
                <div key={product.id} className="group relative">
                  <Link href={`/product/${product.id}`} className="block relative">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-gray-200 group-hover:border-[#c8102e]/30 transition-all duration-500">
                      <img
                        src={product.hoverImage || product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* NEW badge */}
                      <div className="absolute top-3 left-3 bg-[#1a1a1a] text-white text-[9px] font-bold px-2.5 py-1 tracking-wider uppercase">
                        ✦ New
                      </div>
                      {product.discount > 0 && (
                        <div className="absolute top-3 right-3 bg-[#c8a84e] text-[#1a1a1a] text-[9px] font-bold px-2 py-1 tracking-wider">
                          {product.discount}% OFF
                        </div>
                      )}
                    </div>
                  </Link>

                  <div className="mt-3 px-1">
                    <p className="text-[#c8102e] text-[10px] font-bold tracking-widest uppercase mb-1">
                      {product.brand}
                    </p>
                    <Link href={`/product/${product.id}`} className="block">
                      <h3 className="text-[#1a1a1a] text-sm font-bold leading-tight mb-1 line-clamp-2 group-hover:text-[#c8102e] transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-[#999] text-xs mb-2">{product.gender} · {product.size}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-[#1a1a1a] text-base font-bold">
                        ${product.price.toFixed(2)}
                      </span>
                      <span className="text-[#ccc] text-xs line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border border-[#c8102e]/20 rounded-lg bg-white/50">
              <p className="text-[#c8102e] text-6xl mb-4">✦</p>
              <p className="text-[#1a1a1a] text-lg mb-2">Fresh scents are on their way</p>
              <p className="text-[#999] text-sm mb-6">New arrivals coming soon</p>
              <Link href="/shop" className="inline-block px-8 py-3 bg-[#c8102e] text-white text-xs font-bold tracking-widest uppercase hover:bg-[#a00d24] transition-all">
                Shop All Products
              </Link>
            </div>
          )}

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#1a1a1a] text-white text-xs font-bold tracking-widest uppercase hover:bg-[#c8102e] transition-all duration-300"
            >
              <span>View All New Arrivals</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

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
