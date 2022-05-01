// @ts-check
const fs = require("fs");

module.exports.getAllSecrets = function (AWS, callback) {
    const sm = new AWS.SecretsManager();
    sm.listSecrets({}, (error, result) => {
        if (error) {
            callback(error, null);
        } else if (result && result.SecretList && result.SecretList.length) {
            callback(null, result.SecretList);
        } else {
            callback(null, null);
        }
    });
};

module.exports.writeSecretToFile = (AWS, secret, callback) => {
    const jsonObj = secret;
    const sm = new AWS.SecretsManager();
    sm.getSecretValue({ SecretId: secret.Name }, (err, data) => {
        if (err) {
            callback(err, null);
        } else {
            let secretObj = {};
            if ("SecretString" in data) {
                secretObj = JSON.parse(data.SecretString);
            } else {
                secretObj = JSON.parse(Buffer.from(data.SecretBinary, "base64").toString("ascii"));
            }
            jsonObj.Secret = secretObj;
            const strObj = JSON.stringify(jsonObj).split("\\n").join(" ");
            const filePath = `./secrets/backup_data/${secret.Name}.json`;
            fs.writeFile(filePath, strObj, "utf8", callback);
        }
    });
};
