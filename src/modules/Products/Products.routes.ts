import { Router } from 'express';
import { convertQueryParams } from './middleware/Products.middleware.js';
import ProductsController from './Products.controller.js';

const router: Router = Router();

router.get('/', convertQueryParams, ProductsController.getProducts);

export default router;
