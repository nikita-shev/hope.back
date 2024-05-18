import { app } from './app/app';
import { connectDB } from './db/index.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, async (): Promise<void> => {
    await connectDB();

    console.log(`Server running on port ${PORT}`);
});
