// @ts-check
const fs = require("fs");
const AWS = (module.exports.AWS = require("aws-sdk"));
const async = require("async");

AWS.config.update({ region: process.env.AWSREGION || "eu-west-2" });
AWS.config.credentials = new AWS.SharedIniFileCredentials({ profile: process.env.AWSPROFILE || "default" });
const dynamodb = new AWS.DynamoDB();

(async () => {
    require("dotenv").config();
    try {
        console.log("Starting migration process...");
        console.log("This will repair the tables from their _new temporary tables:");

        const tablesToUpdate = [
            // "cohorts",
            "pointsofinterests",
            "systemalerts",
            "teammembers",
            "teamrequests",
            "teams",
            "userprofiles",
        ];
        console.log(tablesToUpdate.join(", "));

        tablesToUpdate.forEach(async (tableName) => {
            console.log(`Migrating table ${tableName + "_new"}...`);
            getTableDescription(tableName + "_new", (err, tableDescription) => {
                if (err) {
                    console.log(`Error getting table description for ${tableName + "_new"}: ${err}`);
                } else {
                    const newTableDescription = transformTableDescription(tableDescription);
                    const filePath = `./dynamodb/backup_data/${tableName}.json`;
                    const newTableData = fs.readFileSync(filePath, "utf-8");
                    dynamodb.createTable(newTableDescription, (errCreate, resCreate) => {
                        if (errCreate) {
                            console.log(`Error creating table ${tableName}: ${errCreate}`);
                        } else {
                            console.log(`Created table ${tableName}`);
                            const jsonData = JSON.parse(newTableData);
                            if (jsonData.length > 0) {
                                console.log("Waiting for table creation (20 seconds)...");
                                console.log(jsonData);
                                setTimeout(() => {
                                    addDataToTable(jsonData, tableName, (errAdd, resAdd) => {
                                        if (errAdd) {
                                            console.log(`Error adding data to table ${tableName}: ${errAdd}`);
                                        } else {
                                            console.log(`Added data to table ${tableName}`);
                                            dynamodb.deleteTable({ TableName: tableName + "_new" }, (errDelete, resDelete) => {
                                                if (errDelete) {
                                                    console.log(`Error deleting table ${tableName + "_new"}: ${errDelete}`);
                                                } else {
                                                    console.log(`Deleted table ${tableName + "_new"}`);
                                                }
                                            });
                                        }
                                    });
                                }, 20000);
                            }
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
    const params = {
        TableName: tableDescription.TableName.replace("_new", ""),
        KeySchema: tableDescription.KeySchema,
        AttributeDefinitions: tableDescription.AttributeDefinitions,
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
