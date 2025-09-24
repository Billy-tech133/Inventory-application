const pool = require('../db/pool');


async function getAllDesigners() {
    const {rows} = await pool.query('SELECT * FROM designers');
    return rows;
}
async function getDesignerById(id) {
    const {rows} = await pool.query('SELECT * FROM designers WHERE designer_id = $1', [id]);
    return rows[0];
}

module.exports = {
    getAllDesigners,
    getDesignerById
};