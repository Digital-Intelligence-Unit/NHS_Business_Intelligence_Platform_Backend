const AWS = require("./config/dynamodb").AWS;
var dynamodb = new AWS.DynamoDB();

let indexData = require("./indexes/dashboardinstalls.json");

let params = {
  TableName: indexData.TableName,
  AttributeDefinitions: indexData.AttributeDefinitions,
  GlobalSecondaryIndexUpdates: indexData.GlobalSecondaryIndexUpdates,
};

dynamodb.updateTable(params, function (err, data) {
  if (err) {
    console.error("Unable to add index. Error JSON:", JSON.stringify(err, null, 2));
  } else {
    console.log("Added index: " + indexData.GlobalSecondaryIndexUpdates[0].Create.IndexName);
  }
});
