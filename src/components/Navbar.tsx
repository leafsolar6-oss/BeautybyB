'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CartDrawer from '@/components/CartDrawer';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const mainLinks = [
    { href: '/', label: 'Home' },
    { href: '/shop', label: 'Perfumes' },
  ];

  const shopCategories = [
    { href: '/shop', label: 'All Products', icon: '✨' },
    { href: '/shop?cat=skincare', label: 'Skincare', icon: '🧴' },
    { href: '/shop?cat=beauty-glow', label: 'Beauty & Glow', icon: '🌟' },
  ];

  const secondaryLinks = [
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href.split('?')[0] + '?');
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-dark text-white text-center py-2 text-[11px] tracking-wide font-medium">
        Authentic Perfumes, Skincare & Supplements · Nationwide Delivery · DM to Order
      </div>

      {/* Main nav */}
      <nav
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          isScrolled ? 'shadow-[0_1px_8px_rgba(0,0,0,0.06)]' : ''
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-[60px]">

            {/* Hamburger — sophisticated animated */}
            <button
              className="lg:hidden relative w-8 h-8 flex items-center justify-center group"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-4">
                <span className={`absolute left-0 w-full h-[1.5px] bg-dark rounded-full transition-all duration-400 ease-[cubic-bezier(0.77,0,0.175,1)] ${
                  isMobileOpen ? 'top-[7px] rotate-45' : 'top-0'
                }`} />
                <span className={`absolute left-0 top-[7px] w-full h-[1.5px] bg-dark rounded-full transition-all duration-300 ease-[cubic-bezier(0.77,0,0.175,1)] ${
                  isMobileOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
                }`} />
                <span className={`absolute left-0 w-full h-[1.5px] bg-dark rounded-full transition-all duration-400 ease-[cubic-bezier(0.77,0,0.175,1)] ${
                  isMobileOpen ? 'top-[7px] -rotate-45' : 'top-[14px]'
                }`} />
              </div>
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <span className="font-serif text-[22px] tracking-tight text-dark group-hover:opacity-80 transition-opacity duration-300">
                Beauty<span className="text-gold">byB</span>
              </span>
            </Link>

            {/* Desktop Nav — Sophisticated links */}
            <div className="hidden lg:flex items-center gap-1">
              {/* Home */}
              <Link
                href="/"
                className={`nav-link relative px-4 py-2 text-[12px] font-semibold tracking-[0.04em] uppercase transition-colors duration-300 ${
                  isActive('/') ? 'text-dark' : 'text-muted hover:text-dark'
                }`}
              >
                Home
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1.5px] bg-dark transition-all duration-300 ${
                  isActive('/') ? 'w-5 opacity-100' : 'w-0 opacity-0'
                }`} />
              </Link>

              {/* Perfumes */}
              <Link
                href="/shop"
                className={`nav-link relative px-4 py-2 text-[12px] font-semibold tracking-[0.04em] uppercase transition-colors duration-300 ${
                  pathname === '/shop' ? 'text-dark' : 'text-muted hover:text-dark'
                }`}
              >
                Perfumes
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1.5px] bg-dark transition-all duration-300 ${
                  pathname === '/shop' ? 'w-5 opacity-100' : 'w-0 opacity-0'
                }`} />
              </Link>

              {/* Shop dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button
                  className={`nav-link relative px-4 py-2 text-[12px] font-semibold tracking-[0.04em] uppercase transition-colors duration-300 flex items-center gap-1.5 ${
                    (pathname.includes('cat=') || ['skincare','supplements','weight-management','gym-fitness','beauty-glow'].some(c => pathname.includes(c)))
                      ? 'text-dark' : 'text-muted hover:text-dark'
                  }`}
                >
                  Shop
                  <svg className={`w-3 h-3 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1.5px] bg-dark transition-all duration-300 ${
                    isDropdownOpen ? 'w-5 opacity-100' : 'w-0 opacity-0'
                  }`} />
                </button>

                {/* Dropdown menu */}
                <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-300 ${
                  isDropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'
                }`}>
                  <div className="bg-white border border-border shadow-[0_8px_30px_rgba(0,0,0,0.08)] rounded-lg py-2 w-[220px]">
                    {shopCategories.map((cat) => (
                      <Link
                        key={cat.href}
                        href={cat.href}
                        className="flex items-center gap-3 px-4 py-2.5 text-[12px] text-muted hover:text-dark hover:bg-offwhite transition-all duration-200"
                      >
                        <span className="text-sm">{cat.icon}</span>
                        <span className="font-medium tracking-wide">{cat.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* About */}
              <Link
                href="/about"
                className={`nav-link relative px-4 py-2 text-[12px] font-semibold tracking-[0.04em] uppercase transition-colors duration-300 ${
                  isActive('/about') ? 'text-dark' : 'text-muted hover:text-dark'
                }`}
              >
                About
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1.5px] bg-dark transition-all duration-300 ${
                  isActive('/about') ? 'w-5 opacity-100' : 'w-0 opacity-0'
                }`} />
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                className={`nav-link relative px-4 py-2 text-[12px] font-semibold tracking-[0.04em] uppercase transition-colors duration-300 ${
                  isActive('/contact') ? 'text-dark' : 'text-muted hover:text-dark'
                }`}
              >
                Contact
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1.5px] bg-dark transition-all duration-300 ${
                  isActive('/contact') ? 'w-5 opacity-100' : 'w-0 opacity-0'
                }`} />
              </Link>
            </div>

            {/* Right side icons */}
            <div className="flex items-center gap-3">
              <button className="hidden md:flex w-9 h-9 items-center justify-center rounded-full text-muted hover:text-dark hover:bg-offwhite transition-all duration-300" aria-label="Search">
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="hidden md:flex w-9 h-9 items-center justify-center rounded-full text-muted hover:text-dark hover:bg-offwhite transition-all duration-300 relative" aria-label="Account">
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              <CartDrawer />
            </div>
          </div>
        </div>

        {/* Mobile slide-in menu */}
        <div className={`lg:hidden fixed inset-0 top-[97px] z-40 transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isMobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-500 ${
              isMobileOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={() => setIsMobileOpen(false)}
          />

          {/* Panel */}
          <div className={`absolute left-0 top-0 bottom-0 w-[300px] max-w-[85vw] bg-white shadow-xl transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] overflow-y-auto ${
            isMobileOpen ? 'translate-x-0' : '-translate-x-full'
          }`}>
            <div className="py-6">
              {/* Main links */}
              <div className="px-6 mb-6">
                <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-muted/60 mb-3">Main</p>
                {[
                  { href: '/', label: 'Home' },
                  { href: '/shop', label: 'Perfumes' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center justify-between py-3 text-[14px] font-medium border-b border-border/50 transition-colors duration-200 ${
                      isActive(link.href) ? 'text-dark' : 'text-muted hover:text-dark'
                    }`}
                  >
                    {link.label}
                    <svg className="w-3.5 h-3.5 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>

              {/* Categories */}
              <div className="px-6 mb-6">
                <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-muted/60 mb-3">Shop by Category</p>
                {shopCategories.slice(1).map((cat) => (
                  <Link
                    key={cat.href}
                    href={cat.href}
                    className="flex items-center gap-3 py-3 text-[13px] text-muted hover:text-dark border-b border-border/50 transition-colors duration-200"
                  >
                    <span className="text-base">{cat.icon}</span>
                    <span className="font-medium">{cat.label}</span>
                  </Link>
                ))}
              </div>

              {/* Info links */}
              <div className="px-6">
                <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-muted/60 mb-3">Info</p>
                {secondaryLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between py-3 text-[14px] font-medium border-b border-border/50 transition-colors duration-200 text-muted hover:text-dark"
                  >
                    {link.label}
                    <svg className="w-3.5 h-3.5 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>

              {/* Instagram CTA */}
              <div className="px-6 mt-8">
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
