// CSV Product Parser — reads products.csv and converts to Product objects
import type { Product } from '@/data/products';

function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result;
}

export function parseProductsCSV(csvText: string): Product[] {
  const lines = csvText.trim().split('\n');
  if (lines.length < 2) return [];

  const headers = parseCSVLine(lines[0]);
  const products: Product[] = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    const values = parseCSVLine(line);
    const row: Record<string, string> = {};
    headers.forEach((header, index) => {
      row[header.trim()] = (values[index] || '').trim();
    });

    // Skip example/placeholder rows
    if (row.name === 'Example Perfume' || !row.name || !row.id) continue;

    products.push({
      id: parseInt(row.id) || 0,
      name: row.name || '',
      brand: row.brand || '',
      tagline: row.tagline || '',
      price: row.price || '',
      priceNumeric: parseFloat(row.priceNumeric) || 0,
      category: row.category || 'perfume',
      gender: row.gender || 'unisex',
      notes: row.notes || '',
      image: row.image || '',
      bestseller: row.bestseller === 'true' || row.bestseller === 'TRUE',
      newArrival: row.newArrival === 'true' || row.newArrival === 'TRUE',
      inStock: row.inStock !== 'false' && row.inStock !== 'FALSE',
      size: row.size || '',
      concentration: row.concentration || '',
    });
  }

  return products;
}
