const { server, hostname, port } = require('./server');

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
