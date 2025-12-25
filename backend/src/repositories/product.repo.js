import { Product } from "../models/product.model.js";

export const ProductRepository = {
    findAll: () => Product.find(),

    // this seems too nonspecific, need to double check naming conventions
    createProduct: (data) => Product.create(data),

    update: () => Product.update(),

    delete: () => Product.delete()

}