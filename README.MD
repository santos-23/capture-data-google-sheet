## Capture the Data in GOOGLE SPREADSHEET using NodeJs

## Requirements

1. Google Account
2. Google Cloud Platform - Project
3. Backend Server or Local System


## Create Google Cloud Platform Project

1. Login your Google Account and Open https://console.cloud.google.com/projectcreate in your browser.
2. Specify the project name and click create.
3. From that project, search Google Sheets API and click it.
4. Enable the Google Sheets API.
5. Select the Credentials tab in the left, Create credentail with Service Account option.
6. Enter Service account name and click done.
7. Newly create service account listed under service account and click the created service account.
8. In the Keys tab, click ADD KEY and create new key in json format. [automatically file downloaded in your system]
9. After all create a new spreadsheet in that account.
10. Click the Share button and paste the client email from downloaded json file with editor mode then click Send button.


## Setup

1. Install the necessary package for Google sheet integration in our code.
    [npm install googleapis@95.0.0]
2. Code Sample implemented in the files.


## Required Information

1. Service Account json file.
2. SheetId
3. 
