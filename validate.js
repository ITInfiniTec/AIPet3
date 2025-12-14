const fs = require('fs');
const jsonlint = require('jsonlint');

let a_file_is_invalid = false;

function validate_json_file(filepath) {
  try {
    const file_content = fs.readFileSync(filepath, 'utf8');
    jsonlint.parse(file_content);
    console.log(`${filepath} is valid JSON.`);
  } catch (e) {
    console.error(`${filepath} is invalid JSON:`);
    console.error(e.message);
    a_file_is_invalid = true;
  }
}


validate_json_file('manifest.json');
validate_json_file('system_prompt.json');

if (a_file_is_invalid) {
  process.exit(1);
}
