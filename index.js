#!/usr/bin/env node
import  http from 'http';
console.log("aye bhai chal jaa")
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello       World');
}).listen(8081);


