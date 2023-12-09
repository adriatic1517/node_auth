const http = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url == '/identity') {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Welcome to Identity\n');
  } else if (req.url == 'authentication') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Welcome to Authentication\n');
  } else if (req.url == '/authorization') {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Welcome to Authorization');
  } else {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Page Not Found');
  }

});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});