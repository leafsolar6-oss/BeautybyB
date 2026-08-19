'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const categories = [
  { name: 'HOME', href: '/', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { name: 'SHOP ALL', href: '/shop', icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' },
  { name: 'FRAGRANCES', href: '/shop?cat=perfume', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
  { name: 'SKINCARE', href: '/shop?cat=skincare', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
  { name: 'SUPPLEMENTS', href: '/shop?cat=supplement', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
  { name: 'BEAUTY & GLOW', href: '/shop?cat=beauty-glow', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' },
  { name: 'ABOUT', href: '/about', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { name: 'CONTACT', href: '/contact', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside className={`fixed left-0 top-0 h-screen sidebar-luxury z-40 transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'}`}>
      {/* Logo */}
      <div className="h-24 flex items-center justify-center border-b border-border">
        <Link href="/" className="font-luxury text-2xl tracking-tight">
          <span className="gradient-gold">Beauty</span>
          <span className="text-white">byB</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="py-8 px-4">
        <ul className="space-y-2">
          {categories.map((cat) => {
            const isActive = pathname === cat.href || (cat.href !== '/' && pathname.startsWith(cat.href));
            
            return (
              <li key={cat.name}>
                <Link
                  href={cat.href}
                  className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300 group ${
                    isActive 
                      ? 'bg-surface-light text-gold border border-gold/20' 
                      : 'text-text-muted hover:text-text hover:bg-surface-light'
                  }`}
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={cat.icon} />
                  </svg>
                  {isOpen && (
                    <span className="text-xs font-semibold tracking-widest">{cat.name}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-surface-light border border-border hover:border-gold transition-all"
      >
        <svg className={`w-4 h-4 text-text-muted transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    </aside>
  );
}
