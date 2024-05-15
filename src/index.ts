import { app } from './app/app';

const PORT: number = 3000;

app.listen(PORT, (): void => {
    console.log('Server running on port 3000');
});
