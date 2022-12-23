const http = require('http');


// getting exported data
const data = require('./Data')

// creating a simple API.
http.createServer((req, resp) => {
    resp.writeHead(200, { 'Content-Type': 'application/json' });

    // parsing object data using a separate file(Data.js) in the API.
    resp.write(JSON.stringify(data))
    resp.end();
}).listen(8000);