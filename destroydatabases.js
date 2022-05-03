// @ts-check

const async = require("async");
const { getAllDynamoDBTables, deleteDynamoDBTable } = require("./dynamodb/methods");
const { pgExcludeList } = require("./postgres/exclusions");
const { getAllPGTables, deletePGTable } = require("./postgres/methods");

module.exports.destroydatabases = async (pgPool, AWS) => {
    console.log("Beginning to destroy databases...");
    try {
        // For Postgres:
        getAllPGTables(pgPool, (err, result) => {
            if (err) console.log(err);
            if (result && result.length) {
                const tablelist = result.filter((x) => !pgExcludeList.includes(x.table_name));
                async.mapSeries(
                    tablelist,
                    (tableRow, innerCallback) => {
                        deletePGTable(pgPool, tableRow.table_name, (deleteError) => {
                            if (deleteError) {
                                console.log(deleteError);
                                innerCallback(deleteError, null);
                            } else {
                                innerCallback(null, null);
                            }
                        });
                    },
                    (outerErr, outerResults) => {
                        if (outerErr) console.log(outerErr);
                        else {
                            console.log("Finished destroying Postgres tables.");
                        }
                    }
                );
            }
        });

        // For DynamoDB:
        getAllDynamoDBTables(AWS, (err, result) => {
            if (err) console.log(err);
            if (result && result.TableNames && result.TableNames.length) {
                async.mapSeries(
                    result.TableNames,
                    (tableRow, innerCallback) => {
                        deleteDynamoDBTable(AWS, tableRow.TableName, (deleteError) => {
                            if (deleteError) {
                                console.log(deleteError);
                                innerCallback(deleteError, null);
                            } else {
                                innerCallback(null, null);
                            }
                        });
                    },
                    (outerErr, outerResults) => {
                        if (outerErr) console.log(outerErr);
                        else {
                            console.log("Finished destroying DynamoDB tables.");
                        }
                    }
                );
            }
        });
    } catch (error) {
        console.log(error);
    }
};
