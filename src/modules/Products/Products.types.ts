import { Request } from 'express';

// Request
export interface IQuery<T> {
    limit: T;
    page: T;
}

export type RequestQuery<T> = Request<{}, {}, {}, T>;
