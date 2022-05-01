// @ts-check

module.exports.getAllDynamoDBTables = function (AWS, callback) {
    const params = {
        TableName: "dynamodb-tables",
        ProjectionExpression: "table_name",
    };
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    dynamodb.scan(params, (error, result) => {
        if (error) {
            callback(error, null);
        } else if (result && result.Items && result.Items.length) {
            callback(null, result.Items);
        } else {
            callback(null, null);
        }
    });
};
