'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'MEN', href: '/shop?gender=Men' },
    { label: 'WOMEN', href: '/shop?gender=Women' },
    { label: 'BRANDS', href: '/shop' },
    { label: 'BUNDLES', href: '/shop' },
    { label: 'GIFT SETS', href: '/shop' },
    { label: 'BEST SELLERS', href: '/shop' },
    { label: 'NEW ARRIVALS', href: '/shop' },
    { label: 'HAIRCARE', href: '/shop' },
    { label: 'SKINCARE', href: '/shop' },
    { label: 'MAKEUP', href: '/shop' },
  ];

  return (
    <>
      <header className="bg-white border-b border-[#e0e0e0] sticky top-0 z-40">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Mobile menu toggle */}
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Logo - centered on mobile */}
            <div className="flex-1 lg:flex-none lg:mr-auto">
              <Link href="/" className="flex items-center justify-center lg:justify-start">
                <span className="font-heading text-2xl md:text-3xl tracking-tight font-bold">
                  Perfume<span className="text-[#c8102e]">Box</span>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.slice(0, 8).map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-xs font-semibold tracking-wider transition-colors hover:text-[#c8102e] ${
                    pathname === link.href ? 'text-[#c8102e]' : 'text-[#333]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Icons */}
            <div className="flex items-center gap-3">
              <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="hidden md:flex w-10 h-10 items-center justify-center hover:bg-gray-100 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors relative">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-[#c8102e] text-white text-[10px] font-bold rounded-full flex items-center justify-center">0</span>
              </button>
            </div>
          </div>

          {/* Mobile nav links - Vertical */}
          {isMobileOpen && (
            <nav className="lg:hidden py-4 border-t border-[#e0e0e0] flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-sm font-semibold tracking-wider text-[#333] hover:text-[#c8102e] hover:bg-gray-50 px-4 py-3 border-b border-[#f0f0f0] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
