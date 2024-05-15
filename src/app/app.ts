import express, { Express, Request, Response } from 'express';

export const app: Express = express();

app.get('/', (req: Request, res: Response<{ text: string }>): void => {
    res.status(200).json({ text: 'Hello World!' });
});
