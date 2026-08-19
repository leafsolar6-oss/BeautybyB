import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-20">
      {/* Commitment banner */}
      <div className="bg-offwhite border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: '✓', title: '100% Authentic', desc: 'Guaranteed genuine products' },
              { icon: '📦', title: 'Nationwide Delivery', desc: 'Fast shipping across Nigeria' },
              { icon: '↩', title: 'Easy Returns', desc: '30-day return policy' },
              { icon: '💬', title: 'Expert Support', desc: 'Fragrance consultation available' },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center">
                <span className="text-xl mb-2">{item.icon}</span>
                <p className="text-[12px] font-semibold text-dark uppercase tracking-wide">{item.title}</p>
                <p className="text-[11px] text-muted mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-white border-t border-border">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <h3 className="font-serif text-xl text-dark mb-4">Beauty<span className="text-gold">byB</span></h3>
              <p className="text-[12px] text-muted leading-relaxed mb-4">
                Nigeria's premier destination for luxury fragrances. From our signature Essenza Collection to the world's most prestigious houses.
              </p>
              <div className="flex gap-3">
                {['Instagram', 'TikTok', 'Pinterest'].map((social) => (
                  <span
                    key={social}
                    className="text-[11px] text-muted hover:text-dark cursor-pointer font-medium transition-colors"
                  >
                    {social}
                  </span>
                ))}
              </div>
            </div>

            {/* Shop */}
            <div>
              <h4 className="text-[11px] font-semibold tracking-widest uppercase text-dark mb-4">Shop</h4>
              <ul className="space-y-2.5">
                {['All Fragrances', 'Essenza Collection', 'Designer', 'Niche & Exclusive', 'Perfume Oils', 'Gift Sets'].map((item) => (
                  <li key={item}>
                    <Link href="/shop" className="text-[12px] text-muted hover:text-dark transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help */}
            <div>
              <h4 className="text-[11px] font-semibold tracking-widest uppercase text-dark mb-4">Help</h4>
              <ul className="space-y-2.5">
                {['Contact Us', 'Shipping Info', 'Returns & Exchanges', 'FAQ', 'Track Order', 'Fragrance Consultation'].map((item) => (
                  <li key={item}>
                    <span className="text-[12px] text-muted hover:text-dark cursor-pointer transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-[11px] font-semibold tracking-widest uppercase text-dark mb-4">Newsletter</h4>
              <p className="text-[12px] text-muted mb-3">Get 10% off your first order.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2.5 border border-border text-[12px] focus:outline-none focus:border-dark transition-colors"
                />
                <button className="px-4 py-2.5 bg-dark text-white text-[11px] font-semibold uppercase tracking-wider hover:bg-black transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-muted">
            © 2026 BeautybyB. All rights reserved.
          </p>
          <div className="flex gap-4">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <span key={item} className="text-[11px] text-muted hover:text-dark cursor-pointer transition-colors">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
