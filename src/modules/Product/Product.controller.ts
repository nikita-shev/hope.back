import { Request, Response } from 'express';
import { ResponseData, IRequestData, IResponse, RequestBody } from './Product.types.js';
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

    async createProduct(req: RequestBody<IRequestData>, res: Response<IResponse>): Promise<void> {
        try {
            const result: ResponseData = await Product.createProduct(req.body);

            res.status(200).json({ status: 0, data: result, errors: [] });
        } catch (err) {
            res.status(200).json({ status: 1, data: {}, errors: ['Invalid data entry!'] });
        }
    }

    async deleteProduct(req: Request<{ id: string }>, res: Response<IResponse>): Promise<void> {
        try {
            const result: boolean = await Product.deleteProduct(req.params.id);
            const errors: string[] = result ? [] : ['Product not found!'];

            res.status(200).json({ status: 0, data: {}, errors });
        } catch (err) {
            res.status(200).json({ status: 1, data: {}, errors: ['Invalid data entry!'] });
        }
    }
}

export default new ProductController();
