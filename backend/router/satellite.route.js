import express from 'express'
import { createPost, deletePost, getPosts, postId } from '../controller/satellite.controller.js';
import { protectRoute } from '../middleware/protectRoute.js';

const router = express.Router();

router.post('/create', createPost);
router.get('/posts', getPosts);
router.delete('/posts/:id', deletePost);
router.get('/posts/:id', postId); // This seems to be a duplicate, consider removing it
export default router