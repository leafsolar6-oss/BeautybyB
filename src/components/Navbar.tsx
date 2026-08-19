'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CartDrawer from '@/components/CartDrawer';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/shop', label: 'Shop' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top bar */}
      <div className="bg-dark text-white text-center py-2 text-sm">
        Free Delivery on Orders Over ₦50,000 | Nationwide Shipping 🇬
      </div>

      {/* Main nav */}
      <nav className={`sticky top-0 z-50 bg-white transition-all ${isScrolled ? 'shadow-md' : ''}`}>
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex items-center justify-between h-20">
            {/* Mobile toggle */}
            <button
              className="lg:hidden"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-[2px] bg-dark transition-all ${isMobileOpen ? 'translate-y-[9px] rotate-45' : ''}`} />
                <span className={`w-full h-[2px] bg-dark transition-all ${isMobileOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-[2px] bg-dark transition-all ${isMobileOpen ? '-translate-y-[9px] -rotate-45' : ''}`} />
              </div>
            </button>

            {/* Logo */}
            <Link href="/" className="font-serif text-2xl text-dark">
              Beauty<span className="text-gold">byB</span>
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold uppercase tracking-wider transition-colors ${
                    pathname === link.href ? 'text-dark' : 'text-muted hover:text-dark'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Cart */}
            <CartDrawer />
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileOpen && (
          <div className="lg:hidden bg-white border-t border-border py-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className={`block px-8 py-4 text-base font-medium border-b border-border/50 ${
                  pathname === link.href ? 'text-dark' : 'text-muted'
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
