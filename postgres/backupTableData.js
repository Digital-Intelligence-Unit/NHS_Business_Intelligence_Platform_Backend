// @ts-check
const AWS = require("aws-sdk");
const { Parser } = require('json2csv');
const fs = require('fs')

const pool = require("../config/postgres").pool;
pool.then(pool => {
    //Set the tables to be backed up here
    const tableNames = [
        "lancs_schools",
        "lookup_oa_lsoa_msoa_la",
        "lsoa_shapes",
        "pbi_geographies",
        "pcn_hex_geo",
        "pcn_shapes",
        "pharmacy",
        "places",
        "trusts",
        "wards",
    ];

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
});