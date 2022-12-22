const http = require('http');

http.createServer((req, resp)=>{
    resp.write("<h1>hello world</h1>")
    resp.write("<h1>hello All</h1>")
    resp.end();
}).listen(4500)