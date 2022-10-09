const server = require("./server");
const {mongoose} = require("./database");

server.listen(server.get("port"));
console.log("server on port", server.get("port"));