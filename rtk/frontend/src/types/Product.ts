/**
 * Type def for a product
 */
export type Product = {
  _id: string;
  name: string;
  sku: string;
  manufacturer: string;
  description?: string;
}