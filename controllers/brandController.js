const {getAllBrands, getBrandClothes} = require('../queries/brandQuery');


async function getBrands(req, res) {
    try {
        const brands = await getAllBrands();
        console.log(brands);
        res.render('pages/brands', {brands: brands});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

async function getClothes(req, res) {
    const id = req.params.brand_id;
    try {
        const clothes = await getBrandClothes(id);
        if (clothes) {
            // res.status(200).json(clothes);
            res.render("pages/brandClothes", {clothes: clothes});
        } else {
            res.status(404).json({error: 'Brand not found'});
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}


module.exports = {
    getBrands,
    getClothes
};
