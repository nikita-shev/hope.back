import { MongoClient, Document } from 'mongodb';

const url: string = process.env.MongoDB_URL || '';
const dbName: string = 'shop';

const client: MongoClient = new MongoClient(url);

export const connectDB = async (): Promise<void> => {
    try {
        await client.connect();
        await client.db(dbName).command({ ping: 1 });

        console.log('Connected successfully to server!');
    } catch (e) {
        await client.close();
    }
};

export const getCollection = <T extends Document>() => client.db(dbName).collection<T>('products');
