const AWS = require("./config/dynamodb").AWS;
const dynamodb = new AWS.DynamoDB();

const indexData = require("./indexes/dashboardinstalls.json");

const params = {
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
