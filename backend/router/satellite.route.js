import express from 'express'
import { createPost, deletePost, getPosts } from '../controller/satellite.controller.js';
import { protectRoute } from '../middleware/protectRoute.js';

const router = express.Router();

router.post('/create',protectRoute, createPost);
router.get('/posts', getPosts);
router.delete('/posts/:id', protectRoute, deletePost);

export default router