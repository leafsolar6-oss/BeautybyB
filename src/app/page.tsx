import Link from 'next/link';
import HeroSlider from '@/components/HeroSlider';
import CategoryGrid from '@/components/CategoryGrid';
import QuickCategories from '@/components/QuickCategories';
import { products } from '@/data/products';

export default function Home() {
  const bestSellers = products.filter((p) => p.isBestseller);
  const newArrivals = products.filter((p) => p.isNew);

  return (
    <div className="bg-[#0a0a0a]">
      {/* Hero Carousel */}
      <HeroSlider />

      {/* Category Grid */}
      <div className="py-12 md:py-20">
        <CategoryGrid />
      </div>

      {/* ===== BEST SELLERS — Exotic Arabian Luxury ===== */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-[#0a0a0a] via-[#1a1510] to-[#0a0a0a] relative overflow-hidden">
        {/* Exotic mandala background pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="mandala" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#c8a84e" strokeWidth="0.5"/>
                <circle cx="50" cy="50" r="30" fill="none" stroke="#c8a84e" strokeWidth="0.5"/>
                <circle cx="50" cy="50" r="20" fill="none" stroke="#c8a84e" strokeWidth="0.5"/>
                <path d="M 50 10 L 50 90 M 10 50 L 90 50 M 22 22 L 78 78 M 78 22 L 22 78" stroke="#c8a84e" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mandala)"/>
          </svg>
        </div>

        {/* Floating exotic ornaments */}
        <div className="absolute top-20 left-10 text-[150px] text-[#c8a84e]/10 font-serif select-none">❋</div>
        <div className="absolute bottom-20 right-10 text-[180px] text-[#c8a84e]/10 font-serif select-none">✧</div>
        <div className="absolute top-1/2 left-1/4 text-[120px] text-[#c8a84e]/5 font-serif select-none">❖</div>

        <div className="max-w-[1400px] mx-auto px-4 relative z-10">
          {/* Exotic Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-20 h-px bg-gradient-to-r from-transparent to-[#c8a84e]" />
              <span className="text-[#c8a84e] text-xs tracking-[0.4em] uppercase font-medium">The Royal Collection</span>
              <div className="w-20 h-px bg-gradient-to-l from-transparent to-[#c8a84e]" />
            </div>
            
            <h2 className="font-heading text-5xl md:text-7xl text-white mb-6">
              BEST <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c8a84e] to-[#e8c94e]">SELLERS</span>
            </h2>
            
            <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto font-light">
              Discover our most coveted fragrances, chosen by connoisseurs
            </p>
            
            {/* Ornate divider */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#c8a84e]/50" />
              <span className="text-[#c8a84e] text-2xl">❖</span>
              <span className="text-[#c8a84e]/60 text-xs tracking-[0.3em] uppercase">Crowned by Connoisseurs</span>
              <span className="text-[#c8a84e] text-2xl">❖</span>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#c8a84e]/50" />
            </div>
          </div>

          {bestSellers.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
              {bestSellers.slice(0, 12).map((product) => (
                <div key={product.id} className="group relative">
                  {/* Exotic glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-b from-[#c8a84e]/20 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl" />
                  
                  <Link href={`/product/${product.id}`} className="block relative">
                    {/* Product image with exotic frame */}
                    <div className="relative aspect-[3/4] overflow-hidden rounded-lg border-2 border-[#c8a84e]/30 group-hover:border-[#c8a84e] transition-all duration-500 bg-gradient-to-b from-[#1a1510] to-[#0a0a0a]">
                      <img
                        src={product.hoverImage || product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                      />
                      
                      {/* Exotic corner ornaments */}
                      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#c8a84e]/50 group-hover:border-[#c8a84e] transition-colors" />
                      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#c8a84e]/50 group-hover:border-[#c8a84e] transition-colors" />
                      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#c8a84e]/50 group-hover:border-[#c8a84e] transition-colors" />
                      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#c8a84e]/50 group-hover:border-[#c8a84e] transition-colors" />
                      
                      {/* Royal crown badge */}
                      <div className="absolute top-4 left-4 bg-gradient-to-br from-[#c8a84e] to-[#e8c94e] text-[#0a0a0a] text-[9px] font-bold px-3 py-1.5 tracking-wider uppercase shadow-lg">
                        ♛ Royal Choice
                      </div>
                      
                      {product.discount > 0 && (
                        <div className="absolute top-4 right-4 bg-[#c8102e] text-white text-[9px] font-bold px-3 py-1.5 tracking-wider shadow-lg">
                          -{product.discount}%
                        </div>
                      )}
                    </div>
                  </Link>

                  {/* Product info with exotic styling */}
                  <div className="mt-5 px-1">
                    <p className="text-[#c8a84e] text-[10px] font-bold tracking-[0.3em] uppercase mb-2">
                      {product.brand}
                    </p>
                    <Link href={`/product/${product.id}`} className="block">
                      <h3 className="text-white text-sm font-medium leading-tight mb-2 line-clamp-2 group-hover:text-[#c8a84e] transition-colors duration-300">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-white/30 text-xs mb-3 tracking-wide">{product.gender} · {product.size}</p>
                    
                    {/* Price with exotic styling */}
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-[#c8a84e] text-lg font-bold">
                        ${product.price.toFixed(2)}
                      </span>
                      <span className="text-white/20 text-xs line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    </div>
                    
                    {product.reviews > 0 && (
                      <div className="flex items-center gap-1">
                        <span className="text-[#c8a84e] text-xs">★★★★★</span>
                        <span className="text-white/30 text-[10px] ml-1">({product.reviews})</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24 border-2 border-[#c8a84e]/20 rounded-lg bg-gradient-to-b from-[#1a1510]/50 to-transparent">
              <p className="text-[#c8a84e] text-7xl mb-6">❋</p>
              <p className="text-white/60 text-xl mb-3 font-light">Our Royal Collection is Being Curated</p>
              <p className="text-white/30 text-sm mb-8">Bestsellers coming soon</p>
              <Link href="/shop" className="inline-block px-10 py-4 bg-gradient-to-r from-[#c8a84e] to-[#e8c94e] text-[#0a0a0a] text-xs font-bold tracking-[0.3em] uppercase hover:from-[#e8c94e] hover:to-[#c8a84e] transition-all duration-300 shadow-lg">
                Explore Collection
              </Link>
            </div>
          )}

          {/* Exotic View All Button */}
          <div className="text-center mt-16">
            <Link
              href="/shop"
              className="inline-flex items-center gap-4 px-10 py-5 border-2 border-[#c8a84e]/50 text-[#c8a84e] text-xs font-bold tracking-[0.3em] uppercase hover:bg-[#c8a84e] hover:text-[#0a0a0a] transition-all duration-500 group"
            >
              <span>View Royal Collection</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== NEW ARRIVALS — Exotic Fresh Elegance ===== */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-[#faf8f5] via-[#f5f0e8] to-[#faf8f5] relative overflow-hidden">
        {/* Exotic arabesque pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="arabesque" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 40 0 Q 60 20 40 40 Q 20 60 40 80 Q 60 60 80 40 Q 60 20 40 0" fill="none" stroke="#c8102e" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#arabesque)"/>
          </svg>
        </div>

        {/* Floating ornaments */}
        <div className="absolute top-20 right-20 text-[100px] text-[#c8102e]/5 font-serif select-none">✦</div>
        <div className="absolute bottom-20 left-20 text-[120px] text-[#c8a84e]/5 font-serif select-none">❖</div>

        <div className="max-w-[1400px] mx-auto px-4 relative z-10">
          {/* Exotic Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-20 h-px bg-gradient-to-r from-transparent to-[#c8102e]" />
              <span className="text-[#c8102e] text-xs tracking-[0.4em] uppercase font-medium">Fresh from the East</span>
              <div className="w-20 h-px bg-gradient-to-l from-transparent to-[#c8102e]" />
            </div>
            
            <h2 className="font-heading text-5xl md:text-7xl text-[#1a1a1a] mb-6">
              NEW <span className="text-[#c8102e]">ARRIVALS</span>
            </h2>
            
            <p className="text-[#666] text-lg md:text-xl max-w-2xl mx-auto font-light">
              Discover the latest treasures from prestigious houses
            </p>
            
            {/* Exotic badge */}
            <div className="inline-block mt-8 px-6 py-2 bg-gradient-to-r from-[#c8102e]/10 to-[#c8a84e]/10 text-[#c8102e] text-[10px] font-bold tracking-[0.3em] uppercase border border-[#c8102e]/20">
              ❋ Be the First to Discover ❋
            </div>
          </div>

          {newArrivals.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
              {newArrivals.map((product) => (
                <div key={product.id} className="group relative">
                  <Link href={`/product/${product.id}`} className="block relative">
                    {/* Product image with exotic frame */}
                    <div className="relative aspect-[3/4] overflow-hidden rounded-lg border-2 border-[#c8102e]/20 group-hover:border-[#c8102e]/50 transition-all duration-500 bg-gradient-to-b from-[#faf8f5] to-white">
                      <img
                        src={product.hoverImage || product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      
                      {/* Exotic corner ornaments */}
                      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#c8102e]/30 group-hover:border-[#c8102e] transition-colors" />
                      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#c8102e]/30 group-hover:border-[#c8102e] transition-colors" />
                      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#c8102e]/30 group-hover:border-[#c8102e] transition-colors" />
                      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#c8102e]/30 group-hover:border-[#c8102e] transition-colors" />
                      
                      {/* NEW badge */}
                      <div className="absolute top-4 left-4 bg-[#1a1a1a] text-white text-[9px] font-bold px-3 py-1.5 tracking-wider uppercase shadow-lg">
                        ✦ New
                      </div>
                      
                      {product.discount > 0 && (
                        <div className="absolute top-4 right-4 bg-gradient-to-br from-[#c8a84e] to-[#e8c94e] text-[#0a0a0a] text-[9px] font-bold px-3 py-1.5 tracking-wider shadow-lg">
                          -{product.discount}%
                        </div>
                      )}
                    </div>
                  </Link>

                  {/* Product info */}
                  <div className="mt-5 px-1">
                    <p className="text-[#c8102e] text-[10px] font-bold tracking-[0.3em] uppercase mb-2">
                      {product.brand}
                    </p>
                    <Link href={`/product/${product.id}`} className="block">
                      <h3 className="text-[#1a1a1a] text-sm font-medium leading-tight mb-2 line-clamp-2 group-hover:text-[#c8102e] transition-colors duration-300">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-[#999] text-xs mb-3 tracking-wide">{product.gender} · {product.size}</p>
                    
                    <div className="flex items-baseline gap-3">
                      <span className="text-[#1a1a1a] text-lg font-bold">
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
            <div className="text-center py-24 border-2 border-[#c8102e]/20 rounded-lg bg-gradient-to-b from-white/80 to-transparent">
              <p className="text-[#c8102e] text-7xl mb-6">✦</p>
              <p className="text-[#1a1a1a] text-xl mb-3 font-light">Fresh Scents Are on Their Way</p>
              <p className="text-[#999] text-sm mb-8">New arrivals coming soon</p>
              <Link href="/shop" className="inline-block px-10 py-4 bg-[#c8102e] text-white text-xs font-bold tracking-[0.3em] uppercase hover:bg-[#a00d24] transition-all duration-300 shadow-lg">
                Explore Collection
              </Link>
            </div>
          )}

          {/* Exotic View All Button */}
          <div className="text-center mt-16">
            <Link
              href="/shop"
              className="inline-flex items-center gap-4 px-10 py-5 bg-[#1a1a1a] text-white text-xs font-bold tracking-[0.3em] uppercase hover:bg-[#c8102e] transition-all duration-500 group shadow-lg"
            >
              <span>View New Arrivals</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

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
