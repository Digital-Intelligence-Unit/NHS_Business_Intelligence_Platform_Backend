const AWS = require("../config/dynamodb").AWS;
var dynamodb = new AWS.DynamoDB();

let tableData = require("./archived_tables/gppractices.json");

let params = {
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
