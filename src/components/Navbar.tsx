'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { totalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen || isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen, isSearchOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm"
      >
        <div className="flex items-center justify-between px-4 py-3 md:px-8 md:py-4">
          {/* Left: Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="flex flex-col gap-[5px] flex-shrink-0 w-10 h-10 items-center justify-center"
            aria-label="Open menu"
          >
            <span className="block w-6 h-[2px] bg-green-950" />
            <span className="block w-4 h-[2px] bg-green-950" />
            <span className="block w-5 h-[2px] bg-green-950" />
          </button>

          {/* Center: Logo */}
          <Link href="/" className="flex-shrink-0">
            <h1 className="font-display text-xl sm:text-2xl md:text-3xl font-bold tracking-wide text-green-950 whitespace-nowrap">
              Beauty<span className="text-gold">by</span>B
            </h1>
          </Link>

          {/* Right: Actions */}
          <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
            {/* Search - hidden on mobile */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="hidden sm:block text-green-950 w-10 h-10 flex items-center justify-center"
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Cart */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative w-9 h-9 rounded-full bg-gold flex items-center justify-center shadow-md hover:bg-gold-light transition-colors duration-300 flex-shrink-0"
              aria-label="Cart"
            >
              <svg className="w-4 h-4" fill="none" stroke="#1a2f14" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[9px] rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-2xl font-bold text-green-950">Search</h3>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-gold text-lg"
                autoFocus
              />
              <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-500 mb-3">Popular Searches</p>
              <div className="flex flex-wrap gap-2">
                {['Skincare', 'Fragrances', 'Makeup', 'Hair Care', 'Body Care'].map(tag => (
                  <button
                    key={tag}
                    onClick={() => setSearchQuery(tag)}
                    className="px-4 py-2 bg-gray-100 text-sm rounded-full hover:bg-gold hover:text-green-950 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-green-950">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block">
                <h2 className="font-display text-2xl font-bold text-white hover:text-gold transition-colors duration-300">
                  Beauty<span className="text-gold">by</span>B
                </h2>
              </Link>
              <div className="w-6" />
            </div>

            {/* Menu Items */}
            <nav className="flex-1 overflow-y-auto p-6">
              <div className="space-y-8">
                {/* Home Page Section */}
                <div>
                  <p className="text-white text-xl font-bold mb-4">Home page</p>
                  <div className="space-y-3">
                    <Link
                      href="/"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 text-gold text-lg font-bold hover:text-gold-light transition-colors"
                    >
                      <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                      Home
                    </Link>
                    {[
                      { label: 'Designer Perfumes', href: '/shop?category=designer#products' },
                      { label: 'Imported Skincare', href: '/shop?category=skincare#products' },
                      { label: 'Skincare Supplements', href: '/shop?category=supplements#products' },
                      { label: 'Gym Supplements', href: '/shop?category=gym#products' },
                    ].map(item => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-3 text-white text-lg hover:text-gold transition-colors"
                      >
                        <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Lash & Brow Booking Section */}
                <div>
                  <p className="text-white text-xl font-bold mb-4">Lash & Brow Booking</p>
                  <div className="space-y-3">
                    {[
                      { label: 'Classic Lashes', href: '/services/lash-brow#classic-lashes' },
                      { label: 'Hybrid Lashes', href: '/services/lash-brow#hybrid-lashes' },
                      { label: 'Volume Lashes', href: '/services/lash-brow#volume-lashes' },
                      { label: 'Lash Refill', href: '/services/lash-brow#lash-refill' },
                      { label: 'Brow Tint', href: '/services/lash-brow#brow-tint' },
                      { label: 'Brow Lamination', href: '/services/lash-brow#brow-lamination' },
                      { label: 'Other Brow Services', href: '/services/lash-brow#other-brow-services' },
                    ].map(item => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-3 text-white text-lg hover:text-gold transition-colors"
                      >
                        <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* About Us Section */}
                <div>
                  <p className="text-white text-xl font-bold mb-4">About Us</p>
                  <div className="space-y-3">
                    <Link
                      href="/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 text-white text-lg hover:text-gold transition-colors"
                    >
                      <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                      Contact
                    </Link>
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsSearchOpen(true);
                      }}
                      className="flex items-center gap-3 text-white text-lg hover:text-gold transition-colors w-full text-left"
                    >
                      <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                      Search for product
                    </button>
                  </div>
                </div>

                {/* Cart & Account */}
                <div className="pt-4 border-t border-white/10">
                  <div className="space-y-3">
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsCartOpen(true);
                      }}
                      className="flex items-center gap-3 text-white text-xl font-bold hover:text-gold transition-colors w-full text-left"
                    >
                      <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                      Cart ({totalItems})
                    </button>
                    <Link
                      href="/account"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 text-white text-xl font-bold hover:text-gold transition-colors"
                    >
                      <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                      Account
                    </Link>
                  </div>
                </div>
              </div>
            </nav>

            {/* Footer */}
            <div className="p-6 border-t border-white/10">
              <div className="flex gap-4">
                <a href="https://instagram.com/beautybyb" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-green-950 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a href="https://wa.me/2348012345678" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-green-950 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
