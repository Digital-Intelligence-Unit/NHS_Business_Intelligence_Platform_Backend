// @ts-check

const async = require("async");
const {
    getAllDynamoDBTables,
    saveDynamoDBTableDescription,
    selectAllFromDynamoDBTable,
    writeDynamoDBTableDataToFile,
} = require("./dynamodb/methods");
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
                            console.log("Finished backing up Postgres tables.");
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
        getAllDynamoDBTables(AWS, (err, result) => {
            if (err) console.log(err);
            if (result && result.TableNames && result.TableNames.length) {
                async.mapSeries(
                    result.TableNames,
                    (tableName, innerCallback) => {
                        saveDynamoDBTableDescription(AWS, tableName, (saveError) => {
                            if (saveError) {
                                console.log(saveError);
                            }
                        });
                        selectAllFromDynamoDBTable(AWS, tableName, (selectError, selectResult) => {
                            if (selectError) {
                                console.log(selectError);
                                innerCallback(selectError, null);
                            } else if (selectResult && selectResult.length) {
                                writeDynamoDBTableDataToFile(tableName, selectResult, (writeError) => {
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
                    (outerErr) => {
                        if (outerErr) console.log(outerErr);
                        else {
                            console.log("DynamoDB tables backed up successfully!");
                        }
                    }
                );
            }
        });

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
