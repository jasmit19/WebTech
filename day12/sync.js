// syncFile.js

const fs = require('fs');

fs.writeFileSync('data.txt', 'Hello from sync method');

const content = fs.readFileSync('data.txt', 'utf8');
console.log('Synchronous Read:', content);
