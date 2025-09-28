const { Client } = require('pg');
const dotenv = require('dotenv');
const { dbConfig } = require('./pool');
dotenv.config({path: process.env.NODE_ENV === "production" ? '.env.production' : '.env.development'});

async function populateDB() {

    const client = new Client(dbConfig);

    console.log('Connecting to database...');   
    await client.connect();



    try {
        await client.query(`
        INSERT INTO brands (name, country, description, founded, logo, website) VALUES
        ('Fashionista', 'USA', 'A trendy fashion brand', '2005-03-15', 'https://example.com/logo1.png', 'https://fashionista.com'),
        ('Elegance Co.', 'France', 'Luxury clothing and accessories', '1998-07-22', 'https://example.com/logo2.png', 'https://eleganceco.com'),
        ('Urban Style', 'UK', 'Casual and streetwear fashion', '2010-11-05', 'https://example.com/logo3.png', 'https://urbanstyle.co.uk');
        `);

        await client.query(`
        INSERT INTO designers (name, biography, specialty, contact_info) VALUES
        ('Alice Johnson', 'Renowned for her innovative designs in womenswear.', 'Womenswear', 'alice@example.com'),
        ('Bob Smith', 'Expert in menswear and tailoring.', 'Menswear', 'bob@example.com'),
        ('Charlie Brown', 'Specializes in sustainable fashion.', 'Sustainable Fashion', 'charlie@example.com'),
        ('Diana Lee', 'Known for her avant-garde runway collections.', 'Avant-Garde', 'diana@example.com'),
        ('Ethan Clark', 'Focuses on eco-friendly materials and processes.', 'Eco-Friendly', 'ethan@example.com'),
        ('Fiona Garcia', 'Award-winning designer in luxury accessories.', 'Accessories', 'fiona@example.com'),
        ('George Kim', 'Expert in streetwear and urban fashion.', 'Streetwear', 'george@example.com'),
        ('Hannah Patel', 'Celebrated for her bridal and evening wear.', 'Bridal', 'hannah@example.com'),
        ('Ivan Petrov', 'Pioneer in tech-integrated clothing.', 'Techwear', 'ivan@example.com'),
        ('Julia Wang', 'Specializes in children’s fashion.', 'Children Fashion', 'julia@example.com'),
        ('Kevin O Neil', 'Master of classic tailoring and suits.', 'Tailoring', 'kevin@example.com');
        `);
        await client.query(`
        INSERT INTO designer_brand (designer_id, brand_id, role, start_date, end_date) VALUES
        (1, 1, 'Lead Designer', '2015-01-01', NULL),
        (2, 2, 'Head of Menswear', '2018-06-15', NULL),
        (3, 3, 'Sustainability Consultant', '2020-09-10', NULL);
        `);     
        await client.query(`
        INSERT INTO price_ranges (range_name, min_price, max_price, currency) VALUES
        ('Budget', 0.00, 50.00, 'USD'),
        ('Mid-Range', 50.01, 200.00, 'USD'),
        ('Luxury', 200.01, 1000.00, 'USD');
        `);     
        await client.query(`
        INSERT INTO clothes (name, sku, brand_id, designer_id, price_range_id, description, size, color, material, images) VALUES
        ('Summer Dress', 'SKU12345', 1, 1, 2, 'A lightweight red cotton dress perfect for summer outings.', 'M', 'Red', 'Cotton',  'https://images.unsplash.com/photo-1512436991641-6745cdb1723f'),
        ('Leather Jacket', 'SKU67890', 2, 2, 3, 'Classic black leather jacket for a stylish and edgy look.', 'L', 'Black', 'Leather', 'https://images.unsplash.com/photo-1517841905240-472988babdf9'),
        ('Casual T-Shirt', 'SKU54321', 3, 3, 1, 'Comfortable white polyester t-shirt for everyday wear.', 'S', 'White', 'Polyester',  'https://images.unsplash.com/photo-1526178613658-3f1622045544'),
        ('Denim Jeans', 'SKU11111', 1, 2, 2, 'Blue denim jeans with a classic fit for versatile styling.', '32', 'Blue', 'Denim', 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c'),
        ('Wool Sweater', 'SKU22222', 2, 1, 3, 'Soft grey wool sweater to keep you warm in colder months.', 'M', 'Grey', 'Wool', 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c'),
        ('Silk Blouse', 'SKU33333', 3, 2, 1, 'Elegant pink silk blouse suitable for formal occasions.', 'S', 'Pink', 'Silk', 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f'),
        ('Cargo Shorts', 'SKU44444', 1, 3, 2, 'Durable khaki cotton cargo shorts with multiple pockets.', 'L', 'Khaki', 'Cotton', 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca'),
        ('Puffer Jacket', 'SKU55555', 2, 3, 3, 'Warm green polyester puffer jacket for winter weather.', 'XL', 'Green', 'Polyester', 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f'),
        ('Linen Shirt', 'SKU66666', 3, 1, 1, 'Breathable white linen shirt ideal for hot climates.', 'M', 'White', 'Linen', 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f');
        `);     
        await client.query(`
        INSERT INTO inventory (clothes_id, quantity, location, last_updated) VALUES
        (1, 100, 'Warehouse A', '2024-01-15'),
        (2, 50, 'Warehouse B', '2024-02-20'),
        (3, 200, 'Storefront', '2024-03-05');
        `);     
    console.log('Database populated successfully.');                
    } catch (error) {
        console.error('Error populating database:', error);
    } finally {
        await client.end();
    }
}

module.exports = populateDB;