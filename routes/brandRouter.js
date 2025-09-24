const {Router} = require('express');
const {getBrands, getBrand} = require('../controllers/brandController');

const brandRouter = Router();

brandRouter.get('/', getBrands);
brandRouter.get('/:id', getBrand);

module.exports = brandRouter;

