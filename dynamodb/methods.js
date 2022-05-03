// @ts-check
const fs = require("fs");

module.exports.getAllDynamoDBTables = function (AWS, callback) {
    const dynamodb = new AWS.DynamoDB();
    dynamodb.listTables({}, callback);
};

module.exports.deleteDynamoDBTable = function (AWS, TableName, callback) {
    const dynamodb = new AWS.DynamoDB();
    dynamodb.deleteTable({ TableName }, callback);
};

module.exports.saveDynamoDBTableDescription = function (AWS, tablename, callback) {
    const dynamodb = new AWS.DynamoDB();
    dynamodb.describeTable({ TableName: tablename }, (err, result) => {
        if (err) {
            callback(err, null);
        } else if (result && result.Table) {
            const strObj = JSON.stringify(result.Table);
            const filePath = `./dynamodb/backup_schemas/${tablename}.json`;
            fs.writeFile(filePath, strObj, "utf8", callback);
        } else {
            callback(null, null);
        }
    });
};

module.exports.selectAllFromDynamoDBTable = function (AWS, tableName, callback) {
    getAll(AWS, tableName, callback, null, null);
};

function getAll(AWS, tablename, callback, nextMarker, previousResult) {
    const dynamodb = new AWS.DynamoDB();
    const params = {
        TableName: tablename,
    };
    if (nextMarker) {
        params.ExclusiveStartKey = nextMarker;
    }
    dynamodb.scan(params, (err, result) => {
        if (err) {
            callback(err, null);
        } else if (result && result.Items && result.Items.length) {
            if (result.LastEvaluatedKey) {
                if (!previousResult) previousResult = [];
                previousResult.push(...result.Items);
                getAll(AWS, tablename, callback, result.LastEvaluatedKey, previousResult);
            } else {
                if (previousResult) {
                    previousResult.push(...result.Items);
                    callback(null, previousResult);
                } else {
                    callback(null, result.Items);
                }
            }
        } else {
            callback(null, null);
        }
    });
}

module.exports.writeDynamoDBTableDataToFile = function (tableName, selectResult, callback) {
    const strObj = JSON.stringify(selectResult);
    const filePath = `./dynamodb/backup_data/${tableName}.json`;
    fs.writeFile(filePath, strObj, "utf8", callback);
};
