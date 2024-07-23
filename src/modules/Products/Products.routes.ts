import { Router } from 'express';
import { convertQueryParams, convertQueryParamsValues } from './middleware/Products.middleware.js';
import ProductsController from './Products.controller.js';

const router: Router = Router();

router.get('/', convertQueryParams, convertQueryParamsValues, ProductsController.getProducts);

export default router;
