import React, { useState, useEffect } from 'react';
import type { Product } from '../types/Product';

/**
 * ProductForm Component
 * 
 * Form for creating new products or editing existing ones
 */
type ProductFormProps = {
  product?: Product | null; // If provided, form is in edit mode
  onSubmit: (product: Omit<Product, '_id'> | Product) => void;
  onCancel: () => void;
  isLoading: boolean;
}

export default function ProductForm({ product, onSubmit, onCancel, isLoading }: ProductFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    sku: '',
    manufacturer: '',
    description: ''
  });

  // Pre-fill form when editing
  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        sku: product.sku,
        manufacturer: product.manufacturer,
        description: product.description || ''
      });
    }
  }, [product]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (product) {
      // Edit mode - include the _id
      onSubmit({ ...formData, _id: product._id });
    } else {
      // Create mode - no _id needed
      onSubmit(formData);
    }
  };

  return (
    <div className="card mb-4">
      <div className="card-header">
        <h5 className="mb-0">{product ? 'Edit Product' : 'Create New Product'}</h5>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Product Name *</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="sku" className="form-label">SKU *</label>
            <input
              type="text"
              className="form-control"
              id="sku"
              name="sku"
              value={formData.sku}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="manufacturer" className="form-label">Manufacturer *</label>
            <input
              type="text"
              className="form-control"
              id="manufacturer"
              name="manufacturer"
              value={formData.manufacturer}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              rows={3}
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div className="d-flex gap-2">
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={isLoading}
            >
              {isLoading ? 'Saving...' : (product ? 'Update Product' : 'Create Product')}
            </button>
            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={onCancel}
              disabled={isLoading}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}