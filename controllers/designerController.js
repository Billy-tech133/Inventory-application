const {getAllDesigners, getDesignerById, getDesignerClothesById} = require('../queries/designerQuery');

async function getDesigners(req, res) {
    try {
        const designers = await getAllDesigners();
        console.log(designers);
        res.render("pages/designers", { title: "Designers", designers: designers });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

async function getDesigner(req, res) {
    const  id = req.params.designer_id;
    try {
        const designer = await getDesignerById(id);
        if (designer) {
            console.log(designer);
            res.render("pages/designer", { title: designer.name, designer: designer });
        } else {
            res.status(404).json({error: 'Designer not found'});
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

async function getDesignerClothes(req, res) {
    const  id = req.params.designer_id;
    try {
        const clothes = await getDesignerClothesById(id);
        if (clothes) {
            console.log(clothes);
            res.render("pages/designer_clothes", { title: `Clothes by Designer ${id}`, clothes: clothes });
        } else {
            res.status(404).json({error: 'No clothes found for this designer'});
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    getDesigners,
    getDesigner,
    getDesignerClothes
};
