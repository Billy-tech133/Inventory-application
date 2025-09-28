const {Pool} = require('pg')
const dotenv = require('dotenv');

const isProduction = process.env.NODE_ENV === "production";
const envFile = isProduction ? '.env.production' : '.env.development';
dotenv.config({path: envFile});

const pool = new Pool({
    connectionString: process.env.DATABASE_URI,

    // database: process.env.DATABASE_NAME,
    // user: process.env.DATABASE_USER,
    // password: process.env.DATABASE_PASSWORD,
    // host: process.env.DATABASE_HOST,
    // port: process.env.DATABASE_PORT,

    ssl: isProduction
     ? {rejectUnauthorized: false}
     : false    
})

module.exports = pool;