const express = require('express');
const userControllers = require('../controllers/usercontrollers'); // Use correct filename

const router = express.Router();

// POST route for registering a user
router.post('/register', userControllers.registerUser); // Use registerUser function

// Other routes (e.g., get all users)
router.get('/users', userControllers.getAllUsers);

module.exports = router;
