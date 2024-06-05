const fs = require('fs');
const path = require('path');

if (process.env.SPREADSHEET_CREDENTIALS_JSON) {
  fs.writeFileSync(
    path.resolve(process.cwd(), 'spreadsheet-service-account.json'),
    process.env.SPREADSHEET_CREDENTIALS_JSON
  );
} else {
  console.error(
    'SPREADSHEET_CREDENTIALS_JSON environment variable is not set.'
  );
  process.exit(1);
}
