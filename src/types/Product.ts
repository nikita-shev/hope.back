import { WithId } from 'mongodb';

type Statuses = 'sale' | 'new' | 'all';
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
    vendorCode: number;
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

export type DBModel = WithId<IProduct>;
