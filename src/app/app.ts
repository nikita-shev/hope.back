import express, { Express, Request, Response } from 'express';

export const app: Express = express();

app.get('/', (req: Request, res: Response): void => {
    res.status(200).json('Hello World!');
});
