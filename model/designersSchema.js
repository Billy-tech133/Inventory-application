const {checkSchema} = require('express-validator');

const designerSchema = checkSchema({
    name: {
        in: ['body'],
        isString: true,
        errorMessage: 'Name must be a string'
    },
    bio: {
        in: ['body'],
        isString: true,
        errorMessage: 'Bio must be a string'
    },
    website: {
        in: ['body'],
        isString: true,
        errorMessage: 'Website must be a string'
    },
    brand_id: {
        in: ['body'],
        isInt: true,
        errorMessage: 'Brand ID must be an integer'
    }
});

module.exports = designerSchema;
