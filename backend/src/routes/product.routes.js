import { Router } from "express";
import { ProductController } from "../controllers/product.controller.js";

const router = Router();

// base endpoint: "/api/products"?

router.get("/", ProductController.getAll);

router.post("/", ProductController.createProduct);

router.put("/:id", ProductController.updateProduct);

router.delete("/:id", ProductController.deleteProduct);



export default router;