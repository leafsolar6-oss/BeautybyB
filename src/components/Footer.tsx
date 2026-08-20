import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Beauty<span className="text-gold">by</span>B
            </h3>
            <p className="text-white/80 leading-relaxed mb-6 max-w-md text-base md:text-lg font-medium">
              Your premier destination for luxury beauty products. Curated with care, delivered with excellence.
            </p>
            <div className="flex gap-4">
              {['Instagram', 'Facebook', 'Twitter', 'Pinterest'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-green-950 transition-all duration-300"
                  aria-label={social}
                >
                  <span className="text-xs font-bold">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-bold text-gold mb-4 tracking-wide text-base">Shop</h4>
            <ul className="space-y-3">
              {[
                { label: 'Skincare', href: '/?filter=skincare#bestsellers' },
                { label: 'Makeup', href: '/#bestsellers' },
                { label: 'Fragrances', href: '/?filter=designer#bestsellers' },
                { label: 'Hair Care', href: '/#bestsellers' },
                { label: 'Body Care', href: '/#bestsellers' },
                { label: 'New Arrivals', href: '/#bestsellers' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-white/80 hover:text-gold transition-colors text-sm font-medium">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-gold mb-4 tracking-wide text-base">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Our Story', 'Careers', 'Press', 'Sustainability', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/80 hover:text-gold transition-colors text-sm font-medium">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-gold mb-4 tracking-wide text-base">Support</h4>
            <ul className="space-y-3">
              {['FAQ', 'Shipping', 'Returns', 'Track Order', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/80 hover:text-gold transition-colors text-sm font-medium">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Awards/Trust */}
        <div className="py-8 border-y border-white/10 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {[
              { icon: '🏆', text: 'Award Winning' },
              { icon: '🌿', text: 'Clean Beauty' },
              { icon: '✨', text: 'Cruelty Free' },
              { icon: '🌍', text: 'Sustainable' },
            ].map((badge) => (
              <div key={badge.text} className="flex items-center gap-2 text-white/60">
                <span className="text-2xl">{badge.icon}</span>
                <span className="text-sm tracking-wide">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-sm">
          <p>© 2026 BeautybyB. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Made with ♥ in Lagos</span>
            <div className="flex items-center gap-2">
              <span>🔒</span>
              <span>Secure Checkout</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
