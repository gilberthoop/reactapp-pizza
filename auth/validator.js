const { check, validationResult } = require("express-validator");

const orderValidationRules = () => {
    [
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
            .withMessage("Please indicate the quantity")
    ];
};


const customerValidationRules = () => {
    return [
        check("name")
            .isLength({ min: 2 })
            .withMessage("Please enter your name"),
        check('phone')
            .isMobilePhone()
            .withMessage("Please enter a valid phone number")
    ];
};


const validate = (req, res, next) => {
    const errors = validationResult(req);
    // Concatinate error messages
    if (!errors.isEmpty()) {
        let errorMessage = '';
        errors.array().map(error => {
            errorMessage += `${error.msg}. `;
        });

        return res.status(422).json({ errors: errors.array(), errorMessage });
    } else {
        return next();
    }
};


module.exports = { orderValidationRules, customerValidationRules, validate }