import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Product } from '../types/Product';

/**
 * RTK Query API for product operations
 * 
 * createApi automatically creates:
 * - Redux slice with reducers
 * - Custom hooks for each endpoint
 * - Automatic caching and data management
 */
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
  tagTypes: ['Product'], // Used for automatic cache invalidation
  endpoints: (builder) => ({
    /**
     * GET - Find all products
     * Hook: useFindAllProductsQuery()
     */
    findAllProducts: builder.query<Product[], void>({
      query: () => '/products',
      providesTags: ['Product'] // When this data changes, refetch queries with this tag
    }),
    
    /**
     * POST - Create a new product
     * Hook: useCreateProductMutation()
     */
    createProduct: builder.mutation<Product, Omit<Product, '_id'>>({
      query: (newProduct) => ({
        url: '/products',
        method: 'POST',
        body: newProduct
      }),
      invalidatesTags: ['Product'] // Automatically refetch products after creating
    }),
    
    /**
     * PUT - Update an existing product
     * Hook: useUpdateProductMutation()
     */
    updateProduct: builder.mutation<Product, Product>({
      query: (updatedProduct) => ({
        url: `/products/${updatedProduct._id}`,
        method: 'PUT',
        body: updatedProduct
      }),
      invalidatesTags: ['Product'] // Automatically refetch products after updating
    }),
    
    /**
     * DELETE - Delete a product
     * Hook: useDeleteProductMutation()
     */
    deleteProduct: builder.mutation<void, string>({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Product'] // Automatically refetch products after deleting
    })
  })
});

// Export all auto-generated hooks
export const { 
  useFindAllProductsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation
} = productApi;