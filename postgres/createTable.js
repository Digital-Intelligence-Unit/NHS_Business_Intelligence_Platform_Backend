const pool = require("../config/postgres").pool;

const { createQuery } = require("./archived_tables/virtual_ward_decision_20201129");

pool.then(pool => {
  runQuery(function(err,data){
    if(data){
      console.log('data');
      console.log(data);
    }
    return;
  });
  
  function runQuery(callback){
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
});