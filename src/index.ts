import { app } from './app/app';
import { connectDB } from './db/index.js';

const PORT = process.env.PORT || 3000;

async function startApp(): Promise<void> {
    try {
        await connectDB();

        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    } catch (err) {
        console.log(err);
    }
}

startApp();
