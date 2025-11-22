// asyncFile.js

const fs = require('fs');

fs.writeFile('data.txt', 'Hello from async method', (err) => {
  if (err) throw err;

  
fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Asynchronous Read:', data);
  });
});
