const fs = require('fs');
const { Client } = require('pg');



async function migrate() {
    const client = new Client({
        connectionString: process.env.DATABASE_URI,
        ssl: { rejectUnauthorized: false }
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
