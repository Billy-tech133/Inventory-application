const {getAllBrands, getBrandById} = require('../queries/brandQuery');


async function getBrands(req, res) {
    try {
        const brands = await getAllBrands();
        console.log(brands);
        res.status(200).json(brands);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

async function getBrand(req, res) {
    const { id } = req.params;
    try {
        const brand = await getBrandById(id);
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
    getBrands,
    getBrand
};
