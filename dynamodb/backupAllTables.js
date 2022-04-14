const AWS = require("../config/dynamodb").AWS;
var dynamodb = new AWS.DynamoDB();

const vpc = "dev"; // "prod";

dynamodb.listTables({}, function (err, data) {
  if (err) {
    console.log(err, err.stack);
  } else {
    if (data && data.length) {
      data.TableNames.forEach((tableName) => {
        if (tableName.indexOf(vpc) > -1) {
          console.log(`Backing up table: ${tableName}`);
          backupTable(tableName);
        }
      });
    } else {
      console.log("Error: No tables found");
    }
  }
});
