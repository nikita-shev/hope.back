import { DBModel } from '../../types/Product.js';

// Request
export interface IQuery {
    limit: number;
    page: number;

    [key: string]: string | number | boolean;
}

// Response
export interface IProducts {
    products: DBModel[];
    productsCount: number;
}
