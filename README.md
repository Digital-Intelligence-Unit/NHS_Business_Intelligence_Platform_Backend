# NHS BI Platform Backend Scripts

Included in this repository is code for managing the backend of the NHS BI Platform.

For recommended database deployments please review the code in: <https://github.com/morgans3/NHS_Business_Intelligence_Platform>

## Pre-requisites

- An AWS Account, with an IAM with required permissions to use the AWS SDK
- Locally stored AWS Credentials which grant programmatic access, created in AWS IAM
- AWS Secrets Manager to include the following secrets: postgres
- Node.js v10.13.0 or later installed
- Connection to RDS Postgres database

## Usage

This package has multiple scripts that can be run using the commands listed below.

- `npm run offlinebackup` - Creates a backup of the database and secrets locally. Please note that the postgresql backups will take some time to complete due to the size of the database.
- `npm run createdatabases` - Creates the databases required for the application.
- `npm run removedatabases` - Removes the databases created for the application.

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
