// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the comments.html file from the previous exercise.
// The server should listen on port 3000 and serve the comments.html file from the previous exercise.
// The comments.html file should be served as a static file.
// The server should respond with a 404 status code for all other requests.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/comments') {
    fs.readFile('./comments.html', (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('Not Found');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(3000);