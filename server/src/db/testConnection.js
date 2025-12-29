const pool = require('./index');

async function testDB() {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('Database connected at:', res.rows[0]);
    process.exit(0);
  } catch (err) {
    console.error('DB connection failed:', err);
    process.exit(1);
  }
}

testDB();
