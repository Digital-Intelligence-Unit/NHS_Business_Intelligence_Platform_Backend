# NHS BI Platform Backend Scripts

Included in this repository is code for managing the backend of the NHS BI Platform.

For recommended database deployments please review the code in: <https://github.com/morgans3/NHS_Business_Intelligence_Platform>

## Pre-requisites

- An AWS Account, with an IAM with required permissions to use the AWS SDK
- Locally stored AWS Credentials which grant programmatic access, created in AWS IAM
- AWS Secrets Manager to include the following secrets: postgres
- Node.js v10.13.0 or later installed

## Usage

This package has multiple scripts that can be run using the commands listed below.

Baring in mind that we have to run a different terminal window to connect to our basiton server and also update environment variables in AWS secrets manager before these scripts will work correctly, there is extra work to do in the background before you can just pick up this script and run with it. You can find all of the documentation for how to set up AWS secrets manager [here](https://docs.aws.amazon.com/secretsmanager/index.html). If you also require a bastion server you can find information about this [here](https://aws.amazon.com/quickstart/architecture/linux-bastion/).

`create-table` - This will create a dynamoDB table matching the parameters of a prepared file. This will run the script located at `/dynamodb/createTable.js`. If you are creating a new table you can follow the example JSON files available in `/dynamodb/tables`, edit them accordingly and save under a new name. You will need to change the file path provided on line 11 of the file `let tableData = require("{path-to-file}");`. Once you have done this, you can run the command `npm run create-table` in the root of the folder in your terminal/ command line.

`create-index` - This will create an index for a dynamoDB table matching the parameters of a prepared file. This will run the script located at `/dynamodb/createIndex.js`. If you are creating a new index you can follow the example JSON files available in `/dynamodb/indexes`, edit them accordingly and save under a new name. You will need to change the file path provided on line 11 of the file `let indexData = require("{path-to-file}");`. Once you have done this, you can run the command `npm run create-index` in the root of the folder in your terminal/ command line.

`delete-table` - This will delete a dynamoDB table matching the parameters of a prepared file. This will run the script located at `/dynamodb/deleteTable.js`. You will need to change the file path provided on line 3 of the file `const tablename = "{table-name}";`. Once you have done this, you can run the command `npm run create-index` in the root of the folder in your terminal/ command line.

`create-table-postgres` - This will create a postgres table reading from a create script located in `/postgres/tables/`. If you are creating a new table then you can edit one of the files and resave. I would recommend using a GUI to create the table locally and then exporting the create script via the GUI. If you have multiple tables set them up with foreign keys before exporting the data to this file. You will then copy and paste the entire SQL script onto line 1 after `let createQuery = `. You will then update line 3 of the file `/postgres/createTable.js` to contain the path to your new file. `const { createQuery } = require("{path-to-file}");`. Once you have done this, you can run the command `npm run create-table-postgres` in the root of the folder in your terminal/ command line.

`delete-table-postgres` - This will delete a postgres table. You will then edit the code on line 3 of the file `/postgres/deleteTable.js` to contain the name of the table you wish to delete `const tableName = "{table-name}";`. Once you have done this, you can run the command `npm run create-table-postgres` in the root of the folder in your terminal/ command line. Once you have done this, you can run the command `npm run delete-table-postgres` in the root of the folder in your terminal/ command line.

`backup-table-postgres` - This can be set up to backup multiple tables at once. You will need to edit the array found on line 8 of the file `postgres/backupTableData.js` to contain as many names of tables as you'd like to back up. This will create a CSV of all of the table rows into a folder that's hidden from the repo using .gitignore located at `/postgres/backup_data/`. Once you have done this, you can run the command `npm run backup-table-postgres` in the root of the folder in your terminal/ command line.

`update-table-postgres` - This can be set up to update multiple tables at once. You will need to edit the array found on line 8 of the file `postgres/backupTableData.js` to contain as many names of tables as you'd like to restore. This script will ifnd the files located in the .gitignore folder `/postgres/backup_data/`. If the file exists then the data will be added to the database. You can edit how many rows are updated at once if you change the number stored in line 76 `if(counter && (counter % 500 == 0)){` to reflect how many statements should be grouped together. Once you have done this, you can run the command `npm run update-table-postgres` in the root of the folder in your terminal/ command line.

## Testing

TBC

## Terms of Use

This specific code repository and all code within is © Crown copyright and available under the terms of the Open Government 3.0 licence.

The code has been developed and is maintained by the NHS and where possible we will try to adhere to the NHS Open Source Policy (<https://github.com/nhsx/open-source-policy/blob/main/open-source-policy.md>).

It shall remain free to the NHS and all UK public services.

### Contributions

This code has been authored by NHS staff in the Digital Intelligence Unit @ NHS Blackpool CCG.

### Common Issues (Troubleshooting)

#### Multiple locally stored AWS credentials

If you have multiple locally stored AWS credentials, or if you are not sure that you have a key stored with progammatic access, you should check your local machine:

- Linux and macOS: `~/.aws/config` or `~/.aws/credentials`
- Windows: `%USERPROFILE%\.aws\config` or `%USERPROFILE%\.aws\credentials`

To select a non-default account, run the commands with the profile flag.

_This project and all code within is © Crown copyright and available under the terms of the Open Government 3.0 licence._
