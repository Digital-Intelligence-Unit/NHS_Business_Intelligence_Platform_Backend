const { Parser } = require("json2csv");
const fs = require("fs");

const pool = require("../config/postgres").pool;
pool.then(() => {
    // Set the tables to be backed up here
    const tableNames = ["virtual_ward_decision_20211129_new"];

    tableNames.forEach((tableName) => {
        selectAllFromTable(tableName, (err, data) => {
            if (err) {
                console.log(err);
            }
            if (data && data.length) {
                const json2csvParser = new Parser();
                const csv = json2csvParser.parse(data);
                const filePath = `./postgres/backup_data/${tableName}.csv`;
                fs.writeFile(filePath, csv, (writeErr) => {
                    if (writeErr) {
                        console.error(writeErr);
                        return;
                    }
                    // file written successfully
                    console.log("Successfully written to " + filePath);
                });
            }
        });
    });

    function selectAllFromTable(tableName, callback) {
        const query = `SELECT * FROM ${tableName};`;
        pool.query(query, (error, results) => {
            if (error) {
                console.log("Error: " + error);
                callback(error, null);
            } else if (results && results.rows) {
                callback(null, results.rows);
            } else {
                const errRes = "No rows returned";
                callback(errRes, null);
            }
        });
    }
});
