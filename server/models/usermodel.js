const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, 'Firstname is required'],
    trim: true,
    minlength: [2, 'Firstname must be at least 2 characters long'],
    maxlength: [50, 'Firstname cannot exceed 50 characters'],
  },
  lastname: {
    type: String,
    required: [true, 'Lastname is required'],
    trim: true,
    minlength: [2, 'Lastname must be at least 2 characters long'],
    maxlength: [50, 'Lastname cannot exceed 50 characters'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address'],
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters long'],
    select: false,
  },
  phonenumber: {
    type: [String],
    validate: [arrayLimit, 'Contacts cannot exceed 3'],
  },
  address: {
    type: String,
    required: true,
  },
  identificationType: {
    type: String,
    required: [true, 'Identification type is required'],
    enum: ['Aadhaar', 'PAN Card', 'Voter ID', 'Driving License'],
    trim: true,
  },
  identificationId: {
    type: String,
    required: [true, 'Identification ID is required'],
    unique: true,
    trim: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

function arrayLimit(val) {
  return val.length <= 3;
}

const User = mongoose.model('User', userSchema);
module.exports = User;
