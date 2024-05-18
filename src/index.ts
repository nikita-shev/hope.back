import { app } from './app/app';

const PORT = process.env.PORT || 3000;

app.listen(PORT, (): void => {
    console.log(`Server running on port ${PORT}`);
});
