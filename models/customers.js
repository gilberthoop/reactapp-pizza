const mongoose = require('mongoose');

// Build the Schema fo customers
const customerSchema = new mongoose.Schema({
    name: String,
    phone: String,
    orderedOn: { type: Date, default: Date.now }
});

// Create and export the Customer model
module.exports = mongoose.model('Customer', customerSchema);