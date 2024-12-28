const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User'); // Ensure this path is correct and User model exists

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    // Validate the input data
    if (!firstname || !lastname || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ 
      firstname, 
      lastname, 
      email, 
      password: hashedPassword 
    });

    await newUser.save();

    res.status(201).json({ message: 'User successfully registered' });
  } catch (error) {
    console.error('Error during user registration:', error.message);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
