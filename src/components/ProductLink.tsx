import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../data/products';

/** Links to the external catalogue page when a product has one, otherwise to its detail page. */
export default function ProductLink({ product, className, children }: { product: Product; className?: string; children: ReactNode }) {
  if (product.catalogUrl) {
    return (
      <a href={product.catalogUrl} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link to={`/products/${product.slug}`} className={className}>
      {children}
    </Link>
  );
}
