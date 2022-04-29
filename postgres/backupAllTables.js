const { Parser } = require("json2csv");
const fs = require("fs");

const pool = require("../config/postgres").pool;
pool.then(() => {
    // Set the tables to be backed up here
    const getTablesQuery = `SELECT * FROM information_schema.tables
    WHERE table_schema = 'public'
    AND table_type = 'BASE TABLE'
    ORDER BY table_name ASC;`;

    const tableNames = [];

    selectAllTables(getTablesQuery, function (err, data) {
        if (err) {
            console.log(err);
        }
        if (data && data.length) {
            data.forEach((tableData) => {
                tableNames.push(tableData.table_name);
            });

            tableNames.forEach((tableName) => {
                selectAllFromTable(tableName, function (innerErr, innerData) {
                    if (innerErr) {
                        console.log(innerErr);
                    }
                    if (innerData && innerData.length) {
                        const json2csvParser = new Parser();
                        const csv = json2csvParser.parse(data);
                        const filePath = `./postgres/backup_data/${tableName}.csv`;
                        fs.writeFile(filePath, csv, (writeErr) => {
                            if (writeErr) {
                                console.error(writeErr);
                                return;
                            }
                            console.log("Successfully written to " + filePath);
                        });
                    }
                });
            });
        }
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

    function selectAllTables(query, callback) {
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
