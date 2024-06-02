import { WithId } from 'mongodb';
import { v4 as uuidV4 } from 'uuid';
import { getCollection } from '../../db/index.js';
import { IProduct, IRequestData, ResponseData } from './Product.types.js';

const collection = getCollection<IProduct>();

class Product {
    async findProduct(id: string): Promise<ResponseData> {
        const product: WithId<IProduct> | null = await collection.findOne({ id });

        return product ? product : {};
    }

    async createProduct(data: IRequestData): Promise<ResponseData> {
        const id: string = uuidV4();
        const product: IProduct = { ...data, id, images: { preview: '' } };

        await collection.insertOne(product);

        return this.findProduct(id);
    }
}

export default new Product();
