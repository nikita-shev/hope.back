import { Router } from 'express';
import ProductController from './Product.controller.js';

const router: Router = Router();

router.get('/:id', ProductController.getProduct);

export default router;
