import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const csvPath = path.join(__dirname, '../content_data.csv');
const jsonPath = path.join(__dirname, '../src/locales/ko.json');

try {
  let csvContent = fs.readFileSync(csvPath, 'utf8');
  
  // Normalize newlines to \n to handle different OS line endings
  csvContent = csvContent.replace(/\r\n/g, '\n');

  const jsonObj = {};
  let currentKey = '';
  let currentValue = '';
  let inQuotes = false;
  let isKey = true; // true = parsing key, false = parsing value
  
  // Skip Header (Key,Value\n)
  let startIndex = 0;
  const firstNewline = csvContent.indexOf('\n');
  if (firstNewline !== -1) {
    startIndex = firstNewline + 1;
  }

  for (let i = startIndex; i < csvContent.length; i++) {
    const char = csvContent[i];
    const nextChar = csvContent[i + 1];

    if (isKey) {
      if (char === ',') {
        isKey = false;
        // Check if value starts with quote
        if (nextChar === '"') {
          inQuotes = true;
          i++; // Skip the opening quote
        }
      } else if (char === '\n') {
        // Empty value or malformed line, reset
        if (currentKey) {
            jsonObj[currentKey] = '';
        }
        currentKey = '';
        currentValue = '';
        isKey = true;
      } else {
        currentKey += char;
      }
    } else {
      // Parsing Value
      if (inQuotes) {
        if (char === '"') {
          if (nextChar === '"') {
            // Escaped quote ("")
            currentValue += '"';
            i++; // Skip next quote
          } else {
            // End of quoted value
            inQuotes = false;
          }
        } else {
          currentValue += char;
        }
      } else {
        if (char === '\n') {
          // End of record
          jsonObj[currentKey.trim()] = currentValue; // Values inside quotes shouldn't be trimmed generally, but keys yes.
          currentKey = '';
          currentValue = '';
          isKey = true;
        } else {
          currentValue += char;
        }
      }
    }
  }

  // Handle last line if no newline at end
  if (currentKey) {
     jsonObj[currentKey.trim()] = currentValue;
  }

  fs.writeFileSync(jsonPath, JSON.stringify(jsonObj, null, 2), 'utf8');
  console.log(`Successfully converted CSV to JSON at ${jsonPath}`);
} catch (error) {
  console.error('Error converting CSV to JSON:', error);
  process.exit(1);
}
