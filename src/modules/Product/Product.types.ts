import { Request } from 'express';
import { WithId } from 'mongodb';
import { IProduct } from '../../types/Product.js';

// Request
export type RequestBody<T> = Request<{}, {}, T>;

// Response
export enum ResponseStatuses {
    OK = 0,
    FAILED = 1
}

export type ResponseData = WithId<IProduct> | {};

export interface IResponse {
    status: ResponseStatuses.OK | ResponseStatuses.FAILED;
    data: ResponseData;
    errors: string[];
}
