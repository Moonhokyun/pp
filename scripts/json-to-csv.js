import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const jsonPath = path.join(__dirname, '../src/locales/ko.json');
const csvPath = path.join(__dirname, '../content_data.csv');

try {
  const jsonContent = fs.readFileSync(jsonPath, 'utf8');
  const data = JSON.parse(jsonContent);

  const header = 'Key,Value\n';
  const rows = Object.entries(data).map(([key, value]) => {
    // Escape quotes and wrap value in quotes if it contains commas or newlines
    const escapedValue = value.replace(/"/g, '""'); 
    return `${key},"${escapedValue}"`;
  });

  const csvContent = header + rows.join('\n');
  fs.writeFileSync(csvPath, csvContent, 'utf8');

  console.log(`Successfully converted JSON to CSV at ${csvPath}`);
} catch (error) {
  console.error('Error converting JSON to CSV:', error);
  process.exit(1);
}
