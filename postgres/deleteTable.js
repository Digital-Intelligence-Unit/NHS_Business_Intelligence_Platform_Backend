const pool = require("../config/postgres").pool;

pool.then(() => {
    // Set the table to be removed here
    const tableName = "virtual_ward_decision_20211129_new";

    DeleteTableQuery((err, data) => {
        if (err) {
            console.log(err);
        }
        if (data && data.length === 0) {
            console.log(tableName + " successfully deleted");
        }
    });

    function DeleteTableQuery(callback) {
        const query = `DROP TABLE IF EXISTS ${tableName};`;
        pool.query(query, (error, results) => {
            if (error) {
                console.log("Error: " + error);
                callback(error, null);
            } else if (results && results.rows) {
                callback(null, results.rows);
            } else {
                const res = "No rows returned";
                callback(res, null);
            }
        });
    }
});
