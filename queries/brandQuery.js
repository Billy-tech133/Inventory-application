const {pool} = require('../db/pool');   

async function getAllBrands() {
    const {rows} = await pool.query('SELECT * FROM brands');
    return rows;
}

async function getBrandById(id) {
    const {rows} = await pool.query('SELECT * FROM brands WHERE brand_id = $1', [id]);
    return rows[0];
}

module.exports = {
    getAllBrands,
    getBrandById
};