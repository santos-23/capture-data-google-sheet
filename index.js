const { google } = require('googleapis')

const serviceAccountKeyFile = "./capture-data-nodejs-9c6221200500.json"
const sheetID = "1j0xci9NuJKQYGMka-AEbhD3m5AbuwJlOsIPaL7MxlJo"
const tabName = "Users"
const range = "A:E"

main().then(() => {
    console.log('Completed')
})

async function main() {
    // Generating google sheet client
    const googleSheetClient = await getGoogleSheetClient();
  
    // Reading Google Sheet from a specific range
    const data = await readGoogleSheet(googleSheetClient, sheetID, tabName, range);
    console.log(data);
  
    // Adding a new row to Google Sheet
    const dataToBeInserted = [
       ['2', 'rohit', 'Rohit', 'Sharma', 'Mumbai'],
       ['3', 'virat', 'Virat', 'Kohli', 'Bangaluru']
    ]
    await writeGoogleSheet(googleSheetClient, sheetID, tabName, range, dataToBeInserted);
}

async function getGoogleSheetClient() {
    const auth = new google.auth.GoogleAuth({
        keyFile: serviceAccountKeyFile,
        scopes: ['https://www.googleapis.com/auth/spreadsheets']
    });
    const authClient = await auth.getClient();
    return google.sheets({
        version: 'v4',
        auth: authClient
    })
}

async function readGoogleSheet(googleSheetClient, sheetId, tabName, range) {
    const res = await googleSheetClient.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: `${tabName}!${range}`,
    });
    return res.data.values;
}

async function writeGoogleSheet(googleSheetClient, sheetId, tabName, range, data) {
    await googleSheetClient.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: `${tabName}!${range}`,
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      resource: {
        "majorDimension": "ROWS",
        "values": data
      },
    })
}