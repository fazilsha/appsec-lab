const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('AppSec Lab Running 🚀');
});

server.listen(3030, () => {
  console.log('Server running on port 3000');
});
