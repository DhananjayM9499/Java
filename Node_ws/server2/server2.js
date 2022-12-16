const http = require("http");
const fs = require("fs");
const hostName = "127.0.0.1";
const port = 8888;
console.log("Preparing server....");
const server = http.createServer((req, res) => {
  console.log("Received request");
  fs.readFile("index.html", function (err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
});

server.listen(port, hostName, () => {
  console.log("server is running at " + hostName + "port : " + port);
});
