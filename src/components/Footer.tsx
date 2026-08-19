import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      {/* Main footer */}
      <div className="max-w-[1200px] mx-auto px-8 md:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl md:text-3xl text-dark mb-4">
              Beauty<span className="text-gold">byB</span>
            </h3>
            <p className="text-base text-muted leading-relaxed mb-6 max-w-md">
              Nigeria's premier destination for authentic luxury perfumes, imported skincare, and quality supplements. All products guaranteed original.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/beauty_byb.ng" target="_blank" rel="noopener noreferrer" className="text-base text-muted hover:text-dark transition-colors font-medium">
                Instagram
              </a>
              <a href="https://wa.me/2348012345678" target="_blank" rel="noopener noreferrer" className="text-base text-muted hover:text-dark transition-colors font-medium">
                WhatsApp
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase text-dark mb-6">Shop</h4>
            <ul className="space-y-4">
              {[
                { label: 'Perfumes', href: '/shop' },
                { label: 'Supplements', href: '/shop?cat=supplement' },
                { label: 'Skincare', href: '/shop?cat=skincare' },
                { label: 'Beauty & Glow', href: '/shop?cat=beauty-glow' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-base text-muted hover:text-dark transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase text-dark mb-6">Company</h4>
            <ul className="space-y-4">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/contact' },
                { label: 'Privacy Policy', href: '#' },
                { label: 'Terms of Service', href: '#' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-base text-muted hover:text-dark transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border bg-offwhite">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-base text-muted">
            © 2026 BeautybyB. All rights reserved.
          </p>
          <p className="text-base text-muted">
            Proudly serving Nigeria 🇳🇬
          </p>
        </div>
      </div>
    </footer>
  );
}
