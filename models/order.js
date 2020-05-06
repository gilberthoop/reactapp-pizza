const mongoose = require("mongoose");

// Build the schema for Order
const orderSchema = new mongoose.Schema({
  pizza: String,
  image: String,
  toppings: [String],
  size: String,
  crust: String,
  quantity: Number,
  price: Number,
  createdOn: { type: Date, default: Date.now },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' }
});

// Create and export the Order model
module.exports = mongoose.model("Order", orderSchema);