const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {
   
    const queryObject = url.parse(req.url, true).query;
    const firstName = queryObject.fName || "there"; 

   
    res.writeHead(200, { 'Content-Type': 'text/html' });

    
    const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Server Greeting</title>
        </head>
        <body>
            <h1>Hello ${firstName}!</h1>
        </body>
        </html>
    `;

    
    res.end(htmlContent);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    console.log(`To see a personalized greeting, visit: http://${hostname}:${port}/?fName=ABC`);
});
