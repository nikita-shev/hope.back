import { NextFunction, Response } from 'express';
import { RequestBody } from '../../../types/Request.js';
import { IResponse } from '../../../types/Response.js';
import { IModel } from '../../../types/Product.js';
import { keys, ProductKeys } from '../data';
import { createResponseObj } from '../../../utils/methods/index.js';

class ProductMiddleware {
    checkEmptyBody(
        req: RequestBody<IModel>,
        res: Response<IResponse>,
        next: NextFunction
    ): void {
        if (Object.keys(req.body).length) {
            next();
        } else {
            res.status(200).json(createResponseObj(false, 'Request body cannot be empty.'));
        }
    }

    checkBodyKeys(
        req: RequestBody<IModel>,
        res: Response<IResponse>,
        next: NextFunction
    ): void {
        const product: IModel = req.body;
        const result: boolean = Object.keys(product).every((el) =>
            keys.includes(el as ProductKeys)
        );

        if (result) {
            next();
        } else {
            res.status(200).json(
                createResponseObj(
                    false,
                    'The request body is missing one or more required properties.'
                )
            );
        }
    }
}

export default new ProductMiddleware();
