import { ProductRepository } from "../repositories/product.repo.js";

export const ProductService = {
    getAll: async () => {
        const products = await ProductRepository.findAll();
        return products;
    },

    // idk how to do this
    createProduct: async (newProduct) => {

        // add validation here

        const product = await ProductRepository.createProduct(newProduct);
        return product;
    },

    // same here
    updateProduct: async () => {
        const product = await ProductRepository.update();
        return product;
    },

    deleteProduct: async () => {
        // idk how to do validation here (valid id format)

        // also i should check if the productid is valid

        // idk how to hard delete
        return ProductRepository.update(productId, { isActive: false })

    }

}


