import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { connectDB } from './db/connectDB.js';
import router from './router/user.route.js';
import satelliteRouter from './router/satellite.route.js';

dotenv.config();

const app = express();

// ✅ Middleware
app.use(express.json());
app.use(cookieParser());

// ✅ CORS Configuration (NO trailing slashes)
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:5174',
    'https://satellitelaunchtracker.vercel.app',
    'https://satellitelaunchtracker-anqv.vercel.app'
  ],
  credentials: true
}));

// ✅ Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Satellite Launch Tracker API!');
});
app.use('/api/user', router);
app.use('/api/satellite', satelliteRouter);

// ✅ Error Logging (Optional for debugging)
process.on('uncaughtException', err => {
  console.error('UNCAUGHT EXCEPTION 💥:', err);
});

// ✅ Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connectDB();
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
