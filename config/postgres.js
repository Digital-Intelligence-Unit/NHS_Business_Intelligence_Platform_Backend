// @ts-check

const region = process.env.AWSREGION || "eu-west-2";
const access = process.env.AWSPROFILE || "Dev";
const pgdb = process.env.PGDATABASE || "localhost"; // "gis.cndp95xqun2f.eu-west-2.rds.amazonaws.com";
const pgport = process.env.PGPORT || "5433"; // "5432";
const credentials = require("../_credentials/credentials");

var AWS = require("aws-sdk");
AWS.config.region = region;
var creds = new AWS.Credentials({
  accessKeyId: process.env.AWS_SECRETID,
  secretAccessKey: process.env.AWS_SECRETKEY,
});
AWS.config.credentials = creds;

module.exports.settings = {
  awsregion: region,
  awsenvironment: access,
  accessKeyId: process.env.AWS_SECRETID,
  secretAccessKey: process.env.AWS_SECRETKEY,
  AWS: AWS,
  pgdatabase: pgdb,
  pgport: pgport,
  postgres_un: process.env.POSTGRES_UN,
  postgres_pw: process.env.POSTGRES_PW,
  AWS_BUCKET_NAME: "diu-nexus-poct-covid-" + access.toLowerCase(),
};

const config = this.settings;
const pg = require("pg");
const types = pg.types;
const Pool = pg.Pool;
const pool = new Pool({
  user: config.postgres_un,
  host: config.pgdatabase,
  database: "postgres",
  password: config.postgres_pw,
  // @ts-ignore
  port: config.pgport,
});
// @ts-ignore
types.setTypeParser(types.builtins.DATE, (stringValue) => {
  return new Date(stringValue);
});

module.exports.pool = pool;
module.exports.types = types;
module.exports.AWS = AWS;
