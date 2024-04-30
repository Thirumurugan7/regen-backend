const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Check user
router.post('/check-user', async (req, res) => {
    const user = await User.findOne({ address: req.body.address });
    res.json(user ? { registered: true, name: user.name } : { registered: false });
});

// Register user
router.post('/register', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json({ message: 'User registered', user: newUser });
    } catch (error) {
        res.status(400).json({ message: 'Error registering user', error: error.message });
    }
});

module.exports = router;
