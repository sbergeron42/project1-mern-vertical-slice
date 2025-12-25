import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    manufacturer: String,
    sku: String,
    description: String
})

export const Product = mongoose.model("Product", productSchema);