const { Client } = require('pg');
const dotenv = require('dotenv');
const { dbConfig } = require('./pool');
dotenv.config({path: process.env.NODE_ENV === "production" ? '.env.production' : '.env.development'});

 async function initializeDB() {

const client = new Client(dbConfig);

console.log('Connecting to database...');   
await client.connect();


try {
    console.log(`dropping existing tables...`);

    await client.query(`
        DROP TABLE IF EXISTS inventory;
        DROP TABLE IF EXISTS clothes;
        DROP TABLE IF EXISTS price_ranges;
        DROP TABLE IF EXISTS designer_brand;
        DROP TABLE IF EXISTS designers;
        DROP TABLE IF EXISTS brands;
    `);

await client.query(`
CREATE TABLE brands (
    brand_id SERIAL PRIMARY KEY,
    name TEXT UNIQUE NOT NULL,
    country TEXT,
    description TEXT,
    founded DATE,
    logo TEXT,
    website TEXT
);


CREATE TABLE designers (
    designer_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    biography TEXT,
    specialty TEXT,
    contact_info TEXT
);

CREATE TABLE designer_brand (
    designer_id INT REFERENCES designers(designer_id) ON DELETE CASCADE,
    brand_id INT REFERENCES brands(brand_id) ON DELETE CASCADE,
    role TEXT,
    start_date DATE,
    end_date DATE,
    PRIMARY KEY (designer_id, brand_id)
);

CREATE TABLE price_ranges (
    price_range_id SERIAL PRIMARY KEY,
    range_name TEXT NOT NULL,
    min_price DECIMAL(10,2) NOT NULL,
    max_price DECIMAL(10,2) NOT NULL,
    currency TEXT NOT NULL,
    CONSTRAINT chk_price CHECK (min_price < max_price)
);

CREATE TABLE clothes (
    clothes_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    sku TEXT UNIQUE NOT NULL,
    brand_id INT REFERENCES brands(brand_id) ON DELETE CASCADE,
    designer_id INT REFERENCES designers(designer_id) ON DELETE SET NULL,
    price_range_id INT REFERENCES price_ranges(price_range_id) ON DELETE SET NULL,
    description TEXT,
    size TEXT,
    color TEXT,
    material TEXT,
    gender TEXT CHECK (gender IN ('Men', 'Women', 'Unisex')),
    category TEXT CHECK (category IN ('Tops','Bottoms','Dresses','Outerwear','Shoes','Accessories','Other')),
    stock_quantity INT NOT NULL DEFAULT 0 CHECK (stock_quantity >= 0),
    date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    images TEXT
);

CREATE TABLE inventory (
    inventory_id SERIAL PRIMARY KEY,
    clothes_id INT REFERENCES clothes(clothes_id) ON DELETE CASCADE,
    size TEXT,
    color TEXT,
    quantity INT NOT NULL DEFAULT 0 CHECK (quantity >= 0),
    location TEXT,
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`);
    
} catch (error) {
    console.error('Error populating database:', error);
} finally {
    console.log('Populating database...');
    await client.end();

}
}


module.exports = initializeDB;