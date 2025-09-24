const {getInventoryItems, getInventoryItem} = require('../controllers/inventoryController');
const {Router} = require('express');

const inventoryRouter = Router();

inventoryRouter.get('/', getInventoryItems);
inventoryRouter.get('/:id', getInventoryItem);

module.exports = inventoryRouter;
