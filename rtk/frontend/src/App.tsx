import React from 'react';
import ProductsList from './components/ProductsList';

/**
 * Main App Component
 * 
 * Simple container that renders the products page
 */
export default function App() {
  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Products</h2>
      </div>
      
      <ProductsList />
    </div>
  );
}