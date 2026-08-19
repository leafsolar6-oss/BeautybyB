'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
  ];

  // Build breadcrumb path
  let currentPath = '';
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const label = segment
      .replace(/-/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());
    
    breadcrumbs.push({
      label,
      href: currentPath,
    });
  });

  // Special cases for better labels
  if (pathname.includes('/product/')) {
    const productId = segments[segments.length - 1];
    breadcrumbs.push({
      label: `Product #${productId}`,
    });
  } else if (pathname.includes('/checkout')) {
    breadcrumbs.push({
      label: 'Checkout',
    });
  }

  return (
    <nav className="flex items-center gap-1.5 text-[11px] text-muted py-3">
      {breadcrumbs.map((item, index) => (
        <div key={index} className="flex items-center gap-1.5">
          {index > 0 && (
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          )}
          {item.href ? (
            <Link href={item.href} className="hover:text-dark transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-dark font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
