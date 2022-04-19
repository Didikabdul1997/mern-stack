import express from "express";
import {
  getAllProducts,
  createProduct,
  getProductByID,
  updateProduct,
  deleteProduct
} from "../controllers/Products.js";

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductByID);
router.post('/', createProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;