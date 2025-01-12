const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  communityname: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  licence: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const community = mongoose.model('community', userSchema);

module.exports = community;