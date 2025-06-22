import express from 'express';
import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { generateTokenAndSetCookies } from '../lib/utils/generateToken.js';
export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if(!username || !email || !password) {
            return res.status(400).json({message: 'All fields are required'});
        }
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'Email already in use' });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })
        if(newUser){
            generateTokenAndSetCookies(newUser._id, res)
            await newUser.save();
            res.status(201).json({ message: 'User registered successfully', newUser });
        }
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if(!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const isPasswordValid = await bcrypt.compare(password, user?.password || '');
        if(isPasswordValid) {
            generateTokenAndSetCookies(user._id, res)
            res.status(200).json({ message: 'User logged in successfully', user });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const logout = async (req, res) => {
    try {
        res.cookie('jwt', '', {
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            maxAge: 0,
        })
        res.status(200).json({ message: 'User logged out successfully completed' });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select('-password');
        if(!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User found successfully', user });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal server error' });
    }
}