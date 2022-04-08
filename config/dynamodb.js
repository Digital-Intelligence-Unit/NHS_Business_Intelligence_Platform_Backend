const dynamodb = process.env.DYNAMODB || "http://localhost:8000";
const region = process.env.AWSREGION || "eu-west-2";
// let access = process.env.AWSPROFILE || "default";
let access = process.env.AWSPROFILE || "dev";
// access = "DIU_ETL_Test_Data_Processing";
// access = "DIU_ETL_Prod_Data_Processing";

var AWS = (module.exports.AWS = require("aws-sdk"));
AWS.config.update({ region: region });
AWS.config.credentials = new AWS.SharedIniFileCredentials({ profile: access });
