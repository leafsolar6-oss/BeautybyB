'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CartDrawer from '@/components/CartDrawer';
import SearchBar from '@/components/SearchBar';

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

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href.split('?')[0] + '?');
  };

  return (
    <>
      {/* Main nav */}
      <nav
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          isScrolled ? 'shadow-[0_1px_8px_rgba(0,0,0,0.06)]' : ''
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-8 md:px-16">
          <div className="flex items-center justify-between h-20">

            {/* Hamburger — mobile */}
            <button
              className="lg:hidden relative w-10 h-10 flex items-center justify-center"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5">
                <span className={`absolute left-0 w-full h-[2px] bg-dark rounded-full transition-all duration-400 ease-[cubic-bezier(0.77,0,0.175,1)] ${
                  isMobileOpen ? 'top-[9px] rotate-45' : 'top-0'
                }`} />
                <span className={`absolute left-0 top-[9px] w-full h-[2px] bg-dark rounded-full transition-all duration-300 ease-[cubic-bezier(0.77,0,0.175,1)] ${
                  isMobileOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
                }`} />
                <span className={`absolute left-0 w-full h-[2px] bg-dark rounded-full transition-all duration-400 ease-[cubic-bezier(0.77,0,0.175,1)] ${
                  isMobileOpen ? 'top-[9px] -rotate-45' : 'top-[18px]'
                }`} />
              </div>
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="font-serif text-2xl md:text-3xl tracking-tight text-dark">
                Beauty<span className="text-gold">byB</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              <Link
                href="/"
                className={`text-base font-semibold tracking-wide transition-colors duration-300 ${
                  isActive('/') ? 'text-dark' : 'text-muted hover:text-dark'
                }`}
              >
                Home
              </Link>

              <Link
                href="/shop"
                className={`text-base font-semibold tracking-wide transition-colors duration-300 ${
                  pathname === '/shop' ? 'text-dark' : 'text-muted hover:text-dark'
                }`}
              >
                Shop
              </Link>

              <Link
                href="/about"
                className={`text-base font-semibold tracking-wide transition-colors duration-300 ${
                  isActive('/about') ? 'text-dark' : 'text-muted hover:text-dark'
                }`}
              >
                About
              </Link>

              <Link
                href="/contact"
                className={`text-base font-semibold tracking-wide transition-colors duration-300 ${
                  isActive('/contact') ? 'text-dark' : 'text-muted hover:text-dark'
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Right side icons */}
            <div className="flex items-center gap-3">
              <SearchBar />
              <CartDrawer />
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden fixed inset-0 top-20 z-[60] transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isMobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsMobileOpen(false)}
          />

          <div className={`absolute left-0 top-0 bottom-0 w-[320px] max-w-[85vw] bg-white shadow-xl transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] overflow-y-auto ${
            isMobileOpen ? 'translate-x-0' : '-translate-x-full'
          }`}>
            <div className="py-8">
              <div className="px-8 mb-8">
                <p className="text-xs font-bold tracking-widest uppercase text-muted/60 mb-4">Navigation</p>
                {[
                  { href: '/', label: 'Home' },
                  { href: '/shop', label: 'Shop' },
                  { href: '/about', label: 'About' },
                  { href: '/contact', label: 'Contact' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={`flex items-center justify-between py-4 text-lg font-medium border-b border-border/50 transition-colors duration-200 ${
                      isActive(link.href) ? 'text-dark' : 'text-muted hover:text-dark'
                    }`}
                  >
                    {link.label}
                    <svg className="w-4 h-4 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>

              <div className="px-8">
                <a
                  href="https://www.instagram.com/beauty_byb.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-add text-center block"
                >
                  DM on Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
