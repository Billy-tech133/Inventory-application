const pool = require('../db/pool');


async function getAllDesigners() {
    const {rows} = await pool.query('SELECT * FROM designers');
    return rows;
}
async function getDesignerById(id) {
    const {rows} = await pool.query(
        `SELECT * FROM designers WHERE designer_id = $1`,
        [id]
        // `SELECT c.*, d.name AS designer_name
        //  FROM clothes c
        //  INNER JOIN designers d ON c.designer_id = d.designer_id
        //  WHERE d.designer_id = $1`,
        // [id]
    );
    return rows[0];
}

async function getDesignerClothesById(id) {
    const {rows} = await pool.query(
        `SELECT c.*, b.name AS brand_name, d.name AS designer_name
         FROM clothes c
         INNER JOIN brands b ON c.brand_id = b.brand_id
         INNER JOIN designers d ON c.designer_id = d.designer_id
         WHERE d.designer_id = $1`,
        [id]
    );
    return rows;
}

module.exports = {
    getAllDesigners,
    getDesignerById,
    getDesignerClothesById
};