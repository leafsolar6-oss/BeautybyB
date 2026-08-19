'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-10">
              <h1 className={`font-display text-3xl md:text-4xl font-bold transition-colors duration-500 ${
                isScrolled ? 'text-green-900' : 'text-white'
              }`}>
                Beauty<span className="text-gold">by</span>B
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-300 group ${
                    isScrolled ? 'text-gray-800' : 'text-white'
                  }`}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-6">
              {/* Search */}
              <button className={`transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Account */}
              <button className={`hidden md:block transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>

              {/* Cart */}
              <Link href="/cart" className={`relative transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-gold text-white text-xs rounded-full flex items-center justify-center font-semibold">
                  0
                </span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`lg:hidden transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-green-950 animate-fade-in">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="font-display text-2xl font-bold text-white">
                Beauty<span className="text-gold">by</span>B
              </h2>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto p-6">
              <div className="space-y-6">
                {['Shop All', 'Skincare', 'Makeup', 'Hair Care', 'Fragrances', 'Body Care', 'Collections', 'About', 'Journal'].map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="block text-white text-2xl font-display font-medium hover:text-gold transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </nav>

            <div className="p-6 border-t border-white/10">
              <div className="flex items-center gap-4 text-white/60 text-sm">
                <a href="#" className="hover:text-gold transition-colors">Instagram</a>
                <span>•</span>
                <a href="#" className="hover:text-gold transition-colors">WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
