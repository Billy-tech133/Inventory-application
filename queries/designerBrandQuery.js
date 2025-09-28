const {pool} = require('../db/pool');

async function getAllDesignerBrands() {
    const {rows} = await pool.query('SELECT * FROM designer_brands');
    return rows;
}

async function getDesignerBrandById(id) {
    const {rows} = await pool.query('SELECT * FROM designer_brands WHERE brand_id = $1', [id]);
    return rows[0];
}

module.exports = {
    getAllDesignerBrands,
    getDesignerBrandById
};
