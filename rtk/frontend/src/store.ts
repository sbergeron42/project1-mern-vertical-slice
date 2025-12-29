import { configureStore } from '@reduxjs/toolkit';
import { productApi } from './api/productApi';

/**
 * Redux store configuration
 * 
 * The store holds all application state.
 * RTK Query automatically manages product data in this store.
 */
const store = configureStore({
  reducer: {
    // Add the productApi reducer using its reducerPath
    [productApi.reducerPath]: productApi.reducer
  },
  /**
   * Middleware handles behind-the-scenes work like:
   * - Making API calls
   * - Caching responses
   * - Managing loading states
   */
  middleware: (defaultMiddleware) => 
    defaultMiddleware().concat(productApi.middleware)
});

export default store;