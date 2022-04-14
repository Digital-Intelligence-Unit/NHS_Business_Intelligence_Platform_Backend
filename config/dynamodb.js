const dynamodb = process.env.DYNAMODB || "http://localhost:8000";
const region = process.env.AWSREGION || "eu-west-2";
let access = process.env.AWSPROFILE || "dev";

var AWS = (module.exports.AWS = require("aws-sdk"));
AWS.config.update({ region: region });
AWS.config.credentials = new AWS.SharedIniFileCredentials({ profile: access });
