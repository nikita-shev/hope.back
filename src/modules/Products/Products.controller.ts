import { Response } from 'express';
import { IResponse } from '../../types/Response.js';
import { DBModel } from '../../types/Product';
import { IQuery, RequestQuery } from './Products.types';
import Products from './Products';
import { createErrorObj, createResponseObj } from '../../utils/methods';

class ProductsController {
    async getProducts(req: RequestQuery<IQuery>, res: Response<IResponse>): Promise<void> {
        try {
            const { page, limit } = req.query;
            const products: DBModel[] = await Products.findProducts(page, limit);

            res.status(200).json(
                createResponseObj(!!products.length && products, 'Products not found.')
            );
        } catch (err) {
            res.status(200).json(createErrorObj());
        }
    }
}

export default new ProductsController();
