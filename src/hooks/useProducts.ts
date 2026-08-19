'use client';

import { useState, useEffect } from 'react';
import { Product } from '@/data/products';
import { parseProductsCSV } from '@/lib/csvParser';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/products.csv')
      .then((res) => res.text())
      .then((csv) => {
        const parsed = parseProductsCSV(csv);
        setProducts(parsed);
        setLoading(false);
      })
      .catch(() => {
        setProducts([]);
        setLoading(false);
      });
  }, []);

  return { products, loading };
}
