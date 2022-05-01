// @ts-check

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

        const action = process.env.PROCESSTOSTART || "undefined";
        switch (action) {
            case "offlinebackup":
                offlinebackup();
                break;
            case "restoredatabases":
                restoredatabases();
                break;
            case "destroydatabases":
                destroydatabases();
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
