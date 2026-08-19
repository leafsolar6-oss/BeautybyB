'use client';

import Link from 'next/link';
import HeroCarousel from '@/components/HeroCarousel';
import { useProducts } from '@/hooks/useProducts';
import { useCart } from '@/context/CartContext';

export default function HomePage() {
  const { products } = useProducts();
  const { addToCart, isInCart } = useCart();

  const bestsellers = products.filter((p) => p.bestseller).slice(0, 4);
  const newArrivals = products.filter((p) => p.newArrival).slice(0, 8);

  return (
    <div>
      {/* ===== HERO CAROUSEL ===== */}
      <HeroCarousel />

      {/* ===== BRAND STRIP ===== */}
      <div className="border-b border-border py-3.5 md:py-5">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 md:gap-10">
          {['Amouage', 'Dior', 'Zara', 'Armani', 'Louis Vuitton', 'Victoria\'s Secret', 'Paco Rabanne', 'YSL'].map((item) => (
            <span key={item} className="text-[10px] md:text-[12px] font-semibold text-muted/40 tracking-wider uppercase hover:text-dark transition-colors cursor-default">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ===== MAIN CATEGORIES ===== */}
      <section className="py-6 md:py-12 px-4 sm:px-6 md:px-8 border-b border-border">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="font-serif text-lg md:text-2xl text-dark text-center mb-4 md:mb-8 px-2">Shop by Category</h2>
          <div className="grid grid-cols-1 gap-2.5 md:grid-cols-3 md:gap-4">
            {[
              { title: 'Perfumes', desc: '994 luxury fragrances', count: '994', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=300&fit=crop&q=80', link: '/shop?cat=perfume', accent: 'from-amber-900/60' },
              { title: 'Skincare', desc: '64 imported products', count: '64', image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&h=300&fit=crop&q=80', link: '/shop?cat=skincare', accent: 'from-teal-900/60' },
              { title: 'Beauty & Glow', desc: '63 radiance essentials', count: '63', image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&h=300&fit=crop&q=80', link: '/shop?cat=beauty-glow', accent: 'from-rose-900/60' },
            ].map((cat) => (
              <Link key={cat.title} href={cat.link} className="relative h-[130px] md:h-[220px] block rounded-xl overflow-hidden group">
                <img src={cat.image} alt={cat.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className={`absolute inset-0 bg-gradient-to-t ${cat.accent} via-black/30 to-transparent`} />
                <div className="absolute inset-0 flex items-end">
                  <div className="p-5 sm:p-6 md:p-6 w-full flex items-end justify-between">
                    <div className="min-w-0 pr-3">
                      <h3 className="font-serif text-base md:text-xl text-white">{cat.title}</h3>
                      <p className="text-[10px] md:text-xs text-white/70 mt-0.5 truncate">{cat.desc}</p>
                    </div>
                    <span className="text-[10px] font-bold text-white/60 md:text-sm bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded-full shrink-0">
                      {cat.count}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BESTSELLERS ===== */}
      <section className="py-6 md:py-14 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-end justify-between mb-5 md:mb-8">
            <div>
              <span className="text-[9px] font-semibold tracking-widest uppercase text-gold">Most Loved</span>
              <h2 className="font-serif text-lg md:text-3xl text-dark mt-0.5">Bestsellers</h2>
            </div>
            <Link href="/shop" className="text-[11px] md:text-xs font-semibold text-dark underline underline-offset-2 hover:no-underline transition-all shrink-0 ml-2">
              View All →
            </Link>
          </div>

          {bestsellers.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-5 md:gap-x-4 md:gap-y-8">
              {bestsellers.map((product) => (
                <div key={product.id} className="product-card group">
                  <div className="relative bg-offwhite aspect-[3/4] overflow-hidden rounded-lg mb-2">
                    {product.bestseller && (
                      <span className="badge badge-best absolute top-1.5 left-1.5 z-10 text-[8px] sm:text-[10px]">Bestseller</span>
                    )}
                    {product.image ? (
                      <img src={product.image} alt={product.name} className="product-image w-full h-full object-cover" loading="lazy" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-light text-muted/20">
                        <svg className="w-8 h-8 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                    <div className="quick-add absolute bottom-0 left-0 right-0 p-1.5 sm:p-2">
                      <button onClick={() => addToCart(product)} className="btn-add text-center text-[9px] sm:text-xs py-1.5 sm:py-2">{isInCart(product.id) ? "Added ✓" : "Add"}</button>
                    </div>
                  </div>
                  <div className="px-0.5">
                    <p className="text-[9px] sm:text-[10px] text-muted uppercase tracking-wider font-medium truncate">{product.brand}</p>
                    <h3 className="text-[11px] sm:text-[13px] font-semibold text-dark mt-0.5 leading-snug line-clamp-2">{product.name}</h3>
                    <p className="text-[11px] sm:text-[13px] font-semibold text-dark mt-1">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-offwhite rounded-lg py-10 md:py-16 text-center px-5">
              <p className="text-muted text-sm">Follow us on Instagram for product updates!</p>
              <a href="https://www.instagram.com/beauty_byb.ng" target="_blank" rel="noopener noreferrer" className="btn-outline inline-block mt-4">Follow @beauty_byb.ng</a>
            </div>
          )}
        </div>
      </section>

      {/* ===== EDITORIAL BANNERS ===== */}
      <section className="py-4 md:py-8 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-4">
            <div className="relative h-[170px] md:h-[320px] overflow-hidden rounded-xl">
              <img src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&h=400&fit=crop&q=80" alt="Skincare" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-8 text-white">
                <span className="text-[9px] md:text-[10px] font-semibold tracking-widest uppercase opacity-80">Skincare</span>
                <h3 className="font-serif text-lg md:text-3xl mt-1">Glow from within</h3>
                <p className="text-[10px] md:text-[12px] mt-1 opacity-80 max-w-[200px]">Authentic skincare for every skin type.</p>
                <Link href="/shop?cat=skincare" className="text-[10px] md:text-[11px] font-semibold mt-2 md:mt-3 inline-block underline underline-offset-2">Shop Skincare →</Link>
              </div>
            </div>
            <div className="relative h-[170px] md:h-[320px] overflow-hidden rounded-xl">
              <img src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&h=400&fit=crop&q=80" alt="Beauty & Glow" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-8 text-white">
                <span className="text-[9px] md:text-[10px] font-semibold tracking-widest uppercase opacity-80">Beauty & Glow</span>
                <h3 className="font-serif text-lg md:text-3xl mt-1">Radiance essentials</h3>
                <p className="text-[10px] md:text-[12px] mt-1 opacity-80 max-w-[200px]">Body mists, shimmer oils & more.</p>
                <Link href="/shop?cat=beauty-glow" className="text-[10px] md:text-[11px] font-semibold mt-2 md:mt-3 inline-block underline underline-offset-2">Shop Beauty →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== JUST IN (NEW ARRIVALS) ===== */}
      {newArrivals.length > 0 && (
        <section className="py-6 md:py-14 px-4 sm:px-6 md:px-8">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex items-end justify-between mb-5 md:mb-8">
              <div>
                <span className="text-[9px] font-semibold tracking-widest uppercase text-gold">Fresh Drops</span>
                <h2 className="font-serif text-lg md:text-3xl text-dark mt-0.5">Just In</h2>
              </div>
              <Link href="/shop" className="text-[11px] md:text-xs font-semibold text-dark underline underline-offset-2 hover:no-underline transition-all shrink-0 ml-2">
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-5 md:gap-x-4 md:gap-y-8">
              {newArrivals.map((product) => (
                <div key={product.id} className="product-card group">
                  <div className="relative bg-offwhite aspect-[3/4] overflow-hidden rounded-lg mb-2">
                    {product.newArrival && (
                      <span className="badge badge-new absolute top-1.5 left-1.5 z-10 text-[8px] sm:text-[10px]">New</span>
                    )}
                    {product.image ? (
                      <img src={product.image} alt={product.name} className="product-image w-full h-full object-cover" loading="lazy" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-light text-muted/20">
                        <svg className="w-8 h-8 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                    <div className="quick-add absolute bottom-0 left-0 right-0 p-1.5 sm:p-2">
                      <button onClick={() => addToCart(product)} className="btn-add text-center text-[9px] sm:text-xs py-1.5 sm:py-2">{isInCart(product.id) ? "Added ✓" : "Add"}</button>
                    </div>
                  </div>
                  <div className="px-0.5">
                    <p className="text-[9px] sm:text-[10px] text-muted uppercase tracking-wider font-medium truncate">{product.brand}</p>
                    <h3 className="text-[11px] sm:text-[13px] font-semibold text-dark mt-0.5 leading-snug line-clamp-2">{product.name}</h3>
                    <p className="text-[11px] sm:text-[13px] font-semibold text-dark mt-1">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== WHAT WE OFFER ===== */}
      <section className="py-6 md:py-14 px-4 sm:px-6 md:px-8 bg-offwhite border-y border-border">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="font-serif text-lg md:text-3xl text-dark">Everything you need, all authentic</h2>
            <p className="text-xs sm:text-sm text-muted mt-1.5 max-w-lg mx-auto px-2">
              Over 1,100 products — all original, safely sourced, and delivered to your door.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
            {[
              { icon: '✨', title: 'Perfumes', desc: '994 luxury fragrances from Amouage, Dior, Zara, Armani, Louis Vuitton, and more. Designer and niche collections.' },
              { icon: '🧴', title: 'Skincare', desc: '64 authentic skincare products from Anua, Clarins, Clinique, and Fenty Skin. Cleansers, serums, and moisturizers.' },
              { icon: '🌟', title: 'Beauty & Glow', desc: '63 beauty essentials including Victoria\'s Secret body mists, shimmer oils, makeup, and home fragrances.' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-5 sm:p-6 md:p-6 border border-border rounded-xl text-center">
                <span className="text-xl md:text-2xl mb-3 block">{item.icon}</span>
                <h3 className="text-[11px] md:text-xs font-semibold text-dark uppercase tracking-wider">{item.title}</h3>
                <p className="text-[10px] md:text-xs text-muted mt-2 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section className="py-6 md:py-14 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="font-serif text-lg md:text-3xl text-dark">What our customers say</h2>
            <div className="flex items-center justify-center gap-1 mt-2">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
            {[
              { name: 'Adaeze O.', city: 'Lagos', text: "The perfumes are 100% authentic. I can tell the difference. My go-to store for fragrances!" },
              { name: 'Chidinma M.', city: 'Abuja', text: "Love the skincare products. Fast delivery and great customer service. Will order again!" },
              { name: 'Tunde A.', city: 'Lagos', text: "Best beauty store in Nigeria. Everything is original and well-priced. Highly recommend." },
            ].map((review, i) => (
              <div key={i} className="bg-white p-5 sm:p-6 md:p-6 border border-border rounded-xl">
                <div className="flex gap-0.5 mb-3">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} className="w-3 h-3 md:w-3.5 md:h-3.5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs md:text-sm text-text leading-relaxed">&ldquo;{review.text}&rdquo;</p>
                <div className="mt-3 pt-2.5 border-t border-border">
                  <p className="text-[11px] md:text-xs font-semibold text-dark">{review.name}</p>
                  <p className="text-[10px] md:text-[11px] text-muted">{review.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-8 md:py-14 px-4 sm:px-6 md:px-8 bg-offwhite border-t border-border">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="font-serif text-lg md:text-3xl text-dark">Ready to shop?</h2>
          <p className="text-xs sm:text-sm text-muted mt-1.5 max-w-md mx-auto">
            Browse our 1,100+ products or DM us on Instagram to place your order.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-2.5 sm:gap-3 mt-5">
            <Link href="/shop" className="btn-add max-w-[200px] text-center text-xs sm:text-sm">Shop Now</Link>
            <a href="https://www.instagram.com/beauty_byb.ng" target="_blank" rel="noopener noreferrer" className="btn-outline text-center text-xs sm:text-sm">
              DM on Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
