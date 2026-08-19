'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Main footer */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl mb-4">
              Beauty<span className="text-[#b8956a]">byB</span>
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Nigeria's premier destination for authentic luxury perfumes, skincare, and wellness products.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/beauty_byb.ng" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white text-xs font-bold tracking-widest uppercase transition-colors">
                Instagram
              </a>
              <a href="https://wa.me/2348012345678" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white text-xs font-bold tracking-widest uppercase transition-colors">
                WhatsApp
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-5 text-white">SHOP</h4>
            <ul className="space-y-3">
              {[
                { label: 'Perfumes', href: '/shop?cat=perfume' },
                { label: 'Supplements', href: '/shop?cat=supplement' },
                { label: 'Skincare', href: '/shop?cat=skincare' },
                { label: 'Beauty & Glow', href: '/shop?cat=beauty-glow' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-5 text-white">COMPANY</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/contact' },
                { label: 'Privacy Policy', href: '#' },
                { label: 'Terms of Service', href: '#' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-5 text-white">NEWSLETTER</h4>
            <p className="text-sm text-white/60 mb-4">
              Subscribe for exclusive offers and new arrivals
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 bg-transparent border border-white/20 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-[#b8956a]"
              />
              <button
                type="submit"
                className="px-5 py-3 bg-[#b8956a] text-dark text-xs font-bold tracking-widest uppercase hover:bg-[#a6845a] transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © 2026 BeautybyB. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Proudly serving Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}
