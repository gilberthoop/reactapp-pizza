var express = require('express');
var router = express.Router();
const { check, validationResult } = require("express-validator");
var menu = require('../data/menu.json');

/* GET home page. */
router.get("/", (req, res, next) => {
  res.send("Pizza order app :)");
});


/* API Endpoints */

/*
 *  @desc:    Retireve all menu data
 *  @param:   Route and Callback
 *  @return:  JSON representation of menu data
 */
router.get('/api/menu', (req, res, next) => {
  res.json(menu);
});


/*
 *  @desc:    
 *  @param:   
 *  @return:  
 */
router.post('/api/orders', (req, res, next) => {
  const errors = validationResult(req);

  // If there's any error, record them and stop execution
  if (!errors.isEmpty()) {
    let errMessage = '';
    erorrs.array().forEach(error => {
      errMessage += `${error.msg}. `;
    });
    console.log(errorMessage);
    res.status(422).json({ errors: errors.array(), errorMessage });
    return;
  }


});



/*
 *  @desc:    
 *  @param:   
 *  @return:  
 */

module.exports = router;
