const {getAllItems, getItemById, addItem, updateItem, deleteItem} = require("../queries/clothQuery")
const {matchedData, validationResult} = require('express-validator')
const clothSchema = require("../model/clothSchema")

async function getItems(req, res)  {
    try {
        const items = await getAllItems();
        console.log(items)
        res.render("pages/home", { title: "Home", items: items });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

async function getItem(req, res) {
    const id = parseInt(req.params.clothes_id);
    try {
        const item = await getItemById(id);
        if (!item) {
            return res.status(404).json({error: "Item not found"});
        }
        console.log(item)
        res.render("pages/clothes", { title: "Item Details", item: item });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

async function createItem(req, res) {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const item = req.body;
    const matched = matchedData(item, clothSchema);
    if (!matched) {
        return res.status(400).json({ error: "Invalid item data" });
    }

    try {
        const newItem = await addItem(item);
        res.redirect('/');
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}       

async function modifyItem(req, res) {
    const id = parseInt(req.params.id);
    const item = req.body;
    try {
        const updatedItem = await updateItem(id, item);
        if (!updatedItem) {
            return res.status(404).json({error: "Item not found"});
        }
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

async function removeItem(req, res) {
    const id = parseInt(req.params.id);
    try {
        const deletedItem = await deleteItem(id);
        if (!deletedItem) {
            return res.status(404).json({error: "Item not found"});
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({error: error.message});
    }

}   


module.exports = {
    getItems,
    getItem,
    createItem,
    modifyItem,
    removeItem
};