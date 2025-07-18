import express from 'express';
import { getMe, login, logout, register } from '../controller/auth.controller.js';
import { protectRoute } from '../middleware/protectRoute.js';

const router = express.Router();

router.post('/register', register)
router.get('/me', protectRoute, getMe)
router.post('/login', login)
router.post('/logout', logout)
export default router;