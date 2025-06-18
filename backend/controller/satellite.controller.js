import Satellite from "../models/satellite.model.js";

export const getPosts = async (req, res) => {
    try {
        const posts = await Satellite.find();
        res.status(200).json({ message: 'Posts found successfully', posts });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const createPost = async (req, res) => {
    try {
        const { name, description, creater, status, sendTo } = req.body;
        if(!name || !description || !creater || !status || !sendTo) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const newPost = new Satellite({
            name,
            description,
            creater,
            status,
            sendTo
        })
        await newPost.save();
        res.status(201).json({ message: 'Post created successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const deletePost = async (req, res) => {
    try {
        const id = req.params.id;
        const post = await Satellite.findById(id);
        if(!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        await Satellite.findByIdAndDelete(id);
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        console.log(error)
    }
}

