const {Router} = require('express');
const { getItems, getItem, createItem, modifyItem, removeItem} = require('../controllers/clothController');


const clothesRouter = Router();

clothesRouter.get('/', getItems);
clothesRouter.get('/:id', getItem);
clothesRouter.post('/', createItem);
clothesRouter.put('/:id', modifyItem);
clothesRouter.delete('/:id', removeItem);

module.exports = clothesRouter;


