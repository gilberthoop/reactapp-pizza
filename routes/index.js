const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const menu = require('../data/menu.json');
// const { orderValidationRules, customerValidationRules, validate } = require('../auth/validator.js');
const { check, validationResult } = require("express-validator");
const PriceCalculator = require("../modules/PriceCalculator");
const Order = require('../models/order');
const Customer = require('../models/customers');
const CUSTOMER_ID = "5eadaca1787e9f2d3c288a4a";


// Initialize database connection
mongoose.connect('mongodb://localhost/pizza')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Could not connect to MongoDB'));


/*
 *  @desc:    Display the index page    
 *  @param:   Index route and callback   
 */
router.get("/", (req, res) => {
  res.send("Pizza order app :)");
});


/*
 *  @desc:    Retrieve all menu data
 *  @param:   Route and Callback
 *  @return:  JSON representation of menu data
 */
router.get('/api/menu', (req, res) => {
  res.json(menu);
});


/*
 *  @desc:    Retrieve all orders in json format
 *  @param:    API endpoint and callback   
 */
router.get('/api/orders', (req, res) => {
  Order.find({}, (err, order) => {
    if (err) { return res.status(500).json({ status: "Error retrieving orders" }); }

    // Calculate the total price of the order
    let total = PriceCalculator.getTotalPrice(order);

    console.log('total price:', total);

    res.json({ order, total });
  });
});


/*
 *  @desc:    Submit order and save to database
 *  @param:   API order submit endpoint, input validation, and callbacks 
 *  @return:  
 */
router.post(
  '/api/orders', [
  check("pizza")
    .isLength({ min: 1 })
    .withMessage("Please select a pizza"),
  check("toppings")
    .isLength({ min: 1 })
    .withMessage("Please select a pizza"),
  check("size")
    .isLength({ min: 1 })
    .withMessage("Please select a size"),
  check("crust")
    .isLength({ min: 1 })
    .withMessage("Please select a crust"),
  check("quantity")
    .isInt({ min: 1, max: 10 })
    .withMessage("Please indicate the correct quantity")
], (req, res) => {
  // Check for errors and display
  const errors = validationResult(req);
  // Concatinate error messages
  if (!errors.isEmpty()) {
    let errorMessage = '';
    errors.array().map(error => {
      errorMessage += `${error.msg}. `;
    });

    return res.status(422).json({ errors: errors.array(), errorMessage });
  }

  // Calculate total price
  let pizza = req.body.pizza;
  let size = req.body.size;
  let quantity = req.body.quantity;
  req.body.price = calculateTotalPrice(pizza, size, quantity);

  // Create an object for piece of information about the order
  let orderData = req.body;
  orderData.customer = CUSTOMER_ID;

  // Save to db
  let order = new Order(orderData);
  order.save(err => {
    // Error with adding the order
    if (err) {
      res.status(500).json({ status: "Error adding the order" });
      return;
    };

    // Successful order adding
    res.json({ status: `${pizza} has been added to your order.` });
  });

  Order.find({}, (err) => {
    if (err) { console.log(err) }
  })
    .populate('customer', 'name');

});


/*
*  @desc:    Delete an item from your order(s)
*  @param:   API Endpoint and callback 
*/
router.post('/api/orders/delete/:id', (req, res) => {
  Order.findByIdAndDelete(req.params.id, (err, item) => {
    // Error with adding the item
    if (err) { return res.status(500).json({ status: "Error deleting the item" }) };

    // Successful order adding
    res.json({ status: `${item.pizza} has been deleted from your order.` });
  });
});


/*
*  @desc:    Delete the entire order
*  @param:   API Endpoint and callback 
*/
router.post('/api/orders/delete', (req, res) => {
  Order.deleteMany({}, (err) => {
    // Error with adding the item
    if (err) {
      return res.status(500).json({ status: "Error deleting the item" })
    };

    // Successful order adding
    res.json({ status: 'Your order has been deleted' });
  });
});


/*
*  @desc:    Create a new customer
*  @param:   API Endpoint and callback
*/
router.post('/api/customers',
  [
    check("name")
      .isLength({ min: 2 })
      .withMessage("Please enter your name"),
    check('phone')
      .isMobilePhone()
      .withMessage("Please enter a valid phone number")
  ], (req, res) => {
    // Check for errors and display
    const errors = validationResult(req);
    // Concatinate error messages
    if (!errors.isEmpty()) {
      let errorMessage = '';
      errors.array().map(error => {
        errorMessage += `${error.msg}. `;
      });

      return res.status(422).json({ errors: errors.array(), errorMessage });
    }

    let customerData = req.body;
    let customer = new Customer(customerData);
    customer.save(err => {
      // Error with saving the customer
      if (err) { return res.status(500).json({ status: "Error saving the customer" }) };

      // Successful customer creation
      res.json({ status: "Customer has been made." });
    });

  });


/*
*  @desc:    
*  @param:   
*  @return:  
*/



//  Utility method(s)
/*
*  @desc:   A helper method for calculating the total price of order plus tax
*  @param:  pizza, size, and quantity  
*  @return: The total price with tax 
*/
function calculateTotalPrice(pizza, size, quantity) {
  let priceCalculator = new PriceCalculator(pizza, size, quantity);
  return priceCalculator.getPrice();
}


module.exports = router;
