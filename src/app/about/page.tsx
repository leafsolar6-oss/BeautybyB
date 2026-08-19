import Link from 'next/link';

export default function AboutPage() {
  return (
    <div>
      {/* Hero banner */}
      <div className="bg-offwhite py-16 px-4 md:px-8 border-b border-border">
        <div className="max-w-[800px] mx-auto text-center">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-gold">Our Story</span>
          <h1 className="font-serif text-4xl md:text-5xl text-dark mt-3">
            Crafted with <span className="italic">passion</span>
          </h1>
          <p className="text-sm text-muted mt-5 leading-relaxed max-w-xl mx-auto">
            Born from a love of fine fragrance and African excellence. BeautybyB brings the world's finest scents to Nigeria.
          </p>
        </div>
      </div>

      {/* Story section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/5] bg-offwhite overflow-hidden">
              <img
                src="https://www.essenza.ng/cdn/shop/products/essenza_le_perle-min.jpg?v=1722428396&width=916"
                alt="Essenza La Perle"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="max-w-lg">
              <h2 className="font-serif text-3xl text-dark">A dream born from excellence</h2>
              <div className="mt-6 space-y-4 text-[13px] text-muted leading-relaxed">
                <p>
                  BeautybyB was built on a simple belief: everyone deserves access to exceptional fragrance. Inspired by African excellence and built on the cultural heritage of the Essenza brand, we curate the world's finest perfumes for the Nigerian market.
                </p>
                <p>
                  From our own signature Essenza Collection — crafted with rare ingredients and deep attention to detail — to curated selections from Tom Ford, Xerjoff, Amouage, and Nishane, every fragrance in our collection is chosen for its quality, its story, and its ability to make you feel extraordinary.
                </p>
                <p>
                  We source only the finest raw materials — Bulgarian rose, Indian sandalwood, rare oud — and we believe that true luxury should be accessible, authentic, and personal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 md:px-8 bg-offwhite border-y border-border">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="font-serif text-2xl text-dark text-center mb-12">Our Commitments</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: '100% Authentic', desc: 'Every product is sourced directly from authorized distributors. No imitations, ever.', icon: '✓' },
              { title: 'Sustainable Luxury', desc: 'Refillable bottles, recyclable packaging, and ethically sourced ingredients.', icon: '◈' },
              { title: 'Inclusive Beauty', desc: 'Fragrance has no gender. Our collections are designed for everyone who appreciates scent.', icon: '❋' },
            ].map((value) => (
              <div key={value.title} className="bg-white p-8 border border-border text-center">
                <span className="text-2xl text-gold mb-4 block">{value.icon}</span>
                <h3 className="text-[13px] font-semibold text-dark uppercase tracking-wider">{value.title}</h3>
                <p className="text-[12px] text-muted mt-3 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="font-serif text-2xl text-dark text-center mb-12">The Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Inspiration', desc: 'Each fragrance begins with a story — a place, a memory, an emotion.' },
              { step: '02', title: 'Composition', desc: 'Our perfumers craft up to 200 trials before a scent is finalized.' },
              { step: '03', title: 'Maturation', desc: 'The blend rests for weeks, allowing notes to harmonize perfectly.' },
              { step: '04', title: 'Bottling', desc: 'Hand-finished in our atelier, each bottle inspected for perfection.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <span className="font-serif text-3xl text-gold-light block">{item.step}</span>
                <h4 className="text-[13px] font-semibold text-dark mt-3 uppercase tracking-wider">{item.title}</h4>
                <p className="text-[12px] text-muted mt-2 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 md:px-8 bg-offwhite border-t border-border">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="font-serif text-2xl text-dark">Ready to explore?</h2>
          <p className="text-[13px] text-muted mt-2">Discover our full collection or reach out for a personal consultation.</p>
          <div className="flex justify-center gap-3 mt-6">
            <Link href="/shop" className="btn-add max-w-[180px] text-center">Shop Collection</Link>
            <Link href="/contact" className="btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
