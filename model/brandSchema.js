const {checkSchema} = require('express-validator');

const brandSchema = checkSchema({
    name: {
        in: ['body'],
        isString: true,
        errorMessage: 'Name must be a string'
    },
    logo: {
        in: ['body'],
        isString: true,
        errorMessage: 'Logo must be a string'
    },
    website: {
        in: ['body'],
        isString: true,
        errorMessage: 'Website must be a string'
    }
});

module.exports = brandSchema;
