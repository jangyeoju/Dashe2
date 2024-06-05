import path from 'path';
import { GoogleAuth } from 'google-auth-library';
import { google } from 'googleapis';
import { NextResponse } from 'next/server';

// Path to your service account key file
const KEYFILEPATH = path.resolve(
  process.cwd(),
  'spreadsheet-service-account.json'
);

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

export async function POST(request) {
  try {
    const body = await request.json();

    // Process the data (for example, save it to a database or perform other actions)
    await appendData({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: 'Sheet1!A:A',
      values: [body],
    });

    // Example response
    return NextResponse.json(
      { message: 'Data received successfully', data: body },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
  }
}

// Create Google Sheets API client
async function getSheetsClient() {
  const auth = new GoogleAuth({
    keyFile: KEYFILEPATH,
    scopes: SCOPES,
  });

  const authClient = await auth.getClient();
  return google.sheets({ version: 'v4', auth: authClient });
}

// Append data to spreadsheet
export async function appendData({ spreadsheetId, range = 'Sheet1', values }) {
  const sheets = await getSheetsClient();

  return sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: 'RAW',
    resource: {
      values,
    },
  });
}
