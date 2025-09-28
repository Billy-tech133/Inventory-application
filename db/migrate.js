const fs = require('fs');
const { Client } = require('pg');
const dotenv = require('dotenv')
dotenv.config({path: process.env.NODE_ENV === "production" ? '.env.production' : '.env.development'});  



async function migrate() {
    const client = new Client({
        connectionString: process.env.DATABASE_URI,
        ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
    });

    const sql = fs.readFileSync('createddb.sql', 'utf-8');
    const statements = sql.split(';').map(s => s.trim()).filter(s => s.length);

    try {
        await client.connect();
        for (const statement of statements) {
            await client.query(statement);
        }
        console.log('Database migrated successfully.');
    } catch (error) {
        console.error('Error during migration:', error);
    } finally {
        await client.end();
    }
}

migrate();
