const mongoose = require("mongoose");

// Build the schema for Order
const orderSchema = new mongoose.Schema({
  pizza: {
    name: String,
    crust: String,
    size: String,
    price: Number,
    toppings: String
  },
  quantity: Number,
  customer: {
    customerName: String,
    phone: String,
    address: String
  },
  createdOn: { type: Date, default: Date.now }
});

// Create the Order model
module.exports = mongoose.model("Order", orderSchema);
