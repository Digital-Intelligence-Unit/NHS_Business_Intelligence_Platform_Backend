// @ts-check

const pg = require("pg");
const AWS = (module.exports.AWS = require("aws-sdk"));
const { destroydatabases } = require("./destroydatabases");
const { offlinebackup } = require("./offlinebackup");
const { restoredatabases } = require("./restoredatabases");

(async () => {
    require("dotenv").config();
    const AWSMethods = require("diu-data-functions").Helpers.Aws;
    try {
        console.log("Obtaining cloud information...");
        const postgresCredentials = JSON.parse(await AWSMethods.getSecrets("postgres"));
        const jwtCredentials = JSON.parse(await AWSMethods.getSecrets("jwt"));
        const awsCredentials = JSON.parse(await AWSMethods.getSecrets("awsdev"));
        process.env.POSTGRES_UN = postgresCredentials.username;
        process.env.POSTGRES_PW = postgresCredentials.password;
        process.env.JWT_SECRET = jwtCredentials.secret;
        process.env.JWT_SECRETKEY = jwtCredentials.secretkey;
        process.env.AWS_SECRETID = awsCredentials.secretid;
        process.env.AWS_SECRETKEY = awsCredentials.secretkey;
        console.log("Retrieved cloud information.");

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
        // @ts-ignore
        types.setTypeParser(types.builtins.DATE, (stringValue) => {
            return new Date(stringValue);
        });

        AWS.config.update({ region: process.env.AWSREGION || "eu-west-2" });
        AWS.config.credentials = new AWS.SharedIniFileCredentials({ profile: process.env.AWSPROFILE || "default" });

        const action = process.env.PROCESSTOSTART || "undefined";
        switch (action) {
            case "offlinebackup":
                offlinebackup(pgPool, AWS);
                break;
            case "restoredatabases":
                restoredatabases(pgPool, AWS);
                break;
            case "destroydatabases":
                destroydatabases(pgPool, AWS);
                break;
            case "undefined":
            default:
                console.log("No process specified.");
                break;
        }
    } catch (error) {
        console.error(error);
    }
})();
