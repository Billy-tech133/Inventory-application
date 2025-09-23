const { checkSchema } = require('express-validator');

const designerBrandSchema = checkSchema({
    designer_id: {
        in: ['body'],
        isInt: true,
        errorMessage: 'Designer ID must be an integer'
    },
    brand_id: {
        in: ['body'],
        isInt: true,
        errorMessage: 'Brand ID must be an integer'
    }
});

module.exports = designerBrandSchema;

