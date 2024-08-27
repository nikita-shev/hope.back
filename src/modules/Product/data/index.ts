import { IModel } from '../../../types/Product.js';

export type ProductKeys = keyof IModel;

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
    'options'
];
