import { NextFunction, Response } from 'express';
import queryString, { ParsedQuery } from 'query-string';
import { RequestQuery } from '../../../types/Request.js';

export const convertQueryParams = (
    req: RequestQuery<ParsedQuery<string | number | boolean>>,
    res: Response,
    next: NextFunction
): void => {
    const queryParams: string = queryString.stringify(req.query);

    req.query = queryString.parse(queryParams, { parseBooleans: true, parseNumbers: true });

    next();
};

export const convertQueryParamsValues = (
    req: RequestQuery<ParsedQuery<string | number | boolean>>,
    res: Response,
    next: NextFunction
): void => {
    const queryParams: string[] = ['status', 'isInStock'];
    const template: { [key: string]: string | boolean } = {
        'Распродажа': 'sale', // status
        'Новые товары': 'new', // status
        'В наличии': true, // isInStock
        'Под заказ': false // isInStock
    };

    for (const [key, value] of Object.entries(req.query)) {
        if (queryParams.includes(key)) {
            req.query[key] = Array.isArray(value)
                ? value.map((el) => template[el as string] ?? el)
                : template[value as string] ?? value;
        }
    }

    next();
};
