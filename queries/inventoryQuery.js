const pool = require('../db/pool');

async function getAllInventoryItems() {
    const {rows} = await pool.query('SELECT * FROM inventory');
    return rows;
}

async function getInventoryItemById(id) {
    const {rows} = await pool.query('SELECT * FROM inventory WHERE item_id = $1', [id]);
    return rows[0];
}

module.exports = {
    getAllInventoryItems,
    getInventoryItemById
};
