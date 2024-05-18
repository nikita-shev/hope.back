import { MongoClient } from 'mongodb';

const url: string = process.env.MongoDB_URL || '';
const dbName: string = 'test';

export const client: MongoClient = new MongoClient(url);

export const connectDB = async (): Promise<void> => {
    try {
        await client.connect();
        await client.db(dbName).command({ ping: 1 });

        console.log('Connected successfully to server');
    } catch (e) {
        await client.close();
    }
};
