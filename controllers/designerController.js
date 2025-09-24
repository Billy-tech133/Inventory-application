const {getAllDesigners, getDesignerById,} = require('../queries/designerQuery');

async function getDesigners(req, res) {
    try {
        const designers = await getAllDesigners();
        console.log(designers);
        res.status(200).json(designers);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

async function getDesigner(req, res) {
    const { id } = req.params;
    try {
        const designer = await getDesignerById(id);
        if (designer) {
            res.status(200).json(designer);
        } else {
            res.status(404).json({error: 'Designer not found'});
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    getDesigners,
    getDesigner
};
