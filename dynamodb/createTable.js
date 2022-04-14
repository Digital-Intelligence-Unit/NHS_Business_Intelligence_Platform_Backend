const AWS = require("../config/dynamodb").AWS;
var dynamodb = new AWS.DynamoDB();

const vpc = "dev"; // "prod";
const billing = "PAY_PER_REQUEST";
const throughput = {
  ReadCapacityUnits: 5,
  WriteCapacityUnits: 5,
};

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
};

if (vpc === "prod") {
  params["ProvisionedThroughput"] = throughput;
} else {
  params["BillingMode"] = billing;
}

dynamodb.createTable(params, function (err, data) {
  if (err) {
    console.error(
      "Unable to create table. Error JSON:",
      JSON.stringify(err, null, 2)
    );
  } else {
    console.log("Created table: " + tableData.tablename);
  }
});
