// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// require('dotenv').config();

// // Connect to MongoDB
//  mongoose.connect(process.env.MONGODB_URI ,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }).then(() => {
//     console.log('MongoDB connected');
//   }).catch((err) => {
//     console.error('MongoDB connection error:', err);
//   });
   
// // Define a simple route for testing
// app.get('/', (req, res) => {
//   res.send('Hello, world!');  // Simple response to test the server
// });

// // Your other routes go here...

// // Start the server
// app.listen(5000, () => {
//   console.log('Server is running on port 5000');
// });

// // mongoose.connect(process.env.MONGODB_URI)

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const walletRoutes = require('./routes/walletRoutes');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Hello World');
  });
app.use('/api/user', userRoutes);
app.use('/api/wallet', walletRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.log('Error connecting to MongoDB', err);
  });

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
