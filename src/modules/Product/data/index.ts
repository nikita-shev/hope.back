import { IRequestData } from '../Product.types.js';

export type ProductKeys = keyof IRequestData;

export const keys: ProductKeys[] = [
    'name',
    'description',
    'category',
    'brand',
    'vendorCode',
    'price',
    'isInStock',
    'quantity',
    'rating',
    'status',
    'colors',
    'sizes',
    'options',
    'images'
];
