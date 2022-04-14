const AWS = require("aws-sdk");
const { Parser } = require('json2csv');
const fs = require('fs')

const pool = require("../config/postgres").pool;
pool.then(pool => {
    //Set the tables to be backed up here
    let getTablesQuery = `SELECT * FROM information_schema.tables
    WHERE table_schema = 'public'
    AND table_type = 'BASE TABLE'
    ORDER BY table_name ASC;`;
    
    const tableNames = [];
    
    selectAllTables(getTablesQuery, function(err,data){
        if(data && data.length){
            data.forEach(tableData => {
                tableNames.push(tableData.table_name);
            });

            tableNames.forEach(tableName => {
                selectAllFromTable(tableName,function(err,data){
                    if(data && data.length){
                        const json2csvParser = new Parser();
                        const csv = json2csvParser.parse(data);
                        let filePath = `./postgres/backup_data/${tableName}.csv`;
                        fs.writeFile(filePath, csv, err => {
                            if (err) {
                            console.error(err);
                            return;
                            }
                            //file written successfully
                            console.log("Successfully written to " + filePath);
                        })
                    }
                    return;
                });
            });
            
            tableNames.forEach(tableName => {
                getTableSchemaData(tableName,function(err,data){
                    if(data && data.length){
                        let JSONSchemaData = {}
                        Object.keys(data).forEach(key => {
                            if(data[key]){
                                // console.log(data[key]);
                                JSONSchemaData[data[key]['column_name']] = data[key];
                            }
                        });
                        let filePath = `./postgres/generated_schema/${tableName}.json`;
                        let fileData = JSON.stringify(JSONSchemaData);
                        fs.writeFile(filePath, fileData, err => {
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
        }
    });

    function selectAllFromTable(tableName, callback){
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
    
    function selectAllTables(getTablesQuery, callback){
        pool.query(getTablesQuery, (error, results) => {
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
    
    function getTableSchemaData(tableName, callback){
        const query = `SELECT * FROM information_schema.columns WHERE table_name = '${tableName}';`;
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