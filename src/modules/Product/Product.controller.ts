import { Request, Response } from 'express';
import { RequestBody } from '../../types/Request.js';
import { IResponse } from '../../types/Response.js';
import { IModel } from '../../types/Product.js';
import { ResponseData } from './Product.types.js';
import { createErrorObj, createResponseObj } from '../../utils/methods';
import Product from './Product.js';

class ProductController {
    async getProduct(
        req: Request<{ id: string }>,
        res: Response<IResponse<ResponseData>>
    ): Promise<void> {
        try {
            const result: ResponseData = await Product.findProduct(req.params.id);

            res.status(200).json(createResponseObj(result));
        } catch (err) {
            res.status(200).json(createErrorObj());
        }
    }

    async createProduct(
        req: RequestBody<IModel>,
        res: Response<IResponse<ResponseData>>
    ): Promise<void> {
        try {
            const result: ResponseData = await Product.createProduct(req.body, req.files);

            res.status(201).json(createResponseObj(result));
        } catch (err) {
            res.status(200).json(createErrorObj());
        }
    }

    async deleteProduct(req: Request<{ id: string }>, res: Response<IResponse>): Promise<void> {
        try {
            const result: boolean = await Product.deleteProduct(req.params.id);

            res.status(200).json(createResponseObj(result));
        } catch (err) {
            res.status(200).json(createErrorObj());
        }
    }

    async updateProduct(
        req: Request<{ id: string }, {}, IModel>,
        res: Response<IResponse>
    ): Promise<void> {
        try {
            const result: boolean = await Product.updateProduct(req.params.id, req.body);

            res.status(200).json(createResponseObj(result));
        } catch (err) {
            res.status(200).json(createErrorObj());
        }
    }
}

export default new ProductController();
