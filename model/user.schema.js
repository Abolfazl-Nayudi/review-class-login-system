const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: [true, 'this email already exists'],
  },
  password: String,
  role: {
    type: String,
    default: 'user',
  },
});

const User = mongoose.model('user', userSchema);

module.exports = User;
