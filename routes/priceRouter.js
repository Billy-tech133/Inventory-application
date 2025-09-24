const {Router} = require('express');
const {getPrices, getPrice} = require('../controllers/priceController');

const priceRouter = Router();

priceRouter.get('/', getPrices);
priceRouter.get('/:id', getPrice);

module.exports = priceRouter;
