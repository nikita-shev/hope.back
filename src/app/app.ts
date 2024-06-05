import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import product from '../modules/Product/Product.routes.js';

export const app: Express = express();

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173', optionsSuccessStatus: 200 }));

app.use('/api/product', product);

app.get('/', (req: Request, res: Response<{ text: string }>): void => {
    res.status(200).json({ text: 'Hello World!' });
});
