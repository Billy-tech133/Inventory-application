const {Router}  = require('express');
const clothesRouter = require('./clothesRouter');
const designerRouter = require('./designerRouter');
const priceRouter = require('./priceRouter');
const inventoryRouter = require('./inventoryRouter');
const designerBrandRouter = require('./designerBrandRouter');
const brandRouter = require('./brandRouter'); 
const indexRouter = Router();

indexRouter.use('/', clothesRouter);
indexRouter.use('/designers', designerRouter);
indexRouter.use('/prices', priceRouter);
indexRouter.use('/inventory', inventoryRouter);
indexRouter.use('/designer-brands', designerBrandRouter);
indexRouter.use('/brands', brandRouter);

module.exports = indexRouter;