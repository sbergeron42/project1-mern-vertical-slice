import { useState } from 'react';
import { 
  useFindAllProductsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation
} from '../api/productApi';
import type { Product } from '../types/Product';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';
import ProductForm from './ProductForm';

/**
 * Main component that handles all CRUD operations
 */
export default function ProductsList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  
  /**
   * RTK Query hooks
   */
  const { data: products, error, isLoading } = useFindAllProductsQuery();
  const [createProduct, { isLoading: isCreating }] = useCreateProductMutation();
  const [updateProduct, { isLoading: isUpdating }] = useUpdateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();

  /**
   * Filter products based on search term
   */
  const filteredProducts = products?.filter(product => {
    const term = searchTerm.toLowerCase().trim();
    return (
      product.name.toLowerCase().includes(term) ||
      product.sku.toLowerCase().includes(term) ||
      product.manufacturer.toLowerCase().includes(term)
    );
  });

  /**
   * Handle creating or updating a product
   */
  const handleSubmit = async (productData: Omit<Product, '_id'> | Product) => {
    try {
      if (editingProduct && '_id' in productData) {
        await updateProduct(productData as Product).unwrap();
        alert('Product updated successfully!');
      } else {
        await createProduct(productData as Omit<Product, '_id'>).unwrap();
        alert('Product created successfully!');
      }
      
      // Reset form
      setShowForm(false);
      setEditingProduct(null);
    } catch (err) {
      console.error('Failed to save product:', err);
      alert('Failed to save product. Please try again.');
    }
  };

  /**
   * Handle editing a product
   */
  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  /**
   * Handle deleting a product
   */
  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await deleteProduct(id).unwrap();
        alert('Product deleted successfully!');
      } catch (err) {
        console.error('Failed to delete product:', err);
        alert('Failed to delete product. Please try again.');
      }
    }
  };

  /**
   * Handle canceling form
   */
  const handleCancel = () => {
    setShowForm(false);
    setEditingProduct(null);
  };

  /**
   * Handle creating new product
   */
  const handleCreateNew = () => {
    setEditingProduct(null);
    setShowForm(true);
  };

  /**
   * Loading state
   */ 
  if (isLoading) {
    return (
      <div className="alert alert-info">Loading products...</div>
    );
  }

  /**
   * Error state
   */
  if (error) {
    return (
      <div className="alert alert-danger">
        Failed to load products. Make sure the server is running on port 3000.
      </div>
    );
  }

  /**
   * Show form if creating or editing
   */
  if (showForm) {
    return (
      <ProductForm
        product={editingProduct}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        isLoading={isCreating || isUpdating}
      />
    );
  }

  /**
   * Empty state
   */
  if (!products || products.length === 0) {
    return (
      <>
        <button 
          className="btn btn-success mb-3"
          onClick={handleCreateNew}
        >
          Create New Product
        </button>
        <div className="alert alert-info">No products found in the system.</div>
      </>
    );
  }

  /**
   * No search results
   */
  if (filteredProducts && filteredProducts.length === 0) {
    return (
      <>
        <button 
          className="btn btn-success mb-3"
          onClick={handleCreateNew}
        >
          Create New Product
        </button>
        <SearchBar 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
        <p className="text-muted">No products found matching your search.</p>
      </>
    );
  }

  /**
   * Display products
   */
  return (
    <>
      <button 
        className="btn btn-success mb-3"
        onClick={handleCreateNew}
      >
        Create New Product
      </button>
      
      <SearchBar 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      
      <div className="row">
        {filteredProducts?.map(product => (
          <ProductCard 
            key={product._id} 
            product={product}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </>
  );
}