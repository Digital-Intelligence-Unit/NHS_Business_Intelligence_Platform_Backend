// @ts-check
const AWS = require("aws-sdk");
var credentials = new AWS.SharedIniFileCredentials({profile: 'dev'});
AWS.config.update({
    region: "eu-west-2",
    // @ts-ignore
    endpoint: "https://dynamodb.eu-west-2.amazonaws.com"
});
AWS.config.credentials = credentials;
const pool = require("../config/postgres").pool;

//Set the table to be removed here
const tableName = "virtual_ward_decision_20201129";

DeleteTableQuery(function(err,data){
    if(data && data.length == 0){
      console.log(tableName + ' successfully deleted');
    }
    return;
});

function DeleteTableQuery(callback){
  const query = `DROP TABLE IF EXISTS ${tableName};`;
  pool.query(query, (error, results) => {
    if (error) {
      console.log("Error: " + error);
      callback("Error:" + error, null);
    } else if (results && results.rows) {
      callback(null, results.rows);
    } else {
      callback("No rows returned", null);
    }
  });
}