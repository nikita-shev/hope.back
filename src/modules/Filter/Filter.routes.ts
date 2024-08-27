import { Router } from 'express';
import FilterController from './Filter.controller.js';

const router: Router = Router();

router.get('/', FilterController.getFilterValues);

export default router;
