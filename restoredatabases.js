// @ts-check
const fs = require("fs");
const async = require("async");
const { checkSchemaDataFileExists, restorePGTable } = require("./postgres/methods");
const { getAllDynamoDBTableDescriptionsAndCreateTables, restoreDataInDatabaseForTableFromSchema } = require("./dynamodb/methods");

module.exports.restoredatabases = async (pgPool, AWS) => {
    console.log("Beginning to restore databases...");
    try {
        // For Postgres:
        checkSchemaDataFileExists("schemas", (err, file) => {
            if (err) console.log(err);
            if (file) {
                fs.readFile(file, "utf8", (readError, data) => {
                    if (readError) console.log(readError);
                    if (data) {
                        const schemaData = JSON.parse(data);
                        async.mapSeries(
                            schemaData.schemas,
                            (schemaRow, innerCallback) => {
                                if (schemaRow.generate_create_table_statement) {
                                    restorePGTable(pgPool, schemaRow.generate_create_table_statement, (createError) => {
                                        if (createError) {
                                            console.log(createError);
                                            innerCallback(createError, null);
                                        } else {
                                            innerCallback(null, null);
                                        }
                                    });
                                } else {
                                    innerCallback(null, null);
                                }
                            },
                            (outerErr, outerResults) => {
                                if (outerErr) console.log(outerErr);
                                else {
                                    console.log("Finished restoring Postgres tables.");
                                }
                            }
                        );
                    }
                });
            } else {
                console.log("No schema data file found.");
            }
        });

        // For DynamoDB:
        getAllDynamoDBTableDescriptionsAndCreateTables(AWS, (err, schemas) => {
            if (err) console.log(err);
            else if (schemas && schemas.length) {
                async.mapSeries(
                    schemas,
                    (schema, innerCallback) => {
                        restoreDataInDatabaseForTableFromSchema(AWS, schema, (restoreError) => {
                            if (restoreError) {
                                console.log(restoreError);
                                innerCallback(restoreError, null);
                            } else {
                                innerCallback(null, null);
                            }
                        });
                    },
                    (outerErr, outerResults) => {
                        if (outerErr) console.log(outerErr);
                        else {
                            console.log("Finished restoring DynamoDB tables.");
                        }
                    }
                );
            } else {
                console.log("No DynamoDB tables found.");
            }
        });
    } catch (error) {
        console.log(error);
    }
};
