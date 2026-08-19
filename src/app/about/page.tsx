import Link from 'next/link';

export default function AboutPage() {
  return (
    <div>
      {/* Hero banner */}
      <div className="bg-offwhite py-16 px-4 md:px-8 border-b border-border">
        <div className="max-w-[800px] mx-auto text-center">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-gold">Our Story</span>
          <h1 className="font-serif text-4xl md:text-5xl text-dark mt-3">
            Your trusted <span className="italic">beauty destination</span>
          </h1>
          <p className="text-sm text-muted mt-5 leading-relaxed max-w-xl mx-auto">
            Authentic perfumes, premium skincare, and quality supplements — all sourced with care, delivered with love.
          </p>
        </div>
      </div>

      {/* Story section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/5] bg-offwhite overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=700&fit=crop"
                alt="BeautybyB perfume collection"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="max-w-lg">
              <h2 className="font-serif text-3xl text-dark">Built on trust, powered by authenticity</h2>
              <div className="mt-6 space-y-4 text-[13px] text-muted leading-relaxed">
                <p>
                  BeautybyB started with a simple mission — to bring Nigerians access to authentic, high-quality beauty and wellness products without the worry of fakes or overpriced markups.
                </p>
                <p>
                  Our main focus is <strong className="text-dark">luxury perfumes</strong> — we curate the finest fragrances from around the world, ensuring every bottle is 100% genuine. Alongside our perfume collection, we also offer imported skincare, health supplements, weight management products, gym essentials, and beauty & glow products.
                </p>
                <p>
                  Everything we sell is original, safe, and carefully sourced. Whether you're looking for your signature scent or your next skincare staple, we've got you covered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-16 px-4 md:px-8 bg-offwhite border-y border-border">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="font-serif text-2xl text-dark text-center mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '✨', title: 'Perfumes', desc: 'Our main collection — 875 luxury fragrances from Amouage, Dior, Zara, Armani, Louis Vuitton, Victoria\'s Secret, and more. Designer, Arabian, and niche. Every bottle guaranteed original.' },
              { icon: '💊', title: 'Supplements', desc: 'Coming soon. Health and wellness supplements for adults — vitamins, capsules, and daily wellness products to support your glow journey.' },
              { icon: '🧴', title: 'Skincare', desc: 'Coming soon. Authentic imported skincare products — cleansers, serums, moisturizers, and complete routines for all skin types.' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 border border-border">
                <span className="text-2xl mb-3 block">{item.icon}</span>
                <h3 className="text-[13px] font-semibold text-dark uppercase tracking-wider">{item.title}</h3>
                <p className="text-[12px] text-muted mt-2 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="font-serif text-2xl text-dark text-center mb-12">Our Promises</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '✓', title: '100% Authentic', desc: 'No fakes, ever' },
              { icon: '📦', title: 'Nationwide Delivery', desc: 'Across Nigeria' },
              { icon: '💬', title: 'DM to Order', desc: 'Easy ordering via Instagram' },
              { icon: '🔒', title: 'Safe & Secure', desc: 'Carefully sourced products' },
            ].map((item) => (
              <div key={item.title} className="text-center p-6">
                <span className="text-2xl mb-3 block">{item.icon}</span>
                <h3 className="text-[12px] font-semibold text-dark uppercase tracking-wider">{item.title}</h3>
                <p className="text-[11px] text-muted mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 md:px-8 bg-offwhite border-t border-border">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="font-serif text-2xl text-dark">Ready to explore?</h2>
          <p className="text-[13px] text-muted mt-2">Browse our collection or reach out to place an order.</p>
          <div className="flex justify-center gap-3 mt-6">
            <Link href="/shop" className="btn-add max-w-[180px] text-center">Shop Now</Link>
            <a href="https://www.instagram.com/beauty_byb.ng" target="_blank" rel="noopener noreferrer" className="btn-outline">DM on Instagram</a>
          </div>
        </div>
      </section>
    </div>
  );
}
