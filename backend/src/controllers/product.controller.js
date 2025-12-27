import { ProductService } from "../services/product.service.js";

// put error handling in here, service should be throwing the errors

export const ProductController = {
    getAll: async (req, res) => {
        const products = await ProductService.getAll();
        res.json(products);
    },
    
    // get product by id if relevant

    createProduct: async (req, res) => {
        const product = await ProductService.createProduct(req.body);
        res.status(201).json( { success: true, product })
    },

    updateProduct: async (req, res) => {
        const product = await ProductService.updateProduct(req.params.id, req.body);
        // check if I need a specific success code here
        res.status(200).json( { success: true, product } );
    },

    deleteProduct: async (req, res) => {
        await ProductService.deleteProduct(req.params.id);
        // specific status code?
        res.status(204).send();
    }
}