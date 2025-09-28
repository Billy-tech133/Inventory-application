const {pool} = require('../db/pool');

async function getAllPrices() {
    const {rows} = await pool.query('SELECT * FROM price_ranges');
    return rows;
}

async function getPriceById(id) {
    const {rows} = await pool.query('SELECT * FROM price_ranges WHERE price_id = $1', [id]);
    return rows[0];
}

module.exports = {
    getAllPrices,
    getPriceById
};