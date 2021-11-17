const http = require('http');
const url = require('url');
const { add } = require('./utility');
const server = http.createServer(
  (request, response) => {
    const parsedUrl = url.parse(request.url, true);

    if (parsedUrl.pathname === '/add') {
      response.setHeader("Content-Type", "text/plain");
      let a = parsedUrl.query.a;
      let b = parsedUrl.query.b;

      const c = add(a,b).toString();
      response.end(c);
    } else {
      response.statusCode = 404;
      response.end('Not found!\n');
    }
  }
);
server.listen(8080); 
module.exports.server = server;
