const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.get('/homepage', (res, req) => {
  fetch('asdasdas').then((response) => response.json());
});

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
