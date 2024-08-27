import { Response } from 'express';
import { RequestQuery } from '../../types/Request.js';
import { IResponse } from '../../types/Response.js';
import { IProducts, IQuery } from './Products.types';
import Products from './Products';
import { createErrorObj, createResponseObj } from '../../utils/methods';

class ProductsController {
    async getProducts(req: RequestQuery<IQuery>, res: Response<IResponse>): Promise<void> {
        try {
            const products: IProducts = await Products.findProducts(req.query);

            res.status(200).json(createResponseObj(products, 'Products not found.'));
        } catch (err) {
            res.status(200).json(createErrorObj());
        }
    }
}

export default new ProductsController();
