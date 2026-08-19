'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CartDrawer from '@/components/CartDrawer';

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const links = [
    { href: '/', label: 'HOME' },
    { href: '/shop', label: 'SHOP' },
    { href: '/shop?cat=perfume', label: 'FRAGRANCES' },
    { href: '/shop?cat=skincare', label: 'SKINCARE' },
    { href: '/about', label: 'ABOUT' },
    { href: '/contact', label: 'CONTACT' },
  ];

  return (
    <>
      {/* Top announcement bar - PerfumeBox style */}
      <div className="bg-[#1a1a1a] text-white text-center py-2.5">
        <p className="text-xs tracking-wider font-medium uppercase">
          Free Delivery on Orders Over ₦50,000 | Nationwide Shipping
        </p>
      </div>

      {/* Main nav */}
      <nav className="sticky top-0 z-50 bg-white border-b border-[#e0e0e0]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="flex items-center justify-between h-20">
            {/* Mobile toggle */}
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-[1.5px] bg-dark transition-all ${isMobileOpen ? 'translate-y-[9px] rotate-45' : ''}`} />
                <span className={`w-full h-[1.5px] bg-dark transition-all ${isMobileOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-[1.5px] bg-dark transition-all ${isMobileOpen ? '-translate-y-[9px] -rotate-45' : ''}`} />
              </div>
            </button>

            {/* Logo - centered on mobile, left on desktop */}
            <div className="flex-1 flex justify-center lg:justify-start lg:flex-none">
              <Link href="/" className="font-serif text-2xl md:text-[28px] tracking-tight text-dark">
                Beauty<span className="text-[#b8956a]">byB</span>
              </Link>
            </div>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-8 flex-1 justify-center">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[11px] font-semibold tracking-widest transition-colors relative py-2 ${
                    pathname === link.href ? 'text-dark' : 'text-[#666] hover:text-dark'
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-dark" />
                  )}
                </Link>
              ))}
            </div>

            {/* Cart */}
            <div className="flex-1 flex justify-end lg:flex-none">
              <CartDrawer />
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileOpen && (
          <div className="lg:hidden bg-white border-t border-[#e0e0e0] py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className={`block px-8 py-4 text-xs font-semibold tracking-widest border-b border-[#f0f0f0] ${
                  pathname === link.href ? 'text-dark' : 'text-[#666]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
