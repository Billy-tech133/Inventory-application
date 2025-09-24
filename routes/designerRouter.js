const {Router} = require('express');
const { getDesigners, getDesigner } = require('../controllers/designerController');

const designerRouter = Router();

designerRouter.get('/', getDesigners);
designerRouter.get('/:id', getDesigner);

module.exports = designerRouter;