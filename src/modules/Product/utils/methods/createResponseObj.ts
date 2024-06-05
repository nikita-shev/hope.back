import { IResponse, ResponseData, ResponseStatuses } from '../../Product.types.js';

export const createResponseObj = (
    value: ResponseData | boolean,
    error: string = 'Product not found.'
): IResponse => {
    const status: ResponseStatuses =
        Object.keys(value).length || (typeof value === 'boolean' && value)
            ? ResponseStatuses.OK
            : ResponseStatuses.FAILED;
    const data: ResponseData = typeof value === 'boolean' ? {} : value;
    const errors: string[] = status === ResponseStatuses.OK ? [] : [error];

    return { status, data, errors };
};
