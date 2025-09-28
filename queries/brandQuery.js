const {pool} = require('../db/pool');   

async function getAllBrands() {
    const {rows} = await pool.query('SELECT * FROM brands');
    return rows;
}

async function getBrandClothes(id) {
    const { rows } = await pool.query(
        `SELECT * FROM clothes
         WHERE brand_id = $1`, 
        [id]
    );
    return rows;
}

module.exports = {
    getAllBrands,
    getBrandClothes
};