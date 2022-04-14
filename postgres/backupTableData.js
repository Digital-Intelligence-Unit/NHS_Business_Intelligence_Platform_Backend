const { Parser } = require("json2csv");
const fs = require("fs");

const pool = require("../config/postgres").pool;
pool.then((pool) => {
  //Set the tables to be backed up here
  const tableNames = ["virtual_ward_decision_20211129_new"];

  tableNames.forEach((tableName) => {
    selectAllFromTable(tableName, function (err, data) {
      if (data && data.length) {
        const json2csvParser = new Parser();
        const csv = json2csvParser.parse(data);
        let filePath = `./postgres/backup_data/${tableName}.csv`;
        fs.writeFile(filePath, csv, (err) => {
          if (err) {
            console.error(err);
            return;
          }
          //file written successfully
          console.log("Successfully written to " + filePath);
        });
      }
      return;
    });
  });

  function selectAllFromTable(tableName, callback) {
    const query = `SELECT * FROM ${tableName};`;
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
