const fs = require('fs').promises;

// Example: Read a file
fs.readFile('example.txt', 'utf8')
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Example: Write to a file
fs.writeFile('example.txt', 'Hello, world!')
  .then(() => console.log('File written successfully'))
  .catch(error => console.error('Error:', error));
