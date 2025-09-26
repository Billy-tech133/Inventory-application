const pool = require('../db/pool');


async function getAllItems() {
    const {rows} = await pool.query('SELECT * FROM clothes');
    return rows;
}

async function getItemById(id) {
    const {rows} = await pool.query(
        `SELECT c.*, b.name AS brand_name, d.name AS designer_name, p.range_name, p.min_price, p.max_price AS price_range
         FROM clothes c
         LEFT JOIN brands b ON c.brand_id = b.brand_id
         LEFT JOIN designers d ON c.designer_id = d.designer_id
         LEFT JOIN price_ranges p ON c.price_range_id = p.price_range_id
         WHERE c.clothes_id = $1`,
        [id]
    );
    return rows[0];
}

async function addItem(item) {
    const {name, sku, brand_id, designer_id, price_range_id, description, images} = item;
    const {rows} = await pool.query(
        `INSERT INTO clothes (name, sku, brand_id, designer_id, price_range_id, description, images)
         VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
        [name, sku, brand_id, designer_id, price_range_id, description, images]
    );
    return rows[0];
}

async function updateItem(id, item) {
    const {name, sku, brand_id, designer_id, price_range_id, description, images} = item;
    const {rows} = await pool.query(
        `UPDATE clothes SET name=$1, sku=$2, brand_id=$3, designer_id=$4, price_range_id=$5, description=$6, images=$7
         WHERE clothes_id=$8 RETURNING *`,
        [name, sku, brand_id, designer_id, price_range_id, description, images, id]
    );
    return rows[0];
}

async function deleteItem(id) {
    const {rows} = await pool.query('DELETE FROM clothes WHERE clothes_id = $1 RETURNING *', [id]);
    return rows[0];
}   

module.exports = {
    getAllItems,
    getItemById,
    addItem,
    updateItem,
    deleteItem
};