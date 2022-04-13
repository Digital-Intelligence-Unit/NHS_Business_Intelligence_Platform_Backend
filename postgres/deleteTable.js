const pool = require("../config/postgres").pool;

pool.then(pool => {
  //Set the table to be removed here
  const tableName = "virtual_ward_decision_20211129_new";

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
});