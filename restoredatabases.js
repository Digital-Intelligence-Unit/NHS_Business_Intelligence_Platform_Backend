// @ts-check

// TODO: process and methods for restoring databases from local filesystem

module.exports.restoredatabases = async (pgPool, AWS) => {
    console.log("Beginning to restore databases...");
    try {
        // For Postgres:
        // 1. Scan local file storage
        // 2. For each table, create tbe table in the database if it doesn't exist
        // 3. For each table, insert data into the table
        // For DynamoDB:
        // 1. Scan local file storage
        // 2. For each table, create tbe table in the database if it doesn't exist
        // 3. For each table, insert data into the table
        // 4. For each table, create the global secondary indexes
    } catch (error) {
        console.log(error);
    }
};
