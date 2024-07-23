import { IParams, ISearchParams, ITemplate } from './createSearchParams.types.js';

const template: ITemplate = {
    isInStock: 'isInStock',
    status: 'status',
    brand: 'brand',
    category: 'category',
    colors: 'colors.name',
    sizes: 'sizes'
};

const convertParams = (value: any) => (Array.isArray(value) ? { $in: value } : value);

export const createSearchParams = (params: IParams): ISearchParams => {
    const searchParams: ISearchParams = {};

    for (const key in params) {
        if (template[key]) {
            searchParams[template[key]] = convertParams(params[key]);
        }
    }

    return searchParams;
};
