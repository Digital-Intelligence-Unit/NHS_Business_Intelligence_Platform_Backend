// @ts-check
const AWS = require("aws-sdk");
const { createQuery } = require("./archived_tables/virtual_ward_decision_20201129");


runQuery(function(err,data){
  if(data){
    console.log('data');
    console.log(data);
  }
  return;
});

function runQuery(callback){
  const pool = require("../config/postgres").pool;
  const query = createQuery;
  console.log(query);
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