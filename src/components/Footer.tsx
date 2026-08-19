import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden">
      {/* Gradient divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl font-semibold text-deep mb-4">
              Beauty<span className="text-gradient">byB</span>
            </h3>
            <p className="text-deep/60 text-sm leading-relaxed">
              Crafting luxurious fragrances that tell your unique story. Each scent is a masterpiece of art and emotion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-gold-500 mb-4">Explore</h4>
            <ul className="space-y-3">
              {['Home', 'Collection', 'Our Story', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Home' ? '/' : item === 'Collection' ? '/shop' : item === 'Our Story' ? '/about' : '/contact'}
                    className="text-sm text-deep/60 hover:text-gold-500 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-gold-500 mb-4">Information</h4>
            <ul className="space-y-3">
              {['Shipping & Returns', 'FAQ', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <span className="text-sm text-deep/60 cursor-pointer hover:text-gold-500 transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-gold-500 mb-4">Stay Connected</h4>
            <p className="text-sm text-deep/60 mb-4">
              Subscribe for exclusive launches and fragrance stories.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 rounded-l-full bg-white/40 backdrop-blur-sm border border-white/50 text-sm text-deep placeholder:text-deep/40 focus:outline-none focus:border-gold-300"
              />
              <button className="btn-luxury px-5 py-2.5 rounded-r-full bg-gradient-to-r from-deep to-plum text-white text-xs tracking-wider uppercase">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-deep/40">
            © 2026 BeautybyB. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Instagram', 'Pinterest', 'TikTok'].map((social) => (
              <span
                key={social}
                className="text-xs text-deep/50 hover:text-gold-500 cursor-pointer transition-colors tracking-wider uppercase"
              >
                {social}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
