const {Router} = require('express');
const { getDesigners, getDesigner, getDesignerClothes } = require('../controllers/designerController');

const designerRouter = Router();

designerRouter.get('/', getDesigners);
designerRouter.get('/:designer_id', getDesigner);
designerRouter.get('/:designer_id/clothes', getDesignerClothes);

module.exports = designerRouter;