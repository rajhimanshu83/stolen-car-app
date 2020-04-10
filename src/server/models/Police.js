const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PoliceSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  resolved: {
    type: Array,
    default: []
  },
  assignedCase: {
    type: String
  }
});

module.exports = Police = mongoose.model('police', PoliceSchema);