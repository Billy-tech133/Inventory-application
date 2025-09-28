const {Pool} = require('pg')
const dotenv = require('dotenv');

const isProduction = process.env.NODE_ENV === "production";
const envFile = isProduction ? '.env.production' : '.env.development';
dotenv.config({path: envFile});


const dbConfig = isProduction ? { 
    connectionString: process.env.DATABASE_URI,
    ssl: { rejectUnauthorized: false }
} : {
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
};

const pool = new Pool(dbConfig);


module.exports = {pool, dbConfig};