const {Router} = require('express');
const {getDesignerBrands, getDesignerBrand} = require('../controllers/designerBrandQuery');

const designerBrandRouter = Router();

designerBrandRouter.get('/', getDesignerBrands);
designerBrandRouter.get('/:id', getDesignerBrand);

module.exports = designerBrandRouter;