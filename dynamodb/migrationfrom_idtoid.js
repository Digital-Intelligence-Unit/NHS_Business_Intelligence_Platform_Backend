// @ts-check
const { selectAllFromDynamoDBTable, writeDynamoDBTableDataToFile } = require("./methods");
const AWS = (module.exports.AWS = require("aws-sdk"));
const async = require("async");

AWS.config.update({ region: process.env.AWSREGION || "eu-west-2" });
AWS.config.credentials = new AWS.SharedIniFileCredentials({ profile: process.env.AWSPROFILE || "default" });
const dynamodb = new AWS.DynamoDB();

(async () => {
    require("dotenv").config();
    try {
        console.log("Starting migration process...");
        console.log("This will replace the partition key _id with id for the following tables:");

        const tablesToUpdate = [
            // "cohorts",
            "pointsofinterests",
            // "systemalerts",
            // "teammembers",
            // "teamrequests",
            // "teams",
            // "userprofiles",
        ];
        console.log(tablesToUpdate.join(", "));

        tablesToUpdate.forEach(async (tableName) => {
            console.log(`Migrating table ${tableName}...`);
            getTableDescription(tableName, (err, tableDescription) => {
                if (err) {
                    console.log(`Error getting table description for ${tableName}: ${err}`);
                } else {
                    const newTableDescription = transformTableDescription(tableDescription);
                    selectAllFromDynamoDBTable(AWS, tableName, (errData, resData) => {
                        if (errData) {
                            console.log(`Error getting table data for ${tableName}: ${errData}`);
                        } else {
                            let newTableData = [];
                            if (resData && resData.length > 0) {
                                newTableData = resData.map((item) => {
                                    const newItem = { ...item };
                                    delete newItem["_id"];
                                    newItem.id = item["_id"];
                                    return newItem;
                                });
                                // backup table data
                                writeDynamoDBTableDataToFile(tableName, newTableData, () => {});
                            }
                            console.log(`New table data for ${tableName}: ${JSON.stringify(newTableData)}`);
                            dynamodb.deleteTable({ TableName: tableName }, (errDelete, resDelete) => {
                                if (errDelete) {
                                    console.log(`Error deleting table ${tableName}: ${errDelete}`);
                                } else {
                                    console.log(`Deleted table ${tableName}`);
                                    dynamodb.createTable(newTableDescription, (errCreate, resCreate) => {
                                        if (errCreate) {
                                            console.log(`Error creating table ${tableName + "_new"}: ${errCreate}`);
                                        } else {
                                            console.log(`Created table ${tableName + "_new"}`);
                                            if (newTableData.length > 0) {
                                                console.log("Waiting for table creation (15 seconds)...");
                                                setTimeout(() => {
                                                    addDataToTable(newTableData, tableName + "_new", (errAdd, resAdd) => {
                                                        if (errAdd) {
                                                            console.log(`Error adding data to table ${tableName + "_new"}: ${errAdd}`);
                                                        } else {
                                                            console.log(`Added data to table ${tableName + "_new"}`);
                                                        }
                                                    });
                                                }, 15000);
                                            }
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        });
    } catch (error) {
        console.error(error);
    }
})();

function getTableDescription(TableName, callback) {
    dynamodb.describeTable({ TableName }, (err, result) => {
        if (err) {
            callback(err, null);
        } else if (result && result.Table) {
            callback(null, result.Table);
        } else {
            callback(null, null);
        }
    });
}

const transformTableDescription = function (tableDescription) {
    console.log(tableDescription);
    const newAttributeDefinitions = tableDescription.AttributeDefinitions.map((attributeDefinition) => {
        if (attributeDefinition.AttributeName === "_id") {
            attributeDefinition.AttributeName = "id";
        }
        return attributeDefinition;
    });
    const newKeySchema = tableDescription.KeySchema.map((keySchema) => {
        if (keySchema.AttributeName === "_id") {
            keySchema.AttributeName = "id";
        }
        return keySchema;
    });
    const params = {
        TableName: tableDescription.TableName + "_new",
        KeySchema: newKeySchema,
        AttributeDefinitions: newAttributeDefinitions,
        BillingMode: "PAY_PER_REQUEST",
        Tags: [
            {
                Key: "billing",
                Value: "diu",
            },
        ],
    };
    if (tableDescription.GlobalSecondaryIndexes) {
        params.GlobalSecondaryIndexes = transformGSI(tableDescription.GlobalSecondaryIndexes);
    }
    return params;
};

const transformGSI = function (gsi) {
    const output = [];
    if (gsi) {
        gsi.forEach((gsiItem) => {
            const newGSI = {
                IndexName: gsiItem.IndexName,
                KeySchema: gsiItem.KeySchema,
                Projection: gsiItem.Projection,
            };
            output.push(newGSI);
        });
        return output;
    } else return null;
};

const addDataToTable = function (tabledata, TableName, callback) {
    async.mapSeries(
        tabledata,
        (row, innerCallback) => {
            const params = prepareParams(row, TableName);
            updateRecord(params, innerCallback);
        },
        (errOuter, results) => {
            if (errOuter) {
                callback(errOuter, null);
            } else callback(null, results);
        }
    );
};

function prepareParams(row, tableName) {
    const params = {
        TableName: tableName,
        Item: row,
    };
    return params;
}

function updateRecord(params, callback) {
    dynamodb.putItem(params, callback);
}
