// @ts-check

// TODO: process and methods for offline backup to local filesystem

module.exports.offlinebackup = async () => {
    console.log("Beginning to backup databases...");
    try {
        // For Postgres:
        // 1. Scan for all tables in the database
        // 2. For each table, retrieve data from the table and store in a csv file
        // For DynamoDB:
        // 1. Scan for all tables in the database
        // 2. For each table, retrieve data from the table and store in a csv file
    } catch (error) {
        console.log(error);
    }
};
