const createServer = require('http');

const hostname = '127.0.0.1';
const port = 1245;
const app = createServer.createServer();

app.on('request', (req, res) => {
  if (req.url === '/') {
    const responseText = 'Hello Holberton School!';

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', responseText.length);
    res.statusCode = 200;
    res.write(Buffer.from(responseText));
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
