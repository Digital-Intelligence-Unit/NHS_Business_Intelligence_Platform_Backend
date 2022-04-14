const AWS = require("../config/dynamodb").AWS;
var dynamodb = new AWS.DynamoDB();
var docClient = new AWS.DynamoDB.DocumentClient();
const fs = require("fs");
const parser = require("csv-parser");
const tableName = "suicidepreventionindex"; // CHANGE ME

dynamodb.describeTable({ TableName: tableName }, function (err, data) {
  if (err) {
    console.error(
      "Unable to describe table. Error JSON:",
      JSON.stringify(err, null, 2)
    );
  } else {
    // console.log("Table description:", JSON.stringify(data, null, 2));
    updateDynamoDBRecords(data.Table);
  }
});

function updateDynamoDBRecords(schema) {
  const filePath = `./postgres/backup_data/${schema.TableName}.csv`;
  var csvData = [];
  let keySchema = getKeySchema(schema);
  //Read the csv file containing the table data
  fs.createReadStream(filePath)
    .pipe(parser())
    .on("data", function (data) {
      try {
        // Push the data to an array to be processed.
        csvData.push(data);
      } catch (err) {
        //error handler
        if (err) {
          console.log("Error: " + err);
        }
      }
    })
    .on("end", function () {
      if (csvData && csvData.length) {
        let counter = 0;
        csvData.forEach((row) => {
          if (counter < 10) {
            let params = prepareParams(row, keySchema, schema.TableName);
            updateRecord(params);
          }
          counter++;
        });
      }
    });
}

function prepareParams(row, keySchema, tableName) {
  Object.keys(keySchema).forEach((key) => {
    keySchema[key] = row[key];
  });
  var params = {
    TableName: tableName,
    Key: keySchema,
    UpdateExpression: updateExpression(row, keySchema),
    ExpressionAttributeValues: expressionAttributeValues(row, keySchema),
    ExpressionAttributeNames: expressionAttributeNames(row, keySchema),
    ReturnValues: "UPDATED_NEW",
  };
  return params;
}

function updateExpression(row, keySchema) {
  let query = "SET";
  let data = Object.keys(row);
  data.forEach((val) => {
    if (keySchema[val] == undefined) {
      query += " #" + val + " = :" + val + ",";
    }
  });
  query = query.slice(0, -1);
  return query;
}

function expressionAttributeValues(row, keySchema) {
  let exp = {};
  let data = Object.keys(row);
  data.forEach((val) => {
    if (keySchema[val] == undefined) {
      exp[":" + val] = getValueFromObject(row[val]);
    }
  });
  return exp;
}

function expressionAttributeNames(row, keySchema) {
  let exp = {};
  let data = Object.keys(row);
  data.forEach((val) => {
    if (keySchema[val] == undefined) {
      exp["#" + val] = val;
    }
  });
  return exp;
}

function getValueFromObject(data) {
  if (data == undefined) {
    data = null;
  }
  return data;
}

function updateRecord(params) {
  console.log(params);
  docClient.update(params, function (err, data) {
    if (err) {
      console.error(
        "Unable to update item. Error JSON:",
        JSON.stringify(err, null, 2)
      );
    } else {
      console.log("Item updated", params.Key);
    }
  });
}

function getKeySchema(schema) {
  let keySchema = {};
  if (schema.KeySchema && schema.KeySchema.length) {
    schema.KeySchema.forEach((key) => {
      keySchema[key.AttributeName] = "";
    });
  }
  return keySchema;
}
