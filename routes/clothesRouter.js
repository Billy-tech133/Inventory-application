const {Router} = require('express');
const { getItems, getItem, createItem, modifyItem, removeItem} = require('../controllers/clothController');


const clothesRouter = Router();

clothesRouter.get('/', getItems);
clothesRouter.get('/clothes/:clothes_id', getItem);
clothesRouter.post('/', createItem);
clothesRouter.put('/clothes/:clothes_id', modifyItem);
clothesRouter.delete('/clothes/:clothes_id', removeItem);

module.exports = clothesRouter;


