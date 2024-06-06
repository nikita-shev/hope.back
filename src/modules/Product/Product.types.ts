import { Request } from 'express';
import { WithId } from 'mongodb';
import { IProduct } from '../../types/Product.js';

// Request
export type RequestBody<T> = Request<{}, {}, T>;

// Response
export type ResponseData = WithId<IProduct> | {};
