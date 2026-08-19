import Link from 'next/link';
import HeroCarousel from '@/components/HeroCarousel';

export default function HomePage() {
  return (
    <div>
      {/* ===== HERO CAROUSEL ===== */}
      <HeroCarousel />

      {/* ===== MAIN CATEGORIES ===== */}
      <section className="py-12 px-4 md:px-8 border-b border-border">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="font-serif text-2xl text-dark text-center mb-8">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { title: 'Perfumes', desc: 'Luxury fragrances', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop', link: '/shop', primary: true },
              { title: 'Skincare', desc: 'Imported & authentic', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop', link: '/shop?cat=skincare', primary: false },
              { title: 'Supplements', desc: 'Health & wellness', image: 'https://images.unsplash.com/photo-1584308666744-24d5c4df491f?w=400&h=400&fit=crop', link: '/shop?cat=supplements', primary: false },
              { title: 'Weight Mgmt', desc: 'Gain & loss', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8f?w=400&h=400&fit=crop', link: '/shop?cat=weight-management', primary: false },
              { title: 'Gym & Fitness', desc: 'Performance boost', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop', link: '/shop?cat=gym-fitness', primary: false },
              { title: 'Beauty & Glow', desc: 'Radiance essentials', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop', link: '/shop?cat=beauty-glow', primary: false },
            ].map((cat) => (
              <Link key={cat.title} href={cat.link} className={`category-tile relative ${cat.primary ? 'h-[260px] md:h-[300px]' : 'h-[200px] md:h-[240px]'} block`}>
                <img src={cat.image} alt={cat.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className={`font-serif ${cat.primary ? 'text-xl md:text-2xl' : 'text-base md:text-lg'}`}>{cat.title}</h3>
                  <p className="text-[11px] mt-0.5 opacity-80">{cat.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PERFUMES — MAIN FEATURE ===== */}
      <section className="py-14 px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-[10px] font-semibold tracking-widest uppercase text-gold">Our Main Collection</span>
              <h2 className="font-serif text-2xl md:text-3xl text-dark mt-1">Perfumes</h2>
              <p className="text-[12px] text-muted mt-1">Authentic luxury fragrances for every occasion</p>
            </div>
            <Link href="/shop" className="text-[12px] font-semibold text-dark underline underline-offset-2 hover:no-underline transition-all">
              View All →
            </Link>
          </div>

          <div className="bg-offwhite py-16 text-center">
            <p className="text-muted text-sm">Perfumes coming soon.</p>
            <Link href="/shop" className="btn-outline inline-block mt-4">Browse Shop</Link>
          </div>
        </div>
      </section>

      {/* ===== EDITORIAL BANNERS ===== */}
      <section className="py-6 px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Skincare banner */}
            <div className="relative h-[280px] md:h-[340px] overflow-hidden bg-offwhite">
              <img
                src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=500&fit=crop"
                alt="Skincare products"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <span className="text-[10px] font-semibold tracking-widest uppercase opacity-80">Skincare</span>
                <h3 className="font-serif text-2xl md:text-3xl mt-2">Glow from within</h3>
                <p className="text-[12px] mt-1 opacity-80 max-w-[200px]">Authentic imported skincare for every skin type.</p>
                <Link href="/shop?cat=skincare" className="text-[11px] font-semibold mt-3 inline-block underline underline-offset-2">
                  Shop Skincare →
                </Link>
              </div>
            </div>

            {/* Supplements banner */}
            <div className="relative h-[280px] md:h-[340px] overflow-hidden bg-offwhite">
              <img
                src="https://images.unsplash.com/photo-1584308666744-24d5c4df491f?w=600&h=500&fit=crop"
                alt="Supplements"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <span className="text-[10px] font-semibold tracking-widest uppercase opacity-80">Health & Fitness</span>
                <h3 className="font-serif text-2xl md:text-3xl mt-2">Fuel your journey</h3>
                <p className="text-[12px] mt-1 opacity-80 max-w-[200px]">Supplements, weight management & gym essentials.</p>
                <Link href="/shop?cat=supplements" className="text-[11px] font-semibold mt-3 inline-block underline underline-offset-2">
                  Shop Supplements →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT WE OFFER ===== */}
      <section className="py-14 px-4 md:px-8 bg-offwhite border-y border-border">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl md:text-3xl text-dark">Everything you need, all authentic</h2>
            <p className="text-[13px] text-muted mt-2 max-w-lg mx-auto">
              From luxury perfumes to skincare, supplements, and fitness products — all original, safely sourced, and delivered to your door.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: '✨', title: 'Perfumes', desc: 'Designer & niche fragrances' },
              { icon: '🧴', title: 'Skincare', desc: 'Imported skincare routines' },
              { icon: '💊', title: 'Supplements', desc: 'Adults & children wellness' },
              { icon: '⚖️', title: 'Weight Mgmt', desc: 'Gain & loss solutions' },
              { icon: '💪', title: 'Gym & Fitness', desc: 'Performance supplements' },
              { icon: '🌟', title: 'Beauty & Glow', desc: 'Radiance essentials' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-5 border border-border text-center">
                <span className="text-2xl mb-2 block">{item.icon}</span>
                <h3 className="text-[12px] font-semibold text-dark">{item.title}</h3>
                <p className="text-[11px] text-muted mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section className="py-14 px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl md:text-3xl text-dark">What our customers say</h2>
            <div className="flex items-center justify-center gap-1 mt-2">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Adaeze O.', city: 'Lagos', text: "The perfumes are 100% authentic. I can tell the difference. My go-to store for fragrances!" },
              { name: 'Chidinma M.', city: 'Abuja', text: "Love the skincare products and the supplements. Fast delivery and great customer service." },
              { name: 'Tunde A.', city: 'Lagos', text: "Best gym supplements in Nigeria. Everything is original and well-priced. Highly recommend." },
            ].map((review, i) => (
              <div key={i} className="bg-white p-6 border border-border">
                <div className="flex gap-0.5 mb-3">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} className="w-3.5 h-3.5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[13px] text-text leading-relaxed">&ldquo;{review.text}&rdquo;</p>
                <div className="mt-4 pt-3 border-t border-border">
                  <p className="text-[12px] font-semibold text-dark">{review.name}</p>
                  <p className="text-[11px] text-muted">{review.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-14 px-4 md:px-8 bg-offwhite border-t border-border">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-dark">Ready to shop?</h2>
            <p className="text-[13px] text-muted mt-2 max-w-md mx-auto">
              Browse our full collection or send us a DM on Instagram to place your order.
            </p>
            <div className="flex justify-center gap-3 mt-6">
              <Link href="/shop" className="btn-add max-w-[180px] text-center">
                Shop Now
              </Link>
              <a
                href="https://www.instagram.com/beauty_byb.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                DM on Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
