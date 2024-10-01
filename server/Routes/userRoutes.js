const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');
const Usermiddleware = require('../middlewares/Usermiddleware');


router.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const hashedPassword = bcrypt.hashSync(password, 10);
        const newUser = new User({
            username:username,
            email:email,
            password: hashedPassword,
        });
        
        await newUser.save();

        res.status(201).json({
            success: true,
            message: "User created successfully",
        });
    } catch (e) {
        res.status(500).json({
            success: false,
            message: e.message,
        });
    }
});


router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User doesn't exist",
            });
        }

        const isPasswordCorrect = bcrypt.compareSync(password, user.password);

        if (!isPasswordCorrect) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials",
            });
        }

        const token = jsonwebtoken.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(200).json({
            success: true,
            data:token,
            message: "Logged in successfully",
        });
    } catch (e) {
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
        });
    }
});


router.get('/get-current', Usermiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.body.userId);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        res.status(200).json({
            success: true,
            data: user,
        });
    } catch (e) {
        res.status(500).json({
            success: false,
            message: e.message,
        });
    }
});

module.exports = router;
