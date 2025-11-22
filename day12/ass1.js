const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;
  const fName = queryObject.fName;

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`<h1>Hello ${fName || 'Guest'}</h1>`);
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
