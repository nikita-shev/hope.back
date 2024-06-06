import { DeleteResult, UpdateResult, WithId } from 'mongodb';
import { v4 as uuidV4 } from 'uuid';
import { getCollection } from '../../db/index.js';
import { IImages, IModel, IProduct } from '../../types/Product.js';
import { ResponseData } from './Product.types.js';
import { Files } from '../FileStorage/FileStorage.types.js';
import { createImagesObj } from './utils';

const collection = getCollection<IProduct>();

class Product {
    async findProduct(id: string): Promise<ResponseData> {
        const product: WithId<IProduct> | null = await collection.findOne({ id });

        return product ? product : {};
    }

    async createProduct(model: IModel, files: Files): Promise<ResponseData> {
        const id: string = uuidV4();
        const imagesObj: IImages = createImagesObj(files);
        const product: IProduct = { ...model, id, images: imagesObj };

        await collection.insertOne(product);

        return this.findProduct(id);
    }

    async deleteProduct(id: string): Promise<boolean> {
        const result: DeleteResult = await collection.deleteOne({ id });

        return result.deletedCount === 1;
    }

    async updateProduct(id: string, model: IModel): Promise<boolean> {
        const result: UpdateResult<IProduct> = await collection.updateOne({ id }, { $set: model });

        return result.matchedCount === 1;
    }
}

export default new Product();
