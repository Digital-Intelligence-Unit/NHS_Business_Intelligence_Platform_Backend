// @ts-check

const AWS = require("../config/dynamodb").AWS;
var dynamodb = new AWS.DynamoDB();

const vpc = "dev"; // "prod";
const throughput = {
  ReadCapacityUnits: 2,
  WriteCapacityUnits: 2,
};

let indexData = require("./indexes/dashboardinstalls.json");

let params = {
  TableName: indexData.TableName,
  AttributeDefinitions: indexData.AttributeDefinitions,
  GlobalSecondaryIndexUpdates: indexData.GlobalSecondaryIndexUpdates,
};

// @ts-ignore
if (vpc === "prod") {
  // @ts-ignore
  params.GlobalSecondaryIndexUpdates[0].Create.ProvisionedThroughput = {
    ReadCapacityUnits: throughput.ReadCapacityUnits,
    WriteCapacityUnits: throughput.WriteCapacityUnits,
  };
}

dynamodb.updateTable(params, function (err, data) {
  if (err) {
    console.error("Unable to add index. Error JSON:", JSON.stringify(err, null, 2));
  } else {
    console.log("Added index: " + indexData.GlobalSecondaryIndexUpdates[0].Create.IndexName);
  }
});
