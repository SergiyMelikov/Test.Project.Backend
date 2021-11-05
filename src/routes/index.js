import express from 'express';
import { productController } from '../controller/product';

const router = express.Router();
router.post('/products', productController.createProduct);

export { router };
