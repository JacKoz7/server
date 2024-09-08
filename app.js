const http = require('http'); // import files to node.js

const server = http.createServer((req, res) => {
    console.log(req);
}); // node will execute this function whenever request reaches our server (ex. we type localhost:3000 in our browser)

server.listen(3000); // port 3000