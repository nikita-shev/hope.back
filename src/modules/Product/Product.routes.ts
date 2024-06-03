import { Router } from 'express';
import ProductController from './Product.controller.js';

const router: Router = Router();

router
    .get('/:id', ProductController.getProduct)
    .post('/', ProductController.createProduct)
    .delete('/:id', ProductController.deleteProduct)
    .put('/:id', ProductController.updateProduct);

export default router;
