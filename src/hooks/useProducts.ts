'use client';

import { useState, useEffect } from 'react';
import { Product } from '@/data/products';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/products.csv')
      .then((res) => res.text())
      .then((csv) => {
        const lines = csv.trim().split('\n');
        if (lines.length < 2) {
          setProducts([]);
          setLoading(false);
          return;
        }

        const headers = lines[0].split(',').map(h => h.trim());
        const parsed: Product[] = [];

        for (let i = 1; i < lines.length; i++) {
          const values = lines[i].split(',').map(v => v.trim());
          if (values.length < 2 || !values[1]) continue;

          const row: Record<string, string> = {};
          headers.forEach((header, index) => {
            row[header] = (values[index] || '').trim();
          });

          parsed.push({
            id: parseInt(row.id) || 0,
            name: row.name || '',
            brand: row.brand || '',
            tagline: row.tagline || '',
            price: row.price || '',
            priceNumeric: parseFloat(row.priceNumeric) || 0,
            category: row.category || '',
            gender: row.gender || '',
            notes: row.notes || '',
            image: row.image || '',
            bestseller: row.bestseller === 'true',
            newArrival: row.newArrival === 'true',
            inStock: row.inStock !== 'false',
            size: row.size || '',
            concentration: row.concentration || '',
          });
        }

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
