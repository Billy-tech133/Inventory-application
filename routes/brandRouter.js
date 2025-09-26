const {Router} = require('express');
const {getBrands, getClothes} = require('../controllers/brandController');

const brandRouter = Router();

brandRouter.get('/', getBrands);
brandRouter.get('/:brand_id/clothes', getClothes);

module.exports = brandRouter;

