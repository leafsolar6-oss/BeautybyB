'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';

const mainNavItems = [
  { label: 'Home', href: '/' },
  { label: 'Designer Perfumes', href: '/shop?category=designer' },
  { label: 'Imported Skincare', href: '/shop?category=skincare' },
  { label: 'Skincare Supplements', href: '/shop?category=supplements' },
  { label: 'Gym Supplements', href: '/shop?category=gym' },
];

const lashBrowItems = [
  { label: 'Classic Lashes', href: '/services/lashes?style=classic' },
  { label: 'Hybrid Lashes', href: '/services/lashes?style=hybrid' },
  { label: 'Volume Lashes', href: '/services/lashes?style=volume' },
  { label: 'Lash Refill', href: '/services/lashes?style=refill' },
  { label: 'Brow Tint', href: '/services/brows?type=tint' },
  { label: 'Brow Lamination', href: '/services/brows?type=lamination' },
  { label: 'Other Brow Services', href: '/services/brows' },
];

const infoItems = [
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Search for product', href: '/shop', isSearch: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();
  const { totalItems } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href.split('?')[0]);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/shop?search=${encodeURIComponent(searchQuery.trim())}`;
    }
    setShowSearch(false);
    setSearchQuery('');
  };

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Hamburger Button */}
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
            >
              <svg className="w-6 h-6 text-[#1a3c34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-[#1a3c34] flex items-center justify-center">
                  <span className="text-white font-heading font-bold text-sm">B</span>
                </div>
                <span className="font-heading text-xl md:text-2xl font-bold text-[#1a3c34]">
                  BeautybyB
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {mainNavItems.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-all duration-300 relative group ${
                    isActive(link.href)
                      ? 'text-[#1a3c34]'
                      : 'text-[#555] hover:text-[#1a3c34]'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#c5a572] transition-all duration-300 ${
                    isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ))}
            </nav>

            {/* Icons */}
            <div className="flex items-center gap-0">
              <button
                onClick={() => setShowSearch(true)}
                className="hidden sm:flex w-10 h-10 items-center justify-center hover:bg-gray-50 rounded-full transition-colors"
              >
                <svg className="w-5 h-5 text-[#1a3c34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="hidden sm:flex w-10 h-10 items-center justify-center hover:bg-gray-50 rounded-full transition-colors">
                <svg className="w-5 h-5 text-[#1a3c34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <Link href="/cart" className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 rounded-full transition-colors relative">
                <svg className="w-5 h-5 text-[#1a3c34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {totalItems > 0 && (
                  <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-[#c5a572] text-white text-[9px] font-bold rounded-full flex items-center justify-center">{totalItems}</span>
                )}
              </Link>
              <Link href="/account" className="hidden sm:flex w-10 h-10 items-center justify-center hover:bg-gray-50 rounded-full transition-colors">
                <svg className="w-5 h-5 text-[#1a3c34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-500 lg:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
        <div
          className={`fixed right-0 top-0 bottom-0 w-full max-w-[380px] flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ background: '#f8f9f8' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#e5e7eb] flex-shrink-0 bg-white">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#1a3c34] flex items-center justify-center">
                <span className="text-white font-heading font-bold text-sm">B</span>
              </div>
              <span className="font-heading text-xl font-bold text-[#1a3c34]">BeautybyB</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5 text-[#1a3c34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            {/* Main Navigation */}
            <div className="px-6 pt-6 pb-4">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#c5a572] mb-3">Navigation</p>
              <div className="space-y-0.5">
                {mainNavItems.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`group flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-300 ${
                      isActive(link.href)
                        ? 'bg-[#1a3c34]/10 text-[#1a3c34]'
                        : 'text-[#333] hover:bg-[#1a3c34]/5'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isActive(link.href) ? 'bg-[#1a3c34]' : 'bg-[#c5a572]'}`} />
                    <span className="flex-1 font-semibold tracking-wide text-sm">{link.label}</span>
                    <svg className="w-4 h-4 text-[#999] group-hover:text-[#1a3c34] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mx-6"><div className="h-px bg-[#e5e7eb]" /></div>

            {/* Lash & Brow Booking */}
            <div className="px-6 pt-4 pb-4">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#c5a572] mb-3">Lash & Brow Booking</p>
              <div className="space-y-0.5">
                {lashBrowItems.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-300 text-[#555] hover:bg-[#1a3c34]/5 hover:text-[#1a3c34]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c5a572]/50 flex-shrink-0" />
                    <span className="flex-1 font-medium tracking-wide text-sm">{link.label}</span>
                    <svg className="w-4 h-4 text-[#999] group-hover:text-[#1a3c34] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mx-6"><div className="h-px bg-[#e5e7eb]" /></div>

            {/* Brand Section */}
            <div className="px-6 pt-4 pb-2">
              <p className="text-[11px] font-bold tracking-[0.15em] text-[#1a3c34] mb-3">BEAUTYBYB</p>
              <div className="space-y-0.5">
                {infoItems.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => {
                      if (link.isSearch) {
                        setIsOpen(false);
                        setShowSearch(true);
                      } else {
                        setIsOpen(false);
                      }
                    }}
                    className="group flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-300 text-[#555] hover:bg-[#1a3c34]/5 hover:text-[#1a3c34] w-full text-left"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c5a572]/50 flex-shrink-0" />
                    <span className="flex-1 font-medium tracking-wide text-sm">{link.label}</span>
                    {link.isSearch ? (
                      <svg className="w-4 h-4 text-[#999] group-hover:text-[#1a3c34] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 text-[#999] group-hover:text-[#1a3c34] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-[#e5e7eb] px-6 py-4 flex-shrink-0 bg-white">
            <div className="flex items-center gap-2">
              <a
                href="https://www.instagram.com/beauty_byb.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a3c34] text-white hover:bg-[#c5a572] transition-colors duration-300 flex-shrink-0"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://wa.me/2348012345678"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a3c34] text-white hover:bg-[#c5a572] transition-colors duration-300 flex-shrink-0"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
              <Link
                href="/cart"
                onClick={() => setIsOpen(false)}
                className="flex-1 px-3 py-2.5 bg-[#1a3c34] text-white text-[10px] font-bold tracking-wider uppercase rounded-full hover:bg-[#c5a572] transition-colors duration-300 text-center flex-shrink-0"
              >
                Cart ({totalItems})
              </Link>
              <Link
                href="/account"
                onClick={() => setIsOpen(false)}
                className="flex-1 px-3 py-2.5 bg-[#1a3c34] text-white text-[10px] font-bold tracking-wider uppercase rounded-full hover:bg-[#c5a572] transition-colors duration-300 text-center flex-shrink-0"
              >
                Account
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* SEARCH OVERLAY */}
      {showSearch && (
        <div className="fixed inset-0 z-[110] bg-black/70 backdrop-blur-sm flex items-start justify-center pt-24 px-6">
          <div className="w-full max-w-lg">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-white text-xl font-heading font-bold flex-1">Search Products</h3>
              <button
                onClick={() => setShowSearch(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleSearch} className="flex gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Type product name..."
                className="flex-1 px-5 py-3.5 bg-white border border-[#e5e7eb] text-[#333] placeholder:text-[#999] text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-[#1a3c34] transition-all"
                autoFocus
              />
              <button
                type="submit"
                className="px-6 py-3.5 bg-[#1a3c34] text-white text-sm font-semibold rounded-full hover:bg-[#c5a572] transition-colors"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
