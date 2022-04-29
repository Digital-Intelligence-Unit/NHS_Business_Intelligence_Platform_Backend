const fs = require("fs");

const pool = require("../config/postgres").pool;
pool.then(() => {
    const getTablesQuery = `SELECT * FROM information_schema.tables
      WHERE table_schema = 'public'
      AND table_type = 'BASE TABLE'
      ORDER BY table_name ASC;`;

    const tableNames = [];

    selectAllTables(getTablesQuery, (err, data) => {
        if (err) {
            console.log(err);
        }
        if (data && data.length) {
            data.forEach((tableData) => {
                tableNames.push(tableData.table_name);
            });
        }

        tableNames.forEach((tableName) => {
            getTableSchemaData(tableName, (errSchema, dataSchema) => {
                if (errSchema) {
                    console.log(errSchema);
                }
                if (dataSchema && dataSchema.length) {
                    const JSONSchemaData = {};
                    Object.keys(dataSchema).forEach((key) => {
                        if (dataSchema[key]) {
                            JSONSchemaData[dataSchema[key]["column_name"]] = dataSchema[key];
                        }
                    });
                    const filePath = `./postgres/generated_schema/${tableName}.json`;
                    const fileData = JSON.stringify(JSONSchemaData);
                    fs.writeFile(filePath, fileData, (errWrite) => {
                        if (errWrite) {
                            console.error(errWrite);
                            return;
                        }
                        console.log("Successfully written to " + filePath);
                    });
                }
            });
        });
    });

    function getTableSchemaData(tableName, callback) {
        const query = `SELECT * FROM information_schema.columns WHERE table_name = '${tableName}';`;
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
