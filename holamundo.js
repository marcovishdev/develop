const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hola Mundo Nodejs');
}

const server = http.createServer(requestListener);
console.log("Server started in port 8080 ...")
server.listen(8080);