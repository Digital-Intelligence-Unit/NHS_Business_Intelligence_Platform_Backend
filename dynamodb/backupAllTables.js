const AWS = require("../config/dynamodb").AWS;
const dynamodb = new AWS.DynamoDB();
const { Parser } = require("json2csv");
const fs = require("fs");

getAllTables(function (tables) {
    tables.forEach(async (tableName) => {
        const items = await getAllRecords(tableName);
        const csvData = prepareSpreadsheetData(items);
        const json2csvParser = new Parser();
        const csv = json2csvParser.parse(csvData);
        const filePath = `./dynamodb/backup_data/${tableName}.csv`;
        fs.writeFile(filePath, csv, (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log("Successfully written to " + filePath);
        });
    });
});

function getAllTables(callback) {
    dynamodb.listTables({}, function (err, data) {
        if (err) {
            console.log(err, err.stack);
        } else {
            if (data && data.TableNames && data.TableNames.length) {
                callback(data.TableNames);
            } else {
                console.log("Error: No tables found");
            }
        }
    });
}

async function getAllRecords(tableName) {
    const params = {
        TableName: tableName,
    };
    let items = [];
    let data = await dynamodb.scan(params).promise();
    items = [...items, ...data.Items];
    while (typeof data.LastEvaluatedKey != "undefined") {
        params.ExclusiveStartKey = data.LastEvaluatedKey;
        data = await dynamodb.scan(params).promise();
        items = [...items, ...data.Items];
    }
    return items;
}

function prepareSpreadsheetData(data) {
    const csvData = [];
    data.forEach((item) => {
        const row = {};
        Object.keys(item).forEach((key) => {
            Object.keys(item[key]).forEach((itemKey) => {
                row[key] = item[key][itemKey];
            });
        });
        csvData.push(row);
    });
    return csvData;
}
