require('dotenv').config(); // <--- this line must be at the top
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

module.exports = pool;
