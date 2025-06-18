import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { connectDB } from './db/connectDB.js';
import router from './router/user.route.js';
import satelliteRouter from './router/satellite.route.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('Welcome to the Satellite launch tracker API!');
})
app.use('/api/user', router);
app.use('/api/satellite', satelliteRouter);

app.listen(PORT, () => {
    connectDB()
    console.log(`Server is running on http://localhost:${PORT}`);
})