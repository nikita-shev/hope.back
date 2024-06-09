import { NextFunction, Response } from 'express';
import { IQuery, RequestQuery } from '../Products.types.js';

export const convertQueryParams = (
    req: RequestQuery<IQuery<string | number>>,
    res: Response,
    next: NextFunction
): void => {
    const { limit, page } = req.query;

    req.query = { ...req.query, limit: +limit, page: +page };

    next();
};
