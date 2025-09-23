const {checkSchema} = require('express-validator');

const priceRangeSchema = checkSchema({
    min_price: {
        in: ['body'],
        isFloat: true,
        errorMessage: 'Minimum price must be a float'
    },
    max_price: {
        in: ['body'],
        isFloat: true,
        errorMessage: 'Maximum price must be a float'
    }
});

module.exports = priceRangeSchema;
