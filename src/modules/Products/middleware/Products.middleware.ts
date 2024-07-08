import { NextFunction, Response } from 'express';
import queryString, { ParsedQuery } from 'query-string';
import { RequestQuery } from '../Products.types.js';

export const convertQueryParams = (
    req: RequestQuery<ParsedQuery<string | number | boolean>>,
    res: Response,
    next: NextFunction
): void => {
    const queryParams: string = queryString.stringify(req.query);

    req.query = queryString.parse(queryParams, { parseBooleans: true, parseNumbers: true });

    next();
};
