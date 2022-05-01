// @ts-check

// TODO: process and methods for removing cloud data stores

module.exports.destroydatabases = async () => {
    console.log("Beginning to destroy databases...");
    try {
        // For Postgres:
        // 1. Drop all tables in the database
        // For DynamoDB:
        // 1. Drop all tables in the database
    } catch (error) {
        console.log(error);
    }
};
