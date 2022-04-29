const AWS = require("../config/dynamodb").AWS;
const dynamodb = new AWS.DynamoDB();
const tablename = "gppractices"; // CHANGE ME

const params = {
    TableName: tablename,
};

dynamodb.deleteTable(params, function (err, data) {
    if (err) {
        console.error(
            "Unable to delete table. Error JSON:",
            JSON.stringify(err, null, 2)
        );
    } else {
        console.log(
            "Deleted table. Table description JSON:",
            JSON.stringify(data, null, 2)
        );
    }
});
