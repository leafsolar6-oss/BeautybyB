'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      {/* Main footer */}
      <div className="max-w-[1400px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl mb-4">
              Beauty<span className="text-gold">byB</span>
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Nigeria's premier destination for authentic luxury perfumes, skincare, and wellness products.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/beauty_byb.ng" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="https://wa.me/2348012345678" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                WhatsApp
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Shop</h4>
            <ul className="space-y-3">
              {[
                { label: 'Perfumes', href: '/shop?cat=perfume' },
                { label: 'Supplements', href: '/shop?cat=supplement' },
                { label: 'Skincare', href: '/shop?cat=skincare' },
                { label: 'Beauty & Glow', href: '/shop?cat=beauty-glow' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/contact' },
                { label: 'Privacy Policy', href: '#' },
                { label: 'Terms of Service', href: '#' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Stay Updated</h4>
            <p className="text-sm text-white/70 mb-4">
              Subscribe for exclusive offers and new arrivals
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 text-dark rounded-l focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-gold text-dark font-semibold rounded-r hover:bg-gold/90 transition-all"
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8 py-6 text-center">
          <p className="text-sm text-white/60">
            © 2026 BeautybyB. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
