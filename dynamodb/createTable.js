const AWS = require("../config/dynamodb").AWS;
const dynamodb = new AWS.DynamoDB();

const tableData = require("./archived_tables/gppractices.json");

const params = {
    TableName: tableData.tablename,
    KeySchema: tableData.KeySchema,
    AttributeDefinitions: tableData.AttributeDefinitions,
    Tags: [
        {
            Key: "billing",
            Value: "diu",
        },
    ],
    BillingMode: "PAY_PER_REQUEST",
};

dynamodb.createTable(params, function (err, data) {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Created table: " + tableData.tablename);
    }
});
