// @ts-check

const async = require("async");
const {
    getAllPGTables,
    selectAllFromTable,
    writeTableDataToFile,
    generateCreateTableSchemas,
    writeSchemaDataToFile,
} = require("./postgres/methods");
const { getAllSecrets, writeSecretToFile } = require("./secrets/methods");

// TABLES too big to backup, where the data is also available publicly or from other sources
const pgExcludeList = ["clinical_trials", "clinically_vulnerable", "covid_populations"];

module.exports.offlinebackup = async (pgPool, AWS) => {
    console.log("Beginning to backup databases...");
    try {
        // For Postgres:
        getAllPGTables(pgPool, (err, result) => {
            if (err) console.log(err);
            if (result && result.length) {
                const tablelist = result.filter((x) => !pgExcludeList.includes(x.table_name));
                async.mapSeries(
                    tablelist,
                    (tableRow, innerCallback) => {
                        selectAllFromTable(pgPool, tableRow.table_name, (selectError, selectResult) => {
                            if (selectError) {
                                console.log(selectError);
                                innerCallback(selectError, null);
                            } else if (selectResult && selectResult.length) {
                                writeTableDataToFile(tableRow.table_name, selectResult, (writeError) => {
                                    if (writeError) {
                                        console.log(writeError);
                                        innerCallback(writeError, null);
                                    } else {
                                        innerCallback(null, null);
                                    }
                                });
                            } else {
                                innerCallback(null, null);
                            }
                        });
                    },
                    (outerErr, outerResults) => {
                        if (outerErr) console.log(outerErr);
                        else {
                            console.log(outerResults);
                        }
                    }
                );
            }
        });

        generateCreateTableSchemas(pgPool, (err, result) => {
            if (err) console.log(err);
            else if (result && result.length) {
                writeSchemaDataToFile("schemas", result, (writeError) => {
                    if (writeError) {
                        console.log(writeError);
                    } else {
                        console.log("Postgresql schemas backed up successfully!");
                    }
                });
            } else {
                console.log("No table schemas returned");
            }
        });

        // For DynamoDB (AWS):
        // 1. Scan for all tables in the database
        // 2. For each table, retrieve data from the table and store in a csv file
        // 3. Store the table schemas in a json file

        // For AWS Secrets:
        getAllSecrets(AWS, (err, result) => {
            if (err) console.log(err);
            else if (result && result.length) {
                result.forEach((secretlistitem) => {
                    writeSecretToFile(AWS, secretlistitem, (writeError) => {
                        if (writeError) {
                            console.log(writeError);
                        }
                    });
                });
            } else {
                console.log("No secrets returned");
            }
        });
    } catch (error) {
        console.log(error);
    }
};
