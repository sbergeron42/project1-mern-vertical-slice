import { Router } from "express";
import { ProductController } from "../controllers/product.controller.js";

const router = Router();

// base endpoint: "/api/products"?

router.get("/", ProductController.getAll);

router.get("/", ProductController.createProduct);

router.get("/", ProductController.updateProduct);

router.get("/", ProductController.deleteProduct);



export default router;