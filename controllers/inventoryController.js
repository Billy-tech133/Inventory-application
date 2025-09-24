const {getAllInventoryItems, getInventoryItemById} = require('../queries/inventoryQuery');

async function getInventoryItems(req, res) {
    try {
        const items = await getAllInventoryItems();
        console.log(items);
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

async function getInventoryItem(req, res) {
    const { id } = req.params;
    try {
        const item = await getInventoryItemById(id);
        if (item) {
            res.status(200).json(item);
        } else {
            res.status(404).json({error: 'Item not found'});
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    getInventoryItems,
    getInventoryItem
};
