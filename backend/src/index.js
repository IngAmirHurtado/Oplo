import app from './app.js';
import dotenv from 'dotenv'
import { connectDB } from './lib/db.js';

dotenv.config()
const PORT = process.env.PORT

app.listen(PORT, () => {
    connectDB();
})