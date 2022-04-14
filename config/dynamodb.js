const AWS = (module.exports.AWS = require("aws-sdk"));
AWS.config.update({ region: process.env.AWSREGION || "eu-west-2" });
AWS.config.credentials = new AWS.SharedIniFileCredentials({ profile: process.env.AWSPROFILE || "dev" });
