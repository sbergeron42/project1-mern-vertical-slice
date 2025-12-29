import React from 'react';
import type { Product } from '../types/Product';
import { getProductImage } from '../utils/productImages';

/**
 * ProductCard Component
 * 
 * Displays a single product with edit and delete buttons
 */
type ProductCardProps = {
  product: Product;
  onEdit: (product: Product) => void;
  onDelete: (id: string) => void;
}

export default function ProductCard({ product, onEdit, onDelete }: ProductCardProps) {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100">
        <img 
          src={getProductImage(product.sku)} 
          className="card-img-top" 
          alt={product.name}
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">SKU: {product.sku}</h6>
          <p className="card-text">
            <strong>Manufacturer:</strong> {product.manufacturer}
          </p>
          {product.description && (
            <p className="card-text">
              <small>{product.description}</small>
            </p>
          )}
          <p className="card-text">
            <small className="text-muted">ID: {product._id}</small>
          </p>
        </div>
        <div className="card-footer bg-transparent border-0 pb-3">
          <button 
            className="btn btn-primary btn-sm me-2"
            onClick={() => onEdit(product)}
          >
            Edit
          </button>
          <button 
            className="btn btn-danger btn-sm"
            onClick={() => onDelete(product._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}