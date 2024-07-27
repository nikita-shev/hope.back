import { getCollection } from '../../db/index.js';
import { DBModel, IProduct } from '../../types/Product.js';
import { IProducts, IQuery } from './Products.types.js';
import { createSearchParams, ISearchParams } from './utils';

const collection = getCollection<IProduct>();

class Products {
    async findProducts({ page = 1, limit = 15, ...params }: IQuery): Promise<IProducts> {
        const skip: number = (page - 1) * limit;
        const searchParams: ISearchParams = Object.keys(params).length
            ? createSearchParams(params)
            : {};

        const products: DBModel[] = await collection
            .find(searchParams, { projection: { _id: 0 } })
            .skip(skip)
            .limit(limit)
            .toArray();
        const productsCount: number = await collection.countDocuments(searchParams);

        return { products, productsCount };
    }
}

export default new Products();
