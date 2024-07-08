import { Request } from 'express';

// Request
export interface IQuery {
    limit: number;
    page: number;

    [key: string]: string | number | boolean;
}

export type RequestQuery<T> = Request<{}, {}, {}, T>;
