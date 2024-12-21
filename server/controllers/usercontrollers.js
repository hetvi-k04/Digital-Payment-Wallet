const User = require('../models/usermodel');

// Register User
const registerUser = async (req, res) => {
  const { firstname, lastname, email, password, phonenumber, address, identificationType, identificationId } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = new User({
      firstname,
      lastname,
      email,
      password,
      phonenumber,
      address,
      identificationType,
      identificationId,
    });

    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Users (For admin or testing purposes)
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { registerUser, getAllUsers };
// Example userController.js file

// server/controllers/userController.js

// Define createUser function
exports.createUser = (req, res) => {
  // Logic for creating a user goes here
  // For example, you can send a success message:
  res.send("User created successfully!");
};

