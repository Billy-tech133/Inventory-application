const {Router} = require('express');
const { getItems, getItem, createItem, modifyItem, removeItem, displayUpdatePage, displayCreateItemPage} = require('../controllers/clothController');

const clothesRouter = Router();

clothesRouter.get('/create', displayCreateItemPage);
clothesRouter.get('/', getItems);
clothesRouter.get('/clothes/:clothes_id', getItem);
clothesRouter.post('/clothes', createItem);
clothesRouter.get('/clothes/:clothes_id/update', displayUpdatePage);
clothesRouter.post('/clothes/:clothes_id', modifyItem);
clothesRouter.get('/clothes/:clothes_id/delete', removeItem);

module.exports = clothesRouter;


