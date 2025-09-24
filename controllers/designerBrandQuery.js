const {getAllDesignerBrands, getDesignerBrandById} = require('../queries/brandQuery');

async function getDesignerBrands(req, res) { 
    try {
        const brands = await getAllDesignerBrands();
        console.log(brands);
        res.status(200).json(brands);
    } catch (error) {
        res.status(500).json({error: error.message});
    }   
}

async function getDesignerBrand(req, res) { 
    const { id } = req.params;
    try {
        const brand = await getDesignerBrandById(id);
        if (brand) {
            res.status(200).json(brand);
        } else {
            res.status(404).json({error: 'Brand not found'});
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    getDesignerBrands,
    getDesignerBrand
};
