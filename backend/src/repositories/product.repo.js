import { Product } from "../models/product.model.js";

export const ProductRepository = {
    findAll: () => Product.find(),

    findById: (id) => Product.findById(id),

    // this seems too nonspecific, need to double check naming conventions
    createProduct: (data) => Product.create(data),

    replace: (id, data) => Product.replaceOne({ _id: id }, data, { runValidators: true }),

    // PATCH 
    // update: (id, data) => Product.findByIdAndUpdate(id, data, { new: true }),

    delete: (id) => Product.findByIdAndDelete(id)

}