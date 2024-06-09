import { getCollection } from '../../db/index.js';
import { DBModel, IProduct } from '../../types/Product.js';

const collection = getCollection<IProduct>();

class Products {
    async findProducts(page: number = 1, limit: number): Promise<DBModel[]> {
        const skip: number = (page - 1) * limit;

        return collection.find({}).skip(skip).limit(limit).toArray();
    }
}

export default new Products();
