import pg from "pg";
//const { Pool } = require("pg");

const databaseUrl = process.env.POSTGRES_CONNECTION_URL;

if (undefined === databaseUrl) {
  throw new Error(
    "This project requires a database url. Did you forget to create a .env file? Please ensure a .env file exists and that it contains a DATABASE_URL variable."
  );
}

const pool = new pg.Pool({
  connectionString: databaseUrl,
});

function query(text, params) {
  return pool.query(text, params);
}
export { query };

/* module.exports = {
  query: function (text, params) {
    return pool.query(text, params);
  },
}; */
