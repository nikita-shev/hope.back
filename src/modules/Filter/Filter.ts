import { getCollection } from '../../db/index.js';
import { DBModel, IProduct } from '../../types/Product.js';
import { FilterType } from './Filter.types.js';
import { createFilterValues } from './utils/createFilterValues.js';

const collection = getCollection<IProduct>();

class Filter {
    async findFilterValues(key: FilterType): Promise<string[]> {
        const result: DBModel[] = await collection
            .find({ [key]: { $exists: true } }, { projection: { _id: 0, [key]: 1 } })
            .toArray();

        return [...new Set(createFilterValues(key, result))];
    }
}

export default new Filter();
