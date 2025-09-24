const {getAllPrices, getPriceById} = require('../queries/priceQuery');

async function getPrices(req, res) {
    try {
        const prices = await getAllPrices();
        console.log(prices);
        res.status(200).json(prices);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

async function getPrice(req, res) {
    const { id } = req.params;
    try {
        const price = await getPriceById(id);
        if (price) {
            res.status(200).json(price);
        } else {
            res.status(404).json({error: 'Price not found'});
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    getPrices,
    getPrice
};
