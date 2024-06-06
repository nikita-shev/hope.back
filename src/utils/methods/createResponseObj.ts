import { IResponse, ResponseStatuses } from '../../types/Response.js';

const isArray = (value: any): boolean => Array.isArray(value);
const isNotEmptyObj = (value: any): boolean => Boolean(Object.keys(value).length);
const isTruthy = (value: any): boolean => typeof value === 'boolean' && value;

export const createResponseObj = <T>(
    value: T,
    error: string = 'Product not found.'
): IResponse<T | {}> => {
    const status: ResponseStatuses =
        isNotEmptyObj(value) || isArray(value) || isTruthy(value)
            ? ResponseStatuses.OK
            : ResponseStatuses.FAILED;
    const data: T | {} = typeof value === 'boolean' ? {} : value;
    const errors: string[] = status === ResponseStatuses.OK ? [] : [error];

    return { status, data, errors };
};
