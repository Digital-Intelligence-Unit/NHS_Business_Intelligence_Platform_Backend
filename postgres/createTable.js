const pool = require("../config/postgres").pool;

const { createQuery } = require("./tables/virtual_ward_decision_20211129_new");

pool.then(pool => {
  runQuery();
  
  function runQuery(){
    const query = createQuery;
    pool.query(query, (error, results) => {
      if (error) {
        console.log("Error: " + error);
      } else if (results && results.rows) {
        console.log("Table updared: " + error);
      } else {
        console.log("Table Updated - No rows returned", null);
      }
    });
  }
});