'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const mainLinks = [
  { label: 'Men', href: '/shop?gender=Men', icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' },
  { label: 'Women', href: '/shop?gender=Women', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z' },
  { label: 'Brands', href: '/shop', icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' },
  { label: 'Best Sellers', href: '/shop', icon: 'M12 15l-2 5l9-11h-5l2-7l-9 11h5l-2 7z' },
  { label: 'New Arrivals', href: '/shop', icon: 'M12 4v16m0-16l4 4m-4-4l-4 4' },
  { label: 'Gift Sets', href: '/shop', icon: 'M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zm0 0h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z' },
  { label: 'Skincare', href: '/shop', icon: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' },
];

const bottomLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/shop') return pathname.startsWith('/shop');
    return pathname === href;
  };

  return (
    <>
      <header className="bg-white border-b border-[#e8e8e8] sticky top-0 z-40">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Hamburger Button - Animated */}
            <button
              className="lg:hidden w-11 h-11 flex items-center justify-center relative group"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
            >
              <div className="w-6 flex flex-col items-end gap-[6px]">
                <span className="block h-[2px] bg-[#1a1a1a] transition-all duration-300 group-hover:w-6 w-6" />
                <span className="block h-[2px] bg-[#1a1a1a] transition-all duration-300 group-hover:w-4 w-5" />
                <span className="block h-[2px] bg-[#1a1a1a] transition-all duration-300 group-hover:w-5 w-4" />
              </div>
            </button>

            {/* Logo */}
            <div className="flex-1 lg:flex-none lg:mr-auto">
              <Link href="/" className="flex items-center justify-center lg:justify-start">
                <span className="font-heading text-2xl md:text-3xl tracking-tight font-bold">
                  Beauty<span className="text-[#c8a84e]">byB</span>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {mainLinks.slice(0, 6).map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-[11px] font-bold tracking-wider transition-all duration-300 relative group ${
                    isActive(link.href) ? 'text-[#c8a84e]' : 'text-[#333] hover:text-[#c8a84e]'
                  }`}
                >
                  {link.label.toUpperCase()}
                  <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#c8a84e] transition-all duration-300 ${
                    isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ))}
            </nav>

            {/* Icons */}
            <div className="flex items-center gap-2">
              <button className="hidden sm:flex w-11 h-11 items-center justify-center hover:bg-gray-50 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="w-11 h-11 flex items-center justify-center hover:bg-gray-50 rounded-full transition-colors relative">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="absolute top-1 right-1 w-5 h-5 bg-[#c8a84e] text-white text-[10px] font-bold rounded-full flex items-center justify-center">0</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ===== FULL-SCREEN MOBILE MENU OVERLAY ===== */}
      <div className={`fixed inset-0 z-[100] transition-all duration-500 lg:hidden ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#1a1a1a]/80 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        />

        {/* Slide-in Panel */}
        <div className={`absolute right-0 top-0 bottom-0 w-full max-w-[380px] bg-white shadow-2xl flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#f0f0f0]">
            <span className="font-heading text-2xl font-bold">
              Beauty<span className="text-[#c8a84e]">byB</span>
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Scrollable Links */}
          <div className="flex-1 overflow-y-auto py-4">
            {/* Shop Section */}
            <div className="px-6 mb-6">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#999] mb-3">Shop</p>
              <div className="space-y-1">
                {mainLinks.map((link, index) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`group flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 ${
                      isActive(link.href)
                        ? 'bg-[#1a1a1a] text-white'
                        : 'text-[#333] hover:bg-gray-50'
                    }`}
                    style={{
                      animation: isOpen ? `menuSlideIn 0.4s ease-out ${index * 0.05}s both` : 'none',
                    }}
                  >
                    <div className={`w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-300 ${
                      isActive(link.href)
                        ? 'bg-[#c8a84e]/20 text-[#c8a84e]'
                        : 'bg-gray-100 text-[#666] group-hover:bg-[#c8a84e]/10 group-hover:text-[#c8a84e]'
                    }`}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d={link.icon} />
                      </svg>
                    </div>
                    <span className={`flex-1 font-semibold tracking-wider text-sm ${
                      isActive(link.href) ? 'text-white' : ''
                    }`}>
                      {link.label}
                    </span>
                    <svg className={`w-4 h-4 transition-all duration-300 ${
                      isActive(link.href) ? 'text-[#c8a84e] translate-x-0' : 'text-[#ccc] -translate-x-1 group-hover:translate-x-0 group-hover:text-[#c8a84e]'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="mx-6 mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-[#c8a84e]/30 to-transparent" />
            </div>

            {/* Info Section */}
            <div className="px-6 mb-6">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#999] mb-3">Information</p>
              <div className="space-y-1">
                {bottomLinks.map((link, index) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 text-[#333] hover:bg-gray-50"
                    style={{
                      animation: isOpen ? `menuSlideIn 0.4s ease-out ${0.4 + index * 0.05}s both` : 'none',
                    }}
                  >
                    <span className="flex-1 font-medium tracking-wider text-sm">{link.label}</span>
                    <svg className="w-4 h-4 text-[#ccc] -translate-x-1 group-hover:translate-x-0 group-hover:text-[#c8a84e] transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Footer - Social & Contact */}
          <div className="border-t border-[#f0f0f0] px-6 py-5 bg-[#fafafa]">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#999] mb-3">Follow Us</p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/beauty_byb.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a1a1a] text-white hover:bg-[#c8a84e] transition-colors duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://wa.me/2348012345678"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a1a1a] text-white hover:bg-[#c8a84e] transition-colors duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
              <a
                href="/contact"
                className="flex-1 ml-2 px-5 py-2.5 bg-[#1a1a1a] text-white text-xs font-bold tracking-widest uppercase rounded-full hover:bg-[#c8a84e] transition-colors duration-300 text-center"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Inline keyframe for staggered animation */}
      <style jsx>{`
        @keyframes menuSlideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
