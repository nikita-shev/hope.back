import { DBModel } from '../../../types/Product.js';
import { FilterType } from '../Filter.types.js';

export const createFilterValues = (key: FilterType, data: DBModel[]): string[] => {
    let filterValues: string[] = [];

    data.forEach((el) => {
        const value = el[key];

        if (Array.isArray(value)) {
            filterValues = filterValues.concat(
                value.map((item) => (typeof item === 'object' ? item.name : item))
            );
        } else {
            filterValues.push(`${value}`);
        }
    });

    return filterValues;
};
