require("dotenv").config();
const AWSHelper = require("diu-data-functions").Helpers.Aws;
const pg = require("pg");
const types = pg.types;
const Pool = pg.Pool;

async function getEnvVariables() {
  try {
    const postgresCredentials = JSON.parse(
      await AWSHelper.getSecrets("postgres")
    );
    const awsCredentials = JSON.parse(await AWSHelper.getSecrets("awsdev"));
    process.env.POSTGRES_UN = postgresCredentials.username;
    process.env.POSTGRES_PW = postgresCredentials.password;
    process.env.AWS_SECRETID = awsCredentials.secretid;
    process.env.AWS_SECRETKEY = awsCredentials.secretkey;

    const pool = new Pool({
      user: process.env.POSTGRES_UN,
      host: process.env.PGDATABASE || "localhost",
      database: "postgres",
      password: process.env.POSTGRES_PW,
      port: process.env.PGPORT || "5433",
    });
    return pool;
  } catch (error) {
    console.error(error);
  }
}

module.exports.pool = getEnvVariables();
