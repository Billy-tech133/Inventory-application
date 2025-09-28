const {getAllItems, getItemById, addItem, updateItem, deleteItem} = require("../queries/clothQuery")
const {matchedData, validationResult} = require('express-validator')
const clothSchema = require("../model/clothSchema")

async function getItems(req, res)  {
    try {
        const items = await getAllItems();
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
        res.render("pages/clothes", { title: "Item Details", item: item });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}


async function displayCreateItemPage(req, res) {
    res.render("pages/addCloth", { title: "Create Item" });
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
        await addItem(item);
        res.redirect('/');
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}     

async function displayUpdatePage(req, res) {
    const id = parseInt(req.params.clothes_id);
    try {
        const clothes = await getItemById(id);
        if (!clothes) {
            return res.status(404).json({error: "Clothes not found"});
        }
     res.render('pages/updateClothForm', { title: "Update Item", clothes: clothes });    
    } catch(error) {
        res.status(500).json({error: error.message});
    }
}

async function modifyItem(req, res) {
    const id = parseInt(req.params.clothes_id);
    const item = req.body;
    try {
        await updateItem(id, item);
        console.log(item)
        res.redirect(`/clothes/${id}`)
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

async function removeItem(req, res) {
    const id = parseInt(req.params.clothes_id);
    try {
         await deleteItem(id);
            res.redirect('/');
    } catch (error) {
        res.status(500).json({error: error.message});
    }

}   


module.exports = {
    getItems,
    getItem,
    createItem,
    modifyItem,
    removeItem,
    displayUpdatePage,
    displayCreateItemPage
};