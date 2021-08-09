// https://node-postgres.com/ (Pool)
const Pool = require("pg").Pool;
const USER_DB = process.env.USER_DB;
const PASSWORD_DB = process.env.PASSWORD_DB;
const HOST_DB = process.env.HOST_DB;
const PORT_DB = process.env.PORT_DB;
const DATABASE_DB = process.env.DATABASE_DB;

const pool = new Pool({
    user: USER_DB,
    password: PASSWORD_DB,
    host: HOST_DB,
    port: PORT_DB,
    database: DATABASE_DB,
});

module.exports = pool;