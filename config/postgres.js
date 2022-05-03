// @ts-check

const pg = require("pg");
const types = pg.types;
const Pool = pg.Pool;
const pgPool = new Pool({
    user: process.env.POSTGRES_UN,
    host: process.env.PGDATABASE || "localhost",
    database: "postgres",
    password: process.env.POSTGRES_PW,
    // @ts-ignore
    port: process.env.PGPORT || "5433",
});
console.log(process.env.POSTGRES_UN);
// @ts-ignore
types.setTypeParser(types.builtins.DATE, (stringValue) => {
    return new Date(stringValue);
});

module.exports.pool = pgPool;
