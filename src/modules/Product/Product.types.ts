import { Request } from 'express';
import { WithId } from 'mongodb';

type Statuses = 'sale' | 'new' | null;
type Sizes = '3XL' | '4XL' | '5XL' | 'L' | 'M' | 'S' | 'XL' | 'XS' | 'XXL';

interface IColor {
    name: string;
    value: string;
}

interface IPrice {
    current: number;
    new?: number;
}

interface IParam {
    name: string;
    description: string;
}

export interface IImages {
    preview: string;
    links?: string[];
}

export interface IModel {
    name: string;
    description: string;
    category: string;
    brand: string;
    vendorCode: string;
    price: IPrice;
    isInStock: boolean;
    quantity: number;
    rating: number;
    status: Statuses;
    colors: IColor[];
    sizes: Sizes[];
    options: IParam[][] | null;
}

export interface IProduct extends IModel {
    id: string;
    images: IImages;
}

// Request
export interface IRequestData extends IModel {
    images: []; // -
}

export type RequestBody<T> = Request<{}, {}, T>;

// Response
export type ResponseData = WithId<IProduct> | {};

export interface IResponse {
    status: 0 | 1;
    data: ResponseData;
    errors: string[];
}
