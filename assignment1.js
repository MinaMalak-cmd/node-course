const http = require('http');

const {requestHandler} = require('./requestHandlerModule');

const server = http.createServer(requestHandler);
//I will use port 3002 instead
server.listen(3002);