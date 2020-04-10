const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ComplainSchema = new Schema({
  notes: {
    type: String,
    required: true
  },
  car_model: {
    type: String,
    required: true
  },
  customer_name: {
    type: String,
    required: true

  },
  customer_phone_number: {
    type: String,
    required: true
  },
  assignedTo: {
    type: String
  },
  is_completed: {
    type: Boolean,
    required: true,
    default: false
  },
  created_at: {
    type: Date,
    required:true
  },

});

module.exports = Complains = mongoose.model('complains', ComplainSchema);

// const Complains = mongoose.model('complains', ComplainSchema);
// module.exports { Complains };