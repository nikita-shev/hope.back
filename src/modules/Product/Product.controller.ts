import { Request, Response } from 'express';
import { IResponse, ResponseData } from './Product.types.js';
import Product from './Product.js';

class ProductController {
    async getProduct(req: Request<{ id: string }>, res: Response<IResponse>): Promise<void> {
        try {
            const result: ResponseData = await Product.findProduct(req.params.id);

            res.status(200).json({ status: 0, data: result, errors: [] });
        } catch (err) {
            res.status(200).json({ status: 1, data: {}, errors: ['Product not found!'] });
        }
    }
}

export default new ProductController();
