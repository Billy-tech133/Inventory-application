const {Router}  = require('express');
const clothesRouter = require('./clothesRouter');
const designerRouter = require('./designerRouter');
const priceRouter = require('./priceRouter');
const inventoryRouter = require('./inventoryRouter');
const designerBrandRouter = require('./designerBrandRouter'); 


const indexRouter = Router();

indexRouter.use('/clothes', clothesRouter);
indexRouter.use('/designers', designerRouter);
indexRouter.use('/prices', priceRouter);
indexRouter.use('/inventory', inventoryRouter);
indexRouter.use('/designer-brands', designerBrandRouter);

module.exports = indexRouter;