const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/dbconfig');
const userRoutes = require('./routes/Userroutes');

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database connection
connectDB();

// Route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Paytm Wallet API!');
});

// User routes
app.use('/api/users', userRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


