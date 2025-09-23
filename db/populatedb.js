const {Client} = require('pg');


export async function populateDB() {

    const client = new Client({
    connectionString: process.env.DATABASE_URI,
    ssl: { rejectUnauthorized: false }
    });

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
        ('Charlie Brown', 'Specializes in sustainable fashion.', 'Sustainable Fashion', 'charlie@example.com');
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
        INSERT INTO clothes (name, sku, brand_id, designer_id, price_range_id, size, color, material, season, images) VALUES
        ('Summer Dress', 'SKU12345', 1, 1, 2, 'M', 'Red', 'Cotton', 'Summer', 'https://example.com/dress1.png'),
        ('Leather Jacket', 'SKU67890', 2, 2, 3, 'L', 'Black', 'Leather', 'Winter', 'https://example.com/jacket1.png'),
        ('Casual T-Shirt', 'SKU54321', 3, 3, 1, 'S', 'White', 'Polyester', 'All Seasons', 'https://example.com/tshirt1.png');
        `);     
        await client.query(`
        INSERT INTO inventory (clothes_id, quantity, location, last_restocked) VALUES
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
