import { getCollection } from '../../db/index.js';
import { DBModel, IProduct } from '../../types/Product.js';
import { IQuery } from './Products.types.js';

const collection = getCollection<IProduct>();

class Products {
    async findProducts({ page = 1, limit, ...params }: IQuery): Promise<DBModel[]> {
        const skip: number = (page - 1) * limit;

        return collection.find(params).skip(skip).limit(limit).toArray();
    }
}

export default new Products();
