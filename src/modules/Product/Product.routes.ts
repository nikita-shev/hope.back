import { Router } from 'express';
import ProductMiddleware from './middleware/Product.middleware.js';
import FileStorage from '../FileStorage/FileStorage.js';
import ProductController from './Product.controller.js';

const router: Router = Router();

router
    .get('/:id', ProductController.getProduct)
    .post(
        '/',
        ProductMiddleware.checkEmptyBody,
        ProductMiddleware.checkBodyKeys,
        FileStorage.configure('images'),
        ProductController.createProduct
    )
    .delete('/:id', ProductController.deleteProduct)
    .put(
        '/:id',
        ProductMiddleware.checkEmptyBody,
        ProductMiddleware.checkBodyKeys,
        ProductController.updateProduct
    );

export default router;
