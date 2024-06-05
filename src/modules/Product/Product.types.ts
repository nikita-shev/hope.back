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
