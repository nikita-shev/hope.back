import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import product from '../modules/Product/Product.routes.js';

export const app: Express = express();
const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = path.dirname(__filename);

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173', optionsSuccessStatus: 200 }));
app.use('/public', express.static(path.join(path.parse(__dirname).dir, '..', 'public'))); // -

app.use('/api/product', product);

app.get('/', (req: Request, res: Response<{ text: string }>): void => {
    res.status(200).json({ text: 'Hello World!' });
});
