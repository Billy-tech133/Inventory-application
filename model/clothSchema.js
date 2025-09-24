const {checkSchema} = require('express-validator');

const clothSchema = checkSchema({
    name: {
        in: ['body'],
        isString: true,
        errorMessage: 'Name must be a string'
    },
    sku: {
        in: ['body'],
        isString: true,
        errorMessage: 'SKU must be a string'
    },
    brand_id: {
        in: ['body'],
        isInt: true,
        errorMessage: 'Brand ID must be an integer'
    },
    designer_id: {
        in: ['body'],
        isInt: true,
        errorMessage: 'Designer ID must be an integer'
    },
    price_range_id: {
        in: ['body'],
        isInt: true,
        errorMessage: 'Price range ID must be an integer'
    },
    description: {
        in: ['body'],
        isString: true,
        errorMessage: 'Description must be a string'
    },
    images: {
        in: ['body'],
        isArray: true,
        errorMessage: 'Images must be an array'
    }
});
module.exports = clothSchema;
