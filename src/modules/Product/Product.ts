import { WithId } from 'mongodb';
import { getCollection } from '../../db/index.js';
import { IProduct, ResponseData } from './Product.types.js';

const collection = getCollection<IProduct>();

class Product {
    async findProduct(id: string): Promise<ResponseData> {
        const product: WithId<IProduct> | null = await collection.findOne({ id });

        return product ? product : {};
    }
}

export default new Product();
