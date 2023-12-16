const http = require('node:http');
const hostname = '127.0.0.1';
const identity_port = 4001;
const authentication_port = 4002
const authorization_port = 4003

// A node server is a TCP server
//
// telnet localhost 300
//
// GET /identity HTTP/1.1
// Host: localhost 
// Connection: close

const identity_server = http.createServer((req, res) => {
  if (req.url == '/identity') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Welcome to Identity\n');
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Page Not Found');
  }

});
identity_server.listen(identity_port, hostname, () => {
  console.log(`Server running at http://${hostname}:${identity_port}/identity`);
});

const authentication_server = http.createServer((req, res) => {

  if (req.url == '/authentication') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Welcome to Authentication\n');
  }
  else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Page Not Found');
  }
});

authentication_server.listen(authentication_port, hostname, () => {
  console.log(`Server running at http://${hostname}:${authentication_port}/authentication`);
});

const authorization_server = http.createServer((req, res) => {

  if (req.url == '/authentication') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Welcome to Authentication\n');
  }
  else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Page Not Found');
  }
});

authorization_server.listen(authorization_port, hostname, () => {
  console.log(`Server running at http://${hostname}:${authorization_port}/authorization`);
});





